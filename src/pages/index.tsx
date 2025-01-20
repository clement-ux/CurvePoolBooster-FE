import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from 'react';
import { createPublicClient, createWalletClient, custom, getContract } from 'viem';
import { mainnet, sepolia } from 'viem/chains';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { proxyAbi, proxyBytecode, implementationAbi, implementationBytecode } from './contract';
import { useAccount } from 'wagmi';

const Home: NextPage = () => {
  const [chainId, setChainId] = useState('');
  const [campaignRemoteManager, setCampaignRemoteManager] = useState('');
  const [rewardToken, setRewardToken] = useState('');
  const [gauge, setGauge] = useState('');
  const [status, setStatus] = useState('');
  const { address } = useAccount();


  const deployContracts = async () => {
    if (!window.ethereum) {
      alert('Please install a wallet like MetaMask to deploy contracts.');
      return;
    }

    try {
      const publicClient = createPublicClient({ chain: sepolia, transport: custom(window.ethereum) });
      const walletClient = createWalletClient({ chain: sepolia, transport: custom(window.ethereum) });

      setStatus('Deploying Proxy Contract...');
      const proxyDeployment = await walletClient.deployContract({
        abi: proxyAbi,
        bytecode: proxyBytecode,
        account: address as `0x${string}`,
      });
      const proxyContractTx = await publicClient.waitForTransactionReceipt({ hash: proxyDeployment });
      const proxyAddress = proxyContractTx.contractAddress;

      setStatus(`Proxy deployed at: ${proxyAddress}`);

      setStatus('Deploying Implementation Contract...');
      const implementationDeployment = await walletClient.deployContract({
        abi: implementationAbi,
        bytecode: implementationBytecode,
        args: [
          BigInt(chainId),
          campaignRemoteManager,
          rewardToken,
          gauge,
        ],
        account: address as `0x${string}`,
      });
      const implementationContractTx = await publicClient.waitForTransactionReceipt({ hash: implementationDeployment });
      const implementationAddress = implementationContractTx.contractAddress;

      setStatus(`Implementation deployed at: ${implementationAddress}`);

      setStatus('Initializing Proxy Contract...');
      const { request } = await publicClient.simulateContract({ account: address as `0x${string}`, address: proxyAddress as `0x${string}`, abi: implementationAbi, functionName: 'initialize', args: [address, 0, address] });
      await walletClient.writeContract(request);

      setStatus('Proxy successfully initialized with Implementation.');
    } catch (error) {
      console.error(error);
      setStatus('An error occurred during deployment.');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Deployer</title>
        <meta name="description" content="Deploy Proxy and Implementation Contracts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1>Deploy Smart Contracts</h1>

        <div>
          <input
            type="text"
            placeholder="Chain ID (uint256)"
            value={chainId}
            onChange={(e) => setChainId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Campaign Remote Manager (address)"
            value={campaignRemoteManager}
            onChange={(e) => setCampaignRemoteManager(e.target.value)}
          />
          <input
            type="text"
            placeholder="Reward Token (address)"
            value={rewardToken}
            onChange={(e) => setRewardToken(e.target.value)}
          />
          <input
            type="text"
            placeholder="Gauge (address)"
            value={gauge}
            onChange={(e) => setGauge(e.target.value)}
          />

          <button onClick={deployContracts}>Deploy</button>

          {status && <p>{status}</p>}
        </div>
      </main>
    </div>
  );
};

export default Home;

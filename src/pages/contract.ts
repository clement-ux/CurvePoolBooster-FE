export const proxyAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousGovernor",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newGovernor",
                "type": "address"
            }
        ],
        "name": "GovernorshipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousGovernor",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newGovernor",
                "type": "address"
            }
        ],
        "name": "PendingGovernorshipTransfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "Upgraded",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claimGovernance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "governor",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "implementation",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_logic",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_initGovernor",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isGovernor",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newGovernor",
                "type": "address"
            }
        ],
        "name": "transferGovernance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newImplementation",
                "type": "address"
            }
        ],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
];

export const proxyBytecode = "0x608060405234801561001057600080fd5b50610027336000805160206109df83398151915255565b6000805160206109df833981519152546040516001600160a01b03909116906000907fc7c0c772add429241571afb3805861fb3cfa2af374534088b76cdb4325a87e9a908290a36109628061007d6000396000f3fe6080604052600436106100865760003560e01c80635d36b190116100595780635d36b1901461010a578063c7af33521461011f578063cf7a1d7714610144578063d38bfff414610157578063f851a4401461009057610086565b80630c340a24146100905780633659cfe6146100c25780634f1ef286146100e25780635c60da1b146100f5575b61008e610177565b005b34801561009c57600080fd5b506100a5610197565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100ce57600080fd5b5061008e6100dd366004610794565b6101b4565b61008e6100f0366004610817565b6101ed565b34801561010157600080fd5b506100a561028a565b34801561011657600080fd5b5061008e6102a2565b34801561012b57600080fd5b50610134610346565b60405190151581526020016100b9565b61008e6101523660046107b6565b610377565b34801561016357600080fd5b5061008e610172366004610794565b6104e0565b6101956101906000805160206108ed8339815191525490565b610584565b565b60006101af60008051602061090d8339815191525490565b905090565b6101bc610346565b6101e15760405162461bcd60e51b81526004016101d89061087a565b60405180910390fd5b6101ea816105a8565b50565b6101f5610346565b6102115760405162461bcd60e51b81526004016101d89061087a565b61021a836105a8565b6000836001600160a01b0316838360405161023692919061086a565b600060405180830381855af49150503d8060008114610271576040519150601f19603f3d011682016040523d82523d6000602084013e610276565b606091505b505090508061028457600080fd5b50505050565b60006101af6000805160206108ed8339815191525490565b7f44c4d30b2eaad5130ad70c3ba6972730566f3e6359ab83e800d905c61b1c51db546001600160a01b0316336001600160a01b03161461033d5760405162461bcd60e51b815260206004820152603060248201527f4f6e6c79207468652070656e64696e6720476f7665726e6f722063616e20636f60448201526f6d706c6574652074686520636c61696d60801b60648201526084016101d8565b610195336105e8565b600061035e60008051602061090d8339815191525490565b6001600160a01b0316336001600160a01b031614905090565b61037f610346565b61039b5760405162461bcd60e51b81526004016101d89061087a565b60006103b36000805160206108ed8339815191525490565b6001600160a01b0316146103c657600080fd5b6001600160a01b0384166104155760405162461bcd60e51b8152602060048201526016602482015275125b5c1b195b595b9d185d1a5bdb881b9bdd081cd95d60521b60448201526064016101d8565b61044060017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6108b1565b6000805160206108ed8339815191521461045c5761045c6108d6565b610465846106a9565b80156104d7576000846001600160a01b0316838360405161048792919061086a565b600060405180830381855af49150503d80600081146104c2576040519150601f19603f3d011682016040523d82523d6000602084013e6104c7565b606091505b50509050806104d557600080fd5b505b610284836105e8565b6104e8610346565b6105045760405162461bcd60e51b81526004016101d89061087a565b61052c817f44c4d30b2eaad5130ad70c3ba6972730566f3e6359ab83e800d905c61b1c51db55565b806001600160a01b031661054c60008051602061090d8339815191525490565b6001600160a01b03167fa39cc5eb22d0f34d8beaefee8a3f17cc229c1a1d1ef87a5ad47313487b1c4f0d60405160405180910390a350565b3660008037600080366000845af43d6000803e8080156105a3573d6000f35b3d6000fd5b6105b1816106a9565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b03811661063e5760405162461bcd60e51b815260206004820152601a60248201527f4e657720476f7665726e6f72206973206164647265737328302900000000000060448201526064016101d8565b806001600160a01b031661065e60008051602061090d8339815191525490565b6001600160a01b03167fc7c0c772add429241571afb3805861fb3cfa2af374534088b76cdb4325a87e9a60405160405180910390a36101ea8160008051602061090d83398151915255565b803b61071d5760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e74726163742061646472657373000000000060648201526084016101d8565b6000805160206108ed83398151915255565b80356001600160a01b038116811461074657600080fd5b919050565b60008083601f84011261075d57600080fd5b50813567ffffffffffffffff81111561077557600080fd5b60208301915083602082850101111561078d57600080fd5b9250929050565b6000602082840312156107a657600080fd5b6107af8261072f565b9392505050565b600080600080606085870312156107cc57600080fd5b6107d58561072f565b93506107e36020860161072f565b9250604085013567ffffffffffffffff8111156107ff57600080fd5b61080b8782880161074b565b95989497509550505050565b60008060006040848603121561082c57600080fd5b6108358461072f565b9250602084013567ffffffffffffffff81111561085157600080fd5b61085d8682870161074b565b9497909650939450505050565b8183823760009101908152919050565b6020808252601a908201527f43616c6c6572206973206e6f742074686520476f7665726e6f72000000000000604082015260600190565b6000828210156108d157634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fdfe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc7bea13895fa79d2831e0a9e28edede30099005a50d652d8957cf8a607ee6ca4aa264697066735822122088358c1e7019bbbd088cc4c6ecea3b205dfee1487e74a635417bb8044da7669e64736f6c634300080700337bea13895fa79d2831e0a9e28edede30099005a50d652d8957cf8a607ee6ca4a"; // Bytecode du contrat proxy

export const implementationAbi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_targetChainId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_campaignRemoteManager",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_rewardToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_gauge",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "gauge",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "rewardToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "maxRewardPerVote",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalRewardAmount",
                "type": "uint256"
            }
        ],
        "name": "BribeCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_newId",
                "type": "uint256"
            }
        ],
        "name": "CampaignIdUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_feeCollector",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_feeAmount",
                "type": "uint256"
            }
        ],
        "name": "FeeCollected",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_newFeeCollector",
                "type": "address"
            }
        ],
        "name": "FeeCollectorUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "_newFee",
                "type": "uint16"
            }
        ],
        "name": "FeeUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousGovernor",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newGovernor",
                "type": "address"
            }
        ],
        "name": "GovernorshipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "extraNumberOfPeriods",
                "type": "uint8"
            }
        ],
        "name": "NumberOfPeriodsUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousGovernor",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newGovernor",
                "type": "address"
            }
        ],
        "name": "PendingGovernorshipTransfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newMaxRewardPerVote",
                "type": "uint256"
            }
        ],
        "name": "RewardPerVoteUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "StrategistUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "TokensRescued",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "extraTotalRewardAmount",
                "type": "uint256"
            }
        ],
        "name": "TotalRewardAmountUpdated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "BASE_FEE",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "campaignId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "campaignRemoteManager",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claimGovernance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "numberOfPeriods",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "maxRewardPerVote",
                "type": "uint256"
            },
            {
                "internalType": "address[]",
                "name": "blacklist",
                "type": "address[]"
            },
            {
                "internalType": "uint256",
                "name": "bridgeFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "additionalGasLimit",
                "type": "uint256"
            }
        ],
        "name": "createCampaign",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "fee",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeCollector",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "gauge",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "governor",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_strategist",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "_fee",
                "type": "uint16"
            },
            {
                "internalType": "address",
                "name": "_feeCollector",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isGovernor",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "extraNumberOfPeriods",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "bridgeFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "additionalGasLimit",
                "type": "uint256"
            }
        ],
        "name": "manageNumberOfPeriods",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newMaxRewardPerVote",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "bridgeFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "additionalGasLimit",
                "type": "uint256"
            }
        ],
        "name": "manageRewardPerVote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "bridgeFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "additionalGasLimit",
                "type": "uint256"
            }
        ],
        "name": "manageTotalRewardAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "rescueETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "rescueToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_campaignId",
                "type": "uint256"
            }
        ],
        "name": "setCampaignId",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_fee",
                "type": "uint16"
            }
        ],
        "name": "setFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_feeCollector",
                "type": "address"
            }
        ],
        "name": "setFeeCollector",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "setStrategistAddr",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "strategistAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "targetChainId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_newGovernor",
                "type": "address"
            }
        ],
        "name": "transferGovernance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];

export const implementationBytecode = "0x6101006040523480156200001257600080fd5b50604051620024d8380380620024d88339810160408190526200003591620000fc565b6200004d33600080516020620024b883398151915255565b600080516020620024b8833981519152546040516001600160a01b03909116906000907fc7c0c772add429241571afb3805861fb3cfa2af374534088b76cdb4325a87e9a908290a360e08490526001600160601b0319606084811b821660c05283811b821660a05282901b16608052620000d56000600080516020620024b883398151915255565b5050505062000150565b80516001600160a01b0381168114620000f757600080fd5b919050565b600080600080608085870312156200011357600080fd5b845193506200012560208601620000df565b92506200013560408601620000df565b91506200014560608601620000df565b905092959194509250565b60805160601c60a05160601c60c05160601c60e05161228b6200022d600039600081816101e10152818161076301528181610bc001528181611013015281816111140152611416015260008181610301015281816106dc01528181610b1201528181610b3901528181610fb001528181610fd7015261138f0152600081816104a50152818161071f01528181610af001528181610b7c01528181610f8e01528181611077015281816111a0015281816113d20152818161159e01526116ba0152600081816103ab01528181611039015261117b015261228b6000f3fe60806040526004361061014f5760003560e01c80638e005553116100b6578063c415b95c1161006f578063c415b95c146103ed578063c7af335214610413578063d38bfff414610438578063ddca3f4314610458578063e9a0214314610473578063f7c618c11461049357600080fd5b80638e005553146103235780638ed5b0fc1461034357806394095c2d14610359578063a42dce8014610379578063a6f19c8414610399578063ab34884c146103cd57600080fd5b8063570d8e1d11610108578063570d8e1d1461025a5780635d36b1901461027a5780637039e0021461028f578063708c0db9146102af578063773540b3146102cf578063833f68c8146102ef57600080fd5b806304824e701461015b5780630aaef8541461017d5780630c340a241461019d578063146ffb26146101cf5780633d18651e146102115780634707d0001461023a57600080fd5b3661015657005b600080fd5b34801561016757600080fd5b5061017b610176366004611cfa565b6104c7565b005b34801561018957600080fd5b5061017b610198366004611e1c565b610639565b3480156101a957600080fd5b506101b2610804565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101db57600080fd5b506102037f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016101c6565b34801561021d57600080fd5b5061022761271081565b60405161ffff90911681526020016101c6565b34801561024657600080fd5b5061017b610255366004611d15565b610821565b34801561026657600080fd5b506033546101b2906001600160a01b031681565b34801561028657600080fd5b5061017b6109da565b34801561029b57600080fd5b5061017b6102aa366004611dfa565b610a80565b3480156102bb57600080fd5b5061017b6102ca366004611d48565b610c61565b3480156102db57600080fd5b5061017b6102ea366004611cfa565b610d56565b3480156102fb57600080fd5b506101b27f000000000000000000000000000000000000000000000000000000000000000081565b34801561032f57600080fd5b5061017b61033e366004611dad565b610d86565b34801561034f57600080fd5b5061020360675481565b34801561036557600080fd5b5061017b610374366004611dc8565b610db3565b34801561038557600080fd5b5061017b610394366004611cfa565b610e27565b3480156103a557600080fd5b506101b27f000000000000000000000000000000000000000000000000000000000000000081565b3480156103d957600080fd5b5061017b6103e8366004611e48565b610e54565b3480156103f957600080fd5b506066546101b2906201000090046001600160a01b031681565b34801561041f57600080fd5b50610428611212565b60405190151581526020016101c6565b34801561044457600080fd5b5061017b610453366004611cfa565b611243565b34801561046457600080fd5b506066546102279061ffff1681565b34801561047f57600080fd5b5061017b61048e366004611ee4565b6112e7565b34801561049f57600080fd5b506101b27f000000000000000000000000000000000000000000000000000000000000000081565b6033546001600160a01b03163314806104e357506104e3611212565b6105085760405162461bcd60e51b81526004016104ff90611fe1565b60405180910390fd5b6001600160a01b0381166105515760405162461bcd60e51b815260206004820152601060248201526f24b73b30b634b2103932b1b2b4bb32b960811b60448201526064016104ff565b60405147906000906001600160a01b0384169083908381818185875af1925050503d806000811461059e576040519150601f19603f3d011682016040523d82523d6000602084013e6105a3565b606091505b50509050806105e65760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b60448201526064016104ff565b6040805160008152602081018490526001600160a01b038516918101919091527ffb475a842bad10d3800b61bd1a92e716051afba979b124b583bd99a2d1d7bfd5906060015b60405180910390a1505050565b6033546001600160a01b03163314806106555750610655611212565b6106715760405162461bcd60e51b81526004016104ff90611fe1565b6067546106905760405162461bcd60e51b81526004016104ff90612029565b600083116106da5760405162461bcd60e51b8152602060048201526017602482015276496e76616c6964207265776172642070657220766f746560481b60448201526064016104ff565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166371733579836040518060a0016040528060675481526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602001600060ff16815260200160008152602001878152507f0000000000000000000000000000000000000000000000000000000000000000856040518563ffffffff1660e01b81526004016107a193929190612124565b6000604051808303818588803b1580156107ba57600080fd5b505af11580156107ce573d6000803e3d6000fd5b50505050507f8f283dbedfa7a1926a86469a652c5f13e8f038708d78cbeb0e1950c9e08625028360405161062c91815260200190565b600061081c6000805160206122368339815191525490565b905090565b610829611212565b6108455760405162461bcd60e51b81526004016104ff90611faa565b6001600160a01b03811661088e5760405162461bcd60e51b815260206004820152601060248201526f24b73b30b634b2103932b1b2b4bb32b960811b60448201526064016104ff565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a082319060240160206040518083038186803b1580156108d057600080fd5b505afa1580156108e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109089190611de1565b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018390529192509084169063a9059cbb90604401602060405180830381600087803b15801561095657600080fd5b505af115801561096a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098e9190611d8b565b50604080516001600160a01b038086168252602082018490528416918101919091527ffb475a842bad10d3800b61bd1a92e716051afba979b124b583bd99a2d1d7bfd59060600161062c565b7f44c4d30b2eaad5130ad70c3ba6972730566f3e6359ab83e800d905c61b1c51db546001600160a01b0316336001600160a01b031614610a755760405162461bcd60e51b815260206004820152603060248201527f4f6e6c79207468652070656e64696e6720476f7665726e6f722063616e20636f60448201526f6d706c6574652074686520636c61696d60801b60648201526084016104ff565b610a7e336114bb565b565b6033546001600160a01b0316331480610a9c5750610a9c611212565b610ab85760405162461bcd60e51b81526004016104ff90611fe1565b606754610ad75760405162461bcd60e51b81526004016104ff90612029565b6000610ae161157c565b9050610b376001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083611799565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166371733579846040518060a0016040528060675481526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602001600060ff16815260200185815260200160008152507f0000000000000000000000000000000000000000000000000000000000000000866040518563ffffffff1660e01b8152600401610bfe93929190612124565b6000604051808303818588803b158015610c1757600080fd5b505af1158015610c2b573d6000803e3d6000fd5b50505050507fd922add93b22e9295e2ea259b37756ee2ccafa6872cccda342584d40c754c7668160405161062c91815260200190565b610c69611212565b610c855760405162461bcd60e51b81526004016104ff90611faa565b600054610100900460ff1680610c9e575060005460ff16155b610d015760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104ff565b600054610100900460ff16158015610d23576000805461ffff19166101011790555b610d2c846118e4565b610d3583611932565b610d3e826119c9565b8015610d50576000805461ff00191690555b50505050565b610d5e611212565b610d7a5760405162461bcd60e51b81526004016104ff90611faa565b610d83816118e4565b50565b610d8e611212565b610daa5760405162461bcd60e51b81526004016104ff90611faa565b610d8381611932565b6033546001600160a01b0316331480610dcf5750610dcf611212565b610deb5760405162461bcd60e51b81526004016104ff90611fe1565b60678190556040518181527f53c4764ec903d5e515c69c93f0b9b2916f9aa3fa54b34caeeae7bb596d7ec0f6906020015b60405180910390a150565b610e2f611212565b610e4b5760405162461bcd60e51b81526004016104ff90611faa565b610d83816119c9565b6033546001600160a01b0316331480610e705750610e70611212565b610e8c5760405162461bcd60e51b81526004016104ff90611fe1565b60675415610edc5760405162461bcd60e51b815260206004820152601860248201527f43616d706169676e20616c72656164792063726561746564000000000000000060448201526064016104ff565b60018660ff1611610f2b5760405162461bcd60e51b8152602060048201526019602482015278496e76616c6964206e756d626572206f6620706572696f647360381b60448201526064016104ff565b60008511610f755760405162461bcd60e51b8152602060048201526017602482015276496e76616c6964207265776172642070657220766f746560481b60448201526064016104ff565b6000610f7f61157c565b9050610fd56001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083611799565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bd0fbb84846040518061014001604052807f000000000000000000000000000000000000000000000000000000000000000081526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602001306001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020018b60ff1681526020018a8152602001858152602001898980806020026020016040519081016040528093929190818152602001838360200280828437600092018290525093855250505060208201819052604091820152516001600160e01b031960e085901b16815261113e91907f0000000000000000000000000000000000000000000000000000000000000000908890600401612057565b6000604051808303818588803b15801561115757600080fd5b505af115801561116b573d6000803e3d6000fd5b5050604080516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000001660208201529081018a9052606081018590527f1618645e9a24ee8c2a7ff0c7ac509942e59ed5a52647b1f38ae8b5dd581463d9935060800191506112019050565b60405180910390a150505050505050565b600061122a6000805160206122368339815191525490565b6001600160a01b0316336001600160a01b031614905090565b61124b611212565b6112675760405162461bcd60e51b81526004016104ff90611faa565b61128f817f44c4d30b2eaad5130ad70c3ba6972730566f3e6359ab83e800d905c61b1c51db55565b806001600160a01b03166112af6000805160206122368339815191525490565b6001600160a01b03167fa39cc5eb22d0f34d8beaefee8a3f17cc229c1a1d1ef87a5ad47313487b1c4f0d60405160405180910390a350565b6033546001600160a01b03163314806113035750611303611212565b61131f5760405162461bcd60e51b81526004016104ff90611fe1565b60675461133e5760405162461bcd60e51b81526004016104ff90612029565b60008360ff161161138d5760405162461bcd60e51b8152602060048201526019602482015278496e76616c6964206e756d626572206f6620706572696f647360381b60448201526064016104ff565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166371733579836040518060a0016040528060675481526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020018760ff1681526020016000815260200160008152507f0000000000000000000000000000000000000000000000000000000000000000856040518563ffffffff1660e01b815260040161145493929190612124565b6000604051808303818588803b15801561146d57600080fd5b505af1158015611481573d6000803e3d6000fd5b505060405160ff871681527f71113ae8f52afc8062af1d0ec71513000c9a7b93eeb737ab8fb50f908445d78a9350602001915061062c9050565b6001600160a01b0381166115115760405162461bcd60e51b815260206004820152601a60248201527f4e657720476f7665726e6f72206973206164647265737328302900000000000060448201526064016104ff565b806001600160a01b03166115316000805160206122368339815191525490565b6001600160a01b03167fc7c0c772add429241571afb3805861fb3cfa2af374534088b76cdb4325a87e9a60405160405180910390a3610d838160008051602061223683398151915255565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b1580156115e057600080fd5b505afa1580156115f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116189190611de1565b9050600081116116605760405162461bcd60e51b81526020600482015260136024820152724e6f2072657761726420746f206d616e61676560681b60448201526064016104ff565b606654600090612710906116789061ffff16846121a7565b6116829190612193565b905080156117935760665460405163a9059cbb60e01b8152620100009091046001600160a01b039081166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b1580156116fe57600080fd5b505af1158015611712573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117369190611d8b565b5060665460408051620100009092046001600160a01b03168252602082018390527f06c5efeff5c320943d265dc4e5f1af95ad523555ce0c1957e367dda5514572df910160405180910390a161178c81836121c6565b9250505090565b50919050565b8015806118225750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156117e857600080fd5b505afa1580156117fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118209190611de1565b155b61188d5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016104ff565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526118df908490611a6f565b505050565b603380546001600160a01b0319166001600160a01b0383169081179091556040519081527f869e0abd13cc3a975de7b93be3df1cb2255c802b1cead85963cc79d99f131bee90602001610e1c565b61193f6002612710612172565b61ffff168161ffff1611156119855760405162461bcd60e51b815260206004820152600c60248201526b08ccaca40e8dede40d0d2ced60a31b60448201526064016104ff565b6066805461ffff191661ffff83169081179091556040519081527fc8fcf8ee1425e7e60b8af83735e1eb516d5b9ef05bfd6eece552ebaeb7c75b4890602001610e1c565b6001600160a01b038116611a175760405162461bcd60e51b815260206004820152601560248201527424b73b30b634b2103332b29031b7b63632b1ba37b960591b60448201526064016104ff565b6066805462010000600160b01b031916620100006001600160a01b038416908102919091179091556040519081527fe5693914d19c789bdee50a362998c0bc8d035a835f9871da5d51152f0582c34f90602001610e1c565b6000611ac4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611b419092919063ffffffff16565b8051909150156118df5780806020019051810190611ae29190611d8b565b6118df5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104ff565b6060611b508484600085611b5a565b90505b9392505050565b606082471015611bbb5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104ff565b843b611c095760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104ff565b600080866001600160a01b03168587604051611c259190611f5b565b60006040518083038185875af1925050503d8060008114611c62576040519150601f19603f3d011682016040523d82523d6000602084013e611c67565b606091505b5091509150611c77828286611c82565b979650505050505050565b60608315611c91575081611b53565b825115611ca15782518084602001fd5b8160405162461bcd60e51b81526004016104ff9190611f77565b80356001600160a01b0381168114611cd257600080fd5b919050565b803561ffff81168114611cd257600080fd5b803560ff81168114611cd257600080fd5b600060208284031215611d0c57600080fd5b611b5382611cbb565b60008060408385031215611d2857600080fd5b611d3183611cbb565b9150611d3f60208401611cbb565b90509250929050565b600080600060608486031215611d5d57600080fd5b611d6684611cbb565b9250611d7460208501611cd7565b9150611d8260408501611cbb565b90509250925092565b600060208284031215611d9d57600080fd5b81518015158114611b5357600080fd5b600060208284031215611dbf57600080fd5b611b5382611cd7565b600060208284031215611dda57600080fd5b5035919050565b600060208284031215611df357600080fd5b5051919050565b60008060408385031215611e0d57600080fd5b50508035926020909101359150565b600080600060608486031215611e3157600080fd5b505081359360208301359350604090920135919050565b60008060008060008060a08789031215611e6157600080fd5b611e6a87611ce9565b955060208701359450604087013567ffffffffffffffff80821115611e8e57600080fd5b818901915089601f830112611ea257600080fd5b813581811115611eb157600080fd5b8a60208260051b8501011115611ec657600080fd5b979a9699505060200196606081013595608090910135945092505050565b600080600060608486031215611ef957600080fd5b611f0284611ce9565b95602085013595506040909401359392505050565b600081518084526020808501945080840160005b83811015611f505781516001600160a01b031687529582019590820190600101611f2b565b509495945050505050565b60008251611f6d8184602087016121dd565b9190910192915050565b6020815260008251806020840152611f968160408501602087016121dd565b601f01601f19169190910160400192915050565b6020808252601a908201527f43616c6c6572206973206e6f742074686520476f7665726e6f72000000000000604082015260600190565b60208082526028908201527f43616c6c6572206973206e6f74207468652053747261746567697374206f722060408201526723b7bb32b93737b960c11b606082015260800190565b60208082526014908201527310d85b5c185a59db881b9bdd0818dc99585d195960621b604082015260600190565b60608152835160608201526000602085015161207e60808401826001600160a01b03169052565b5060408501516001600160a01b03811660a08401525060608501516001600160a01b03811660c084015250608085015160ff811660e08401525060a0850151610100818185015260c08701519150610120828186015260e088015192506101408081870152506120f26101a0860184611f17565b918801516001600160a01b03166101608601529096015115156101808401525050602081019290925260409091015290565b835181526020808501516001600160a01b03169082015260408085015160ff1690820152606080850151908201526080938401519381019390935260a083019190915260c082015260e00190565b600061ffff808416806121875761218761221f565b92169190910492915050565b6000826121a2576121a261221f565b500490565b60008160001904831182151516156121c1576121c1612209565b500290565b6000828210156121d8576121d8612209565b500390565b60005b838110156121f85781810151838201526020016121e0565b83811115610d505750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfe7bea13895fa79d2831e0a9e28edede30099005a50d652d8957cf8a607ee6ca4aa26469706673582212201f72d5f9561bd3eccad0d902c92a3f7a66653f856b939dae11a6e0c1501af0ee64736f6c634300080700337bea13895fa79d2831e0a9e28edede30099005a50d652d8957cf8a607ee6ca4a"; // Bytecode du contrat d'implémentation
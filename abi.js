const contractAddress = "0xC7bD2d9ef9A9b07DD29D498Ab1cBDf3EE93b1a62";
var smartContract;
var smartContractWithSigner;
const ABI = 
[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "paramAutor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramReu",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramCausa",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "paramValordacausa",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "paramPrazofinal",
				"type": "uint256"
			}
		],
		"name": "incluirProcesso",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "owner",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "processos",
		"outputs": [
			{
				"internalType": "string",
				"name": "autor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "reu",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "causa",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "valordacausa",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "prazofinal",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contractAddress = "0x346FE0E71AC1F85a0588642b05965A3d237B1425";
var smartContract;
var smartContractWithSigner;
const ABI = 
[

		{
			"inputs": [
				{
					"internalType": "string",
					"name": "paramCliente",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "paramPartecontraria",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "paramLitisconsorcio",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "paramCausa",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "paramAcordo",
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
					"name": "cliente",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "partecontraria",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "litisconsorcio",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "causa",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "acordo",
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

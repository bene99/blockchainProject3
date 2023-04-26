const Web3 = require('web3');
const fs = require('fs');

const owner= '0xC9c0953BF77D9e090D498271Ef247f0999F39bd5';
const farmer = '0x1Be6577E3242D41Fc1125cC2F919a85cf79c4c32';

// Read the ABI and contract address from the JSON file
const supplyChainJSON = JSON.parse(fs.readFileSync('contracts/SupplyChain.json', 'utf8'));
const supplyChainABI = supplyChainJSON.abi;
const supplyChainAddress = supplyChainJSON.networks['5777'].address; // Replace '5777' with the correct network ID if different

// Connect to your local Ethereum network (Ganache)
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545')); // Replace the port with the one used by Ganache if different

// Create a contract instance
const supplyChainContract = new web3.eth.Contract(supplyChainABI, supplyChainAddress);

supplyChainContract.methods.addFarmer(farmer)
.send({ from: owner, gas: 1000000 }) // Adjust the gas limit as needed
.then(receipt => {
  console.log('Transaction successful, receipt:', receipt);
})
.catch(error => {
  console.error('Error:', error);
});
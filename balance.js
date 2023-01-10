require('dotenv-vault-core').config();
const endpoint = process.env.ENDPOINT_URL;
const address = process.env.PUBLIC_KEY;
console.log('Environment variables in use:\n' + endpoint.slice(0,40) + '...\n' + address);
var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || endpoint);

const getbal = async (address) => {
const balance = await web3.eth.getBalance(address);
console.log('Wallet balance: ' + balance + ' wei');
};
getbal(address);

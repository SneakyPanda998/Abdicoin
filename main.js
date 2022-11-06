
const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('92ca29837924f2bc63f044c7108f847e7e279180be3f646243344dd5f86a6b3c');
const myWalletAddress = myKey.getPublic('hex');

let Abdicoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
Abdicoin.addTransaction(tx1);


console.log('\n Starting the AbdiCoin Miner...');
Abdicoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Nicks wallet is: ', Abdicoin.getBalanceOfAddress(myWalletAddress));

//Abdicoin.chain[1].transactions[0].amount = 1

console.log('Is blockchain valid? ' + Abdicoin.isChainValid())
//Abdicoin.chain[1].data = { amount: 100};
//Abdicoin.chain[1].hash = Abdicoin.chain[1].calculateHash();
//console.log('Is blockchain valid? ' + Abdicoin.isChainValid())
//console.log(JSON.stringify(Abdicoin, null, 4));
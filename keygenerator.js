const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPrivate('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private Key(Don\'t share this with anyone)', privateKey);

console.log();
console.log('Public Key: ', publicKey);
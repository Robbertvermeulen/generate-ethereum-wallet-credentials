//console.log(`0:${process.argv[0]}\n1:${process.argv[1]}\n2:${process.argv[2]}`)

var EthUtil = require("ethereumjs-util");
var Web3 = require("web3");
var web3 = new Web3;

var hexToBytes = function(hex) {
   for (var bytes = [], c = 0; c < hex.length; c += 2)
   bytes.push(parseInt(hex.substr(c, 2), 16));
   return bytes;
}

var stringToPrivateKey = function(string) {
   return web3.utils.sha3(string).substr(2)
}

var privateKeyToAddress = function(privateKey) {
   var key = stringToPrivateKey(privateKey);
   return `0x${EthUtil.privateToAddress(hexToBytes(key)).toString('hex')}`
}

console.log(`Private key: ${stringToPrivateKey(process.argv[2])}\nWallet address: ${privateKeyToAddress(process.argv[2])}`);

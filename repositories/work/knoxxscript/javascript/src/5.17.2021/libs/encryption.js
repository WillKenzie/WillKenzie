/* Encryption Module */
const crypto = require ('crypto');
const dns = require('dns');
const os = require('os');

// Keys
const generateKeys = async (passphrase) => {
    return new Promise(function(resolve, reject) {
        crypto.generateKeyPair('rsa', {
            modulusLength: 4096,
            publicKeyEncoding: {
              type: 'spki',
              format: 'pem'
            },
            privateKeyEncoding: {
              type: 'pkcs8',
              format: 'pem',
              cipher: 'aes-256-cbc',
              passphrase: passphrase
            }
          }, (err, publicKey, privateKey) => {
            resolve(
            {public: publicKey, private: privateKey});
          });
    })
}

const fullGenerateKeys = async (name, email, passphrase, comments) => {
    const keys = await generateKeys(new Date() + name + new Date() + email + new Date() + passphrase + new Date() + comments + new Date())
    return keys
}

// Encryption, Fingerprints, and Signatures
const generateFingerprint = () => {
    return JSON.stringify(os.endianness()) + JSON.stringify(os.networkInterfaces()) + os.arch().toString() + os.hostname().toString() + JSON.stringify(os.userInfo()) + dns.getServers()
}

module.exports = {generateKeys, fullGenerateKeys, generateFingerprint}
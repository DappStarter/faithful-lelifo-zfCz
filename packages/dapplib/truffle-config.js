require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember million hockey enroll orange ghost'; 
let testAccounts = [
"0xf4b4ab58859cd76c8adbec918e147146cd0a1c1979424ccd3440f5f200d7ebce",
"0x1bee68548673bc4f0f24def9af507a51dd27ab7767528f8a1a3aec049a9db65f",
"0x0b0d12dc767cd21fe6468e5f4c223276b7678de3c45c350af6653949873ac80e",
"0xdc9e224888d64a2a4fe587efca7aa8663ba13cc48f3ef30ba6e9ed97366c9574",
"0x48ba9bd4df10900078d362a7dd261593dff53e40a39979ccf7269aadc921b118",
"0x71784b2409c8af771f7af496db638618d63056fabb428703959fb4ca2548b519",
"0xe666790cdcf3c46c1a5dfd7c73c7499d7f28377ebd0333479e698dc275ea9414",
"0x0be675e3a281d7715375b2d5c6d7a2e64943913a5918c34d03ca4ff6a6a7ce4b",
"0x12cdc614de3458abe62bdbf62896d1a9dd1ec4c195c66b64d19f5ddc8c004505",
"0xf44a6c164d9b167f6968ba2f8837dffc6380e22f4a9f309814c9e4be7c26044b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



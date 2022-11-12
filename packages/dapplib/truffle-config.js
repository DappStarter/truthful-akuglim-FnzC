require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain coin install derive bottom swarm'; 
let testAccounts = [
"0xf833f15f3e9daf91e095e763b9abf9b129186a9bf0c2a2feefd17b0e8d4f9eec",
"0x5b1a18cd6b89d42ec013e6ecbd4fab49ecf20bf68712d51762cc9a78869eb731",
"0x583c2a661c953d76d0221c71f069d786c5e759bb03c575367f7652843548bdd4",
"0xdaefdce89a61d53962da7272c8f196270be5e302ee8e8eae28c88b180abd42f1",
"0xaf020a2e236bdef5909a62ea7ee6b3ee1ecd000d43ee9fcee17c2dc6b41ed10d",
"0x16e4e131c1f33d8371553454e4f100e4266880802bf60ef18ce7a7a2110c289f",
"0x300357b8efdfe5328cbcceca6bb7bece05fe3f62ccb594234cf39ddd9cc43712",
"0x1cc94203120aee17569ebf9655f71edb308c1ca6e73b8e0e7f4a03a30869384b",
"0x9f8706f391e0f967f599f14adfd3b257b9066b8b8d13406c97004792e9bbf992",
"0xb38246e8a384d06af9887347803fa1270de4891fa72b2ffb25755f078ac2a653"
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



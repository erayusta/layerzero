require("@nomiclabs/hardhat-waffle");
const privateKey = "Meta mask private key";
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    // local ağ için 1337 metamask ın bir bugı
        hardhat: {
          chainId: 1337
        },
    // infura apisi için kullandığım örnek url
        mumbai: {
          url: "https://polygon-mumbai.infura.io/v3/xxxxxxx",
          accounts: [privateKey]
        },
    // avalanche için kullandığım örnek url
        avalanche: {
          url: "https://api.avax-test.network/ext/bc/C/rpc",
          chainId : 43113,
          accounts: [privateKey]
        },
    // binance ın kendi verdiği api url si
        binance: {
          url: "https://data-seed-prebsc-1-s1.binance.org:8545",
          chainId: 97,
          gasPrice: 20000000000,
          accounts: [privateKey]
        },
        fantom: {
          url: "https://rpc.testnet.fantom.network/",
          accounts: [privateKey]
        },
      }    
};

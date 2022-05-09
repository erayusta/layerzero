const hre = require("hardhat");
async function main() {
  const NilNFT = await hre.ethers.getContractFactory("NilNFT");
  const nilNFT = await NilNFT.deploy(
    "0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706",
    0,
    100
  );
  await nilNFT.deployed();
  console.log(
    "Fuji testnet ----- NilNFT deployed to:",
    nilNFT.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
const hre = require("hardhat");
async function main() {
  const NilNFT = await hre.ethers.getContractFactory("NilNFT");
  const nilNFT = await NilNFT.deploy(
    "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf",
    0,
    100
  );
  await nilNFT.deployed();
  console.log(
    "Fantom testnet ----- nilNFT deployed to:",
    nilNFT.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
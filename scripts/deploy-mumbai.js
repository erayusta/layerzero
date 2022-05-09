const hre = require("hardhat");
async function main() {
  const NilNFT = await hre.ethers.getContractFactory("NilNFT");
  const nilNFT = await NilNFT.deploy(
    "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8",
    0,
    100
  );
  await nilNFT.deployed();
  console.log(
    "Mumbai testnet ----- NilNFT deployed to:",
    nilNFT.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
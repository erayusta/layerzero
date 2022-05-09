const hre = require("hardhat");
async function main() {
  const NilNFT = await hre.ethers.getContractFactory("NilNFT");
  const nilNFT = await NilNFT.deploy(
    "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1",
    0,
    100
  );
  await nilNFT.deployed();
  console.log(
    "BSC testnet ----- NilNFT deployed to:",
    nilNFT.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
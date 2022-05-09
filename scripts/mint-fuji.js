const hre = require("hardhat");
async function main() {

  // mint edecek cüzdan adresi  
  const account = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  const NilNFT = await hre.ethers.getContractFactory("NilNFT");
  
  const nilNFT = await NilNFT.attach(
    "0x350267976F153C620d5897aFfd6f0f3bbeaB3E99"
  );
  await nilNFT.mint();
  const balance = await nilNFT.balanceOf(account);
  console.log("Fuji NFT balance: ", balance.toString());
  const owner = await nilNFT.ownerOf(1);
  console.log("Token 2 owner: ", owner);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
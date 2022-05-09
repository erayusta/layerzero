const hre = require("hardhat");
async function main() {

  // mint edecek cüzdan adresi  
  const account = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  const NilNFT = await hre.ethers.getContractFactory("NilNFT");
  
  const nilNFT = await NilNFT.attach(
    "0x92b3dB5B4807e76f7a308BaBF1a9C273C150dfA0"
  );
  await nilNFT.mint();
  const balance = await nilNFT.balanceOf(account);
  console.log("Mumbai NFT balance: ", balance.toString());
  const owner = await nilNFT.ownerOf(4);
  console.log("Token 4 owner: ", owner);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
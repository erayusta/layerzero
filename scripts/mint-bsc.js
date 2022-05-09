const hre = require("hardhat");
async function main() {

  // mint edecek cüzdan adresi  
  const account = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  const NilNFT = await hre.ethers.getContractFactory("NilNFT");
  
  const nilNFT = await NilNFT.attach(
    "0xf69E1dFAc3D43F438Bae80090b8E186B0231CFeb"
  );
  await nilNFT.mint();
  const balance = await nilNFT.balanceOf(account);
  console.log("BSC NFT balance: ", balance.toString());
  const owner = await nilNFT.ownerOf(3);
  console.log("Token 3 owner: ", owner);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
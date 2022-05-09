const hre = require("hardhat");
const { ethers } = require("ethers");
async function main() {
  const NilNFT = await hre.ethers.getContractFactory("NilNFT");
  const nilNFT = await NilNFT.attach(
    "0x350267976F153C620d5897aFfd6f0f3bbeaB3E99"
  );
  await nilNFT.crossChain(
    // 10006 fuji ağının chainID sidir.  
    // https://layerzero.gitbook.io/docs/technical-reference/testnet/testnet-addresses
    10012,
    "0xf69E1dFAc3D43F438Bae80090b8E186B0231CFeb",
    ethers.BigNumber.from("7"),
    { value: ethers.utils.parseEther("5") }
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

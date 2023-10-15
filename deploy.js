const { ethers, upgrades } = require('hardhat');

async function main() {
  const MyNFT = await ethers.getContractFactory('MyNFT');
  const myNFT = await upgrades.deployProxy(MyNFT, ['MyNFT', 'NFT']);
  await myNFT.deployed();

  console.log('MyNFT deployed to:', myNFT.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});

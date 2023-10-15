const { expect } = require('chai');
const { ethers } = require('hardhat');
describe('NFT Minting', function () {
  it('Should mint an NFT', async function () {
    const MyNFT = await ethers.getContractFactory('MyNFT');
    const myNFT = await MyNFT.deploy('MyNFT', 'NFT');
await myNFT.deployed();
const [account1] = await ethers.getSigners();
await myNFT.mintNFT(account1.address, 1, 'ipfs://nft1.json');
    const balance = await myNFT.balanceOf(account1.address);
expect(balance.toNumber()).to.equal(1);
  });
});

const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NFT Metadata', function () {
  it('Should set and retrieve metadata for an NFT', async function () {
    const MyNFT = await ethers.getContractFactory('MyNFT');
    const myNFT = await MyNFT.deploy('MyNFT', 'NFT');
    await myNFT.deployed();
    const [account1] = await ethers.getSigners();
    await myNFT.mintNFT(account1.address, 1, 'ipfs://nft1.json');
    await myNFT.setTokenMetadata(1, 'New metadata for NFT 1');
    const metadata = await myNFT.getTokenMetadata(1);
    expect(metadata).to.equal('New metadata for NFT 1');
  });
}); 

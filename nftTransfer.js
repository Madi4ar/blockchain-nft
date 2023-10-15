const { expect } = require('chai');
const { ethers } = require('hardhat');
describe('NFT Transfer', function () {
  it('Should transfer an NFT', async function () {
    const MyNFT = await ethers.getContractFactory('MyNFT');
    const myNFT = await MyNFT.deploy('MyNFT', 'NFT');
    await myNFT.deployed();
    const [account1, account2] = await ethers.getSigners();
    await myNFT.mintNFT(account1.address, 1, 'ipfs://nft1.json');
    await myNFT.connect(account1).transferFrom(account1.address, 
account2.address, 1);
    const balanceAccount1 = await myNFT.balanceOf(account1.address);
    const balanceAccount2 = await myNFT.balanceOf(account2.address);
    expect(balanceAccount1.toNumber()).to.equal(0);
    expect(balanceAccount2.toNumber()).to.equal(1);
  });
});

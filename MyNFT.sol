// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    constructor(string memory name, string memory symbol) ERC721(name, 
symbol) {
    }

    // Mint a new NFT and replace an existing NFT
    function replaceNFT(uint256 tokenId, address to, string memory 
tokenURI) public onlyOwner {
        // Burn (destroy) the existing NFT
        _burn(tokenId);

        // Mint a new NFT with the same tokenId
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}


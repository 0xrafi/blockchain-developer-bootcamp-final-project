// contracts/ApePen.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


/// @title An NFT for Ape writers
/// @author rafi-fyi
/// @notice simple contract created for the Consensys Dev Bootcamp final project
/// @dev This is v0.01 intended for Ropsten testnet
contract ApePen is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    /// @notice maximum pen amount
    uint256 public MAX_PENS;
    /// @notice base purchase price for an ape pen
    uint256 public constant penPrice = 10000000000000000; //0.01 ETH

    /// @notice takes in max supply, simple ERC721 constructor
    constructor(uint256 maxNftSupply)
    ERC721("ApePen", "PEN") {
        MAX_PENS = maxNftSupply;
    }

    /// @notice withdraw function for owner implemented using call over transfer
    function withdraw() public onlyOwner {
        uint balance = address(this).balance;
        (bool success, ) =  payable(msg.sender).call{value:balance}("");
        require(success, "Transfer failed.");
    }

    /// @notice simple mint function
    /// @return uint token ID of minted token
    function mintNFT(address recipient, string memory tokenURI)
        public payable
        returns (uint256)
    {
        require(_tokenIds.current() + 1 <= MAX_PENS, "Mint would exceed max supply of Ape Pens");
        require(penPrice <= msg.value, "Ether value sent is not correct");
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        // _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    /// @notice returns total minted pens, uses OpenZeppelin's Counters
    /// @return uint count of total tokens
    function getTotalMinted() public view returns (uint256) {
        return _tokenIds.current();
    }


}
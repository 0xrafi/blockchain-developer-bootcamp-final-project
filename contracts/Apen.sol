// contracts/Apen.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Apen is ERC1155, Ownable {
    string public name;
    constructor(string memory _name) public ERC1155("https://abcoathup.github.io/SampleERC1155/api/token/{id}.json") {
        name = _name;
    }
}
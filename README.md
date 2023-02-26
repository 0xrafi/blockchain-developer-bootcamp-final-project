## blockchain-developer-bootcamp-final-project
# Ape Pens
This is my final project for Consensys' Blockchain Developer Bootcamp. 

The app is live here: https://broken-mountain-5051.on.fleek.co/

My Loom recording is live here: https://www.loom.com/share/45992e4c4cb44690bfb9cd5ab880dffb

My public ETH address (rafi-fyi.eth): ```0x51d3657c2ec2dEc47A01F8a82c07e7a3085D591f```

# Setup
This project was created with Brownie and is running on the Ropsten testnet.

## Local ENV Variables
Be sure to initialize  a ```PRIVATE_KEY```, a ```WEB3_INFURA_PROJECT_ID```, and an ```ETHERSCAN_TOKEN``` in a .env file.

See [this tutorial](https://ledumjg.medium.com/detailed-guide-on-etherscan-ethereum-developers-apis-5e12934f728a) on how to setup Etherscan's API and receive a free API token and [this tutorial](https://blog.infura.io/getting-started-with-infura-28e41844cc89/) on how to setup Infura to receive a Infura Project ID.

## Installation
Run
```pip install eth-brownie```
If you don't have Brownie already. See [this](https://eth-brownie.readthedocs.io/en/stable/quickstart.html) quickstart guide if you're unfamiliar with it.

Run
```npm install -g ganache-cli```
If you don't have ganache for migration and running tests.

## Compiling
You can compile with brownie compile, run with 
```brownie run deploy_pen_nft.py --network ropsten```

## Tests
run tests with 
```brownie test```. Brownie handles local testnet ports through ganache-cli nice and neatly, so no other configuration should be needed for the 5 unit tests to run and pass.

# Ape Pen Ideas
Ape Pens is a collection of 5000 collectible NFT "pens" that allow an owner access into a haven for ape pen holders. Only 5000 pens can ever be minted.

Once you own a pen, you will be able to access a Shamir's Secret Sharing encrypted, IPFS decentralized personal writing space with your own private ape notes.
Each ape can mint anonymous "ape note" NFTs in their writing space and release them to the public, where they will be displayed on the Ape Pen writer's wall. Ape Notes are prohibitively expensive to mint, but an ape pen holder can mint as many notes as they choose.

Apen will eventually consist of:
1. Writer's Wall - a collection of every minted "ape note" for viewing
2. Minting - purchase an ape pen (what exists currently)
3. Personal Wall - a wall with private ape notes that have been taken with this pen

# External Resources   
This project was somewhat inspired by Sojourn, an old Consensys devkit: https://media.consensys.net/sojourn-the-journal-that-journalists-trust-to-keep-their-secrets-secret-e173bc658998

Some of the frontend code was based off of this Alchemy tutorial:
https://docs.alchemy.com/alchemy/tutorials/nft-minter

The Brownie code was based off of Patrick Collins' Brownie/NFT tutorial:
https://betterprogramming.pub/how-to-create-nfts-with-solidity-4fa1398eb70a


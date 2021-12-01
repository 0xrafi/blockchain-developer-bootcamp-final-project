## blockchain-developer-bootcamp-final-project
This is my final project for Consensys' Blockchain Developer Bootcamp. I conceived this idea on the 29th. I didn't start this project until the very last minute due to personal reasons. Since I started so late I'll be continuing development of this after the class - for now, this project is meant to meet the bare minimum requirements for completion of the course.

The app is live here: https://broken-mountain-5051.on.fleek.co/

My ETH address: 0x51d3657c2ec2dEc47A01F8a82c07e7a3085D591f

# Setup
This project was created with Brownie and is running on the Ropsten testnet. Be sure to initialize  a PRIVATE_KEY, aWEB3_INFURA_PROJECT_ID, and an ETHERSCAN_TOKEN in a .env file.

Run
```pip install eth-brownie```
If you don't have brownie.

Run
```npm install -g ganache-cli```
If you don't have ganache for running tests.


You can compile with brownie compile, run with 
```brownie run deploy_pen_nft.py --network ropsten```

and run tests with 
```brownie tests```

## Ape Pen - future plans
Apen is a collection of 5000 collectible NFT "pens" that allow an owner access into a haven for ape pen holders. Only 5000 pens can ever be minted.

Once you own a pen, you will be able to access a Shamir's Secret Sharing encrypted, IPFS decentralized personal writing space with your own private ape notes.
Each ape can mint anonymous "ape note" NFTs in their writing space and release them to the public, where they will be displayed on the Ape Pen writer's wall. Ape Notes are prohibitively expensive to mint, but an ape pen holder can mint as many notes as they choose.

Apen will eventually consist of:
1. Writer's Wall - a collection of every minted "ape note" for viewing
2. Minting - purchase an ape pen 
3. Personal Wall - a wall with private ape notes that have been taken with this pen

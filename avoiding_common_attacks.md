**Proper use of .call and .delegateCall** - In line 22 within my `withdraw` function, I opted to use call instead of transfer as suggested within the course due to the Istanbul hardfork. As gas costs are not constant, and transfer uses a hardcoded gas amount, it should be avoided going forward. This does carry an added risk of reentrancy, but because I have made the `withdraw` function as accessible only to the owner of the contract, I don't believe there will be any issues.

**Pull Over Push** - I prioritized pull over push in my `mintNFT` method. Instead of allowing for multiple possible mints and taking as an input a number of tokens to mint - which poses other gas related issues as well, I structured my minting function to only mint one NFT at a time. There are some gas tradeoffs with this method that are negative that I will look further into in the future. 




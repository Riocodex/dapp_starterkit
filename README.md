## HELLO THERE
this is a template made with react and hardhat along with some other fancy tools to speed up production build of decentralized applications.

## STEPS
- go to your terminal and type 
```bash
git clone https://github.com/Riocodex/dapp_starterkit.git
```
 and put the name of the project you want to build eg 

 ```bash
git clone https://github.com/Riocodex/dapp_starterkit.git newDappApplication
```

- cd to your directory in my case its newDappApplication
```bash
cd newDappApplication
```
- install dependencies and tools 
```bash
npm i 
```
- open up the server 
```bash
npm run start
```

- open up another cmd or terminal and open up the code to the directory with code .

- in the directory, the src folder contains frontend and backend, the backend is based mostly on solidity, its where you create smart contracts, run test and deploy scripts

- to create a contract create a folder named contracts, to create a script create a folder called script, to create test create a folder called test and run each with [`hardhat`](https://hardhat.org/) command lines in the terminal

- to deploy smart contracts to the block chain run
```bash
npx hardhat run src/backend/scripts/deploy.js --network (anynetwork you want)
```

- to deploy scripts just save the smart contract address and put it in the save front end files function, the major advantage of this app is you can run and deploy your smartcontract several times without having to change the address manually, the scripts do that for you, cool right?

```bash
 // deploy contracts here:
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();

 

  console.log("NFT contract address", nft.address)
 

  
  // For each contract, pass the deployed contract and name to this function to save a copy of the contract ABI and address to the front end.
  saveFrontendFiles(nft, "NFT");
```
an example of what you should do

- then go to the frontend and connect your backend to the front end

I hope you all enjoy this template, dont forget to leave a star!


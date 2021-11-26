# block-transfer
Transfer Aplication Running on Near Testnet

Sign in with NEAR and send NEAR 



Quick Start
To run this project locally:

Prerequisites: Make sure you have Node.js ≥ 12 installed (https://nodejs.org), then use it to install yarn: npm install --global yarn (or just npm i -g yarn)
Run the local development server: yarn && yarn dev (see package.json for a full list of scripts you can run with yarn)
Now you'll have a local development environment backed by the NEAR TestNet! Running yarn dev will tell you the URL you can visit in your browser to see the app.

Exploring The Code
The backend code lives in the /assembly folder. This code gets deployed to the NEAR blockchain when you run yarn deploy:contract. This sort of code-that-runs-on-a-blockchain is called a "smart contract" – learn more about NEAR smart contracts.
The frontend code lives in the /src folder. /src/index.html is a great place to start exploring. Note that it loads in /src/index.js, where you can learn how the frontend connects to the NEAR blockchain.
Tests: there are different kinds of tests for the frontend and backend. The backend code gets tested with the asp command for running the backend AssemblyScript tests, and jest for running frontend tests. You can run both of these at once with yarn test.
Both contract and client-side code will auto-reload as you change source files.

Deploy
Every smart contract in NEAR has its own associated account. When you run yarn dev, your smart contracts get deployed to the live NEAR TestNet with a throwaway account. When you're ready to make it permanent, here's how.

Step 0: Install near-cli
You need near-cli installed globally. Here's how:

npm install --global near-cli
This will give you the near CLI tool. Ensure that it's installed with:

near --version
Step 1: Create an account for the contract
Visit NEAR Wallet and make a new account. You'll be deploying these smart contracts to this new account.

Now authorize NEAR CLI for this new account, and follow the instructions it gives you:

near login
Step 2: set contract name in code
Modify the line in src/config.js that sets the account name of the contract. Set it to the account id you used above.

const CONTRACT_NAME = process.env.CONTRACT_NAME || 'your-account-here!'
Step 3: change remote URL if you cloned this repo
Unless you forked this repository you will need to change the remote URL to a repo that you have commit access to. This will allow auto deployment to Github Pages from the command line.

go to GitHub and create a new repository for this project

open your terminal and in the root of this project enter the following:

$ git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

Step 4: deploy!
One command:

yarn deploy
As you can see in package.json, this does two things:

builds & deploys smart contracts to NEAR TestNet
builds & deploys frontend code to GitHub using gh-pages. This will only work if the project already has a repository set up on GitHub. Feel free to modify the deploy script in package.json to deploy elsewhere.

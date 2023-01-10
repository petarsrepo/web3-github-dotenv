# web3-github-dotenv

A small example repo on how to integrate Dotenv Vault in a Web3 CI/CD workflow with GitHub Actions.

## Prerequisites

👉 [Node.js](https://nodejs.org/en/)  
👉 [Web3.js (installed automatically during initial setup)](https://github.com/web3/web3.js)  
👉 [Dotenv Vault core (installed automatically during initial setup)](https://github.com/dotenv-org/dotenv-vault-core)  

## Initial setup

Clone this repo to a preferred location and install all dependencies by entering the following in CLI from your project's `root` folder:

```shell
// CLI
npm install
```

To use the functions within this script you will need a node `endpoint`. Get one for free via the [Chainstack console](https://console.chainstack.com/).

Meanwhile, you can already start setting up your [Dotenv Vault](https://dotenv.org/) project. [Create a new project](https://www.dotenv.org/docs/tutorials/sync) and log into your Vault from the `root` folder of this repo you cloned. 

Assuming you have gotten your hands on a node endpoint by now, go ahead and create two secrets in your Vault project with keys and values as follows:

```shell
// .env or Vault web UI
ENDPOINT_URL="https://your-chainstack-endpoint-here"
PUBLIC_KEY="0xYourWalletAddressHere"
```

## Usage

**1. Pull your project's `.env` file from the Vault if you used the WebUI to set the secrets there:**

```shell
// CLI
npx dotenv-vault pull
```
Or push it if you did so locally:

```shell
// CLI
npx dotenv-vault push
```

**2. Build your project's Vault via CLI with the following:**

```shell
// CLI
npx dotenv-vault@latest build
```

**3. Fetch your Vault's decryption keys so GitHub Actions (or any other platform) can use them during build stages. Don't forget to add the environment you have set them up at the end of the command. In this tutorial's case it is `development`.**

```shell
// CLI
npx dotenv-vault@latest keys development
```

The command will return output similiar to this:

```shell
// CLI script returns
npx dotenv-vault@latest keys development
remote:   Listing .env.vault decryption keys... done
dotenv://:key_101133780085abcdef133710180085abcdef@dotenv.org/vault/.env.vault?environment=development
```

**4. Copy the decryption key to a safe place and navigate to your project's cloud GitHub repo. Go to the `Settings` tab, then the `Secrets and variables` tab to open the `Actions secrets` panel. Click the `New repository secret` button to add a new secret with `DOTENV_KEY` as its key and the decryption key you obtained earlier as its value.**

**5. This is it! Now run the `balance.js` script from your CLI and get the balance of the wallet address you have set in your Vault project:**

```shell
// CLI
node index
```

Or alternatively via `npm`:

```shell
// CLI
npm run build
```

The script will return output similar to this:

```shell
// CLI script returns
# Environment variables in use:
# https://your-chainstack-endpoint...
# 0xYourWalletAddress
# Wallet balance: 1337 wei
```

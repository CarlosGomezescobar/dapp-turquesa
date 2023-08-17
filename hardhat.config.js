require('@nomicfoundation/hardhat-toolbox');
const mnemonic ='t';
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.5',
      },
    ],
    overrides: {
      'contracts/USDT.sol': {
        version: '0.4.17',
        settings: {},
      },
    },
  },
  paths: {
    artifacts: './src/artifacts',
  },
  defaultNetwork: 'BscTest',
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
      gasPrice: 20000000000,
    },
    BscTest: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      gasPrice: 10000000000,
      accounts: { mnemonic: mnemonic },
      timeout: 50000,
      allowUnlimitedContractSize: true,
      blockGasLimit: 50000,
      gas: 2100000,
    },
    BscMainnet: {
      url: 'https://bsc-dataseed1.binance.org/',
      chainId: 56,
      // gasPrice: 5000000000,
      gasPrice: 'auto',
      accounts: { mnemonic: mnemonic },
      timeout: 50000,
    },
  },
  namedAccounts: {
    executor: {
      default: 0,
    },
    proposer: {
      default: 1,
    },
    voter1: {
      default: 2,
    },
    voter2: {
      default: 3,
    },
    voter3: {
      default: 4,
    },
    voter4: {
      default: 5,
    },
    voter5: {
      default: 6,
    },
    voter6: {
      default: 7,
    },
  },
};

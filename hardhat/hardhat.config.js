require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: '.env' })

const ALCHEMY_RINKEBY_URL = process.env.ALCHEMY_RINKEBY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: ALCHEMY_RINKEBY_URL,
      accounts: [PRIVATE_KEY],
    },
  },
}

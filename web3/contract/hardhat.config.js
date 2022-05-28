// https://eth-rinkeby.alchemyapi.io/v2/j-fU5abSKwI-IZ9vV-56ebzSEARhDeV0

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/j-fU5abSKwI-IZ9vV-56ebzSEARhDeV0',
      accounts: ['b93523d65ed728fd34af2ab578ac2ecf813e561adc2842f66a36afda21f1db59']
    }
  }
}
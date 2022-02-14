const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");


module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1000 DAI tokens for deployer
  await tokenMock.mint(
    '0xfa7A3d6eC5Bc1e722aF8Ee6c5ad227a708907Ae1',
    // Since we are minting 1000 tokens and our token has 18 decimals, we list out 1000 and add 18 decimals
    '1000000000000000000000'
  )
};

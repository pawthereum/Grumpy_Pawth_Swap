const Grumpy = artifacts.require("Grumpy");
const Pawth = artifacts.require("PawthereumTest");
const GrumpyPawthSwap = artifacts.require("GrumpyPawthSwap");

module.exports = async function(deployer) {
  const accounts = await web3.eth.getAccounts()

  // Deploy Grumpy
  await deployer.deploy(Grumpy);
  const grumpy = await Grumpy.deployed()

  // Deploy Pawth
  await deployer.deploy(Pawth);
  const pawth = await Pawth.deployed()

  // Deploy GrumpyPawthSwap
  await deployer.deploy(GrumpyPawthSwap, grumpy.address, pawth.address);
  const grumpyPawthSwap = await GrumpyPawthSwap.deployed()

  // // Transfer all pawth to GrumpyPathSwap (1 billion)
  // await pawth.transfer(grumpyPawthSwap.address, '500000000')
  // await pawth.transfer(accounts[0], '500000000')

  // // Transfer 100 Trillion grupy to user who deployed the contract
  // await grumpy.transfer(accounts[0], '100000000000000')
};

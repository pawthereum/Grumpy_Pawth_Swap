const Grumpy = artifacts.require("Grumpy");
const Pawth = artifacts.require("Pawthereum");
const GrumpyPawthSwap = artifacts.require("GrumpyPawthSwap");

module.exports = async function(deployer) {

  // // Deploy Grumpy
  await deployer.deploy(Grumpy);
  const grumpy = await Grumpy.deployed()

  // Deploy Pawth
  await deployer.deploy(Pawth);
  const pawth = await Pawth.deployed()

  // Deploy GrumpyPawthSwap
  await deployer.deploy(GrumpyPawthSwap, "0x93b2fff814fcaeffb01406e80b4ecd89ca6a021b", pawth.address);
  const swap = await GrumpyPawthSwap.deployed()

  // // Transfer all pawth to GrumpyPathSwap (1 billion)
  const totalPawthSupply = await pawth.totalSupply()
  await pawth.transfer(swap.address, totalPawthSupply)
  // await pawth.transfer(accounts[0], '500000000')

  // // Transfer 100 Trillion grupy to user who deployed the contract
  // await grumpy.transfer(accounts[0], '100000000000000')
};


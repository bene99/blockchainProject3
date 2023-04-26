const ConsumerRole = artifacts.require("coffeeaccesscontrol/ConsumerRole.sol");
const DistributorRole = artifacts.require("coffeeaccesscontrol/DistributorRole.sol");
const FarmerRole = artifacts.require("coffeeaccesscontrol/FarmerRole.sol");
const RetailerRole = artifacts.require("coffeeaccesscontrol/RetailerRole.sol");
const Roles = artifacts.require("coffeeaccesscontrol/Roles.sol");
const SupplyChain = artifacts.require("SupplyChain.sol");

module.exports = function (deployer) {
    deployer.deploy(Roles)

    deployer.link(Roles, ConsumerRole)
    deployer.link(Roles, DistributorRole)
    deployer.link(Roles, FarmerRole)
    deployer.link(Roles, RetailerRole)
    deployer.deploy(ConsumerRole)
    deployer.deploy(DistributorRole)
    deployer.deploy(FarmerRole)
    deployer.deploy(RetailerRole)
    deployer.deploy(SupplyChain)

};

const {
    getNamedAccounts,
    deployments,
    network,
    run,
    ethers,
} = require("hardhat");
const {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    INITIAL_SUPPLY
} = require("../helper-hardhat-config");

const waitBlockConfirmations = developmentChains.includes(network.name)
? 1
: VERIFICATION_BLOCK_CONFIRMATIONS;

module.exports = async ({ getNamedAccounts, deployments}) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const atlanteanNotes = await deploy("AtlanteanNotes", {
        from: deployer,
        args: [INITIAL_SUPPLY],
        log: true,
        // wait for live network to verify
        waitConfirmations: waitBlockConfirmations || 1,
    })
    log(`Notes deployed at ${atlanteanNotes.address}`)

    const networkName = network.name == "hardhat" ? "localhost" : network.name;
    log(`Atantean Notes minted ${INITIAL_SUPPLY}`);
    log("----------------------------------------------------");
}

module.exports.tags = ["all", "AtlanteanNotes"]
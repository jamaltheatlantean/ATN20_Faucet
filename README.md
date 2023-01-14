# AtlanteanNotes Faucet Application

This is a faucet application that drips AtlanteanNotes (ATN20 tokens), in a way that will never lead to shortage, even if users mint up to the INITIAL_SUPPLY; see `( helper-hardhat.config)` they will only be creating newer Notes for their addresses.
The application uses the standard erc20 implementation to create the AtlanteanNotes or ATN20 tokens. 
Users input their address and call the mint function to mint 1e18 of the ATNs.


## Event

The contract includes the following event:

-   `ATNSent(address _to)`: Emitted when ATN has been sent to an address.


## Improvement To-do

This is just an simple implementation of the raw idea, still tons of improvement is need to be done

-   Create a better front-end interface for pleasurable user interaction.

## License

See LICENSE.

## Feel free to send PR with any contributions.

Contract Address: 0xb5d3ba82016E8CcA101d3f8b8402532c66B2071c

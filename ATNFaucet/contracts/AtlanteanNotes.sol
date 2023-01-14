// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

error ATN20__DailyLimitReached();

contract AtlanteanNotes is ERC20 {

    event ATNSent(address indexed _to, uint _requestAmount);

    // control the amount of ATN an address can request
    uint public requestAmount = 1e18;
    mapping(address => uint) public lastReceived;

    constructor(uint256 initialSupply) ERC20("AtlanteanNotes", "ATN"){
    _mint(msg.sender, initialSupply);
    }

    /**
    * @dev function creates new ATN tokens adding on the initial
    * amount. This function will be called from the faucet.
    */
    function requestATN(address _to) external {
        if(block.timestamp - lastReceived[msg.sender] < 24 hours){
            revert ATN20__DailyLimitReached();
        }
        lastReceived[msg.sender] = block.timestamp;
        _mint(_to, requestAmount);

        emit ATNSent(_to, requestAmount);
    }
}
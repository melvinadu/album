// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract AlbumSale {

  // types in SOL referenced from https://docs.soliditylang.org/en/v0.8.13/types.html
  // uint variables cannot be negative and are hex values which is why maxSales is showing as 64 on the blockchain
  uint public totalSales;
  uint public maxSales;

  address public owner;
  address public charity;

  //mapping which addresses have bought the album or not
  mapping (address => bool) sales;
  // if you wanted to make this list public, you would add public to the code as seen below
  // mapping (address => bool) public  sales;


  constructor() {
    totalSales = 0;
    maxSales = 100;

    owner = 0xdd0001Cc2B6Cb99CA0CB56eFE61B82D8935Ee75F;
    charity = 0x0206dDB656Da973230Bf332d7D34fEafc5A45E3c;
  }

  function canBuy () public returns (bool) {
    return totalSales < maxSales;
  }

  //function that checks whether a certain address has already had access to the smart contract
  function hasAccess () public returns (bool) {
    return sales[msg.sender];
  }

  function buy () public payable returns (bool) {
    //ensure item is not sold out before buying
    require(canBuy() == true, "Item is sold out!");
    // ensure the right about of eth is being sent
    // msg.value can be referenced here: https://docs.soliditylang.org/en/v0.8.13/units-and-global-variables.html#block-and-transaction-properties
    require(msg.value == 0.01 ether, "Wrong amount sent!");
    //ensure the sender's identity is not already on the smart contract and has not bought this before
    require(hasAccess() == false, "You already bought this album!");

    //split the total purchase amount between the owner and charity
    //any leftover amount would be kept by the contract itself
    //there is a security concern present and could be addressed by using "addr.call{value: x}("")" instead of "addr.call"
    //more on that here: https://docs.soliditylang.org/en/v0.8.13/security-considerations.html#sending-and-receiving-ether
    payable(owner).transfer(msg.value * 80 / 100);
    payable(charity).transfer(msg.value * 20 / 100);

    totalSales = totalSales + 1;

    //set the sender's identity with the contract to true 
    sales[msg.sender] = true;

    return true;
  }

}

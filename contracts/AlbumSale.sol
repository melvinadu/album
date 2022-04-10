// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract AlbumSale {

  // types in SOL referenced from https://docs.soliditylang.org/en/v0.8.13/types.html
  // uint variables cannot be negative and are hex values which is why maxSales is showing as 64 on the blockchain
  uint public totalSales;
  uint public maxSales;

  address public owner;
  address public charity;

  constructor() {
    totalSales = 0;
    maxSales = 100;

    owner = 0xdd0001Cc2B6Cb99CA0CB56eFE61B82D8935Ee75F;
    charity = 0x0206dDB656Da973230Bf332d7D34fEafc5A45E3c;
  }

  function canBuy () public returns (bool) {
    return totalSales < maxSales;
  }

  function buy () public returns (bool) {
    totalSales = totalSales + 1;
    return true;
  }

}

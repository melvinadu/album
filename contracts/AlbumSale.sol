// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract AlbumSale {

  // types in SOL referenced from https://docs.soliditylang.org/en/v0.8.13/types.html
  // uint variables cannot be negative and are hex values which is why maxSales is showing as 64 on the blockchain
  uint public totalSales;
  uint public maxSales;

  constructor() {
    totalSales = 0;
    maxSales = 100;
  }

}

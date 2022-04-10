// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract AlbumSale {

  // types in SOL referenced from https://docs.soliditylang.org/en/v0.8.13/types.html
  // uint variables cannot be negative
  uint totalSales;
  uint maxSales;

  constructor() public {
    totalSales = 0;
    maxSales = 100;
  }

}

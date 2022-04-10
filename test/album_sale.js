const AlbumSale = artifacts.require("AlbumSale");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("AlbumSale", function (/* accounts */) {
  it("should assert true", async function () {
    await AlbumSale.deployed();
    return assert.isTrue(true);
  });
});

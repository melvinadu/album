const AlbumSale = artifacts.require("AlbumSale");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("AlbumSale", function (accounts) {
  it("should assert true", async function () {
    await AlbumSale.deployed();
    return assert.isTrue(true);
  });

  it("should get the right account owner account and charity account", async function () {
    const contract = await AlbumSale.deployed();
    
    const owner = await contract.owner.call()
    assert.isTrue(owner == 0xdd0001Cc2B6Cb99CA0CB56eFE61B82D8935Ee75F)

    const charity = await contract.charity.call()
    assert.isTrue(charity == 0x0206dDB656Da973230Bf332d7D34fEafc5A45E3c)
  });

});

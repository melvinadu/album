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

  it("should split 80% of the payment to the owner", async function () {
    const contract = await AlbumSale.deployed();
    
    const startBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[1]))

    const purchase = await contract.buy.sendTransaction({
      from: accounts[0],
      value: web3.utils.toWei("0.01", "ether")
    })

    const commission = web3.utils.toBN(web3.utils.toWei("0.008", "ether"))

    const endBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[1]))

    // console.log(startBalance);
    // console.log(endBalance);
    assert.equal(
      startBalance.add(commission).toString(), 
      endBalance.toString()
    )
  });

  it("should split 20% of the payment to the charity", async function () {
    const contract = await AlbumSale.deployed();
    
    const startBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[2]))

    const purchase = await contract.buy.sendTransaction({
      from: accounts[5],
      value: web3.utils.toWei("0.01", "ether")
    })

    const commission = web3.utils.toBN(web3.utils.toWei("0.002", "ether"))

    const endBalance = web3.utils.toBN(await web3.eth.getBalance(accounts[2]))

    // console.log(startBalance);
    // console.log(endBalance);
    assert.equal(
      startBalance.add(commission).toString(), 
      endBalance.toString()
    )
  });
});

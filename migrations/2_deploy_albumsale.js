const AlbumSale = artifacts.require("AlbumSale");

module.exports = function (deployer) {
  deployer.deploy(AlbumSale);
};

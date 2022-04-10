import Web3 from 'web3';
import AlbumSale from './AlbumSale.json';

const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:7545")

const contractAddress = "0x0FCd11fd5CFeA5396f34bBc2C6F7fED7469E6E21"
const contract = new web3.eth.Contract(AlbumSale.abi, contractAddress)

const sharedMessage = "This is to confirm your account when downloading the limited edition album"

export { web3, contract, contractAddress, sharedMessage }
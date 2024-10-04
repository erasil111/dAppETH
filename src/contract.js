import Web3 from 'web3';
import AIModelMarketplaceABI from './AIModelMarketplaceABI.json';

const web3 = new Web3(window.ethereum);
const contractAddress = '0x864ab95cf80084ba3fa91736a0b96bf4828b8de8'; 
const contract = new web3.eth.Contract(AIModelMarketplaceABI, contractAddress);

export const listModel = async (name, description, price) => {
    const accounts = await web3.eth.requestAccounts();
    return await contract.methods.listModel(name, description, price).send({ from: accounts[0] });
};

export const purchaseModel = async (modelId) => {
    const accounts = await web3.eth.requestAccounts();
    const model = await contract.methods.models(modelId).call();
    return await contract.methods.purchaseModel(modelId).send({ from: accounts[0], value: model.price });
};

export const rateModel = async (modelId, rating) => {
    const accounts = await web3.eth.requestAccounts();
    return await contract.methods.rateModel(modelId, rating).send({ from: accounts[0] });
};

export const getModelDetails = async (modelId) => {
    return await contract.methods.getModelDetails(modelId).call();
};

export const withdrawFunds = async () => {
    const accounts = await web3.eth.requestAccounts();
    return await contract.methods.withdrawFunds().send({ from: accounts[0] });
};

import React, { useState } from 'react';
import Web3 from 'web3';
import { listModel } from '../contract';

const AddModel = ({ setModels }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum); // Инициализация Web3
            const priceInWei = web3.utils.toWei(price, 'ether');

            await listModel(name, description, priceInWei, { from: accounts[0] });

            setModels(prevModels => [
                ...prevModels,
                { name, description, price: priceInWei }
            ]);

            alert('Model listed successfully!');
            setName('');
            setDescription('');
            setPrice('');
        } catch (error) {
            console.error('Error listing model:', error);
            alert('Error listing model: ' + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Model Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="number" placeholder="Price in ETH" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <button type="submit">List Model</button>
        </form>
    );
};

export default AddModel;

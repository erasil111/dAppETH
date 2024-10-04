import React, { useState } from 'react';
import Web3 from 'web3';
import { getModelDetails } from '../contract';

const GetModelDetails = () => {
    const [modelId, setModelId] = useState('');
    const [details, setDetails] = useState(null);
    
    // Инициализируем Web3
    const web3 = new Web3(window.ethereum);

    const handleGetDetails = async (e) => {
        e.preventDefault();
        try {
            const modelDetails = await getModelDetails(modelId);
            console.log('Fetched Model Details:', modelDetails); // Вывод в консоль
            setDetails(modelDetails);
        } catch (error) {
            console.error('Error fetching model details:', error);
            alert('Error fetching model details');
        }
    };
    

    return (
        <div>
            <form onSubmit={handleGetDetails}>
                <input type="number" placeholder="Model ID" value={modelId} onChange={(e) => setModelId(e.target.value)} required />
                <button type="submit">Get Model Details</button>
            </form>
            {details && (
    <div>
        <h3>Model Details</h3>
        <p>Name: {details[0]}</p>
        <p>Description: {details[1]}</p>
        <p>Price: {web3.utils.fromWei(details[2].toString(), 'ether')} ETH</p>
        <p>Rating: {details[3] !== undefined ? details[3].toString() : "No rating yet"}</p>
        <p>Rating Count: {details[4] !== undefined ? details[4].toString() : 0}</p>
    </div>
)}

        </div>
    );
};

export default GetModelDetails;

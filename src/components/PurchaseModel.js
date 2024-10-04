import React, { useState } from 'react';
import { purchaseModel } from '../contract';

const PurchaseModel = () => {
    const [modelId, setModelId] = useState('');

    const handlePurchase = async (e) => {
        e.preventDefault();
        try {
            await purchaseModel(modelId);
            alert('Model purchased successfully!');
            setModelId('');
        } catch (error) {
            console.error(error);
            alert('Error purchasing model');
        }
    };

    return (
        <form onSubmit={handlePurchase}>
            <input type="number" placeholder="Model ID" value={modelId} onChange={(e) => setModelId(e.target.value)} required />
            <button type="submit">Purchase Model</button>
        </form>
    );
};

export default PurchaseModel;

import React, { useState } from 'react';
import { rateModel } from '../contract';

const RateModel = () => {
    const [modelId, setModelId] = useState('');
    const [rating, setRating] = useState('');

    const handleRate = async (e) => {
        e.preventDefault();
        try {
            await rateModel(modelId, rating);
            alert('Model rated successfully!');
            setModelId('');
            setRating('');
        } catch (error) {
            console.error(error);
            alert('Error rating model');
        }
    };

    return (
        <form onSubmit={handleRate}>
            <input type="number" placeholder="Model ID" value={modelId} onChange={(e) => setModelId(e.target.value)} required />
            <input type="number" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} required />
            <button type="submit">Rate Model</button>
        </form>
    );
};

export default RateModel;

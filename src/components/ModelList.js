import React from 'react';
import Web3 from 'web3';

const ModelList = ({ models }) => {
    const web3 = new Web3(window.ethereum);

    return (
        <div>
            <h2>Available Models</h2>
            {models.length === 0 ? (
                <p>No models available.</p>
            ) : (
                models.map((model, index) => (
                    <div key={index}>
                        <h3>name: {model.name}</h3>
                        <p>description: {model.description}</p>
                        <p>Price: {web3.utils.fromWei(model.price, 'ether')} ETH</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ModelList;

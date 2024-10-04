import React from 'react';
import { withdrawFunds } from '../contract';

const WithdrawFunds = () => {
    const handleWithdraw = async () => {
        try {
            await withdrawFunds();
            alert('Funds withdrawn successfully!');
        } catch (error) {
            console.error(error);
            alert('Error withdrawing funds');
        }
    };

    return (
        <button onClick={handleWithdraw}>Withdraw Funds</button>
    );
};

export default WithdrawFunds;

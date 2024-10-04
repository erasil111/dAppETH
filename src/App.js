import React, { useState } from 'react';
import AddModel from './components/AddModel';
import PurchaseModel from './components/PurchaseModel';
import RateModel from './components/RateModel';
import GetModelDetails from './components/GetModelDetails';
import WithdrawFunds from './components/WithdrawFunds';
import ModelList from './components/ModelList';
import './App.css';


const App = () => {
    const [models, setModels] = useState([]);

    return (
        <div className="container">
        <div className="card">
            <h1>AI Model Marketplace</h1>
            <AddModel models={models} setModels={setModels} />
            <PurchaseModel />
            <RateModel />
            <GetModelDetails />
            <WithdrawFunds />
            <ModelList models={models} />
        </div>
    </div>
    );
};

export default App;

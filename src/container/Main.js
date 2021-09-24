import React, { useState } from 'react';

import CalculateTransaction from '../components/CalculateTransaction';
import AddTransaction from '../components/AddTransaction';

const Main = () => {
    const [data, setData] = useState({
        id: Math.random() * 5,
        name: '',
        transaction_type: '',
        amount: 0,
    })
    const [dataArray, setDataArray] = useState([])

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data["transaction_type"] === "" || data["transaction_type"] === "select") {
            return alert("Please select a transaction type")
        } else {
            setDataArray([...dataArray, data])
        }
        setData({
            id: Math.random() * 5,
            name: '',
            transaction_type: '',
            amount: 0,
        })
        
    }
    
    const handleDeleteButton = (index) => {
        let newDataArray = dataArray
        newDataArray.splice(index, 1)
        setDataArray([...newDataArray])
    }


    return (
        <main>
            <AddTransaction handleInputChange={handleInputChange} handleSubmit={handleSubmit} data={data} />
            <CalculateTransaction dataArray={dataArray} handleDeleteButton={handleDeleteButton}/>
        </main>
    )
}

export default Main;
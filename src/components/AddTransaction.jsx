import React from 'react';

import '../style/AddTransaction.css';

const AddTransaction = ({ handleInputChange, handleSubmit, data }) => {

    return (
        <article className="article article__transaction">
            <form onSubmit={handleSubmit} action="#">
                <div className="transaction__name">
                    <h3 className="transaction__section--title">Name</h3>
                    <input 
                    type="text"
                    required 
                    placeholder="Name"
                    name="name" 
                    value={data.name} 
                    onChange={handleInputChange}
                    />
                </div>
                <div className="transaction__type">
                    <h3 className="transaction__section--title">Transaction Type</h3>
                    <select 
                    name="transaction_type" 
                    className="transaction__select"
                    value={data.transaction_type}
                    onChange={handleInputChange}>
                        <option value="select">Select</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div className="transaction__amount">
                    <h3 className="transaction__section--title">Amount</h3>
                    <input type="number"
                    value={data.amount}
                    name="amount"
                    onChange={handleInputChange}/>
                </div>
                <button type="submit" className="submit__form">Submit</button>
            </form>
        </article>
    );
};

export default AddTransaction;
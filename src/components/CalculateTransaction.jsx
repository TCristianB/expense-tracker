import React from 'react';

import '../style/CalculateTransaction.css';

const CalculateTransaction = ({ dataArray, handleDeleteButton }) => {

    let expenseSum = 0;
    let incomeSum = 0;
    let total = 0;
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i]['transaction_type'] === 'expense') {
            let transaction = Number(dataArray[i]['amount'])
            expenseSum += transaction
            total -= transaction
        }
        if (dataArray[i]['transaction_type'] === 'income') {
            let transaction = Number(dataArray[i]['amount'])
            incomeSum += transaction
            total += transaction
        }
    }

    return (
        <article className="article article__result">
            <header className="results__header">
                <p className="header__income">Income: {incomeSum}</p>
                <p className="header__expense">Expense: {expenseSum}</p>
                <p className="header__total">Total: {total}</p>
            </header>
            <div>
                <h2 className="results__title">History</h2>
                <div className="results__list">
                    {dataArray.map((item, index) => {
                        const { id, transaction_type, name, amount } = item;
                        return (
                            <div className={`ticket ${transaction_type}`} key={id}>
                                <p className="ticket__name">{name}</p>
                                <p>{amount}$</p>
                                <button className="ticket__button" onClick={() => handleDeleteButton(index)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </article>
    );
};

export default CalculateTransaction;
import React, { useState } from 'react'

export default function FilterTransaction({ setTransactions }) {

    const [inputText,setInputText] = useState("Search..")

    function filterByDescription (event) {
        event.preventDefault();
        setInputText(event.target.value)
        fetch("http://localhost:3000/transactions")
        .then(res => res.json())
        .then(transactions => {
            setTransactions(transactions.filter((transaction) => {
                inputText.includes(transaction.description);
            }));
        })
    }

  return (
    <div>
        <h3>Filter By Description</h3>
        <form id="form-for-filter" onSubmit={filterByDescription}>
            <input name='filter'
             onChange={filterByDescription}
              value={inputText}/>
            <button id="filter-button">Filter</button>
        </form>
    </div>
  )
}
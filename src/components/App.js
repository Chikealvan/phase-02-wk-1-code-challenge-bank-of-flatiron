import React, { useState, useEffect } from "react";
import DisplayTransactions from "./DisplayTransactions";
import TransactionForm from "./TransactionForm";
import FilterTransaction from "./FilterTransaction";
import Transaction from "./Transaction";


export default function App() {

  const [transactions, setTransactions] = useState([]);
  const [hasChange, setHasChange] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then(res => res.json())
    .then(transactions => {setTransactions(transactions)})
  },[hasChange])

  return (
    <main className="App">
      <TransactionForm hasChange={hasChange}
       setHasChange={setHasChange}/>
      <FilterTransaction hasChange={hasChange}
       setHasChange={setHasChange}
        setTransactions={setTransactions}/>
      <DisplayTransactions transactions={transactions}
       hasChange={hasChange}
        setHasChange={setHasChange}/>
    </main>
  );
}

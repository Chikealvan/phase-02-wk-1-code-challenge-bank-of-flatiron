import React, { useState } from 'react'

export default function TransactionForm({ hasChange, setHasChange }) {

    const [formData, setFormData] = useState({
        date: "Enter Date..",
        description: "Enter Description..",
        category: "Enter Category..",
        amount: 0
    })

    function handleChange (event) {
        setFormData ({...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        if (formData.amount !== 0) {
            fetch ("http://localhost:3000/transactions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            setFormData({
                date: "Enter Date..",
                description: "Enter Description..",
                category: "Enter Category..",
                amount: 0
            })
            setHasChange(() => !hasChange)
        })
        }
    }

  return (
    <div>
        <h3 className='filter-text'>Enter New Transaction</h3>
        <form id="form-for-new" onSubmit={handleSubmit}>
            <input
             type='text'
              name='date'
               value={formData.date}
                onChange={handleChange}
                 placeholder=''/>
            <input
             type='text'
              name='description'
               value={formData.description}
                onChange={handleChange}
                 placeholder=''/>
            <input
             type='text'
              name='category'
               value={formData.category}
                onChange={handleChange}
                 placeholder=''/>
            <input
             type='text'
              name='amount'
               value={formData.amount}
                onChange={handleChange}
                 placeholder=''/>
            <button id="submit" type='submit'>Add Transaction</button>
        </form>
    </div>
  )
}


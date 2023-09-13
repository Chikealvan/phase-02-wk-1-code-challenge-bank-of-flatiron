import React from 'react';

export default function Transaction({ transaction, handleDelete, count}) {
    const {id, date, description, category, amount} = transaction;
  return (
    <tr>
      <td>{count}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button id={id} onClick={handleDelete} className='delete-button'>Delete</button></td>
    </tr>
  )
};
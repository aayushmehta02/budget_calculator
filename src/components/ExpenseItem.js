import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
export const ExpenseItem = ({expense}) => {
  const {id,charge, amount}= expense
  function removeItem(amount){
    console.log(charge)
    console.log(amount)
  }
    return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{charge}: </span>
        <span className='amount'>    ${amount}</span>
      </div>
      <div>
        <button className='edit-btn' aria-label='edit button'><MdEdit/></button>
        <button className='clear-btn' aria-label='delete button' onClick={()=>removeItem(amount, charge)}><MdDelete></MdDelete></button>
      </div>
    </li>
    );
      
    
};



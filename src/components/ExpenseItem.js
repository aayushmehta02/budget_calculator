import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
export const ExpenseItem = ({expense}) => {
  const {id,charge, amount}= expense
  function removeItem(){
    Inititalexpenses.removeItem(expense)
  }
    return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{charge}: </span>
        <span className='amount'>    ${amount}</span>
      </div>
      <div>
        <button className='edit-btn' aria-label='edit button'><MdEdit/></button>
        <button className='clear-btn' aria-label='delete button' onClick={()=>removeItem(expense)}><MdDelete></MdDelete></button>
      </div>
    </li>
    );
      
    
};



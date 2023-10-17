import React from 'react';
import {ExpenseItem} from './ExpenseItem';
import { MdDelete } from 'react-icons/md';
export const ExpenseList = ({expenses}) => {
  return (
    <div>
        <ul className='lists'>
            {expenses.map((expense)=>{
                return <ExpenseItem key = {expense.id} expense = {expense}></ExpenseItem>
            })}
        </ul>
        {expenses.lenght > 0 && <button className='btn'>clear expense <MdDelete className='btn-icoon'/> </button>}
    </div>
  )
}

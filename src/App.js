
import './App.css';
import React, {useState} from 'react';
import ExpressForms from './components/Expenseform';
import {ExpenseItem} from './components/ExpenseItem';
import { ExpenseList } from './components/ExpenseList';
import { Alert } from './components/Alert';
import { v4 as uuid } from 'uuid';

const initialExpenses = [
  {id: uuid(), charge: "rent", amount: 1000},
  {id: uuid(), charge:"car pay", amount: 100},
  {id: uuid(), charge: "credit cards", amount: 1200},

]
// console.log(initialExpenses)



function App() {
  console.log(useState())
  const [expenses, expenses2] = useState(initialExpenses)
  
 
  return (
    <div className="App">
      <Alert/>
      <h1>BUDGET CALCULATOR</h1>
      <main>
        <ExpressForms></ExpressForms>
        <ExpenseList expenses = {expenses}/>
      </main>
      <h1>
        TOTAL SPENDING: <span className='total'>
          ${expenses.reduce((acc,curr)=>{
            return (acc+= curr.amount)
          },0)}
        </span>
      </h1>
      
      
    </div>
  );
}

export default App;

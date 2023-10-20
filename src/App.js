
import './App.css';
import React, {useState} from 'react';
import ExpressForms from './components/Expenseform';
import {ExpenseItem} from './components/ExpenseItem';
import { ExpenseList } from './components/ExpenseList';
import { Alert } from './components/Alert';
import { v4 as uuid } from 'uuid';

const initialExpenses = [
  // {id: uuid(), charge: "rent", amount: 1000},
  // {id: uuid(), charge:"car pay", amount: 100},
  // {id: uuid(), charge: "credit cards", amount: 1200},

]
// console.log(initialExpenses)



function App() {
  
  const [expenses, setExpenses] = useState(initialExpenses);
  
  const [charge, setCharge] = useState('');

  const [amount, setAmount] = useState('');

  const handleCharge = e =>{
    console.log(`charge:   ${e.target.value}`)
    setCharge(e.target.value)
  }
  const handleAmount = e =>{
    console.log(`amount:   ${e.target.value}`)
    setAmount(e.target.value)
    
  }
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(charge,amount)
    if(charge !== " " && amount > 0){
      const singleExpense = {id: uuid(), charge: charge, amount:amount}
      setExpenses([...expenses, singleExpense])
    }else{

    }
  }
  
  return (
    <div className="App">
      <Alert/>
      <h1>BUDGET CALCULATOR</h1>
      <main className='App'>
        <ExpressForms charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit}></ExpressForms>
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

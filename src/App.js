
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

  const[alert, setAlert] = useState({show: false})

  const handleCharge = e =>{
    console.log(`charge:   ${e.target.value}`)
    setCharge(e.target.value)
  }
  const handleAmount = e =>{
    console.log(`amount:   ${e.target.value}`)
    setAmount(e.target.value)
    
  }

  const handleAlert = ({type, text}) =>{
    setAlert({show: true, type, text})
    setTimeout(()=>{
      setAlert({show:false})
    },5000)
  }
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(charge,amount)
    if(charge !== " " && amount > 0){
      const singleExpense = {id: uuid(), charge: charge, amount:amount}
      setExpenses([...expenses, singleExpense])
      handleAlert({type:'success', text:"Item added"})
      setCharge('');
      setAmount('');

    }else{
      handleAlert({type: 'danger',
       text: 'charge cant be an empty value and amount value has to be greater than zero'});
    }
  }
  
  return (
    <div className="App">
      {alert.show && <Alert type={alert.type} text= {alert.text} />}
     
      <h1>BUDGET CALCULATOR</h1>
      <main className='App'>
        <ExpressForms charge={charge} amount={amount} handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit}></ExpressForms>
        <ExpenseList expenses = {expenses}/>
      </main>
      <h1>
        TOTAL SPENDING: <span className='total'>
          ${expenses.reduce((acc,curr)=>{
            return (acc+= parseInt(curr.amount))
          },0)}
        </span>
      </h1>
      
      
    </div>
  );
}

export default App;

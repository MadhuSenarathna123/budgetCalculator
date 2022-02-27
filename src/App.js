import React from 'react';
import './App.css';
import ExpenseList from './component/ExpenseList';
import ExpenseForm from './component/ExpenseForm';
import Alert from './component/Alert';

const initialExpenses = [
  {id:1, charge: "rent", amount:1600},
  {id:2, charge: "car payment", amount:400},
  {id:3, charge: "credit card bill", amount:1200}
]


function App() {
  return (
    <div>
    <Alert></Alert>
    <ExpenseForm/>
    <ExpenseList/>
    </div>
  );
}

export default App;

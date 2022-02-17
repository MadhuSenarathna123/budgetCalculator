import React from 'react';
import './App.css';
import ExpenseList from './component/ExpenceList';
import ExpenseForm from './component/ExpenseForm';
import Alert from './component/Alert';

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

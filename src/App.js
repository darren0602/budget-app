import React from 'react'
import Budget from './components/Budget'
import Remaining from './components/Remaining'
import Spent from './components/Spent'
import AddExpenseForm from './components/AddExpenseForm'
import ExpenseItemList from './components/ExpenseItemList'
import ClearExpenseForm from './components/ClearExpenseForm'
import { AppProvider } from './context/AppContext'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <AppProvider>
      <main className="container">
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className='mt-3 row'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <Spent />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className='mt-3 row'>
          <div className='col-sm'>
            <ExpenseItemList />
          </div>
        </div>
        <div className='mt-1 d-flex justify-content-end' >
          <ClearExpenseForm />
        </div>
        <h3 className="mt-3">Add Expenses</h3>
        <div className='mt-3'></div>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
      </main>
    </AppProvider>
  )
}
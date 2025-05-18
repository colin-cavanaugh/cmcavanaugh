import React, { useEffect, useMemo, useState } from 'react'
import ExpensesList from './ExpenseList'
/*
🧾 Problem 14: Expense Tracker
🧩 Functionality:

Add new expense: Description, Amount, Category --

Display all expenses in a list

Show total at the bottom

Allow deleting an expense from the list

✅ Bonus:

Use useReducer instead of multiple useState calls
*/

interface Expense {
  id: string
  description: string
  amount: number
  category: string
}

const ExpenseTracker = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [expensesList, setExpensesList] = useState<Expense[]>([])

  const addNewExpense: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    setExpensesList(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        description,
        amount,
        category,
      },
    ])
    setDescription('')
    setAmount(0)
    setCategory('')
  }

  const deleteExpense = (id: string) => {
    setExpensesList(prev => prev.filter(exp => exp.id !== id))
  }

  const totalExpenses = useMemo(() => {
    return expensesList.reduce((sum, exp) => sum + exp.amount, 0)
  }, [expensesList])

  return (
    <div className='grid-item'>
      <form name='expense-form' onSubmit={addNewExpense}>
        <label htmlFor='newExpense'>New Expense</label>
        <input
          name='description'
          type='text'
          value={description}
          placeholder='enter description'
          onChange={e => setDescription(e.target.value)}
        />
        <input
          name='amount'
          type='number'
          value={amount}
          placeholder='enter amount'
          onChange={e => setAmount(Number(e.target.value))}
        />
        <input
          name='category'
          type='text'
          value={category}
          placeholder='enter category'
          onChange={e => setCategory(e.target.value)}
        />
        <button type='submit'>Add New Expense</button>
      </form>

      <label htmlFor='total'>Total Expenses</label>
      <ExpensesList expensesList={expensesList} deleteExpense={deleteExpense} />
      <div className='row-div'>
        <label htmlFor='totalExpenses'>Total</label>
        <p>{`$${totalExpenses}`}</p>
      </div>
    </div>
  )
}

export default ExpenseTracker

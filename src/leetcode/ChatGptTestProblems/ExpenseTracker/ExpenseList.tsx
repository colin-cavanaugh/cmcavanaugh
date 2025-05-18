import React, { FC } from 'react'
interface Expense {
  id: string
  description: string
  amount: number
  category: string
}
interface ExpenseListProps {
  expensesList: Expense[]
  deleteExpense: (id: string) => void
}

const ExpensesList: FC<ExpenseListProps> = ({ expensesList, deleteExpense }) => {
  return (
    <div className='grid-item'>
      {expensesList && expensesList?.length > 0
        ? expensesList?.map((exp, index) => (
            <div key={exp?.id}>
              <div className='row-div'>
                <p>{exp?.amount}</p>
                <p>{exp?.description}</p>
                <p>{exp?.category}</p>
              </div>
              <button name={`delete-button-${index}`} onClick={() => deleteExpense(exp?.id)}>
                Delete
              </button>
            </div>
          ))
        : null}
    </div>
  )
}

export default ExpensesList

/*
✅ Problem 9: Dynamic Todo List with Delete
Create a small todo manager:

Input to enter a task name

Button to "Add Task"

Display a list of tasks

Each task should have a delete (🗑️) button

Bonus:

Disallow empty or duplicate tasks

Use keyboard Enter to add a task
*/

import React, { useState } from 'react'
const ToDoManager = () => {
  const [error, setError] = useState<boolean>(false)
  const [todos, setTodos] = useState<string[] | []>([])
  const [newTask, setNewTask] = useState<string>('')

  const addTask: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (todos.includes(newTask)) {
      setError(true)
      return
    }
    setTodos(prev => [...prev, newTask])
    setError(false)
  }
  const deleteTask: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    const newTodos = todos.filter(item => item !== e.target.value)
    setTodos(newTodos)
    setError(false)
  }

  return (
    <div className='container'>
      <p className='header'>ToDo Manager</p>
      <form name='todoForm' onSubmit={addTask}>
        <input name='taskName' className='task-name' type='text' onChange={e => setNewTask(e.target.value)} />
        <button name='addTask' className='add-task' type='submit'>
          Add Task
        </button>
      </form>
      {error && <p className='error'>Duplicate task detected</p>}

      {todos.map(item => (
        <div className='todo-list'>
          <p>{item}</p>
          <button name='deleteTask' className='delete-task' type='submit' value={item} onClick={e => deleteTask(e)}>
            🗑️
          </button>
        </div>
      ))}
    </div>
  )
}

export default ToDoManager

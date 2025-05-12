/*
Problem 6: Dynamic Hobbies List
Create a form that:

Includes a text input to enter a hobby

Has a button labeled “Add Hobby”

Shows a list of added hobbies below the input

Bonus:

Prevent adding empty strings or duplicate hobbies.
*/
import React, { useState } from 'react'
const Problem6 = () => {
  const [hobbyList, setHobbyList] = useState<string[] | []>([])
  const [newHobby, setNewHobby] = useState<string>('')

  const addHobby: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    setHobbyList(prev => [...prev, newHobby])
  }

  return (
    <div className='container'>
      <form name='hobby-form' onSubmit={addHobby}>
        <input name='newHobby' onChange={e => setNewHobby(e.target.value)} />
        <button type='submit'>Add Hobby</button>
      </form>
      <p>Hobby List</p>
      {hobbyList.map(hobby => (
        <p>{hobby}</p>
      ))}
    </div>
  )
}

export default Problem6

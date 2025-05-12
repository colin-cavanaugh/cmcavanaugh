import React, { FormEventHandler, useState } from 'react'

/*
Problem 1
We are creating a small form that lets users select their favorite animal and enter a fun fact about it.

Please build a React component with:
- A dropdown (select) menu with the options: Dog, Cat, Bird
- A Textarea where users can write a fun fact
- A Submit button

When the form is submitted:
- Show the message: “You love [animal]! Fun fact: [fact]” below the form
- If either the dropdown or textarea is empty, show a validation message
*/
const Problem1 = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<string>('')
  const [funFact, setFunFact] = useState<string>('')
  const [submittedFact, setSubmittedFact] = useState<string>('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    setSubmittedFact(`You love ${selectedAnimal}! Fun fact: ${funFact}`)
  }
  return (
    <div className='problem-one-container'>
      <p className='header'>Problem 1</p>
      <label>Select your favorite animal</label>
      <form onSubmit={handleSubmit}>
        <select
          className='prob1-select'
          name='animalName'
          value={selectedAnimal || ''}
          onChange={event => setSelectedAnimal(event.target.value)}
          required
        >
          <option key={''}>{''}</option>
          <option key={'Dog'}>{'Dog'}</option>
          <option key={'Cat'}>{'Cat'}</option>
          <option key={'Bird'}>{'Bird'}</option>
        </select>
        <label className='fun-fact'>Fun Fact:</label>
        <textarea name='funFact' value={funFact || ''} onChange={event => setFunFact(event.target.value)} required />
        <button className='prob1-button'>Submit</button>
      </form>
      <p>{submittedFact}</p>
    </div>
  )
}

export default Problem1

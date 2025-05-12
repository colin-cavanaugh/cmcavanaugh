import React, { FormEventHandler, useState } from 'react'
import './App.css'

/*
We are building a forms website where users can submit tickets 
to Twitter Services for help. Please build a React component made 
up of a Form with 2 Radio Buttons, a Text Input Box, and a Button. 
The radio buttons should have two options: Red or Green. The Button 
should have the word Submit as the text. When a user clicks the 
button, I want the text in the input box to appear below the 
button in either red or green depending on the user’s selection. 
If no text is given, inform the user it is a required field. 
The green option should be selected by default. 
*/

const DEFAULT_COLOR = 'red'

const RedGreenForm = () => {
  const [selectedColorInput, setSelectedColorInput] = useState(DEFAULT_COLOR)
  const [textInput, setTextInput] = useState('')
  const [submittedColor, setSubmittedColor] = useState('')
  const [submittedText, setSubmittedText] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    setSubmittedText(textInput)
    setSubmittedColor(selectedColorInput)
    setTextInput('')
    setSelectedColorInput(DEFAULT_COLOR)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='red-green-form'>
        <div className='radio-container'>
          <input
            type='radio'
            name='red-radio'
            value={'red'}
            checked={selectedColorInput === 'red'}
            onChange={e => setSelectedColorInput(e.target.value)}
            className='radio-1'
          />
          <label htmlFor='red-radio'>Red</label>
        </div>
        <div className='radio-container'>
          <input
            type='radio'
            name='green-radio'
            value={'green'}
            onChange={e => setSelectedColorInput(e.target.value)}
            className='radio-2'
            checked={selectedColorInput === 'green'}
          />
          <label htmlFor='green-radio'>Green</label>
        </div>
        <input type='text' id='textInput' value={textInput} onChange={e => setTextInput(e.target.value)} required />
        <button type='submit'>Submit</button>
      </form>
      <p className={submittedColor === 'red' ? 'red-text' : 'green-text'}>{submittedText}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <RedGreenForm />
    </main>
  )
}

/**
 HW: Find a React based problem / algorithm in leetcode for Dan to solve
 */

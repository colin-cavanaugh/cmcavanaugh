import React, { useEffect, useState } from 'react'
/*
Problem 2
We are building a newsletter signup form.

Create a React component that includes:
- An email input field
- A checkbox labeled: “I agree to receive emails”
- A Submit button

Behavior:
- If the checkbox is not checked or the email field is empty, show an error message
- If both are valid, display “Thanks for signing up!” below the form
- Use HTML5 email validation and show a message if the email is invalid
*/

const Problem2 = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [displayText, setDisplayText] = useState<string>('')
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    setDisplayText(`Thanks for signing up! Email: ${email}`)
    setEmail('')
    setChecked(false)
  }
  return (
    <div>
      <p className='header'>Problem 2</p>
      <p className='header'>Newsletter Signup Form</p>
      <form className='prob2-form' onSubmit={handleSubmit}>
        <label>Email</label>
        <div></div>
        <input
          name='email'
          type='email'
          value={email}
          pattern='[^ @]*@[^ @]*'
          placeholder='enter your email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <div></div>
        <input type='checkbox' checked={checked} onChange={() => setChecked(prev => !prev)} required />
        <label>I agree to receive emails</label>
        <div></div>
        <button className='prob2-button'>Submit</button>
      </form>
      <p>{displayText}</p>
    </div>
  )
}

export default Problem2

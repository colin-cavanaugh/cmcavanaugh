// We are building a preferences form for a user profile page.

// Please build a React component that includes:
// - A text input for the user's name (required)
// - A group of 3 checkboxes labeled: "Email Notifications", "SMS Alerts", and "Push Notifications"
// - A Submit button

// Behavior:
// - On submit:
//   - If the name is empty, show an error message: "Name is required."
//   - If no preferences are selected, show: "Please select at least one preference."
//   - If valid, display below: “Thank you, [name]! You selected: [list of preferences]”

// The user should be able to uncheck/recheck options, and the message should update correctly on resubmit.
// ⚡ Bonus Challenge
// Try to use an object or array to manage checkbox states rather than individual useState calls per option. That’s a common real-world pattern.

import React, { useState } from 'react'
const Problem4 = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const [checkedOptions, setCheckedOptions] = useState<string[] | []>([])
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [display, setDisplay] = useState<string>('')
  const handleChecked = () => {
    setChecked(prev => !prev)
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (!username) {
      console.log('no username detected')
      setDisplay('Name is required')
    }
    setCheckedOptions([])
    setUsername('')
    const displayText = `Thank you, ${username}! You selected ${checkedOptions.map(option => option).join(',')}`
    setDisplay(displayText)
  }
  return (
    <div className='container'>
      <p className='header'>Problem 4</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={username}
          required
          autoComplete='off'
          onChange={e => setUsername(e.target.value)}
        />
        <input
          name='Email Notifications'
          value={'Email Notifications'}
          type='checkbox'
          checked={checkedOptions.includes('Email Notifications')}
          onChange={e => setCheckedOptions(prev => [...prev, e.target.value])}
        />
        <label htmlFor={'Email Notifications'}>{'Email Notifications'}</label>
        <input
          name='SMS Alerts'
          value={'SMS Alerts'}
          type='checkbox'
          checked={checkedOptions.includes('SMS Alerts')}
          onChange={e => setCheckedOptions(prev => [...prev, e.target.value])}
        />
        <label htmlFor={'SMS Alerts'}>{'SMS Alerts'}</label>
        <input
          name='Push Notifications'
          value={'Push Notifications'}
          type='checkbox'
          checked={checkedOptions.includes('Push Notifications')}
          onChange={e => setCheckedOptions(prev => [...prev, e.target.value])}
        />
        <label htmlFor={'Push Notifications'}>{'Push Notifications'}</label>
        <button>Submit</button>
      </form>
      <p>{display}</p>
      <p>{usernameError}</p>
    </div>
  )
}

export default Problem4

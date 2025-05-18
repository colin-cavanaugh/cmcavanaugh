/*
✅ Problem 11: Advanced Form Summary
Build a small form:

Name input

Age input (number)

Favorite color (dropdown: Red, Green, Blue)

Checkbox: "Subscribe to updates"

Behavior:

Show live preview below form like:

“Name: ___, Age: ___, Favorite Color: ___, Subscribed: Yes/No”

Update the preview in real time as inputs change


*/
import React, { useState } from 'react'
const AdvancedFormSummary = () => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>()
  const [favoriteColor, setFavoriteColor] = useState<string>('')
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)

  return (
    <div className='grid-item'>
      <p className='title'>Advanced Form Summary</p>
      <form name='advanced-form-summary' onSubmit={() => {}}>
        <label htmlFor='name'>Name</label>
        <input name='name' type='text' onChange={event => setName(event.target.value)} />
        <label htmlFor='age'>Age</label>
        <input name='age' type='number' onChange={event => setAge(Number(event.target.value))} />
        <select name='color' defaultValue={'Green'} onChange={event => setFavoriteColor(event.target.value)}>
          <option value={'Green'} style={{ color: 'rgb(25, 170, 88)' }}>
            Green
          </option>
          <option value={'Red'} style={{ color: 'rgb(227, 51, 51)' }}>
            Red
          </option>
          <option value={'Blue'} style={{ color: 'rgb(22, 38, 216)' }}>
            Blue
          </option>
          <option value={'Purple'} style={{ color: 'rgb(133, 40, 240)' }}>
            Purple
          </option>
          <option value={'Pink'} style={{ color: 'rgb(231, 48, 170)' }}>
            Pink
          </option>
        </select>
        <div className='checkbox-row'>
          <input
            id='subscribe'
            name='subscribe'
            type='checkbox'
            checked={isSubscribed}
            onChange={() => setIsSubscribed(prev => !prev)}
          />
          <label htmlFor='subscribe'>Subscribe to updates</label>
        </div>
      </form>
      <div className='live-preview'>
        {name && <p>{`Name: ${name}`}</p>}
        {age && <p>{`Age: ${age}`}</p>}
        {favoriteColor && <p>{`Favorite Color: ${favoriteColor}`}</p>}
        {isSubscribed ? <p>{`Subscribed: Yes`}</p> : <p>{`Subscribed: No`}</p>}
      </div>
    </div>
  )
}

export default AdvancedFormSummary

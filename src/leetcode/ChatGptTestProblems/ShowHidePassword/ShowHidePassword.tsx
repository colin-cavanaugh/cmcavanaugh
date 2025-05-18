/*
Problem 7: Show/Hide Password
Create a simple login form with:

An email input

A password input

A checkbox labeled “Show Password”

A submit button

Functionality:

Toggling the checkbox shows/hides the password input.

Submitting logs the email and password to the console (no validation needed).
*/

import { FC, FormEventHandler, useState } from 'react'
import './ShowHidePassword.css'

export const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  const login: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    console.log(form.get('email'))
    console.log(form.get('password'))
  }

  return (
    <form className='loginForm' onSubmit={login}>
      <label htmlFor='email'>Email</label>
      <input name='email' type='email' />
      <label htmlFor='password'>Password</label>
      <input name='password' type={showPassword ? 'text' : 'password'} />
      <span>
        <input
          name='showPassword'
          type='checkbox'
          checked={showPassword}
          onChange={e => setShowPassword(e.target.checked)}
        />
        <label htmlFor='showPassword'>Show Password</label>
      </span>
      <button type='submit'>Submit</button>
    </form>
  )
}

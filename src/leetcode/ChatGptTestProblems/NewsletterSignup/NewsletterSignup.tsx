/*
Problem 10: Newsletter Signup with Preferences and Persistence
🧩 Form Fields:
Name input

Email input

Checkbox: “I agree to the terms and conditions” (required)

Checkbox Group (multi-select, optional):

“I want product updates”

“I want marketing promos”

“I want educational content”

Dropdown: Newsletter frequency (Daily, Weekly, Monthly)

Submit button

✅ Validation:
✅ Name and Email required

✅ Email must be valid (contains "@")

✅ "I agree to terms" must be checked

✅ Frequency must be selected

💾 On Submit:
Save the data to localStorage (e.g., under key newsletterSignup)

✅Show a message like:

“Thanks, [name]! You're signed up for the [frequency] newsletter. Preferences: [list selected ones].”

🔄 Bonus Functionality:
When the component loads, if localStorage.newsletterSignup exists, pre-fill the form and show a message like:

“Welcome back, [name]! You’re already signed up.”
*/

import { FC, FormEventHandler, useState } from 'react'
import './NewsletterSignup.css'
import { useStoredNewsletter } from './useNewsletterFromStorage'

export const NewsletterSignup: FC = () => {
  const [submittedText, setSubmittedText] = useState<string>()

  const [storedNewsletter, setStoredNewsletter] = useStoredNewsletter()

  const signup: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const tosAgree = form.get('tosAgree')
    const frequency = form.get('frequency')
    const wantsProductUpdates = form.get('wantsProductUpdates')
    const wantsMarketingPromos = form.get('wantsMarketingPromos')
    const wantsEducationalContent = form.get('wantsEducationalContent')

    const preferences = [
      wantsProductUpdates && 'product updates',
      wantsMarketingPromos && 'marketing promos',
      wantsEducationalContent && 'educational content',
    ]
    const preferencesText = preferences.filter(pref => pref !== null).join(', ')
    setSubmittedText(
      `Thanks, ${name}! You're signed up for the ${frequency} newsletter. ${
        preferencesText && 'Preferences: ' + preferencesText
      }`
    )

    setStoredNewsletter({
      name: name as string,
      email: email as string,
      frequency: frequency as string,
      tosAgree: tosAgree === 'on',
      wantsProductUpdates: wantsProductUpdates === 'on',
      wantsMarketingPromos: wantsMarketingPromos === 'on',
      wantsEducationalContent: wantsEducationalContent === 'on',
    })
  }

  return (
    <div className='grid-item'>
      <p className='title'>Newsletter Signup</p>
      <form className='signupForm' onSubmit={signup}>
        <label htmlFor='name'>Your Name *</label>
        <input name='name' type='text' required defaultValue={storedNewsletter.name} />
        <label htmlFor='email'>Email *</label>
        <input name='email' type='email' required defaultValue={storedNewsletter.email} />
        <span>
          <input name='tosAgree' type='checkbox' required defaultChecked={storedNewsletter.tosAgree} />
          <label htmlFor='email'>
            I agree to{' '}
            <a href='https://google.com' target='_blank'>
              Terms and Services
            </a>
          </label>
        </span>
        <span>
          <input name='wantsProductUpdates' type='checkbox' defaultChecked={storedNewsletter.wantsProductUpdates} />
          <label htmlFor='wantsProductUpdates'>I want product updates</label>
        </span>
        <span>
          <input name='wantsMarketingPromos' type='checkbox' defaultChecked={storedNewsletter.wantsMarketingPromos} />
          <label htmlFor='wantsMarketingPromos'>I want marketing promos</label>
        </span>
        <span>
          <input
            name='wantsEducationalContent'
            type='checkbox'
            defaultChecked={storedNewsletter.wantsEducationalContent}
          />
          <label htmlFor='wantsEducationalContent'>I want educational content</label>
        </span>
        <label htmlFor='frequency'>Frequency</label>
        <select name='frequency' required defaultValue={storedNewsletter.frequency}>
          <option value='daily'>Daily</option>
          <option value='weekly'>Weekly</option>
          <option value='monthly'>Monthly</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
      {submittedText && <p>{submittedText}</p>}
    </div>
  )
}

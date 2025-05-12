import React from 'react'
import Problem1 from './Problem1'
import Problem2 from './Problem2'
import './test.css'
import Problem3 from './Problem3'
import Problem4 from './Problem4'
import Problem5 from './Problem5'
import { NewsletterSignup } from '../NewsletterSignup/NewsletterSignup'
import Problem6 from './Problem6'
import ToDoManager from './ToDoManager'
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

Problem 3
Create a small React form that allows a user to:
- Pick an emoji from a set of 3 (e.g. 🐶 🐱 🐭) using radio buttons
- Input a number (1–10) into a number input field
- Click a “Show” button

On click:
- Show the selected emoji repeated the given number of times (e.g. 🐶🐶🐶)
- If the number is missing or out of range (1–10), show an error
- The first emoji should be selected by default

*/

const TestProblems = () => {
  return (
    <div className='test-container'>
      <p className='test-paragraph'>Test Problems</p>
      {/* <Problem1 />
      <Problem2 />
      <Problem3 />
      <Problem4 /> */}
      {/* <Problem5 /> */}
      <NewsletterSignup />
      <Problem6 />
      <ToDoManager />
    </div>
  )
}

export default TestProblems

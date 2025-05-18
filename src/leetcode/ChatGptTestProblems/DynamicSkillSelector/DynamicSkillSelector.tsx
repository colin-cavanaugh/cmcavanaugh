/*
🔧 Problem 12: Dynamic Skill Selector
🧩 Form Fields:

Name input

Skill level selector (Beginner, Intermediate, Expert)

Based on skill level, dynamically render different checkboxes for skills:

Beginner: HTML, CSS

Intermediate: JavaScript, React

Expert: TypeScript, GraphQL, Redux

Submit button

✅ Validation:

Name is required

At least one skill must be selected

✅ On Submit:

Show message like:
“Thanks, [name]! You selected [skillLevel] level with skills: [selectedSkills].”
*/
import React, { useState } from 'react'
const DynamicSkillSelector = () => {
  const [name, setName] = useState<string>('')
  const [skillLevel, setSkillLevel] = useState<string>('')
  const [skills, setSkills] = useState<string[] | []>([])
  const [displayOutput, setDisplayOutput] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const submitForm: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (!skills?.length) {
      setError(true)
      return
    }
    setDisplayOutput(
      `Thanks, ${name}! You selected ${skillLevel} level with skills: ${skills.map(skill => skill).join(', ')}.`
    )
    setName('')
    setSkillLevel('')
    setSkills([])
    setError(false)
  }

  return (
    <div className='grid-item'>
      <p className='title'>Dynamic Skill Selector</p>
      <form name='dynamic-skil-selector' onSubmit={submitForm}>
        <label htmlFor='name'>Name</label>
        <input name='name' type='text' required onChange={e => setName(e.target.value)} />
        <label htmlFor='skillLevel'>Skill Level</label>
        <select name='skillLevel' value={skillLevel} onChange={e => setSkillLevel(e.target.value)}>
          <option value={''}>{'Select skill level'}</option>
          <option value={'Beginner'}>Beginner</option>
          <option value={'Intermediate'}>Intermediate</option>
          <option value={'Expert'}>Expert</option>
        </select>
        {skillLevel && <p>Select Skills</p>}
        {skillLevel === 'Beginner' && (
          <div>
            <label htmlFor='HTML'>HTML</label>
            <input
              name='html'
              type='checkbox'
              value={'HTML'}
              onChange={e => setSkills(prev => [...prev, e.target.value])}
            />
            <label htmlFor='CSS'>CSS</label>
            <input
              name='css'
              type='checkbox'
              value={'CSS'}
              onChange={e => setSkills(prev => [...prev, e.target.value])}
            />
          </div>
        )}
        {skillLevel === 'Intermediate' && (
          <div>
            <label htmlFor='Javascript'>Javascript</label>
            <input
              name='javascript'
              type='checkbox'
              value={'Javascript'}
              onChange={e => setSkills(prev => [...prev, e.target.value])}
            />
            <label htmlFor='React'>React</label>
            <input
              name='react'
              type='checkbox'
              value={'React'}
              onChange={e => setSkills(prev => [...prev, e.target.value])}
            />
          </div>
        )}
        {skillLevel === 'Expert' && (
          <div>
            <label htmlFor='TypeScript'>TypeScript</label>
            <input
              name='typescript'
              type='checkbox'
              value={'TypeScript'}
              onChange={e => setSkills(prev => [...prev, e.target.value])}
            />
            <label htmlFor='GraphQL'>GraphQL</label>
            <input
              name='graphql'
              type='checkbox'
              value={'GraphQL'}
              onChange={e => setSkills(prev => [...prev, e.target.value])}
            />
            <label htmlFor='Redux'>Redux</label>
            <input
              name='redux'
              type='checkbox'
              value={'Redux'}
              onChange={e => setSkills(prev => [...prev, e.target.value])}
            />
          </div>
        )}
        <button type='submit'>Submit</button>
      </form>
      {displayOutput && <p>{displayOutput}</p>}
      {error && <p className='error'>Please select at least one skill</p>}
    </div>
  )
}

export default DynamicSkillSelector

import React, { useState } from 'react'
import { useApplicationsFromStorage } from './useApplicationsFromStorage'
import { Application } from './types'
/*
🧠 Advanced Challenge: Job Application Tracker
Build a Job Application Tracker dashboard where users can:

✅ Core Features:
📝 Add New Job Application
Each application has:

companyName (string)

jobTitle (string)

status (select: “Applied”, “Interviewing”, “Offer”, “Rejected”)

applicationDate (date)

notes (optional string)

📄 View List of Applications
Renders in a table or card layout.

Sorted by applicationDate (newest first by default).

🔍 Filter + Search:
Filter by status.

Search by companyName or jobTitle.

🗑️ Delete or Edit an Application
Clicking an “Edit” button allows editing the fields inline or in a modal.

Deletion removes the entry.

💾 Bonus Features:
Persist state to localStorage and load on mount.

Color-code cards or rows based on status.

Responsive layout (stack cards or switch to table on mobile/desktop).

Use useReducer for state management.

Show application stats (e.g., count per status).


*/

const JobApplicationTracker = ({
  storeApplication,
}: {
  storeApplication: (event: React.FormEvent<HTMLFormElement>, newApplication: Application) => void
}) => {
  const [companyName, setCompanyName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [status, setStatus] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')

  const clearForm = () => {
    setCompanyName('')
    setJobTitle('')
    setStatus('')
    setDate('')
    setNotes('')
  }
  const submitApplication = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newApp = {
      id: crypto.randomUUID(),
      companyName,
      jobTitle,
      status,
      date,
      notes,
    }
    storeApplication(event, newApp)
    clearForm()
  }

  return (
    <div className='grid-item'>
      <p className='header'>Enter Job Information</p>
      <form name='job-app-form' onSubmit={submitApplication}>
        <label htmlFor='companyName'>Company Name</label>
        <input name='companyName' type='text' value={companyName} onChange={e => setCompanyName(e.target.value)} />
        <label htmlFor='jobTitle'>Job Title</label>
        <input name='jobTitle' type='text' value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
        <label htmlFor='status'>Application Status</label>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value={''}></option>
          <option value={'Applied'}>Applied</option>
          <option value={'Interviewing'}>Interviewing</option>
          <option value={'Offer'}>Offer</option>
          <option value={'Rejected'}>Rejected</option>
        </select>
        <label htmlFor='date'>Application Date</label>
        <input name='date' type='date' value={date} onChange={e => setDate(e.target.value)} />
        <label htmlFor='notes'>Optional Notes</label>
        <input name='notes' type='text' value={notes} onChange={e => setNotes(e.target.value)} />
        <button type='submit'>Submit Application</button>
      </form>
    </div>
  )
}

export default JobApplicationTracker

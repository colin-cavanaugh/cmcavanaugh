import React, { FC } from 'react'
import { Application } from './types'

interface ApplicationInfoProps {
  selectedApplication: Application
  handleClose: () => void
}

const ApplicationInfo: FC<ApplicationInfoProps> = ({ selectedApplication, handleClose }) => {
  const [companyName, setCompanyName] = React.useState<string>(selectedApplication?.companyName ?? '')
  const [jobTitle, setJobTitle] = React.useState<string>(selectedApplication?.jobTitle ?? '')
  const [status, setStatus] = React.useState<string>(selectedApplication?.status ?? '')
  const [date, setDate] = React.useState(selectedApplication?.date)
  const [notes, setNotes] = React.useState(selectedApplication?.notes)

  return (
    <div className='modal'>
      {[selectedApplication]?.length > 0
        ? [selectedApplication]?.map((app: Application) => {
            return (
              <div className='modal-content' key={app?.id}>
                <div className='row-div'>
                  <label htmlFor='companyName'>Company Name</label>
                  <input
                    name='editCompanyName'
                    className='edit-input'
                    type='text'
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                  />
                </div>
                <div className='row-div'>
                  <label htmlFor='jobTitle'>Job Title</label>
                  <input
                    name='editJobTitle'
                    className='edit-input'
                    type='text'
                    value={jobTitle}
                    onChange={e => setJobTitle(e.target.value)}
                  />
                </div>
                <div className='row-div'>
                  <label htmlFor='status'>Status</label>
                  <select className='edit-select' value={status} onChange={e => setStatus(e.target.value)}>
                    <option value={''}></option>
                    <option value={'Applied'}>Applied</option>
                    <option value={'Interviewing'}>Interviewing</option>
                    <option value={'Offer'}>Offer</option>
                    <option value={'Rejected'}>Rejected</option>
                  </select>
                </div>
                <div className='row-div'>
                  <label htmlFor='date'>Date</label>
                  <input
                    name='date'
                    className='edit-input'
                    type='date'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                  />
                </div>
                <div className='row-div'>
                  <label htmlFor='notes'>Notes</label>
                  <input
                    name='notes'
                    className='edit-input'
                    type='text'
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                  />
                </div>
              </div>
            )
          })
        : null}
      <div className='test-container'>
        <button className='close' onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default ApplicationInfo

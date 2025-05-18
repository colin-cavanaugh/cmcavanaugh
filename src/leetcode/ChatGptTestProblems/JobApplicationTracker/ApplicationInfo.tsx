import React, { FC } from 'react'
import { Application } from './types'

interface ApplicationInfoProps {
  selectedApplication: Application
  handleClose: () => void
}

const ApplicationInfo: FC<ApplicationInfoProps> = ({ selectedApplication, handleClose }) => {
  return (
    <div className='modal'>
      {[selectedApplication]?.length > 0
        ? [selectedApplication]?.map((app: Application) => {
            return (
              <div className='modal-content' key={app?.id}>
                <div className='row-div'>
                  <label htmlFor='companyName'>Company Name</label>
                  <p>{app?.companyName}</p>
                </div>
                <div className='row-div'>
                  <label htmlFor='jobTitle'>Job Title</label>
                  <p>{app?.jobTitle}</p>
                </div>
                <div className='row-div'>
                  <label htmlFor='status'>Status</label>
                  <p>{app?.status}</p>
                </div>
                <div className='row-div'>
                  <label htmlFor='date'>Date</label>
                  <p>{app?.date}</p>
                </div>
                <div className='row-div'>
                  <label htmlFor='notes'>Notes</label>
                  <p>{app?.notes}</p>
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

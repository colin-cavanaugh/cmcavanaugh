import { FC, useEffect, useMemo, useState } from 'react'
import { Application, ApplicationsProps } from './types'
import { useApplicationsFromStorage } from './useApplicationsFromStorage'
import ApplicationInfo from './ApplicationInfo'

const Applications = ({
  applications,
  deleteApplication,
}: {
  applications: Application[]
  deleteApplication: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null)

  const handleOpen = (app: Application) => {
    setSelectedApplication(app)
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    console.log('isOpen', isOpen)
    console.log('selectedApplication', selectedApplication)
  }, [isOpen, selectedApplication])
  return (
    <>
      <div className='grid-item'>
        <p className='header'>Applications</p>
        {applications && applications?.length > 0
          ? applications?.map((app: Application) => (
              <div key={app?.id} className='card' onClick={() => handleOpen(app)}>
                <div className='row-div'>
                  <p style={{ fontWeight: 'bold' }}>{app?.companyName}</p>
                  <p>{app?.status}</p>
                  <button onClick={event => deleteApplication(event, app?.id)}>Delete</button>
                </div>
              </div>
            ))
          : null}
      </div>
      {isOpen && selectedApplication && (
        <ApplicationInfo selectedApplication={selectedApplication} handleClose={handleClose} />
      )}
    </>
  )
}

export default Applications

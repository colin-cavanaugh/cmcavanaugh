import React, { useState } from 'react'
import { Application } from './types'
import ApplicationInfo from './ApplicationInfo'
import { useRenderStatusColor } from './useRenderStatusColor'

const Applications = ({
  applications,
  deleteApplication,
}: {
  applications: Application[]
  deleteApplication: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null)
  const [filteredApplications, setFilteredApplications] = useState<Application[] | []>(applications ?? [])
  const renderStatusColor = useRenderStatusColor()

  const handleOpen = (app: Application) => {
    setSelectedApplication(app)
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const searchAndFilter = (newValue: string) => {
    if (!newValue) {
      setFilteredApplications(applications) // or set to []
      return
    }

    const filtered =
      applications?.filter(
        app =>
          app.companyName?.toLowerCase().includes(newValue.toLowerCase()) ||
          app.jobTitle?.toLowerCase().includes(newValue.toLowerCase())
      ) || []
    setFilteredApplications(filtered)
  }

  return (
    <>
      <div className='grid-application-item' style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <p className='header'>Applications</p>
        <label htmlFor='searchApps'>Search</label>
        <input
          name='searchApps'
          className='search-apps'
          type='text'
          placeholder='Search by company or title'
          onChange={e => searchAndFilter(e.target.value)}
        />
        {filteredApplications && filteredApplications?.length > 0
          ? filteredApplications?.map((app: Application) => (
              <div
                key={app?.id}
                className='card'
                onClick={() => handleOpen(app)}
                style={{ '--border-color': renderStatusColor(app?.status) } as React.CSSProperties}
              >
                <div className='row-div'>
                  <p className='card-text' style={{ fontWeight: 'bold' }}>
                    {app?.companyName}
                  </p>
                  <p className='card-text'>{app?.jobTitle}</p>
                  <p className='card-text'>{app?.status}</p>
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

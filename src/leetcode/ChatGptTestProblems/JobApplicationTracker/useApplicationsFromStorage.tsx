import React, { FormEventHandler, useMemo, useState } from 'react'
import { Application } from './types'

export const useApplicationsFromStorage = () => {
  const [applications, setApplications] = useState<Application[]>(() => {
    const stored = window.localStorage.getItem('applications')
    return stored ? JSON.parse(stored) : []
  })
  // const displayApplications = useMemo(() => {
  //   return storedApps ? storedApps : []
  // }, [storedApps])
  const storeApplication = async (event: React.FormEvent<HTMLFormElement>, newApplication: Application) => {
    event.preventDefault()
    const updated = [...applications, newApplication]
    console.log('[handleSetApplications] updated', updated)
    window.localStorage.setItem('applications', JSON.stringify(updated))
    setApplications(updated)
  }
  const deleteApplication = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    event.stopPropagation()
    const updated = applications.filter((app: Application) => app.id !== id)
    localStorage.setItem('applications', JSON.stringify(updated))
    setApplications(updated)
  }
  return { applications, storeApplication, deleteApplication }
}

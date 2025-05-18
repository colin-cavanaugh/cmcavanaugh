import { SetStateAction } from 'react'

export interface Application {
  id: string
  companyName: string
  jobTitle: string
  status: string
  date: string
  notes: string
}
export interface JobAppProps {
  applications: Application[]
  setApplications: React.Dispatch<SetStateAction<Application[]>>
}

export interface ApplicationsProps {
  applications: Application[]
  deleteApplication: (id: string) => void
}

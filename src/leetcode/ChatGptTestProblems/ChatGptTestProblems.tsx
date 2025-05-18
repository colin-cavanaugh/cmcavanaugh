import { NewsletterSignup } from './NewsletterSignup/NewsletterSignup'
import HobbyList from './HobbyList/HobbyList'
import ToDoManager from './ToDoManager/ToDoManager'
import AdvancedFormSummary from './AdvancedFormSummary/AdvancedFormSummary'
import './ChatGptTestProblems.css'
import DynamicSkillSelector from './DynamicSkillSelector/DynamicSkillSelector'
import ExpenseTracker from './ExpenseTracker/ExpenseTracker'
import JobApplicationTracker from './JobApplicationTracker/JobApplicationTracker'
import Applications from './JobApplicationTracker/Applications'
import { useApplicationsFromStorage } from './JobApplicationTracker/useApplicationsFromStorage'

const ChatGptTestProblems = () => {
  const { applications, storeApplication, deleteApplication } = useApplicationsFromStorage()

  return (
    <div className='grid-container'>
      <div className='grid-header'>
        <p className='test-paragraph'>Test Problems</p>
      </div>
      <ExpenseTracker />
      <JobApplicationTracker storeApplication={storeApplication} />
      <NewsletterSignup />
      <HobbyList />
      <ToDoManager />
      {/* <AdvancedFormSummary /> */}
      <Applications applications={applications} deleteApplication={deleteApplication} />

      <DynamicSkillSelector />
    </div>
  )
}

export default ChatGptTestProblems

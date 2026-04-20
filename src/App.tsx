import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About_V2 from './components/About_V2'
import MatterUi from './components/MatterUi'
import PersonalLife from './components/PersonalLife'
import CaseStudy from './components/CaseStudy'
import NavBar from './components/NavBar'
import ErrorBoundary from './context/ErrorBoundary'
import ChatGptTestProblems from './leetcode/ChatGptTestProblems/ChatGptTestProblems'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<About_V2 />} />
        <Route path="casestudy" element={<CaseStudy />} />
        <Route path="matterui" element={<MatterUi />} />
        <Route path="personallife" element={<PersonalLife />} />
        <Route path="kiddo" element={<div>Kiddo</div>} />
        <Route
          path="leetcode"
          element={
            <ErrorBoundary>
              <ChatGptTestProblems />
            </ErrorBoundary>
          }
        />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

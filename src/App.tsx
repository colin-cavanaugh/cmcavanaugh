// React Router (v6+)

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import About_V2 from './components/About_V2'
import MatterUi from './components/MatterUi'
import PersonalLife from './components/PersonalLife'
import LeetCode from './leetcode/LeetCode'
import MenuSpeedDial from './components/MenuSpeedDial'
import ErrorBoundary from './context/ErrorBoundary'
import ChatGptTestProblems from './leetcode/ChatGptTestProblems/ChatGptTestProblems'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* App is the layout route */}
        {/* These are nested inside App's <Outlet /> */}
        <Route index element={<About_V2 />} />
        {/* <Route index element={<About />} /> */}
        <Route path="matterui" element={<MatterUi />} />
        <Route path="personallife" element={<PersonalLife />} />
        {/* <Route
          path='leetcode'
          element={
            <ErrorBoundary>
              <LeetCode />
            </ErrorBoundary>
          }
        /> */}
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
      <MenuSpeedDial />
    </BrowserRouter>
  )
}

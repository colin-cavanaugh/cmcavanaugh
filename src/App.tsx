// React Router (v6+)

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import MatterUi from './components/MatterUi'
import PersonalLife from './components/PersonalLife'
import LeetCode from './leetcode/LeetCode'
import MenuSpeedDial from './components/MenuSpeedDial'
import ErrorBoundary from './context/ErrorBoundary'
import TestProblems from './leetcode/aiTestProblems/AiTestProblems'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* App is the layout route */}
        {/* These are nested inside App's <Outlet /> */}
        <Route index element={<About />} /> {/* index = default at "/" */}
        <Route path='matterui' element={<MatterUi />} />
        <Route path='personallife' element={<PersonalLife />} />
        <Route
          path='leetcode'
          element={
            <ErrorBoundary>
              <LeetCode />
            </ErrorBoundary>
          }
        />
        <Route
          path='testproblems'
          element={
            <ErrorBoundary>
              <TestProblems />
            </ErrorBoundary>
          }
        />
        <Route path='*' element={<div>404 - Page Not Found</div>} />
      </Routes>
      <MenuSpeedDial />
    </BrowserRouter>
  )
}

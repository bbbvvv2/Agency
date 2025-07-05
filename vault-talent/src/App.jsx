import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import TalentGrid from './pages/TalentGrid'
import TalentProfile from './pages/TalentProfile'
import ResumeSubmit from './pages/ResumeSubmit'
import About from './pages/About'
import './index.css'

export default function App() {
  return (
    <Router>
      <nav className="bg-teal-dark text-cream p-4 flex space-x-4 justify-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/talent" className="hover:underline">Talent</Link>
        <Link to="/submit" className="hover:underline">Submit Resume</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talent" element={<TalentGrid />} />
        <Route path="/talent/:id" element={<TalentProfile />} />
        <Route path="/submit" element={<ResumeSubmit />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

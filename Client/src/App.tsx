import { Routes, Route, Link } from 'react-router-dom'
import Showcase from './components/ui/Showcase'
import './App.css'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Ishan CxConnect</h1>
        <p className="text-lg text-gray-600 mb-8">Welcome to your application</p>
        <div className="space-x-4">
          <Link 
            to="/ui" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View UI Components
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ui" element={<Showcase />} />
    </Routes>
  )
}

export default App

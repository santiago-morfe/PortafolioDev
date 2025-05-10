import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from '../src/components/Footer'
import NotFound from './pages/NotFound'
import TaskGeniusApi from './pages/projects/TaskGeniusApi'
import LeperPets from './pages/projects/LeperPets'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/projects/task-genius-api" element={<TaskGeniusApi />} />
          <Route path="/projects/leper-pets" element={<LeperPets />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

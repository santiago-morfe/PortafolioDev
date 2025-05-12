import Header from './components/Header'
import AboutMeSection from './components/AboutMeSection'
import ProjectsSection from './components/ProjectsSection'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-4 text-white ">
      <Header />
      <ProjectsSection />
      <AboutMeSection />
    </div>
  )
}

export default Home

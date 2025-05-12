import { MdFileDownload } from 'react-icons/md'
import { useEffect, useState } from 'react'

const HeaderScrolled = ({ isScrolled }: { isScrolled: boolean }) => {
  const [activeSection, setActiveSection] = useState('')
  const [sections, setSections] = useState<string[]>([])

  useEffect(() => {
    // Detectar automáticamente las secciones en el DOM
    const detectedSections = Array.from(
      document.querySelectorAll('[data-section]')
    ).map((el) => el.getAttribute('data-section') || '')

    setSections(detectedSections)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = ''
      sections.forEach((section) => {
        const element = document.querySelector(`[data-section="${section}"]`)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section
          }
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Ejecutar al montar para establecer la sección activa inicial

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  const scrollToSection = (id: string) => {
    const section = document.querySelector(`[data-section="${id}"]`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div
      className={`fixed inset-x-0 top-0 z-10 flex h-16 items-center justify-center bg-gray-800 px-4 shadow-lg transition-transform duration-300 ${
        isScrolled ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex items-center justify-center gap-5">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`transition-colors duration-100 ${
              activeSection === section
                ? 'font-bold text-teal-400'
                : 'text-white'
            } hover:text-teal-400`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
        <a
          href="/cv/CV_Jhonyer_santiago_pineda_marin.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-full bg-gray-700 px-3 py-1 text-center text-sm font-bold text-white shadow transition-transform hover:scale-105 hover:bg-gray-600 sm:text-base"
        >
          <span> CV</span>
          <MdFileDownload className="shrink-0" />
        </a>
      </nav>
    </div>
  )
}

export default HeaderScrolled

import { MdWork, MdPerson, MdFileDownload } from 'react-icons/md'

const NavigationButtons = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="mb-16 grid w-full max-w-md grid-cols-1 gap-3 sm:max-w-lg sm:grid-cols-3">
      <button
        onClick={() => scrollToSection('proyectos')}
        className="flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-center text-sm font-bold text-white shadow transition-transform hover:scale-105 hover:bg-gray-700 sm:text-base"
      >
        <MdWork className="shrink-0" /> <span>Ver Proyectos</span>
      </button>
      <button
        onClick={() => scrollToSection('sobremi')}
        className="flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-center text-sm font-bold text-white shadow transition-transform hover:scale-105 hover:bg-gray-700 sm:text-base"
      >
        <MdPerson className="shrink-0" /> <span>Sobre Mí</span>
      </button>
      <a
        href="/cv/CV_Jhonyer_santiago_pineda_marin.pdf"
        download
        className="flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-center text-sm font-bold text-white shadow transition-transform hover:scale-105 hover:bg-gray-700 sm:text-base"
      >
        <MdFileDownload className="shrink-0" /> <span>Descargar CV</span>
      </a>
    </nav>
  )
}

export default NavigationButtons

import React, { useState, useEffect } from 'react'
import {
  MdEmail,
  MdPhone,
  MdCode,
  MdWork,
  MdPerson,
  MdFileDownload
} from 'react-icons/md'
import { FiLinkedin } from 'react-icons/fi'

const Header = () => {
  const [typedName, setTypedName] = useState('')
  const fullName = 'Jhonyer Santiago Pineda'

  useEffect(() => {
    setTypedName('')
    let index = 0
    const interval = setInterval(() => {
      if (index >= fullName.length) {
        clearInterval(interval)
        return
      }

      setTypedName((prev) => {
        const currentChar = fullName[index]
        if (!currentChar && currentChar !== ' ') {
          return prev
        }

        const newName = prev + currentChar
        index++
        return newName
      })
    }, 150)

    return () => clearInterval(interval)
  }, [fullName])

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#sobremi')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-6 text-white sm:px-6 md:px-8 lg:px-12">
      {/* Nombre con animación de escritura */}
      <h1 className="mb-4 text-center text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        {typedName.split(' ').map((word, i) => (
          <span
            key={i}
            className={i % 2 === 0 ? 'text-teal-400' : 'text-white'}
          >
            {i > 0 ? ' ' : ''}
            {word}
          </span>
        ))}
        <span className="animate-pulse">|</span>
      </h1>

      {/* Título profesional */}
      <h2 className="mb-6 text-center text-lg font-light text-gray-300 sm:text-xl md:text-2xl lg:text-3xl">
        Desarrollador Web Full Stack
      </h2>

      {/* Información de contacto */}
      <div className="mb-6 grid w-full max-w-3xl grid-cols-1 gap-3 text-sm sm:grid-cols-2 md:text-base lg:grid-cols-4">
        <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 transition-transform hover:scale-105">
          <MdEmail className="shrink-0 text-teal-400" />
          <a
            href="mailto:santiago01morfe@gmail.com"
            className="truncate hover:text-teal-400"
          >
            santiago01morfe@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 transition-transform hover:scale-105">
          <MdPhone className="shrink-0 text-teal-400" />
          <a href="tel:3203754473" className="hover:text-teal-400">
            3203754473
          </a>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 transition-transform hover:scale-105">
          <MdCode className="shrink-0 text-teal-400" />
          <a
            href="https://github.com/santiago-morfe"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:text-teal-400"
          >
            Github.com/santiago-morfe
          </a>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 transition-transform hover:scale-105">
          <FiLinkedin className="shrink-0 text-teal-400" />
          <a
            href="https://linkedin.com/in/jhonyer-santiago-pineda-marin-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:text-teal-400"
          >
            linkedin.com
          </a>
        </div>
      </div>

      {/* Botones CTA */}
      <div className="mb-8 grid w-full max-w-md grid-cols-1 gap-3 sm:max-w-lg sm:grid-cols-3">
        <a
          href="#proyectos"
          className="flex items-center justify-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-center text-sm font-bold text-white shadow transition-transform hover:scale-105 hover:bg-teal-400 sm:text-base"
        >
          <MdWork className="shrink-0" /> <span>Ver Proyectos</span>
        </a>

        <a
          href="#sobremi"
          className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-center text-sm font-bold text-teal-600 shadow transition-transform hover:scale-105 hover:bg-gray-200 sm:text-base"
        >
          <MdPerson className="shrink-0" /> <span>Sobre Mí</span>
        </a>

        <a
          href="/cv/CV_Jhonyer_santiago_pineda_marin.pdf"
          download
          className="flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-center text-sm font-bold text-white shadow transition-transform hover:scale-105 hover:bg-gray-700 sm:text-base"
        >
          <MdFileDownload className="shrink-0" /> <span>Descargar CV</span>
        </a>
      </div>

      {/* Flecha de scroll */}
      <span
        className="absolute bottom-4 animate-bounce cursor-pointer text-2xl text-teal-400 sm:bottom-6 sm:text-3xl md:bottom-8"
        onClick={handleScrollToProjects}
        aria-label="Scroll hacia abajo"
      >
        ▼
      </span>
    </header>
  )
}

export default Header

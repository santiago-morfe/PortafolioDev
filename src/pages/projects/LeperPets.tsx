import React from 'react'

const LeperPets = () => {
  return (
    <div className="container m-0 flex min-h-screen min-w-full flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-4 text-white md:p-16">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="mb-4 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-4xl font-bold text-teal-400">
          LeperPets
        </h1>
        <p className="text-lg leading-relaxed text-gray-300">
          LeperPets es una aplicación web que reimagina los clásicos Tamagotchi,
          permitiendo a los usuarios cuidar y coleccionar criaturas virtuales
          directamente desde su navegador. Este proyecto combina tecnologías
          modernas como React, TypeScript y CSS modular para ofrecer una
          experiencia interactiva y atractiva.
        </p>
      </header>

      {/* Main Features Section */}
      <section className="mb-12">
        <h2 className="mb-6 border-b border-teal-500 pb-2 text-3xl font-bold text-teal-400">
          Características Principales
        </h2>

        <ul className="list-disc pl-6 text-gray-300">
          <li>
            Alimenta, juega y cuida de tus mascotas para mantenerlas felices y
            saludables.
          </li>
          <li>
            Cumple ciertas condiciones para desbloquear nuevas criaturas y
            expandir tu colección.
          </li>
          <li>
            Las mascotas tienen estados dinámicos que cambian con el tiempo,
            como hambre, felicidad y energía.
          </li>
          <li>Usa items consumibles para mejorar el estado de tus mascotas.</li>
          <li>Participa en mini juegos para interactuar con tus mascotas.</li>
        </ul>
      </section>

      {/* Technologies Section */}
      <section className="mb-12">
        <h2 className="mb-6 border-b border-teal-500 pb-2 text-3xl font-bold text-teal-400">
          Tecnologías Utilizadas
        </h2>

        <ul className="list-disc pl-6 text-gray-300">
          <li>React</li>
          <li>TypeScript</li>
          <li>CSS Modules</li>
          <li>Vite</li>
          <li>Netlify</li>
        </ul>
      </section>

      {/* Deployment Section */}
      <section className="mb-12">
        <h2 className="mb-6 border-b border-teal-500 pb-2 text-3xl font-bold text-teal-400">
          Despliegue
        </h2>

        <p className="text-gray-300">
          La aplicación está desplegada en{' '}
          <a
            href="https://leper-pets-beta.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline hover:text-cyan-400"
          >
            Netlify
          </a>
          , lo que permite un despliegue continuo y una experiencia de usuario
          fluida.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="mb-6 border-b border-teal-500 pb-2 text-3xl font-bold text-teal-400">
          Contacto
        </h2>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:santiago01morfe@gmail.com"
            className="flex items-center rounded bg-gray-700 px-4 py-2 transition-colors hover:bg-gray-600"
          >
            santiago01morfe@gmail.com
          </a>
          <a
            href="https://github.com/santiago-morfe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded bg-gray-700 px-4 py-2 transition-colors hover:bg-gray-600"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jhonyer-santiago-pineda-marin-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded bg-gray-700 px-4 py-2 transition-colors hover:bg-gray-600"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}

export default LeperPets

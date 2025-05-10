import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-700 bg-gray-900 py-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="mb-4 text-sm sm:mb-0 md:text-base">
            &copy; 2025 Mi Portafolio. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:justify-end sm:gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Términos
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

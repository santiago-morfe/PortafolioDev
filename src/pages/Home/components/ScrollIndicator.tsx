import React from 'react'

const ScrollIndicator = () => {
  const handleScrollTo = (id: string): void => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <span
      className="animate-bounce cursor-pointer text-2xl text-teal-400 sm:bottom-6 sm:text-3xl md:bottom-8"
      onClick={() => handleScrollTo('proyectos')}
      aria-label="Scroll hacia abajo"
    >
      ▼
    </span>
  )
}

export default ScrollIndicator

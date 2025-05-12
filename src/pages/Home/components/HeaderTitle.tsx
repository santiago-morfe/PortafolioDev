import { useState, useEffect } from 'react'

const HeaderTitle = () => {
  const [typedName, setTypedName] = useState('')
  const fullName = 'Jhonyer Santiago Pineda'

  useEffect(() => {
    setTypedName('')
    let letra = ''
    let index = 0
    const interval = setInterval(() => {
      if (index >= fullName.length) {
        clearInterval(interval)
        return
      }
      letra = fullName[index]
      setTypedName((prev) => prev + letra)
      index++
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <h1 className="mb-4 text-center text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
      {typedName.split(' ').map((word, i) => (
        <span
          key={i}
          className={`transition-colors duration-500 ${
            i % 2 === 0 ? 'text-teal-400' : 'text-white'
          }`}
        >
          {i > 0 ? ' ' : ''}
          {word}
        </span>
      ))}
      <span className="animate-pulse">|</span>
    </h1>
  )
}

export default HeaderTitle

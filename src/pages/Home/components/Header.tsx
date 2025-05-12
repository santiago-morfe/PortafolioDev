import { useState, useEffect } from 'react'
import HeaderTitle from './HeaderTitle'
import HeaderSubtitle from './HeaderSubtitle'
import ContactInfo from './ContactInfo'
import HeaderScrolled from '../../../components/HeaderScrolled'
import NavigationButtons from './NavigationButtons'
import ScrollIndicator from './ScrollIndicator'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8
      setIsScrolled(window.scrollY > triggerHeight)

      const sections = ['proyectos', 'sobremi', 'contacto']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.2 && rect.bottom >= 150) {
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <HeaderScrolled isScrolled={isScrolled} />
      <header className="inset-x-0 top-0 flex min-h-screen flex-col items-center justify-center bg-transparent px-3 transition-all">
        <HeaderTitle />
        <HeaderSubtitle />
        <ContactInfo />
        <NavigationButtons />
        <ScrollIndicator />
      </header>
    </>
  )
}

export default Header

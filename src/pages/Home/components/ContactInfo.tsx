import React from 'react'
import { MdEmail, MdPhone, MdCode } from 'react-icons/md'
import { FiLinkedin } from 'react-icons/fi'

const ContactInfo = () => (
  <div className="mb-4 mt-6 grid w-full max-w-3xl grid-cols-1 gap-3 text-sm sm:grid-cols-2 md:text-base lg:grid-cols-4">
    <a
      href="mailto:santiago01morfe@gmail.com"
      className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 transition-transform duration-300 hover:scale-110"
    >
      <MdEmail className="shrink-0 text-teal-400" />
      <span className="truncate hover:text-teal-400">
        santiago01morfe@gmail.com
      </span>
    </a>
    <a
      href="tel:3203754473"
      className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 transition-transform hover:scale-105"
    >
      <MdPhone className="shrink-0 text-teal-400" />
      <span className="hover:text-teal-400">3203754473</span>
    </a>
    <a
      href="https://github.com/santiago-morfe"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 transition-transform hover:scale-105"
    >
      <MdCode className="shrink-0 text-teal-400" />
      <span className="truncate hover:text-teal-400">
        Github.com/santiago-morfe
      </span>
    </a>
    <a
      href="https://linkedin.com/in/jhonyer-santiago-pineda-marin-dev"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-2 transition-transform hover:scale-105"
    >
      <FiLinkedin className="shrink-0 text-teal-400" />
      <span className="truncate hover:text-teal-400">linkedin.com</span>
    </a>
  </div>
)

export default ContactInfo

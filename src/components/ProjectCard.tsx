import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  technologies: string[]
  repoLink: string
  liveLink?: string
  projectLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies,
  repoLink,
  liveLink,
  projectLink
}) => {
  const [redirect, setRedirect] = useState(false)

  if (redirect && projectLink) {
    return <Navigate to={projectLink} replace />
  }

  const cardContent = (
    <div
      className="overflow-hidden rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-lg transition-transform hover:scale-[1.02]"
      onClick={() => projectLink && setRedirect(true)}
      style={{ cursor: projectLink ? 'pointer' : 'default' }}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-48 w-full rounded-lg object-cover transition-transform hover:scale-105"
        />
      </div>

      <h2 className="mt-3 text-xl font-bold text-teal-400">{title}</h2>

      <p className="mt-2 text-gray-300">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="rounded-full bg-gray-700 px-3 py-1 text-sm text-teal-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-600 hover:text-teal-400"
        >
          Repositorio
        </a>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-400"
          >
            Ver Proyecto
          </a>
        )}
      </div>
    </div>
  )

  return cardContent
}

export default ProjectCard

import ProjectCard from './ProjectCard'

const proyectos = [
  {
    image: '/task_genius_app_img.png',
    title: 'Task Genius App',
    description:
      'Task Genius App es una aplicación diseñada para ayudarte a gestionar tus tareas de manera eficiente y recibir consejos útiles de un "genio" virtual.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'CSS Modules',
      'Context API',
      'Netlify'
    ],
    repoLink: 'https://github.com/santiago-morfe/taskGeniusApp',
    liveLink: 'https://taskgeniusapp.netlify.app/'
  },
  {
    image: '/task_genius_api_img.png',
    title: 'Task Genius API',
    description:
      'Task Genius API es una API desarrollada en .NET 8 que proporciona funcionalidades avanzadas para la gestión de tareas y usuarios, incluyendo recomendaciones inteligentes para mejorar la productividad.',
    technologies: [
      '.NET 8',
      'Entity Framework Core',
      'JWT',
      'SQLite',
      'Railway'
    ],
    repoLink: 'https://github.com/santiago-morfe/taskGeniusApi',
    // liveLink: 'https://taskgeniusapi-production-5575.up.railway.app'
    projectLink: 'projects/task-genius-api'
  }
  // Puedes agregar más proyectos aquí
]

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="mx-auto my-12 max-w-5xl px-6 py-8">
      <h2 className="mb-8 text-3xl font-bold text-teal-500">
        {'< Proyectos />'}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto, idx) => (
          <ProjectCard key={idx} {...proyecto} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

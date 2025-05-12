import ProjectCard from './ProjectCard'
import proyectos from '../../../data/proyectos'

const ProjectsSection = () => {
  return (
    <section
      id="proyectos"
      className="mx-auto my-6 max-w-5xl px-6 py-24"
      data-section="proyectos"
    >
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

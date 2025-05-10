import { MdSchool, MdWork, MdCode, MdStar, MdGroups } from 'react-icons/md'
import { FaReact, FaUnity } from 'react-icons/fa'
import {
  SiDotnet,
  SiTypescript,
  SiPostgresql,
  SiGraphql,
  SiLaravel
} from 'react-icons/si'
import { DiJava, DiPython } from 'react-icons/di'

const AboutMeSection = () => {
  return (
    <section id="sobremi" className="mx-auto my-16 max-w-5xl px-6 py-12">
      <div className="mb-12 text-center">
        <h2 className="mb-4 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-4xl font-bold text-teal-400">
          {'< Sobre Mí />'}
        </h2>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-300">
          Desarrollador Full Stack con experiencia en múltiples tecnologías.
          Apasionado por integrar soluciones tecnológicas innovadoras en
          educación y otros campos. Creo firmemente que &quot;si puedes
          imaginarlo, puedes programarlo&quot;.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Educación */}
        <div className="rounded-xl border-l-4 border-teal-500 bg-gray-800 p-8">
          <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <MdSchool className="text-3xl text-teal-400" />
            <span>Formación Académica</span>
          </h3>
          <ul className="space-y-6">
            <li>
              <h4 className="text-lg font-medium text-teal-300">
                Ingeniería de Sistemas
              </h4>
              <p className="mb-2 text-gray-400">
                Universidad del Tolima, Ibagué (2024 - Actualidad)
              </p>
              <p className="mb-2 text-gray-300">3er semestre en curso</p>
              <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                <li>
                  Enfoque en análisis de sistemas y diseño de bases de datos
                </li>
                <li>Redes y conectividad</li>
              </ul>
            </li>
            <li>
              <h4 className="text-lg font-medium text-teal-300">
                Técnico en Programación
              </h4>
              <p className="mb-2 text-gray-400">ITFIP, Espinal (2021 - 2022)</p>
              <p className="mb-2 text-gray-300">4 semestres completados</p>
              <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                <li>Fundamentos de programación y desarrollo web</li>
                <li>Bases de datos relacionales</li>
              </ul>
            </li>
            <li>
              <h4 className="text-lg font-medium text-teal-300">
                Proyecto Académico: Hecoto
              </h4>
              <p className="text-gray-300">
                Plataforma que integra TIC y gamificación en educación,
                desarrollada con:
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="flex items-center rounded bg-gray-700 px-2 py-1 text-sm">
                  <SiDotnet className="mr-1" /> .NET
                </span>
                <span className="flex items-center rounded bg-gray-700 px-2 py-1 text-sm">
                  <SiPostgresql className="mr-1" /> PostgreSQL
                </span>
                <span className="flex items-center rounded bg-gray-700 px-2 py-1 text-sm">
                  <FaReact className="mr-1" /> React
                </span>
                <span className="flex items-center rounded bg-gray-700 px-2 py-1 text-sm">
                  <SiGraphql className="mr-1" /> GraphQL
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Experiencia */}
        <div className="rounded-xl border-l-4 border-teal-500 bg-gray-800 p-8">
          <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <MdWork className="text-3xl text-teal-400" />
            <span>{'< Experiencia />'}</span>
          </h3>
          <ul className="space-y-6">
            <li>
              <h4 className="text-lg font-medium text-teal-300">
                Innovamente Parque Interactivo
              </h4>
              <p className="mb-2 text-gray-400">2022 - 2023</p>
              <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                <li>
                  Lideré iniciativa para desarrollar app con realidad aumentada
                </li>
                <li>Supervisé equipo de pasantes de ingeniería de sistemas</li>
                <li>
                  Implementamos metodología Kanban para gestión del proyecto
                </li>
                <li>Desarrollamos demo funcional y propuesta técnica</li>
              </ul>
            </li>
            <li>
              <h4 className="text-lg font-medium text-teal-300">
                Desarrollador Freelance
              </h4>
              <p className="mb-2 text-gray-400">2021 - Actualidad</p>
              <ul className="ml-4 list-inside list-disc space-y-1 text-gray-300">
                <li>
                  Desarrollo de páginas web estáticas para negocios locales
                </li>
                <li>
                  Implementación de soluciones personalizadas para
                  emprendimientos
                </li>
                <li>Tecnologías principales: React, .NET, PostgreSQL</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Habilidades Técnicas */}
      <div className="mt-12 rounded-xl bg-gray-800 p-8">
        <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold text-white">
          <MdCode className="text-3xl text-teal-400" />
          <span>Habilidades Técnicas</span>
        </h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <SiDotnet className="mb-2 text-4xl text-purple-500" />
            <span className="text-gray-300">.NET</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <FaReact className="mb-2 text-4xl text-cyan-400" />
            <span className="text-gray-300">React</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <SiTypescript className="mb-2 text-4xl text-blue-500" />
            <span className="text-gray-300">TypeScript</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <SiPostgresql className="mb-2 text-4xl text-blue-400" />
            <span className="text-gray-300">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <DiJava className="mb-2 text-4xl text-red-500" />
            <span className="text-gray-300">Java</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <DiPython className="mb-2 text-4xl text-yellow-400" />
            <span className="text-gray-300">Python</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <SiLaravel className="mb-2 text-4xl text-red-400" />
            <span className="text-gray-300">Laravel</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <FaUnity className="mb-2 text-4xl text-gray-300" />
            <span className="text-gray-300">Unity</span>
          </div>
        </div>
      </div>

      {/* Intereses y Metodologías */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-gray-800 p-8">
          <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <MdStar className="text-3xl text-teal-400" />
            <span>Intereses Tecnológicos</span>
          </h3>
          <ul className="ml-4 list-inside list-disc space-y-3 text-gray-300">
            <li>Integración de IA en educación y salud</li>
            <li>Análisis de datos y visualización</li>
            <li>Realidad aumentada y experiencias interactivas</li>
            <li>Gamificación de procesos educativos</li>
            <li>Desarrollo de aplicaciones multiplataforma</li>
          </ul>
        </div>

        <div className="rounded-xl bg-gray-800 p-8">
          <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <MdGroups className="text-3xl text-teal-400" />
            <span>Metodologías y Despliegue</span>
          </h3>
          <ul className="ml-4 list-inside list-disc space-y-3 text-gray-300">
            <li>Experiencia en Kanban</li>
            <li>Despliegue en plataformas como Railway, Vercel y Netlify</li>
            <li>Desarrollo de APIs RESTful</li>
            <li>Integración de sistemas</li>
            <li>Prototipado rápido</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection

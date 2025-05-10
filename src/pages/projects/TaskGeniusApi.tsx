import {
  FaUser,
  FaTasks,
  FaLightbulb,
  FaLock,
  FaDatabase,
  FaCode,
  FaLayerGroup,
  FaServer,
  FaShieldAlt,
  FaExchangeAlt
} from 'react-icons/fa'
import {
  SiDotnet,
  SiSqlite,
  SiRailway,
  SiPostman,
  SiCryptpad,
  SiJsonwebtokens
} from 'react-icons/si'

const TaskGeniusApi = () => {
  return (
    <div className="container m-0 flex min-h-screen min-w-full flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-4 text-white md:p-16">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="mb-4 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-4xl font-bold text-teal-400">
          TaskGenius API
        </h1>
        <p className="text-lg leading-relaxed text-gray-300">
          API RESTful desarrollada en{' '}
          <span className="text-teal-400">.NET 8</span> para gestión de tareas
          inteligente con sistema de recomendaciones basado en IA. Arquitectura
          limpia, patrones de diseño sólidos y seguridad robusta implementada.
        </p>
      </header>

      {/* Main Features Section */}
      <section className="mb-12">
        <h2 className="mb-6 border-b border-teal-500 pb-2 text-3xl font-bold text-teal-400">
          <FaServer className="mr-3 inline" />
          Características Principales
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border-l-4 border-teal-500 bg-gray-800 p-6 transition-all hover:border-cyan-400">
            <div className="mb-3 flex items-center">
              <FaUser className="mr-3 text-xl text-teal-400" />
              <h3 className="text-xl font-semibold">Gestión de Usuarios</h3>
            </div>
            <p className="text-gray-300">
              Sistema completo de autenticación con registro, login, y
              recuperación de credenciales. Implementa{' '}
              <span className="text-teal-400">JWT (JSON Web Tokens)</span> con
              refresh tokens y <span className="text-teal-400">BCrypt</span>{' '}
              para hashing seguro de contraseñas.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-gray-800 p-6 transition-all hover:border-cyan-400">
            <div className="mb-3 flex items-center">
              <FaTasks className="mr-3 text-xl text-teal-400" />
              <h3 className="text-xl font-semibold">Gestión de Tareas</h3>
            </div>
            <p className="text-gray-300">
              CRUD completo para tareas con validación de datos, paginación
              (offset y cursor), filtrado avanzado y sistema de categorías.
              Patrón <span className="text-teal-400">Repository</span>y{' '}
              <span className="text-teal-400">Unit of Work</span> para manejo de
              datos.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-gray-800 p-6 transition-all hover:border-cyan-400">
            <div className="mb-3 flex items-center">
              <FaLightbulb className="mr-3 text-xl text-teal-400" />
              <h3 className="text-xl font-semibold">
                Sistema de Recomendaciones
              </h3>
            </div>
            <p className="text-gray-300">
              Motor de sugerencias inteligentes que analiza patrones de
              productividad, ofrece consejos personalizados y genera
              títulos/descripciones optimizadas usando algoritmos de{' '}
              <span className="text-teal-400">
                procesamiento de lenguaje natural
              </span>
              .
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-gray-800 p-6 transition-all hover:border-cyan-400">
            <div className="mb-3 flex items-center">
              <FaLock className="mr-3 text-xl text-teal-400" />
              <h3 className="text-xl font-semibold">Seguridad Avanzada</h3>
            </div>
            <p className="text-gray-300">
              <span className="text-teal-400">CORS</span> configurado,
              protección contra <span className="text-teal-400">CSRF</span>,
              rate limiting, sanitización de inputs, y validación exhaustiva de
              datos. Todos los endpoints protegidos con autorización basada en
              roles.
            </p>
          </div>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="mb-12">
        <h2 className="mb-6 border-b border-teal-500 pb-2 text-3xl font-bold text-teal-400">
          <FaLayerGroup className="mr-3 inline" />
          Arquitectura del Proyecto
        </h2>

        <div className="mb-6 rounded-lg bg-gray-800 p-6">
          <h3 className="mb-4 text-xl font-semibold text-teal-300">
            Estructura Modular
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="rounded bg-gray-700 p-4">
              <h4 className="mb-2 font-medium text-teal-400">Controllers</h4>
              <p className="text-sm text-gray-300">
                Manejan solicitudes HTTP, validan inputs y devuelven respuestas
              </p>
            </div>
            <div className="rounded bg-gray-700 p-4">
              <h4 className="mb-2 font-medium text-teal-400">Services</h4>
              <p className="text-sm text-gray-300">
                Contiene la lógica de negocio y coordinación entre componentes
              </p>
            </div>
            <div className="rounded bg-gray-700 p-4">
              <h4 className="mb-2 font-medium text-teal-400">Repositories</h4>
              <p className="text-sm text-gray-300">
                Abstracción del acceso a datos con Entity Framework Core
              </p>
            </div>
            <div className="rounded bg-gray-700 p-4">
              <h4 className="mb-2 font-medium text-teal-400">DTOs</h4>
              <p className="text-sm text-gray-300">
                Objetos para transferencia de datos entre capas
              </p>
            </div>
            <div className="rounded bg-gray-700 p-4">
              <h4 className="mb-2 font-medium text-teal-400">Models</h4>
              <p className="text-sm text-gray-300">
                Entidades del dominio y modelos de base de datos
              </p>
            </div>
            <div className="rounded bg-gray-700 p-4">
              <h4 className="mb-2 font-medium text-teal-400">Utilities</h4>
              <p className="text-sm text-gray-300">
                Helpers, extensiones y servicios comunes
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-6">
          <h3 className="mb-4 text-xl font-semibold text-teal-300">
            Flujo de Datos
          </h3>
          <div className="flex flex-col items-center">
            <div className="mb-4 w-full max-w-3xl rounded-lg bg-gray-700 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-teal-500 px-3 py-1 text-sm text-white">
                  1
                </span>
                <FaExchangeAlt className="mx-4 text-teal-400" />
                <span className="text-gray-300">Request HTTP</span>
                <FaExchangeAlt className="mx-4 text-teal-400" />
                <span className="rounded-full bg-teal-500 px-3 py-1 text-sm text-white">
                  2
                </span>
              </div>
              <p className="text-center text-sm text-gray-300">
                El controlador recibe la solicitud, valida los datos y delega a
                los servicios
              </p>
            </div>

            <div className="mb-4 w-full max-w-3xl rounded-lg bg-gray-700 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-teal-500 px-3 py-1 text-sm text-white">
                  3
                </span>
                <FaExchangeAlt className="mx-4 text-teal-400" />
                <span className="text-gray-300">Lógica de Negocio</span>
                <FaExchangeAlt className="mx-4 text-teal-400" />
                <span className="rounded-full bg-teal-500 px-3 py-1 text-sm text-white">
                  4
                </span>
              </div>
              <p className="text-center text-sm text-gray-300">
                El servicio aplica reglas de negocio y coordina con repositorios
              </p>
            </div>

            <div className="w-full max-w-3xl rounded-lg bg-gray-700 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-teal-500 px-3 py-1 text-sm text-white">
                  5
                </span>
                <FaExchangeAlt className="mx-4 text-teal-400" />
                <span className="text-gray-300">Persistencia</span>
                <FaExchangeAlt className="mx-4 text-teal-400" />
                <span className="rounded-full bg-teal-500 px-3 py-1 text-sm text-white">
                  6
                </span>
              </div>
              <p className="text-center text-sm text-gray-300">
                El repositorio maneja la interacción con la base de datos usando
                EF Core
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mb-12">
        <h2 className="mb-6 border-b border-teal-500 pb-2 text-3xl font-bold text-teal-400">
          <FaCode className="mr-3 inline" />
          Stack Tecnológico
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <SiDotnet className="mb-3 text-4xl text-teal-400" />
            <h3 className="text-center text-lg font-semibold">.NET 8</h3>
            <p className="text-center text-sm text-gray-300">
              Framework principal con mejoras en performance y minimal APIs
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <FaDatabase className="mb-3 text-4xl text-teal-400" />
            <h3 className="text-center text-lg font-semibold">
              Entity Framework Core 8
            </h3>
            <p className="text-center text-sm text-gray-300">
              ORM para acceso a datos con migraciones y LINQ
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <SiJsonwebtokens className="mb-3 text-4xl text-teal-400" />
            <h3 className="text-center text-lg font-semibold">
              JWT Authentication
            </h3>
            <p className="text-center text-sm text-gray-300">
              Autenticación stateless con tokens de acceso y refresh
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <SiSqlite className="mb-3 text-4xl text-teal-400" />
            <h3 className="text-center text-lg font-semibold">SQLite</h3>
            <p className="text-center text-sm text-gray-300">
              Base de datos relacional embebida para desarrollo
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <SiCryptpad className="mb-3 text-4xl text-teal-400" />
            <h3 className="text-center text-lg font-semibold">BCrypt.NET</h3>
            <p className="text-center text-sm text-gray-300">
              Hashing seguro de contraseñas con salt automático
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <SiRailway className="mb-3 text-4xl text-teal-400" />
            <h3 className="text-center text-lg font-semibold">Railway</h3>
            <p className="text-center text-sm text-gray-300">
              Plataforma de despliegue con CI/CD integrado
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <SiPostman className="mb-3 text-4xl text-teal-400" />
            <h3 className="text-center text-lg font-semibold">Postman</h3>
            <p className="text-center text-sm text-gray-300">
              Pruebas de API y documentación de endpoints
            </p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-gray-800 p-4">
            <FaShieldAlt className="mb-3 text-4xl text-teal-400" />
            <h3 className="text-center text-lg font-semibold">Seguridad</h3>
            <p className="text-center text-sm text-gray-300">
              CORS, CSRF protection, rate limiting
            </p>
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="mb-12">
        <h2 className="mb-6 border-b border-teal-500 pb-2 text-3xl font-bold text-teal-400">
          <FaCode className="mr-3 inline" />
          Endpoints Principales
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full overflow-hidden rounded-lg bg-gray-800">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-teal-300">
                  Método
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-teal-300">
                  Endpoint
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-teal-300">
                  Descripción
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-teal-300">
                  Autenticación
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="transition-colors hover:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-cyan-400">
                  POST
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  /auth/register
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  Registro de nuevo usuario
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  No requerida
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-cyan-400">
                  POST
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  /auth/login
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  Inicio de sesión (obtener JWT)
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  No requerida
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-cyan-400">
                  GET
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  /tasks
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  Obtener tareas del usuario (paginado)
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  JWT Requerido
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-cyan-400">
                  POST
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  /tasks
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  Crear nueva tarea
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  JWT Requerido
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-cyan-400">
                  GET
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  /genius/advice
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  Obtener recomendaciones personalizadas
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  JWT Requerido
                </td>
              </tr>
              <tr className="transition-colors hover:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-cyan-400">
                  POST
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  /genius/titleSuggestion
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">
                  Generar sugerencia de título para tarea
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                  JWT Requerido
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Deployment Section */}
      <section className="mb-12">
        <h2 className="mb-6 border-b border-teal-500 pb-2 text-3xl font-bold text-teal-400">
          <SiRailway className="mr-3 inline" />
          Despliegue y Documentación
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border-l-4 border-teal-500 bg-gray-800 p-6">
            <h3 className="mb-4 text-xl font-semibold text-teal-300">
              Despliegue en Producción
            </h3>
            <p className="mb-4 text-gray-300">
              La API está desplegada en{' '}
              <span className="text-teal-400">Railway</span>, una plataforma
              cloud que ofrece despliegue continuo, escalado automático y
              monitoreo integrado.
            </p>
            <a
              href="https://taskgeniusapi-production-5575.up.railway.app"
              className="inline-flex items-center rounded bg-teal-600 px-4 py-2 text-white transition-colors hover:bg-teal-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiRailway className="mr-2" />
              Acceder a la API en producción
            </a>
          </div>

          <div className="rounded-lg border-l-4 border-teal-500 bg-gray-800 p-6">
            <h3 className="mb-4 text-xl font-semibold text-teal-300">
              Documentación y Pruebas
            </h3>
            <p className="mb-4 text-gray-300">
              La colección de Postman está disponible para probar todos los
              endpoints, incluyendo ejemplos de requests y responses para cada
              operación.
            </p>
            <a
              href="#postman-collection"
              className="inline-flex items-center rounded bg-orange-600 px-4 py-2 text-white transition-colors hover:bg-orange-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiPostman className="mr-2" />
              Ver colección de Postman
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="mb-6 border-b border-teal-500 pb-2 text-3xl font-bold text-teal-400">
          <FaUser className="mr-3 inline" />
          Contacto
        </h2>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:santiago01morfe@gmail.com"
            className="flex items-center rounded bg-gray-700 px-4 py-2 transition-colors hover:bg-gray-600"
          >
            <span className="mr-2">✉️</span> santiago01morfe@gmail.com
          </a>
          <a
            href="https://github.com/santiago-morfe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded bg-gray-700 px-4 py-2 transition-colors hover:bg-gray-600"
          >
            <span className="mr-2">🐙</span> GitHub
          </a>
          <a
            href="https://linkedin.com/in/jhonyer-santiago-pineda-marin-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded bg-gray-700 px-4 py-2 transition-colors hover:bg-gray-600"
          >
            <span className="mr-2">🔗</span> LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}

export default TaskGeniusApi

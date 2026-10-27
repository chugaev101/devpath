import Welcome from "./components/Welcome"
import LearningDirection from "./components/LearningDirection"
import "./App.css"

const learningDirections = [
  {
    id: "1",
    name: "Java Backend",
    desc: "изучение Java и&nbsp;Spring Boot для разработки серверных приложений.",
  },
  {
    id: "2",
    name: "React + TypeScript",
    desc: "создание интерфейсов на&nbsp;React с&nbsp;типизацией TypeScript.",
  },
  {
    id: "3",
    name: "PostgreSQL",
    desc: "изучение PostgreSQL для хранения данных, написания SQL-запросов и проектирования баз данных.",
  },
]

function App() {
  return (
    <div className="main-wrap">
      <section className="center">
        <Welcome />
        <div>
          <h1>DevPath</h1>
          <p>
            Приложение для планирования и&nbsp;контроля процесса обучения.
          </p>
        </div>
      </section>

      <section className="areas">
        <h2 className="areas__title">Мои направления</h2>
        <ul className="areas__list">
          {learningDirections.map(({ id, name, desc }) =>
            <LearningDirection
              key={id}
              name={name}
              desc={desc}
            />
          )}
        </ul>
      </section>
    </div>
  )
}

export default App

import Welcome from "./components/Welcome"
import LearningDirection from "./components/LearningDirection"
import "./App.css"


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
          <LearningDirection
            name="Java Backend"
            desc="изучение Java и&nbsp;Spring Boot для разработки серверных приложений."
          />
          <LearningDirection
            name="React + TypeScript"
            desc="создание интерфейсов на&nbsp;React с&nbsp;типизацией TypeScript."
          />
        </ul>
      </section>
    </div>
  )
}

export default App

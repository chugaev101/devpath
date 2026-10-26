import Welcome from "./components/Welcome"
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
        </ul>
      </section>
    </div>
  )
}

export default App

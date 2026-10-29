import { useState, type ChangeEvent, type SubmitEvent } from "react"
import Welcome from "./components/Welcome"
import LearningDirection from "./components/LearningDirection"
import "./App.css"

const learningDirections = [
  {
    id: "1",
    name: "Java Backend",
    desc: "изучение Java и Spring Boot для разработки серверных приложений.",
  },
  {
    id: "2",
    name: "React + TypeScript",
    desc: "создание интерфейсов на React с типизацией TypeScript.",
  },
  {
    id: "3",
    name: "PostgreSQL",
    desc: "изучение PostgreSQL для хранения данных, написания SQL-запросов и проектирования баз данных.",
  },
]

type LearningDirection = {
  id: string;
  name: string;
  desc: string;
}

function App() {
  const [directions, setDirections] = useState<LearningDirection[]>(learningDirections);
  const [directionName, setDirectionName] = useState<string>("");
  const [directionDesc, setDirectionDesc] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === "direction-name") {
      setDirectionName(e.target.value);
    } else if (e.target.name === "direction-desc") {
      setDirectionDesc(e.target.value);
    }
  }

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (directionName.trim() && directionDesc.trim()) {
      setDirections((prevDirections) => [
        ...prevDirections,
        {
          id: crypto.randomUUID(),
          name: directionName,
          desc: directionDesc,
        }
      ]);

      setDirectionName("");
      setDirectionDesc("");
    }
  }

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
        <form className="areas__add-direction add-direction" onSubmit={handleSubmit}>
          <label className="add-direction__label">
            <span className="add-direction__title">название направления</span>
            <input className="add-direction__name" name="direction-name" type="text" value={directionName} onChange={handleChange} />
          </label>
          <label className="add-direction__label">
            <span className="add-direction__title">описание направления</span>
            <textarea className="add-direction__desc" name="direction-desc" value={directionDesc} onChange={handleChange}></textarea>
          </label>
          <button className="add-direction__submit" type="submit">Добавить</button>
        </form>
        <ul className="areas__list">
          {directions.map(({ id, name, desc }) =>
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

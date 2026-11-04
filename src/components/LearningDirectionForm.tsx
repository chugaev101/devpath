import { useState, type ChangeEvent, type SubmitEvent } from "react"

type DirectionFormProps = {
  onAddDirection: (name: string, desc: string) => void;
}

function LearningDirectionForm({ onAddDirection }: DirectionFormProps) {
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
      onAddDirection(directionName, directionDesc);

      setDirectionName("");
      setDirectionDesc("");
    }
  }

  return (
    <form className="add-direction" onSubmit={handleSubmit}>
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
  )
}

export default LearningDirectionForm
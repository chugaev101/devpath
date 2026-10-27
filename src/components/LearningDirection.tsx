type DirectionProps = {
  name: string;
  desc: string;
}

function LearningDirection({ name, desc }: DirectionProps) {
  return (
    <li className="areas__item">
      <h3 className="areas__name">{name}</h3>
      <span className="areas__desc">{desc}</span>
    </li>
  )
}

export default LearningDirection
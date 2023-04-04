import "./index.css"

const SkillsItem = (props) => {
  const { itemDetails } = props
  const { text, imgUrl } = itemDetails

  return (
    <li className="icons-container">
      <img src={imgUrl} alt={text} className="skills-icons" />
      <p className="skill-text">{text}</p>
    </li>
  )
}

export default SkillsItem

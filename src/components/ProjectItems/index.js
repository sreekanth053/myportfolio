import "./index.css"
import { HiOutlineExternalLink } from "react-icons/hi"

const ProjectItems = (props) => {
  const { itemDetails } = props
  const { projectName, imgUrl, projectLink, shortLink, techStack } = itemDetails

  return (
    <li className="projects-container">
      <p className="project-name">{projectName}</p>
      <div className="tech-stack-container">
        <span className="tech-stack-title">Technologies used </span>
        {techStack.map((item) => (
          <span className="tech-txt">{item}</span>
        ))}
      </div>
      <a
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        className="anchor-txt"
      >
        <button className="button" type="button">
          {shortLink}
          <HiOutlineExternalLink className="e-link" />
        </button>

        <img src={imgUrl} alt={projectName} className="project-img" />
      </a>
    </li>
  )
}

export default ProjectItems

import SkillsItem from "../SkillsItem"

import "./index.css"

const skillsLists = [
  {
    id: 1,
    text: "ReactJs",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672667014/react-icon_zjgmqi.png",
  },
  {
    id: 2,
    text: "JavaScript",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672667030/Js-icon_dzx5d3.png",
  },
  {
    id: 3,
    text: "HTML",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672667039/HTML-icon_h2zf9w.png",
  },
  {
    id: 4,
    text: "CSS",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672667048/Css-icon_eqzcbc.png",
  },
  {
    id: 5,
    text: "Bootstrap",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672667056/Bootstrap-icon_ljoug3.png",
  },
]

const backendLists = [
  {
    id: 1,
    text: "Python",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672729578/Python-icon_qcqf7t.png",
  },
  {
    id: 2,
    text: "NodeJs",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672854489/nodejs_lkvrda.png",
  },
  {
    id: 3,
    text: "ExpressJs",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672667082/Expressjs-icon_wwegcz.png",
  },
]

const otherSkills = [
  {
    id: 1,
    text: "Git",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672729216/Git-img_d96qpc.png",
  },
  {
    id: 2,
    text: "Command Line",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672855099/terminal_srsgfq.png",
  },
  {
    id: 3,
    text: "SQLite",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672729208/SQlite-img_rfjges.png",
  },
  {
    id: 4,
    text: "Figma",
    imgUrl:
      "https://res.cloudinary.com/dboknlydw/image/upload/v1672854629/figma_l8mxw4.png",
  },
]

const Skills = () => (
  <>
    <div className="empty-div" id="mySkills"></div>

    <div class="skills-container">
      <h1 className="home-name left-padding">
        My
        <span className="span-name"> Skills</span>
      </h1>

      <div className="skill-group">
        <div className="group-line"></div>
        <div className="items-group">
          <span className="frontend-txt">Frontend</span>

          <ul className="frontend-container">
            {skillsLists.map((item) => (
              <SkillsItem itemDetails={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>

      <div className="skill-group">
        <div className="group-line"></div>
        <div className="items-group">
          <span className="frontend-txt">Backend</span>

          <ul className="frontend-container">
            {backendLists.map((item) => (
              <SkillsItem itemDetails={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>

      <div className="skill-group">
        <div className="group-line"></div>
        <div className="items-group">
          <span className="frontend-txt">Others</span>

          <ul className="frontend-container">
            {otherSkills.map((item) => (
              <SkillsItem itemDetails={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </>
)

export default Skills

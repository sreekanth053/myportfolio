import ProjectItems from "../ProjectItems"

import "./index.css"

const projectsLists = [
  {
    id: 1,
    projectName: "Insta Share",
    imgUrl:
      "https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456611/insta_share_osmn5h.jpg",
    projectLink: "https://instacloneapp.ccbp.tech/",
    shortLink: "instacloneapp.ccbp.tech",
    techStack: ["React Js", "CSS", "Bootstrap"],
  },
  {
    id: 2,
    projectName: "Emoji Game App",
    imgUrl:
      "https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456389/emoji_game_vrv7xp.jpg",
    projectLink: "https://emotionicongame.ccbp.tech/",
    shortLink: "emotionicongame.ccbp.tech/",
    techStack: ["React Js", "CSS", "Bootstrap"],
  },
  {
    id: 3,
    projectName: "Todos App",
    imgUrl:
      "https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456389/todos_w6w7b4.jpg",
    projectLink: "https://emotionicongame.ccbp.tech/",
    shortLink: "emotionicongame.ccbp.tech/",
    techStack: ["HTML", "CSS", "Bootstrap", "Java Script"],
  },
  {
    id: 4,
    projectName: "Wikipedia Search Application",
    imgUrl:
      "https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456389/wps_shx0s8.jpg",
    projectLink: "https://sreekanthwsa.ccbp.tech/",
    shortLink: "sreekanthwsa.ccbp.tech",
    techStack: ["HTML", "CSS", "Bootstrap", "Java Script", "REST API Calls"],
  },
  {
    id: 5,
    projectName: "Food Munch Website",
    imgUrl:
      "https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456389/food_munch_u0gtba.jpg",
    projectLink: "https://sreekathfood.ccbp.tech/",
    shortLink: "sreekathfood.ccbp.tech",
    techStack: ["HTML", "CSS", "Bootstrap"],
  },
]

const MyProjects = () => (
  <>
    <div className="empty-div" id="myProjects"></div>
    <div className="my-projects-container">
      <h1 className="home-name left-padding">
        My
        <span className="span-name"> Projects</span>
      </h1>

      <ul className="projects-list-container">
        {projectsLists.map((item) => (
          <ProjectItems itemDetails={item} key={item.id} />
        ))}
      </ul>
    </div>
  </>
)

export default MyProjects

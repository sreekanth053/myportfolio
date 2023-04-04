import { Component } from "react"
import "./index.css"

class Header extends Component {
  state = { selectedName: "home" }

  elementClicked = (name) => {
    // const {selectedName} = this.state
    this.setState({ selectedName: name })
  }

  render() {
    const { selectedName } = this.state

    return (
      <div className="header-container">
        <h1 className="name">T Sreekanth</h1>
        <div className="header-list-items">
          <div>
            <a
              href="#home"
              className={
                selectedName === "home" ? "list-item active" : "list-item"
              }
              onClick={() => this.elementClicked("home")}
            >
              Home
            </a>
            <div
              className={selectedName === "home" ? "under-line" : "no-display"}
            ></div>
          </div>

          <div>
            <a
              href="#mySkills"
              className={
                selectedName === "mySkills" ? "list-item active" : "list-item"
              }
              onClick={() => this.elementClicked("mySkills")}
            >
              Skills
            </a>
            <div
              className={
                selectedName === "mySkills" ? "under-line" : "no-display"
              }
            ></div>
          </div>

          <div>
            <a
              href="#myProjects"
              className={
                selectedName === "myProjects" ? "list-item active" : "list-item"
              }
              onClick={() => this.elementClicked("myProjects")}
            >
              Projects
            </a>
            <div
              className={
                selectedName === "myProjects" ? "under-line" : "no-display"
              }
            ></div>
          </div>

          <div>
            <a
              href="#myCertificates"
              className={
                selectedName === "myCertificates"
                  ? "list-item active"
                  : "list-item"
              }
              onClick={() => this.elementClicked("myCertificates")}
            >
              Certifications
            </a>
            <div
              className={
                selectedName === "myCertificates" ? "under-line" : "no-display"
              }
            ></div>
          </div>

          <div>
            <a
              href="#myAchievements"
              className={
                selectedName === "myAchievements"
                  ? "list-item active"
                  : "list-item"
              }
              onClick={() => this.elementClicked("myAchievements")}
            >
              Achievements
            </a>
            <div
              className={
                selectedName === "myAchievements" ? "under-line" : "no-display"
              }
            ></div>
          </div>

          <div>
            <a
              href="#aboutMe"
              className={
                selectedName === "aboutMe" ? "list-item active" : "list-item"
              }
              onClick={() => this.elementClicked("aboutMe")}
            >
              About Me
            </a>
            <div
              className={
                selectedName === "aboutMe" ? "under-line" : "no-display"
              }
            ></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header

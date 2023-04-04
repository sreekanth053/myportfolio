import Header from "./components/Header"
import Home from "./components/Home"
import Skills from "./components/Skills"
import MyProjects from "./components/MyProjects"
import MyCertifications from "./components/MyCertifications"
import MyAchievements from "./components/MyAchievements"
import AboutMe from "./components/AboutMe"

import "./App.css"

const App = () => (
  <div className="portfolio-website-container">
    <Header />
    <div className="scroll-content">
      <Home />
      <Skills />
      <MyProjects />
      <MyCertifications />
      <MyAchievements />
      <AboutMe />
      <div className="main-footer">
        <p className="developed-text">Developed by Sreekanth</p>
      </div>
    </div>
  </div>
)

export default App

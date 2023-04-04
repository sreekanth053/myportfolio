import { BiDownload } from "react-icons/bi"

import "./index.css"

const Home = () => {
  const downloadClick = () => {
    window.open(
      "https://drive.google.com/file/d/1P5o-mCdKAVcrYY9wClQ8Zwjk8G7HH8j9/view?usp=share_link",
      "_blank"
    )
  }

  return (
    <div className="home-container" id="home">
      <div className="name-container">
        <h1 className="home-name">
        Tirunagaram 
          <span className="span-name"> Sreekanth</span>
        </h1>
        <p className="home-job-role">Full-Stack Developer</p>
        <button className="download-btn" onClick={downloadClick}>
          Download CV
          <BiDownload className="download-icon" size="17" />
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/dt0iyjopp/image/upload/v1680426175/my_photo_boxpbf.jpg"
        alt="Sreekanth img"
        className="img"
      />
    </div>
  )
}

export default Home

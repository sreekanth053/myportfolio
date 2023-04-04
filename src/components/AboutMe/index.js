import "./index.css"

const AboutMe = () => (
  <>
    <div className="empty-div" id="aboutMe"></div>

    <div>
      <h1 className="home-name left-padding">
        About
        <span className="span-name"> Me</span>
      </h1>

      <div className="aboutme-container">
        <div className="aboutme-content-container">
          <p className="aboutme-content">
            I'm an aspiring Full Stack Developer.
          </p>
          <p className="aboutme-content">I have intrest in Programming.</p>
          <p className="aboutme-content">
            I took extensive training on Full Stack Development Course for{" "}
            <br />
            more than 8 months at the institute 'NxtWave Disruptive
            Technologies.'
          </p>
          <p className="aboutme-content">
            I have developed projects in Frontend using HTML, CSS, <br />
            Bootstrap, Javascript, React.js and Backend projects using Node.js
            (REST APIs) <br />
            included SQLite database as well.
          </p>
          <p className="aboutme-content">
            I have hosted my projects in third-party hosting services.
          </p>
          <p className="aboutme-content">
            I have experience with using the Figma tool for web development
            purposes.
          </p>
        </div>
        <div className="social-link-container">
          <div className="social-img-container">
            <a
              href="https://www.linkedin.com/in/tirunagaram-sreekanth-t28s12051998/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dboknlydw/image/upload/v1672755097/Linkedin-img_voycln.png"
                alt="Linkedin"
                className="social-img"
              />
            </a>

            <a
              href="https://github.com/sreekanth053"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dboknlydw/image/upload/v1672755109/Github_tr9a8x.png"
                alt="Github"
                className="social-img"
              />
            </a>
          </div>

          <div>
            <p className="contact-text">Contact Me</p>
            <p className="email-txt">sreekanth.t053@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default AboutMe

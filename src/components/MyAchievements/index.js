import "./index.css"

const MyAchievements = () => (
  <>
    <div className="empty-div" id="myAchievements"></div>

    <div className="my-achievements">
      <h1 className="home-name left-padding">
        My
        <span className="span-name"> Achievements</span>
      </h1>

      <div className="idp-content">
        <img
          src="https://res.cloudinary.com/dt0iyjopp/image/upload/v1680456389/idp1_snexzs.jpg"
          alt="Python IDP Test"
          className="achievements-img"
        />
        <div className="idp-description-container">
          <p className="idp-qmark">What is Python IDP Exam?</p>
          <div className="idp-description">
            <p>
              Phython IDP Exam is conducted by
              <a
                href="https://www.ccbp.in/"
                target="_blank"
                rel="noreferrer"
                className="nxt-website"
              >
                NxtWave™ Disruptive Technologies
              </a>
              .
            </p>
            <p>
              This exam contains complex logical questions to be solved in
              Python programming language.
            </p>
            <p>
              There are two levels in the exam, level-1 and level-2 based on the
              complexity of the logical problems. Level-2 has the most complex
              logical problem.
            </p>
            <p>
              I have solved all the logical questions in Python IDP exam and got
              100/100 marks.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default MyAchievements

import "./main.css";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Main = () => {
  const totalDaysOfClass = 236;
  const [daysPresent, setDaysPresent] = useState(40);

  const percentage = (daysPresent / totalDaysOfClass) * 100;

  const handleMarkAttendance = () => {
    if (daysPresent < totalDaysOfClass) {
      setDaysPresent(daysPresent + 1);
    }
  };
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <div className="main__greeting">
            <h1>Mark your attendance!!</h1>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">RA2011XXXX</p>
            </div>
          </div>
          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Class:12</p>
            </div>
          </div>
          <div className="card">
            <div className="card_inner">
              <p className="text-primary-p">Date:29-08-2023</p>
            </div>
          </div>
        </div>
        <div className="main__cards2">
          <div className="main__chart">
            <div className="cardbig">
              <div className="card_inner card_b">
                <div style={{ width: 150, height: 150 }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage.toFixed(2)}%`}
                    styles={buildStyles({
                      textSize: "12px",
                      pathColor: `#3ab54a`,
                      textColor: "#292f45",
                      trailColor: "#292f45",
                      strokeLinecap: "round",
                    })}
                  />
                </div>
              </div>
              <div className="button-container">
                <button
                  id="button"
                  type="button"
                  onClick={handleMarkAttendance}
                >
                  MARK ATTENDANCE
                </button>
              </div>
            </div>

            <div className="cardbig">
              <div className="card__inner2">
                <img src="user.png" />

                <p className="text-primary-p text-primary-p1">
                  UserName
                  <br />
                  Section: A<br />
                  Stream: Science
                  <br />
                  No. of days present:{daysPresent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

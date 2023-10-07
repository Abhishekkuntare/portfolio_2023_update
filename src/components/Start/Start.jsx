import React from "react";
import "./Start.css";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";

const Start = () => {
  return (
    <Fade left cascade>
      <div id="start" className="start">
        <div>
          <div className="start_circle" />
          <div className="star_vl" />
        </div>
        <Fade left cascade>
          <div className="start_txt">
            <h3>Start {"/>"}</h3>
            <div>
              <h1 className="start_intro">
                Hi, my name is{" "}
                <span className="start_name">Abhishek Kuntare</span>{" "}
              </h1>
              <h1 className="start_intro">
                i <span className="start_key1">design</span> and{" "}
                <span className="start_key2">DeVelOP</span>{" "}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "webapps 💻",
                    1000,
                    "ui/ux 💅",
                    1000,
                    "mobile apps 🧑‍💻",
                    1000,
                    "websites",
                    1000,
                    "things",
                    1000,
                  ]}
                />
              </h1>

              <p className="start_para">Let me show You... </p>
            </div>
          </div>
        </Fade>
      </div>
    </Fade>
  );
};

export default Start;

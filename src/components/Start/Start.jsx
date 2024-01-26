import React, { useRef } from "react";
import "./Start.css";
import Typical from "react-typical";
// import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

const Start = () => {
  const ref = useRef(null);
  return (
    // <Fade bottom cascade>
    <motion.div ref={ref} id="start" className="start">
      <div>
        <div className="start_circle" />
        <div className="star_vl" />
      </div>
      {/* <Fade cascade> */}
      <div className="start_txt">
        <h3>Start {"/>"}</h3>
        <h3>drag the name if you can? </h3>
        <div>
          <motion.h1
            dragConstraints={ref}
            whileDrag={{ scale: 1.1 }}
            drag
            dragElastic={1}
            // dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            className="start_intro"
          >
            Hi, my name is <span className="start_name">Abhishek Kuntare</span>{" "}
          </motion.h1>
          <h1 className="start_intro">
            i{" "}
            <span drag className="start_key1">
              design
            </span>{" "}
            and{" "}
            <motion.span drag className="start_key2">
              DeVelOP
            </motion.span>{" "}
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
      {/* </Fade> */}
    </motion.div>
    // </Fade>
  );
};

export default Start;

import React from "react";
import { BsArrowUp } from "react-icons/bs";
import sound from "../assets/sound.mp3";
const TopDown = () => {
  const handleSound = () => {
    new Audio(sound).play();
  };

  return (
    <a onClick={() => handleSound()} href="#">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          borderRadius: 7,
          border: "1px solid white",
          position: "fixed",
          right: 10,
          bottom: 10,
          zIndex: 10000,
        }}
      >
        <BsArrowUp color="blue" width={100} height={100} />
      </div>
    </a>
  );
};

export default TopDown;

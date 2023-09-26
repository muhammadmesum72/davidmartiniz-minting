import React, { useState } from "react";
import LightRoom from "../assets/light room.jpg";
import DarkRoom from "../assets/dark room.jpg";
import { AiOutlineTwitter } from "react-icons/ai";
import MoonImg from "../assets/moon.png";
import DayImg from "../assets/day.png";
import WhitePaperIcon from "../assets/white-paper.png";

const Home = () => {
  const [isLightSwitch, setIsLightSwitch] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleSwitch = () => setIsLightSwitch(!isLightSwitch);

  return (
    <>
      <div className="w-full">
        {isLightSwitch ? (
          <div>
            <div className="absolute top-0 w-full flex items-center justify-around mt-12">
              <a href="https://docs.communiteez.xyz" target="_blank">
                <img src={WhitePaperIcon} alt="" className="w-16" />
              </a>
              <a href="https://twitter.com/communiteez" target="_blank">
                <AiOutlineTwitter className="text-5xl cursor-pointer text-blue-500 " />
              </a>
            </div>
            <img src={LightRoom} alt="" className="h-full w-full duration-500 ease-in-out" />
          </div>
        ) : (
            <div>
                <img src={DarkRoom} alt="" className="h-full w-full duration-500 ease-in-out" />
            </div>
        )}
      </div>

      <div
        onClick={() => setIsLightSwitch(!isLightSwitch)}
        className="absolute bottom-12 left-0 right-0 text-center mx-auto w-fit"
      >
        {/* <img src={} alt="" /> */}
        <div
          className={` w-24 h-12 flex items-center  rounded-full p-1 cursor-pointer ${
            isLightSwitch ? "bg-gray-700" : "bg-gray-700"
          }`}
        >
          {/* switch  */}

          <div
            className={`bg-white w-9 h-9 rounded-full shadow-md transform duration-300 ease-in-out ${
              isLightSwitch ? "transform translate-x-12 bg-transparent" : null
            }`}
          >
            {isLightSwitch ? (
              <img src={DayImg} alt="" />
            ) : (
              <img src={MoonImg} alt="" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

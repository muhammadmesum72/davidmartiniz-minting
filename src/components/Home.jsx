import React, { useState } from "react";
import LightRoom from "../assets/light room.jpg";
import DarkRoom from "../assets/dark room.jpg";
import MoonImg from "../assets/moon.png";
import DayImg from "../assets/day.png";
import WhitePaperIcon from "../assets/white paper.png";
import Discord from "../assets/discord.png";
import Twitter from "../assets/twitter.png";

const Home = () => {
  const [isLightSwitch, setIsLightSwitch] = useState(false);

  return (
    <>
      <div className="w-full">
        {isLightSwitch ? (
          <div className="relative md:static">
            <img
              src={LightRoom}
              alt="Room"
              className="relative h-full w-full duration-500 ease-in-out"
            />

            <div className="absolute top-[25%] md:top-[26%] w-2/3 md:w-1/2 mx-auto left-0 right-0 flex items-center justify-around px-12">
              <a href="https://docs.communiteez.xyz" target="_blank">
                <img src={WhitePaperIcon} alt="WhitePaper" className="w-7 md:w-20 " />
              </a>
              <a href="https://twitter.com/communiteez" target="_blank">
                <img src={Twitter} alt="Twitter" className="w-7 md:w-20 " />
              </a>
              <a href="#" target="_blank">
                <img src={Discord} alt="Discord" className="w-7 md:w-20 " />
              </a>
            </div>
          </div>
        ) : (
          <div>
            <img
              src={DarkRoom}
              alt="Room"
              className="h-full w-full duration-500 ease-in-out"
            />
          </div>
        )}
      </div>

      <div
        onClick={() => setIsLightSwitch(!isLightSwitch)}
        className="absolute bottom-12 left-0 right-0 text-center mx-auto w-fit"
      >
        <div
          className={` w-32 h-16 flex items-center  rounded-full p-2 cursor-pointer ${
            isLightSwitch ? "bg-gray-700" : "bg-gray-700"
          }`}
        >
          {/* switch  */}

          <div
            className={`bg-white w-12 h-12 rounded-full shadow-md transform duration-300 ease-in-out ${
              isLightSwitch ? "transform translate-x-16 bg-transparent" : null
            }`}
          >
            {isLightSwitch ? (
              <img src={DayImg} alt="LightMode" />
            ) : (
              <img src={MoonImg} alt="DarkMode" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

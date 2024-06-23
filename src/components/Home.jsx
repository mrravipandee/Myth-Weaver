import React from "react";
import img from "../assets/img/home.png";
import book from "../assets/img/open-book.jpg";
import { FaPlay } from "react-icons/fa";
import Button from "../layouts/Button";
import PlayButton from "../layouts/PlayButton";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#fbeffe] to-[#e5f1fd] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
          Create a story within seconds with AI
        </h1>
        <p className="text-textColor">
          Just put the few words, related of that you well get short story in 60
          words.
        </p>

        <div className=" flex flex-row gap-6">
          <Button title="CREATE" />
          <PlayButton title="PLAY DEMO" />
        </div>
      </div>

      <div className="relative">
        <img src={book} alt="img" className="h-[25rem] rounded-md" />

        <div className="absolute bg-brightColor p-5 bottom-[11rem] left-[17rem] rounded-full flex items-center justify-center">
        <FaPlay size={20} className="text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Home;

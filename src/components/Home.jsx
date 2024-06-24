import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../layouts/Button";
import PlayButton from "../layouts/PlayButton";

const Home = () => {
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  const handleLink = () => {
    navigate("/ai-story-generator");
  };

  const handlePlayDemo = () => {
    const iframe = iframeRef.current;
    const src = "https://www.youtube.com/embed/q8DvhsrqNWM?autoplay=1";
    iframe.src = src;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#fbeffe] to-[#e5f1fd] ">
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
          Create a story within seconds with AI
        </h1>
        <p className="text-textColor text-center lg:text-left">
          Just put the few words, related to that you will get a short story in 60 words.
        </p>

        <div className="flex flex-row gap-6 w-screen justify-center lg:justify-start">
          <a href="/ai-story-generator">
            <Button title="CREATE" />
          </a>
          <PlayButton title="PLAY DEMO" onClick={handlePlayDemo} />
        </div>
      </div>

      <div>
        <iframe
          ref={iframeRef}
          className="rounded-md h-[18rem] w-[34rem] lg:h-[20rem] lg:w-[38rem]"
          width="560"
          height="315"
          title="YouTube video player"
          src="https://www.youtube.com/embed/q8DvhsrqNWM"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;

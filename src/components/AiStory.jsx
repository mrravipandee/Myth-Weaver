import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Storys from "./Storys";
import { WiStars } from "react-icons/wi";
import Button from "../layouts/Button";

const AiStory = () => {
  const [story, setStory] = useState(false);

  const handleStory = () => {};

  return (
    <div>
      <Navbar />
      <div>
        <div className="min-h-[60vh] max-h-[70vh] lg:min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#fbeffe] to-[#e5f1fd]">
          <div className="p-5 px-5 mt-10 backdrop-blur-md bg-white/10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-center rounded-xl mx-10 lg:my-10">
            <div className="flex items-center w-full">
              <h2 className="flex items-center text-textColor text-md border px-2 rounded border-gray-200 bg-gray-200">
                <WiStars size={22} className="mr-2" />
                Enter the Prompts
              </h2>
            </div>
            <textarea
              className="w-[25rem] m-4 h-[8rem] p-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none"
              placeholder="Prompt should be in keywords. Enter 4 to 6 words to generate the best AI story."
            ></textarea>
            <div className="">
              <Button title="Generate" onClick={handleStory} />
            </div>
          </div>
        </div>
      </div>
      <Storys />
      <hr class="border-1.5 border-gray-300" />
      <Footer />
    </div>
  );
};

export default AiStory;

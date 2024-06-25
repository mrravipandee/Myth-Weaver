import React, { useState } from "react";
import { IoCopy } from "react-icons/io5";

const Storys = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: "Svjatoslav Torn",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, consequatur sequi. Facilis officia quisquam ex earum, non blanditiis minus? Illum, harum animi ullam dolore quo amet, deleniti ipsa ducimus porro fugiat, eius expedita quibusdam accusantium quis similique qui ea! Reiciendis laborum odio et voluptatum aliquid vitae dolores officia inventore laboriosam dolore facere sapiente, assumenda eveniet mollitia corrupti hic, facilis quo?",
      side: "left",
    },
    {
      id: 2,
      title: "Svetlana Torn",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt commodi, ipsum distinctio fuga nihil et eum labore doloremque cupiditate architecto iusto temporibus deserunt animi maxime voluptates sequi ipsa cum enim reiciendis saepe ipsam. Nulla accusantium eius in exercitationem cumque, quam amet explicabo harum ducimus cupiditate quia necessitatibus quibusdam optio maxime.",
      side: "right",
    },
    {
      id: 3,
      title: "Svjatoslav Torn",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A necessitatibus, magnam saepe nihil illo eius debitis odio, fugiat unde minus perferendis inventore, sint vitae reprehenderit aperiam architecto est obcaecati corporis ratione? Neque aut doloremque repellendus corporis totam, debitis esse quaerat exercitationem dolor quas deserunt amet obcaecati minima quod earum laboriosam?",
      side: "left",
    },
    {
      id: 4,
      title: "Another Person",
      description: "Some description for another person.",
      side: "right",
    },
    {
      id: 5,
      title: "Yet Another Person",
      description: "Some description for yet another person.",
      side: "left",
    },
  ]);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Story Generating
      </h1>

      <div className="min-h-screen bg-backgroundColor">
        <div className="min-h-screen flex justify-center">
          <div className="w-2/3 mx-auto">
            {entries.map((entry, index) => (
              <div className="flex flex-row w-full" key={entry.id}>
                {entry.side === "left" && (
                  <>
                    <div className="w-2/5 px-2 py-10">
                      <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                        <div className="text-gray-600 mb-2 flex justify-between">
                          <div className="font-bold">{entry.title}</div>
                          <div className="flex flex-row">
                            <IoCopy
                              className="text-textColor hover:text-brightColor cursor-pointer"
                              onClick={() =>
                                copyToClipboard(entry.description)
                              }
                            />
                          </div>
                        </div>
                        <div className="text-gray-600">{entry.description}</div>
                      </div>
                    </div>
                    <div className="w-1/5 flex justify-center">
                      <div className="relative flex h-full w-1 lg:w-2 bg-brightColor items-center justify-center">
                        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-brightColor leading-none text-center z-10 bg-white font-thin">
                          <div>{index + 1}</div>
                          {entry.date && <div>{entry.date}</div>}
                        </div>
                      </div>
                    </div>
                    <div className="w-2/5 px-2 py-10"></div>
                  </>
                )}
                {entry.side === "right" && (
                  <>
                    <div className="w-2/5 px-2 py-10"></div>
                    <div className="w-1/5 flex justify-center">
                      <div className="relative flex h-full w-1 lg:w-2 bg-brightColor items-center justify-center">
                        <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-brightColor leading-none text-center z-10 bg-white font-thin">
                          <div>{index + 1}</div>
                          {entry.date && <div>{entry.date}</div>}
                        </div>
                      </div>
                    </div>
                    <div className="w-2/5 px-2 py-10">
                      <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                        <div className="text-gray-600 mb-2 flex justify-between">
                          <div className="font-bold">{entry.title}</div>
                          <div className="flex flex-row">
                            <IoCopy
                              className="text-textColor hover:text-brightColor cursor-pointer"
                              onClick={() =>
                                copyToClipboard(entry.description)
                              }
                            />
                          </div>
                        </div>
                        <div className="text-gray-600">{entry.description}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storys;
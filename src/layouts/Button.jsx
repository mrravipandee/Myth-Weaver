import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-2 text-white font-semibold bg-brightColor hover:shadow-xl transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;

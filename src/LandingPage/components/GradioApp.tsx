import React from "react";

const GradioApp = () => {
  return (
    <div className="h-full bg-[#0b0f19]">
      <iframe
        className="fade-in-uploader"
        src="https://thawing-river-31320-f2b7f2e4ef95.herokuapp.com/"
        title="Gradio App"
        width="100%"
        height="510"
      />
      <button className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md transition-transform duration-200 active:scale-90">
        Go Back
      </button>
    </div>
  );
};

export default GradioApp;

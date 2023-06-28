import React, { useState } from "react";
import "./LandingPage.css";

function LandingPage({ handleGetStarted }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      handleGetStarted();
    }, 500); // Delay the execution of handleGetStarted for 500ms to allow fade-out animation
  };

  return (
    <div
      className={`flex flex-col h-screen items-center justify-center bg-blue-300 ${
        fadeOut ? "fade-out" : null
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center  ${
          fadeOut ? "fade-out" : "fade-in"
        }`}
      >
        <h1 className="text-8xl font-bold">DermAI Scan</h1>
        <p>Empowering Skin Health through Image-Based Detection.</p>
        <button
          className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md transition-transform duration-200 active:scale-90"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

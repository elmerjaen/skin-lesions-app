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
      className={`flex flex-col h-full items-center justify-center bg-blue-300 ${
        fadeOut ? "fade-out" : null
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center p-20  ${
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
      <div className="bg-[#011627] p-10 text-white">
        <h1 className="pb-4 font-bold text-3xl ">Powerful Benefits</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="border p-4">
            <h1 className="font-bold pb-2">Accurate Analysis</h1>
            <p>
              Achieving up to 85% of accuracy in identifying different skin
              lesions.
            </p>
          </div>
          <div className="border p-4">
            <h1 className="font-bold pb-2">Save Time</h1>
            <p>Streamlines the diagnostic process.</p>
          </div>
          <div className="border p-4">
            <h1 className="font-bold pb-2">Innovative AI</h1>
            <p>Leveraging the latest machine learning techniques.</p>
          </div>
        </div>
      </div>
      <div className="p-12">
        <h1 className="pb-4 font-bold text-3xl ">Frequently Asked Questions</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4">
            <h1 className="font-bold pb-2">How accurate is the classifier</h1>
            <p className="text-justify">
              By leveraging machine learning, our Skin Lesions Classifier
              achieves high accuracy rates, empowering you with a reliable tool.
            </p>
          </div>
          <div className="p-4">
            <h1 className="font-bold pb-2">Do I need special equipment?</h1>
            <p className="text-justify">
              No. Our Skin Lesions Classifier works on your existing devices,
              making it a convenient and accessible tool for everyone.
            </p>
          </div>
          <div className="p-4">
            <h1 className="font-bold pb-2">Can I use it on any skin type?</h1>
            <p className="text-justify">
              Our Skin Lesions Classifier is currently in development and has
              been trained on various skin types. While it is designed to work
              effectively across different skin types, its accuracy may vary and
              may not always provide accurate results for certain skin types.
            </p>
          </div>
          <div className="p-4">
            <h1 className="font-bold pb-2">Will my data be secured?</h1>
            <p className="text-justify">
              The skin lesion classifier collects skin images exclusively for
              the purpose of performing diagnosis. These images are not stored
              anywhere but are immediately processed by the algorithm. Once the
              processing is complete, the images are promptly deleted, ensuring
              that your data remains confidential and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

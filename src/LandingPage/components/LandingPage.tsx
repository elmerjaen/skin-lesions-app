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
      className={`flex flex-col h-full items-center justify-center bg-blue-200 ${
        fadeOut ? "fade-out" : null
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center p-20  ${
          fadeOut ? "fade-out" : "fade-in"
        }`}
      >
        <h1 className="text-8xl font-bold">DermAI Scan</h1>
        <p className="text-2xl font-bold">
          Your personal Skin Lesion detector.
        </p>

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
        <div className="grid grid-cols-3 gap-10">
          <div className="border rounded-lg p-4 transform-gpu transition-transform duration-300 hover:scale-110">
            <img
              className="pb-2"
              src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Ftarget.png?alt=media&token=98ab7acc-51ff-4a4e-93a2-8c4e44e9447a"
              alt="high accuracy"
            ></img>
            <h1 className="font-bold pb-2">Accurate Analysis</h1>
            <p className="text-justify">
              Our model has been trained on a diverse set of skin lesion images
              and can achieve up to 80% accuracy in identifying common skin
              lesions, including nevus and pigmented benign keratosis, as well
              as more rare but potentially fatal conditions such as melanoma and
              basal cell carcinoma.
            </p>
          </div>
          <div className="border rounded-lg p-4 transform-gpu transition-transform duration-300 hover:scale-110">
            <img
              className="pb-2"
              src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Fback-in-time.png?alt=media&token=9e6d9ba1-88c5-45bc-9b70-424b845c80bd"
              alt="save time"
            ></img>
            <h1 className="font-bold pb-2">Save Time</h1>
            <p className="text-justify">
              Our model significantly streamlines the diagnostic process for
              patients and doctors. This tool enables faster and more accurate
              diagnoses, improving patient outcomes and simplifying the overall
              experience.
            </p>
          </div>
          <div className="border rounded-lg p-4 transform-gpu transition-transform duration-300 hover:scale-110">
            <img
              className="pb-2"
              src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Fartificial-intelligence.png?alt=media&token=6ca8905f-622e-4ebc-bdb4-e918219bae9c"
              alt="ai"
            ></img>
            <h1 className="font-bold pb-2">Innovative AI</h1>
            <p>Leveraging the latest image classification techniques.</p>
          </div>
        </div>
      </div>
      <div className="p-12">
        <div className="flex">
          <img
            className="p-4"
            src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Ffaq.png?alt=media&token=d78c8771-7b30-4412-9adc-b4c1668ab435"
            alt="faq"
          ></img>
          <h1 className="pt-8 font-bold text-3xl ">
            Frequently Asked Questions
          </h1>
        </div>

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

import React from "react";
import { useState } from "react";
import GradioApp from "./LandingPage/components/GradioApp.tsx";
import LandingPage from "./LandingPage/components/LandingPage.tsx";
import Header from "./LandingPage/components/Header.tsx";

function App() {
  const [showGradioApp, setshowGradioApp] = useState(false);

  const handleGetStarted = () => {
    setshowGradioApp(true);
  };

  return (
    <div className="h-screen items-center justify-center overflow-hidden">
      <Header />
      {!showGradioApp && <LandingPage handleGetStarted={handleGetStarted} />}
      {showGradioApp && <GradioApp />}
    </div>
  );
}

export default App;

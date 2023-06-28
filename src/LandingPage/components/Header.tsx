import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex flex-row items-center bg-[#221e1e]">
        <div className="m-2">
          <img
            className="h-20"
            alt="Logo 1"
            src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Flogo_utp.png?alt=media&token=d153d417-27bd-4c16-bef4-095167c14ddc"
          ></img>
        </div>
        <div>
          <img
            className="h-20"
            alt="Logo 1"
            src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Floga_weii-6.png?alt=media&token=b1364f4b-b350-47db-b427-8bc3de0ef098"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;

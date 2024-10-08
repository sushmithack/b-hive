import React from "react";
import "./Header.css";
const Header: React.FC = () => {
  return (
    <header className="header_container">
      {/* <div className="header_subcontainer"> */}
      <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
      {/* <div className="call_icon_container"> */}
      <img
        className="call_icon"
        src={`${process.env.PUBLIC_URL}/icons/callIcon.svg`}
        alt="call"
      />
      {/* </div> */}
      {/* </div> */}
    </header>
  );
};

export default Header;

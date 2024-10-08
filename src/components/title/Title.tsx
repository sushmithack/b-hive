import React from "react";
import "./Title.css";

const Title: React.FC = () => {
  return (
    <>
      <div className="title_container">
        <p className="title_text">
          {"Host your meeting with world-class amenities. Starting at"}
          <span className={`title_text color_text`}>{"₹199/-"}</span>
        </p>
      </div>
      <p className="title_text_mobile">
        {"Host your meeting with world-class amenities. Starting at"}
        <span className={`title_text_mobile color_text`}>{"₹199/-"}</span>
      </p>
    </>
  );
};

export default Title;

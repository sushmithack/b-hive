import React from "react";
import "./FeatureList.css";
import FeatureCard from "../featureCard/featureCard";
const FeatureList: React.FC = () => {
  const features = [
    {
      imageName: "/icons/dumbell.svg",
      text: "Gym Facilities",
    },

    {
      imageName: "/icons/affordable.svg",
      text: "affordable",
    },
    {
      imageName: "/icons/comfortableIcon.svg",
      text: "Comfortable",
    },
    {
      imageName: "/icons/comfortableIcon.svg",
      text: "Comfort Lounges",
    },
    {
      imageName: "/icons/wifi.svg",
      text: "High-Speed WiFi",
    },
    {
      imageName: "/icons/quickIcon.svg",
      text: "Quick Booking",
    },
    {
      imageName: "/icons/cofee.svg",
      text: "Cafe & Tea Bar",
    },
    { imageName: "/icons/sportsIcon.svg", text: "Sports Area" },
  ];

  //   const returnFeatureCard = () => {

  //   };

  return (
    <>
      {/* // <div className="feature_container"> */}
      <p className="text">{"Why Choose us?"}</p>
      <div className="featureList_container">
        {features.map((feature, index) => {
          return (
            <FeatureCard
              key={index + feature.imageName}
              imageName={feature.imageName}
              text={feature.text}
              className={"feature-card"}
            />
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
};

export default FeatureList;

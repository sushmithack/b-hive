import React from "react";
import "./featureCard.css";

interface FeatureCardProps {
  imageName: string;
  text: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageName,
  text,
  className,
}) => {
  return (
    <div className={`feature-card-style ${className}`}>
      <img src={imageName} alt={text} className="feature-image" />
      <p className="feature-text">{text}</p>
    </div>
  );
};

export default FeatureCard;

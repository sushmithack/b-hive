import React from "react";
import { SpaceData } from "../../types/index";
import useWindowWidth from "../../hooks/useWindowWidth"; // Adjust the path as needed
import { STRINGS } from "../../strings";
import DistanceIcon from "../icons/DistanceIcon";
import "./Card.css";

interface CardProps {
  data: SpaceData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const width = useWindowWidth();
  const isMobile = width <= 768;

  return (
    <div className="card">
      <div className="card_title">
        <p className="card_title_text">{data?.name}</p>
        <div className="distance_icon_container">
          <DistanceIcon width={52} height={52} text="6 kms" />
        </div>
      </div>

      <div className="image_container">
        <div className="card_badge">
          <img
            src={`${process.env.PUBLIC_URL}/icons/badgeIconWorkspace.svg`}
            className="badge_icon"
          />
          <p className="badge_text">{"Workspace"}</p>
        </div>
        <img className="card_image" src={data?.images[0]} alt={"space_image"} />
      </div>

      <div className="button_container">
        <div className="day_pass_btn">
          <div className="day_pass_btn_text">
            <p className="btn_text">{STRINGS?.CARD?.DAY_PASS_BTN_TEXT}</p>
            <p className={`btn_text bold`}>
              {`₹${data?.day_pass_price}`}
              <span className="btn_text">{"/Day"}</span>
            </p>
          </div>
          <img
            className="forward_icon"
            src={`${process.env.PUBLIC_URL}/icons/forwardIcon.svg`}
          />
        </div>

        <div className="bulk_pass_btn">
          <div className="discount">
            <p className="discount_text">{"20% discount"}</p>
          </div>
          <div className="bulk_pass_btn_text">
            <p className={`btn_text brown_text`}>
              {STRINGS?.CARD?.BULK_PASS_BTN_TEXT}
            </p>
            <p className={`btn_text bold`}>
              {`₹${data?.day_pass_price}`}
              <span className="btn_text">{"/10 Days"}</span>
            </p>
          </div>
          <img
            className="forward_icon"
            src={`${process.env.PUBLIC_URL}/icons/forwardIcon.svg`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

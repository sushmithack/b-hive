import React from "react";
import { STRINGS } from "../../strings";
import "./DownloadAppComponent.css";

const DownloadAppComponent: React.FC = () => {
  return (
    <>
      <div className="download_app_title">
        <p className="download_app_text">{STRINGS?.DOWNLOAD_APP_COMP?.TITLE}</p>
        <img
          className="arrow"
          src={`${process.env.PUBLIC_URL}/icons/Arrow2.svg`}
          alt={"arrow"}
        />
      </div>
      <div className="download_app_subcontainer">
        <img
          className="app_image"
          src={`${process.env.PUBLIC_URL}/images/appImage.svg`}
          alt={STRINGS?.DOWNLOAD_APP_COMP?.DOWNLOAD_APP_IMAGE}
        />
        <p className="content_text">{STRINGS?.DOWNLOAD_APP_COMP?.CONTENT}</p>
        <div className="download_app_imagecontainer">
          <img
            alt={STRINGS?.DOWNLOAD_APP_COMP?.APPLE_STORE_ICON}
            src={`${process.env.PUBLIC_URL}/icons/applePlayStoreIcon.svg`}
          />
          <img
            alt={STRINGS?.DOWNLOAD_APP_COMP?.GOOGLE_PLAY_STORE_ICON}
            src={`${process.env.PUBLIC_URL}/icons/googlePlayIcon.svg`}
          />
        </div>
      </div>
    </>
  );
};

export default DownloadAppComponent;

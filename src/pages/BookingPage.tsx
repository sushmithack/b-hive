import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import FeatureList from "../components/featureList/FeatureList";
import Footer from "../components/footer/Footer";
import DownloadAppComponent from "../components/downloadAppComponent/DownloadAppComponent";
import SpaceList from "../components/SpaceList/SpaceList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { setSpaces } from "../store/spaceDataSlice";
import "./BookingPage.css";
import { fetchSpaceData } from "../api/spaceApi";
import { useDispatch } from "react-redux";
import { STRINGS } from "../strings";
import useWindowWidth from "../hooks/useWindowWidth";

const BookingPage: React.FC = () => {
  const dispatch = useDispatch();
  const width = useWindowWidth();
  const isMobile = width <= 900;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSpaceData = async () => {
      try {
        const data = await fetchSpaceData();
        dispatch(setSpaces(data));
      } catch (error) {
        setError("Failed to fetch space data");
      } finally {
        setLoading(false);
      }
    };

    getSpaceData();
  }, []);

  if (loading) {
    if (isMobile) return <div>{"Loading..."}</div>;
    else
      return (
        <div>
          <>
            <Skeleton width={"100%"} height={90}></Skeleton>
          </>
          <div className="main_content_container">
            <p className="title_text">
              {"Host your meeting with world-class amenities . Starting at "}
              <span className={` color_text`}>{"₹199/-"}</span>
            </p>
            <>
              <p className="text">{"Why Choose us?"}</p>

              <div className="featureList_container_skelton">
                <Skeleton className="feature-card_skeleton" />
                <Skeleton className="feature-card_skeleton" />
                <Skeleton className="feature-card_skeleton" />
                <Skeleton className="feature-card_skeleton" />
                <Skeleton className="feature-card_skeleton" />
                <Skeleton className="feature-card_skeleton" />
                <Skeleton className="feature-card_skeleton" />
                <Skeleton className="feature-card_skeleton" />
              </div>
            </>
            <>
              <p className="card_list_title_skeleton">
                {STRINGS?.CARD_LIST?.TITLE}
              </p>

              <div className="card-list_container_skeleton">
                <Skeleton className="card_skeleton" />
                <Skeleton className="card_skeleton" />
                <Skeleton className="card_skeleton" />
                <Skeleton className="card_skeleton" />
                <Skeleton className="card_skeleton" />
                <Skeleton className="card_skeleton" />
                <Skeleton className="card_skeleton" />
                <Skeleton className="card_skeleton" />
              </div>
            </>
            <p className="download_app_text_skeleton">
              {STRINGS?.DOWNLOAD_APP_COMP?.TITLE}
            </p>
            <Skeleton
              className="download_image_skeleton"
              width={"80vw"}
              height={400}
            />
          </div>
          <Footer />
        </div>
      );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="main_content_container">
        <Title />
        <FeatureList />
        <SpaceList />
        <DownloadAppComponent />
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;

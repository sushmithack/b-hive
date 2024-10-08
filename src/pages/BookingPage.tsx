import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import FeatureList from "../components/featureList/FeatureList";
import Footer from "../components/footer/Footer";
import DownloadAppComponent from "../components/downloadAppComponent/DownloadAppComponent";
import SpaceList from "../components/SpaceList/SpaceList";
import { setSpaces } from "../store/spaceDataSlice";
import "./BookingPage.css";
import { fetchSpaceData } from "../api/spaceApi";
import { useDispatch } from "react-redux";

const BookingPage: React.FC = () => {
  const dispatch = useDispatch();

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
    return <div>Loading...</div>;
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

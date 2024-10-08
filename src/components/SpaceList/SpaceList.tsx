import React from "react";
import Card from "../card/Card";
import { STRINGS } from "../../strings";
import { useSelector } from "react-redux";
import "./SpaceList.css";
import { RootState } from "../../store";

const SpaceList: React.FC = () => {
  const spaceList = useSelector((state: RootState) => state.space.spaces);
  console.log("spaceList", spaceList);
  return (
    <>
      <p className="card_list_title">{STRINGS?.CARD_LIST?.TITLE}</p>
      <div className="card-list_container">
        {spaceList.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </>
  );
};

export default SpaceList;

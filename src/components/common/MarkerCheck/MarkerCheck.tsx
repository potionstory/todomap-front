import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "../CheckBox";
import { MarkerCheckWrap } from "./style";
import { MarkerCheckProps } from "./type";

const FaMapMarker = faMapMarker as IconProp;

const MarkerCheck: React.FC<MarkerCheckProps> = ({ item, sizing, clickHandler }) => {
  const { color } = item;

  return (
    <MarkerCheckWrap className="checker" color={color} sizing={sizing}>
      <Checkbox item={item} sizing={sizing} clickHandler={clickHandler} />
      <div className="marker">
        <FontAwesomeIcon icon={FaMapMarker} />
      </div>
    </MarkerCheckWrap>
  );
};

export default MarkerCheck;

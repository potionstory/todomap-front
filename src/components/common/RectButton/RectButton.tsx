import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RectButtonWrap } from "./style";
import { RectButtonProps } from "./type";

const RectButton: React.FC<RectButtonProps> = ({ icon, color, disabled, clickHandler }) => (
  <RectButtonWrap color={color} disabled={disabled} onClick={clickHandler}>
    <FontAwesomeIcon icon={icon} />
  </RectButtonWrap>
);

export default RectButton;

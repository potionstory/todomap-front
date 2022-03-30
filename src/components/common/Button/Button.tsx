import React, { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, easings } from "react-spring";
import { ButtonWrap } from "./style";
import { ButtonProps } from "./type";

const FaMapMarker = faMapMarker as IconProp;

const Button: React.FC<ButtonProps> = ({ children, color, icon, clickHandler }) => {
  const [isHover, setIsHover] = useState(false);
  const props = useSpring({
    left: isHover ? 0 : -8,
    config: {
      duration: 300,
      easing: easings.easeOutExpo,
    },
  });

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <ButtonWrap
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      color={color}
      onClick={clickHandler}
    >
      <span className="head">
        <span className="icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <animated.span style={props} className="marker">
          <FontAwesomeIcon icon={FaMapMarker} rotation={270} />
        </animated.span>
      </span>
      <span className="body">{children}</span>
    </ButtonWrap>
  );
};

export default Button;

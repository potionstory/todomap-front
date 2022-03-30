import React, { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, easings } from "react-spring";
import { CheckBoxWrap } from "./style";
import { CheckBoxProps } from "./type";

const circlePath = `M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831`;

const FaCheck = faCheck as IconProp;
const FaExclamation = faExclamation as IconProp;

const CheckBox: React.FC<CheckBoxProps> = ({ item, sizing, clickHandler }) => {
  const [isRingShow, setIsRingShow] = useState(false);

  const checkProps = useSpring({
    stroke: `${(isRingShow === true ? 1 : 0) * 100} , 100`,
    config: {
      duration: 500,
      easing: easings.easeOutQuart,
    },
    onRest: () => {
      setIsRingShow(false);
    },
  });

  const onCheckToggle = (id: string) => {
    setIsRingShow(true);
    clickHandler(id);
  };

  const { id, color, isChecked } = item;

  return (
    <CheckBoxWrap
      className="checker"
      color={color}
      sizing={sizing}
      isChecked={isChecked}
      onClick={() => onCheckToggle(id)}
    >
      {isRingShow && (
        <svg viewBox="0 0 36 36" className="ring" width="80">
          <animated.path className="circle" strokeDasharray={checkProps.stroke} d={circlePath} />
        </svg>
      )}

      <span className="flip">
        <span className="side undone">
          <FontAwesomeIcon icon={FaExclamation} />
        </span>
        <span className="side done">
          <FontAwesomeIcon icon={FaCheck} />
        </span>
      </span>
    </CheckBoxWrap>
  );
};

export default CheckBox;

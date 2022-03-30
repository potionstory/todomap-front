import React, { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSun, faStar, faUserCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { produce } from "immer";
import Link from "next/link";
import { useSpring, animated, easings } from "react-spring";
import { useRecoilState } from "recoil";
import { themeState } from "../../../states/global";
import { Theme } from "../../../types/global";
import { TodoItem } from "../../../types/todo";
import Button from "../../common/Button";
import MarkerCheck from "../../common/MarkerCheck";
import { HeaderWrap, HeaderHead, ThemeToggle, HeaderBody } from "./style";

const logoMarkerObj: TodoItem = {
  id: "logoMarkerId",
  color: "orange",
  isChecked: false,
};

const circlePath = `M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831`;

const FaSun = faSun as IconProp;
const FaStar = faStar as IconProp;
const FaUserCheck = faUserCheck as IconProp;
const FaUserPlus = faUserPlus as IconProp;

const Header = () => {
  const [theme, setTheme] = useRecoilState<Theme>(themeState);
  const [logoMarker, setLogoMarker] = useState<TodoItem>(logoMarkerObj);
  const [isRingShow, setIsRingShow] = useState(false);
  const [isThemeFlip, setIsThemeFlip] = useState(theme === "light" ? true : false);

  const themeProps = useSpring({
    stroke: `${(isRingShow === true ? 1 : 0) * 100} , 100`,
    config: {
      duration: 500,
      easing: easings.easeOutQuart,
    },
    onRest: () => {
      if (isRingShow === true) {
        setIsRingShow(false);
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
      }
    },
  });

  const onCheckToggle = (id: string) => {
    setLogoMarker(
      produce((draft) => {
        if (draft.id === id) draft.isChecked = !draft.isChecked;
      }),
    );
  };

  const onThemeToggle = () => {
    setIsRingShow(true);
    setIsThemeFlip((isThemeFlip) => !isThemeFlip);
  };

  return (
    <HeaderWrap>
      <HeaderHead>
        <Link href="/">
          <a>
            <MarkerCheck item={logoMarker} sizing="medium" clickHandler={onCheckToggle} />
            <span className="title">
              <strong className="name">TODO + MAP</strong>
            </span>
          </a>
        </Link>
      </HeaderHead>
      <HeaderBody>
        <div className="mode">
          <ThemeToggle onClick={() => onThemeToggle()} mode={theme} isThemeFlip={isThemeFlip}>
            {isRingShow && (
              <svg viewBox="0 0 36 36" className="ring" width="80">
                <animated.path
                  className="circle"
                  strokeDasharray={themeProps.stroke}
                  d={circlePath}
                />
              </svg>
            )}
            <span className="flip">
              <span className="side light">
                <FontAwesomeIcon icon={FaSun} />
              </span>
              <span className="side dark">
                <FontAwesomeIcon icon={FaStar} />
              </span>
            </span>
          </ThemeToggle>
        </div>
        <ul className="menu">
          <li>
            <Button color="green" icon={FaUserCheck} clickHandler={() => console.log("button")}>
              sign in
            </Button>
          </li>
          <li>
            <Button color="blue" icon={FaUserPlus} clickHandler={() => console.log("button")}>
              sign up
            </Button>
          </li>
        </ul>
      </HeaderBody>
    </HeaderWrap>
  );
};

export default Header;

import React from "react";
import { useSetRecoilState } from "recoil";
import { themeState } from "../../../states/global";
import { Theme } from "../../../types/global";
import { HeaderWrap } from "./style";

const Header = () => {
  const setTheme = useSetRecoilState<Theme>(themeState);
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <HeaderWrap>
      <div>Header</div>
      <button type="button" onClick={toggleTheme}>
        theme toggle button
      </button>
    </HeaderWrap>
  );
};
export default Header;

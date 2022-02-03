import React from "react";
import { useSetRecoilState } from "recoil";
import { themeState } from "../../state/global";
import { Theme } from "../../type/global";

const Header = () => {
  const setTheme = useSetRecoilState<Theme>(themeState);
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div>Header</div>
      <button type="button" onClick={toggleTheme}>
        theme toggle button
      </button>
    </>
  );
};
export default Header;

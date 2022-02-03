import { atom } from "recoil";
import { Theme } from "../type/global";

export const themeState = atom<Theme>({
  key: "themeState",
  default: "light",
});

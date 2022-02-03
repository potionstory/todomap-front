import { atom } from "recoil";
import { Theme } from "../types/global";

export const themeState = atom<Theme>({
  key: "themeState",
  default: "light",
});

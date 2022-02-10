import { Theme, ThemeColor } from "../types/global";
import color from "./color";

export const ThemeColorSet: Record<Theme, ThemeColor> = {
  light: {
    mainBg: color.white_1,
    mainText: color.black_1,
    subBg: color.white_2,
    subText: color.grey_1,
    primary: color.orange_1,
    secondary: color.green_1,
    red: color.red_1,
    orange: color.orange_1,
    blue: color.blue_1,
    green: color.green_1,
  },
  dark: {
    mainBg: color.black_1,
    mainText: color.white_1,
    subBg: color.black_2,
    subText: color.grey_2,
    primary: color.orange_2,
    secondary: color.green_2,
    red: color.red_2,
    orange: color.orange_2,
    blue: color.blue_2,
    green: color.green_2,
  },
};

import styled from "styled-components";
import { ThemeColor } from "../../../types/global";
import { ColorType, SizingType } from "./type";

interface MarkerCheckInterface {
  theme: ThemeColor;
  color: ColorType;
  sizing: SizingType;
}

export const MarkerCheckWrap = styled.div<MarkerCheckInterface>`
  position: relative;
  .marker {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    svg {
      font-size: ${({ sizing }) => {
        switch (sizing) {
          case "small":
            return "3rem";
          case "medium":
            return "6rem";
          case "big":
            return "12rem";
          default:
            return false;
        }
      }};
      color: ${({ theme, color }) => {
        switch (color) {
          case "red":
            return theme.mainRed;
          case "orange":
            return theme.mainOrange;
          case "blue":
            return theme.mainBlue;
          case "green":
            return theme.mainGreen;
          default:
            return false;
        }
      }};
    }
  }
`;

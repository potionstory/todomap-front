import styled from "styled-components";
import { ThemeColor } from "../../../types/global";
import { ColorType } from "./type";

export const RectButtonWrap = styled.button`
  margin: 4px;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: ${({ theme }: { theme: ThemeColor }) => theme.mainBg};
  line-height: 32px;
  svg {
    font-size: 1rem;
    color: ${({
      theme,
      color,
      disabled,
    }: {
      theme: ThemeColor;
      color: ColorType;
      disabled: boolean;
    }) => {
      if (!disabled) {
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
      } else {
        return theme.subText;
      }
    }};
    opacity: 0.6;
    transition: all 0.3s ease-out;
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

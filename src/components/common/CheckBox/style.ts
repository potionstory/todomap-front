import styled, { css } from "styled-components";
import { ThemeColor } from "../../../types/global";
import { ColorType, SizingType } from "./type";

interface CheckBoxInterface {
  theme: ThemeColor;
  color: ColorType;
  sizing: SizingType;
  isChecked: boolean;
}

export const CheckBoxWrap = styled.button<CheckBoxInterface>`
  position: relative;
  z-index: 10;
  display: flex;
  border-radius: 50%;
  ${({ sizing }) => {
    switch (sizing) {
      case "small":
        return css`
          width: 32px;
          height: 32px;
          padding: 4px;
        `;
      case "medium":
        return css`
          width: 64px;
          height: 64px;
          padding: 8px;
        `;
      case "big":
        return css`
          width: 128px;
          height: 128px;
          padding: 16px;
        `;
      default:
        return false;
    }
  }};
  background-color: ${({ theme }: { theme: ThemeColor }) => theme.subBg};
  .ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .circle {
      fill: none;
      stroke-width: 4px;
      stroke-linecap: round;
      stroke: ${({
        theme,
        isChecked,
        color,
      }: {
        theme: ThemeColor;
        isChecked: boolean;
        color: ColorType;
      }) => {
        if (isChecked) return theme.mainText;
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
  .flip {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
    transform: ${({ isChecked }: { isChecked: boolean }) =>
      isChecked ? "perspective(8rem) rotateY(180deg)" : "perspective(8rem) rotateY(0deg)"};
    .side {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      svg {
        font-size: ${({ sizing }) => {
          switch (sizing) {
            case "small":
              return "1rem";
            case "medium":
              return "2rem";
            case "big":
              return "4rem";
            default:
              return false;
          }
        }};
      }
    }
    .done {
      background-color: ${({ theme }: { theme: ThemeColor }) => theme.mainText};
      transform: rotateY(180deg);
      svg {
        color: ${({ theme, color }: { theme: ThemeColor; color: ColorType }) => {
          switch (color) {
            case "red":
              return theme.subRed;
            case "orange":
              return theme.subOrange;
            case "blue":
              return theme.subBlue;
            case "green":
              return theme.subGreen;
            default:
              return false;
          }
        }};
      }
    }
    .undone {
      background-color: ${({ theme, color }: { theme: ThemeColor; color: ColorType }) => {
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
      svg {
        color: ${({ theme }: { theme: ThemeColor }) => theme.mainBg};
      }
    }
  }
`;

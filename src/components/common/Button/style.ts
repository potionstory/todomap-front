import styled from "styled-components";
import { ThemeColor } from "../../../types/global";
import { ColorType } from "./type";

export const ButtonWrap = styled.button`
  display: flex;
  gap: 0 4px;
  padding: 4px;
  border-radius: 20px;
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
  .head {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    height: 32px;
    .icon {
      position: absolute;
      z-index: 10;
      top: -4px;
      left: -4px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 4px solid
        ${({ theme, color }: { theme: ThemeColor; color: ColorType }) => {
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
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-color: ${({ theme }: { theme: ThemeColor }) => theme.mainBg};
      svg {
        font-size: 1rem;
        color: ${({ theme, color }: { theme: ThemeColor; color: ColorType }) => {
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
    .marker {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 100%;
      svg {
        font-size: 2.5rem;
        color: ${({ theme }: { theme: ThemeColor }) => theme.mainBg};
      }
    }
  }
  .body {
    flex: 1;
    margin-right: 20px;
    opacity: 0.6;
    font-size: 1rem;
    line-height: 32px;
    font-weight: 700;
    text-align: left;
    text-transform: uppercase;
    color: ${({ theme }: { theme: ThemeColor }) => theme.mainBg};
    transition: all 0.3s ease-out;
  }
  &:hover {
    .body {
      opacity: 1;
    }
  }
`;

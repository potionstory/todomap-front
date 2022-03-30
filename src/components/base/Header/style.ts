import styled from "styled-components";
import { Theme, ThemeColor } from "../../../types/global";

interface ThemeToggleInterface {
  theme: ThemeColor;
  mode: Theme;
  isThemeFlip: boolean;
}

export const HeaderWrap = styled.header`
  display: flex;
  gap: 0 16px;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }: { theme: ThemeColor }) => theme.subBg};
`;

export const HeaderHead = styled.h1`
  a {
    display: flex;
    align-items: flex-start;
    gap: 0 16px;
    .logo {
      position: relative;
    }
    .title {
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      .name {
        font-size: 2rem;
        color: ${({ theme }: { theme: ThemeColor }) => theme.mainText};
        line-height: 4rem;
      }
    }
  }
`;

export const HeaderBody = styled.div`
  display: flex;
  gap: 0 8px;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  .mode {
  }
  .menu {
    display: flex;
    gap: 0 8px;
    align-items: center;
  }
`;

export const ThemeToggle = styled.button<ThemeToggleInterface>`
  position: relative;
  z-index: 10;
  display: flex;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 5px;
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
      stroke: ${({ theme, mode }) => {
        switch (mode) {
          case "light":
            return theme.mainBlue;
          case "dark":
            return theme.mainOrange;
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
    transform: ${({ isThemeFlip }: { isThemeFlip: boolean }) =>
      isThemeFlip === true
        ? "perspective(8rem) rotateY(180deg)"
        : "perspective(8rem) rotateY(0deg)"};
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
      background-color: ${({ theme }: { theme: ThemeColor }) => theme.mainBg};
      svg {
        font-size: 1.25rem;
        transform-origin: center;
        transition: all 0.3s ease-out;
        opacity: 0.6;
      }
    }
    .light {
      transform: rotateY(180deg);
      svg {
        color: ${({ theme }: { theme: ThemeColor }) => theme.subOrange};
      }
    }
    .dark {
      svg {
        color: ${({ theme }: { theme: ThemeColor }) => theme.subBlue};
      }
    }
  }
  &:hover {
    .flip {
      .side {
        svg {
          transform: rotate(180deg);
          opacity: 1;
        }
      }
    }
  }
`;

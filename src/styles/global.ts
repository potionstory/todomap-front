import { createGlobalStyle } from "styled-components";
import { ThemeColor } from "../types/global";

const global = createGlobalStyle`
  html {
    height: 100%;
    background-color: ${({ theme }: { theme: ThemeColor }) => theme.mainBg};
  }
  
  body {
    margin: 0;
    height: 100%;
    padding: 0;
    background-color: ${({ theme }: { theme: ThemeColor }) => theme.mainBg};
    font-family: "Barlow", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }: { theme: ThemeColor }) => theme.mainText};
  }

  * {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }: { theme: ThemeColor }) => theme.mainText};
  }

  ul, ol, dl {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
  }
  
  input, button, textarea {
    border: none;
    background-color: transparent;
    padding: 0;
    font-family: inherit;
    cursor: pointer;
    &:focus {
      outline-style: none;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea {
    resize: none;
  }

  img {
    width: 100%;
  }

  img, button {
    vertical-align: top;
  }

  // root
  #__next {
    display: flex;
    height: 100%;
  }
`;

export default global;

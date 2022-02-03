import styled from "styled-components";
import { ThemeColor } from "../../../types/global";

export const HeaderWrap = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }: { theme: ThemeColor }) => theme.subBg};
`;

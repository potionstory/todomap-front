import styled from "styled-components";
import { ThemeColor } from "../../../types/global";

export const DateWrap = styled.div`
  flex: 1;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }: { theme: ThemeColor }) => theme.subBg};
`;

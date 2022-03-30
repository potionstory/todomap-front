import styled from "styled-components";

export const LayoutWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  padding: 16px 0;
  main {
    display: flex;
    flex: 1;
    gap: 0 16px;
  }
`;

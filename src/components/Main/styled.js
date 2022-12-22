import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  max-width: calc(100vw - 1rem);
  padding: 10px;
  @media (min-width: 768px) {
    margin-top: 120px;
  }
  @media (min-width: 1024px) {
    max-width: 600px;
  }
  @media (min-width: 1440px) {
    max-width: 975px;
  }
  @media (min-width: 1920px) {
    margin-left: 100px;
    max-width: 1300px;
  }
  @media (min-width: 2560px) {
    margin-left: 255px;
  }
`;

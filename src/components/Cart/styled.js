import styled from "styled-components";

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 768px) {
    position: fixed;
    left: calc(100vw - 55%);
    top: 120px;
  }
  @media (min-width: 1024px) {
    left: calc(100vw - 40%);
  }
  @media (min-width: 1440px) {
    left: calc(100vw - 30%);
  }
  @media (min-width: 1920px) {
    left: calc(100vw - 27.1%);
  }
  @media (min-width: 2560px) {
    left: calc(100vw - 31.5%);
  }
`;

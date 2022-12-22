import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 120px;
  width: 100vw;
  background-color: var(--grey-0);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0px 30px;
    height: 70px;
    justify-content: space-between;
    gap: 170px;
    flex-direction: row;
    position: fixed;
  }
  @media (min-width: 1024px) {
    gap: 430px;
  }
  @media (min-width: 1440px) {
    gap: 825px;
  }
  @media (min-width: 1920px) {
    gap: 1120px;
  }
`;

/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledUl = styled.ul`
  ${({ location }) => {
    switch (location) {
      case "main":
        return css`
          gap: 20px;
          display: flex;
          flex-direction: row;
          @media (min-width: 768px) {
            flex-direction: column;
          }
          @media (min-width: 1024px) {
            flex-direction: row;
            flex-wrap: wrap;
          }
        `;
      case "cart":
        return css`
          width: 100%;
          gap: 10px;
          display: flex;
          flex-direction: column;
        `;
    }
  }}
`;

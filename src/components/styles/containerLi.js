/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledLi = styled.li`
  ${({ location }) => {
    switch (location) {
      case "main":
        return css`
          border: 2px solid var(--grey-100);
          border-radius: var(--border-radius-3);
        `;
      case "cartPlaceHolder":
        return css``;
    }
  }}
`;

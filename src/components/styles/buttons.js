/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledButtons = styled.button`
  height: 40px;
  border-radius: var(--border-radius-2);
  background-color: var(--color-primary);
  color: var(--white);

  padding: 0 10px;

  ${({ location }) => {
    switch (location) {
      case "card":
        return css`
          margin-top: 10px;
          width: 110px;
        `;
      case "cartplus":
        return css`
          font-size: 18px;
          background-color: transparent;
          color: var(--color-primary);
        `;
      case "cartminus":
        return css`
          font-size: 18px;
          background-color: transparent;
          color: var(--color-primary);
        `;
      case "cartremove":
        return css`
          font-size: 18px;
          background-color: transparent;
          color: var(--grey-100);
        `;
      case "allremove":
        return css`
          width: 100%;
          font-size: 18px;
          background-color: var(--grey-50);
          color: var(--grey-100);
          font-weight: var(--font-weight-2);
          font-size: var(--font-size-5);
        `;
    }
  }}
`;

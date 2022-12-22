/* eslint-disable default-case */
import styled, { css } from "styled-components";
import { BaseTypo } from "../typograph";

export const StyledTypo = styled(BaseTypo)`
  margin: 10px 0px 0px 5px;
  color: ${({ fontColor }) => fontColor};
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-weight: var(--font-weight-1);
          font-size: var(--font-size-1);
        `;
      case "two":
        return css`
          font-weight: var(--font-weight-1);
          font-size: var(--font-size-2);
        `;
      case "three":
        return css`
          font-weight: var(--font-weight-1);
          font-size: var(--font-size-3);
        `;
      case "four":
        return css`
          font-weight: var(--font-weight-1);
          font-size: var(--font-size-5);
        `;
      case "five":
        return css`
          font-weight: var(--font-weight-4);
          font-size: var(--font-size-4);
        `;
      case "six":
        return css`
          font-weight: var(--font-weight-4);
          font-size: var(--font-size-5);
        `;
      case "seven":
        return css`
          font-weight: var(--font-weight-4);
          font-size: var(--font-size-6);
        `;
      case "eigth":
        return css`
          font-weight: var(--font-weight-2);
          font-size: var(--font-size-5);
        `;
    }
  }};
`;

/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledImg = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt,
}))`
  ${({ location }) => {
    switch (location) {
      case "card":
        return css`
          object-fit: fill;
          margin: 0 auto;
        `;
      case "header":
        return css`
          display: block;
          max-width: 341px;
          max-height: 58px;
          width: auto;
          height: auto;
          object-fit: scale-down;
          margin: 15px;
          @media (min-width: 1920px) {
            margin-left: 80px;
          }
        `;
    }
  }}
`;

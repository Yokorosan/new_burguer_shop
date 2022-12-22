/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledInput = styled.input.attrs(({ placeholder }) => ({
  placeholder: placeholder,
}))`
  ${({ location }) => {
    switch (location) {
      case "header":
        return css`
          background-color: var(--white);
          height: 40px;
          width: 70%;
          outline: none;
          &::placeholder {
            padding-left: 10px;
          }
          @media (min-width: 768px) {
            width: 75%;
          }
        `;
    }
  }}
`;

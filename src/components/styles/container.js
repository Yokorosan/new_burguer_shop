/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  ${({ location }) => {
    switch (location) {
      case "card":
        return css`
          background-color: var(--grey-0);
          width: 300px;
          height: 150px;
          @media (min-width: 1024px) {
            width: 275px;
          }
          @media (min-width: 1440px) {
            width: 300px;
          }
        `;
      case "description":
        return css`
          flex-direction: column;
          padding: 10px;
        `;
      case "body":
        return css`
          flex-direction: column;
          @media (min-width: 768px) {
            flex-direction: row;
          }
        `;
      case "cart":
        return css`
          width: calc(100vw - 10px);
          max-width: 400px;
          height: 55px;
          padding: 10px;
          margin-top: 10px;
          border-top-left-radius: var(--border-radius-3);
          border-top-right-radius: var(--border-radius-3);
          background-color: var(--color-primary);
        `;
      case "cartPlaceHolder":
        return css`
          flex-direction: column;
          gap: 10px;
          align-items: center;
        `;
      case "cartMain":
        return css`
          width: calc(100vw - 10px);
          max-width: 400px;
          padding: 10px;
          background-color: var(--grey-0);
          @media (min-width: 768px) {
            overflow-y: auto;
            max-height: 300px;
          }
        `;
      case "cartCard":
        return css`
          flex-direction: row;
          justify-content: space-between;
          margin: 0 auto;
          background-color: var(--grey-0);
        `;
      case "cartCardImg":
        return css`
          background-color: var(--grey-20);
          border-radius: var(--border-radius-3);
          width: 80px;
          height: 80px;
        `;
      case "cartDesc":
        return css`
          width: calc((100%-80px) / 2);
          flex-direction: column;
        `;
      case "cartDescButton":
        return css`
          flex-direction: row;
        `;
      case "cartRemove":
        return css`
          flex-direction: column;
        `;
      case "cartTotal":
        return css`
          padding: 10px;
          width: calc(100vw - 10px);
          max-width: 400px;
          flex-direction: column;
          border-top: 2px solid var(--grey-20);
          background-color: var(--grey-0);
        `;
      case "cartTotalDesc":
        return css`
          gap: 150px;
          flex-direction: row;
          margin-bottom: 1.5rem;
          justify-content: space-around;
        `;
      case "results":
        return css`
          background-color: var(--white);
          flex-direction: column;
          align-items: center;
          gap: 10px;

          @media (min-width: 768px) {
            position: fixed;
            top: 69px;
            left: 10px;
            height: 60px;
            flex-direction: row;
            align-items: center;
          }
          @media (min-width: 1024px) {
            gap: 165px;
          }
          @media (min-width: 1440px) {
            gap: 545px;
          }
          @media (min-width: 1920px) {
            left: 100px;
          }
          @media (min-width: 2560px) {
            left: 260px;
          }
        `;
      case "resultsTypo":
        return css`
          margin-bottom: 10px;
        `;
    }
  }}
`;

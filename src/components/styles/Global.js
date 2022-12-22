import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/*Reset*/
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
button{
  cursor: pointer;
  border: none;
  background: transparent;
}
ul, ol, li{
  list-style: none;
}
img{
  max-width: 100%;
}
input, select{
  background: transparent;
  border: none;
}
/*Variables and Global Styles*/
:root{
  --color-primary: #27AE60;
  --color-primary-50: #93d7af;
  --color-secondary: #eb5757;
  --grey-100: #333333;
  --grey-50: #828282;
  --grey-20: #E0E0E0;
  --grey-0: #F5F5F5;
  --negative: #e60000;
  --warning: #ffcd07;
  --success: #168821;
  --information: #155bcb;
  --white: #fff;
  --black: #000;

  --toastify-color-success: #168821;
  --toastify-color-warning: #ffcd07;
  --toastify-color-error: #e60000;

  --font-family-inter: 'Inter', sans-serif;

  --font-size-1: 26px;
  --font-size-2: 22px;
  --font-size-3: 18px;
  --font-size-4: 16px;
  --font-size-5: 14px;
  --font-size-6: 12px;

  --font-weight-1: 700;
  --font-weight-2: 600;
  --font-weight-3: 500;
  --font-weight-4: 400;

  --border-radius-1:50%;
  --border-radius-2: 8px;
  --border-radius-3: 5px;
  --border-radius-4: 4px;
  --border-radius-5: 2px;
  --border-radius-6: 1px;
}
body{
  background-color: var(--white);
}
h1,h2,h3,h4,h5,h6,p,span,li{
  font-family: var(--font-family-inter);
  color: var(--grey-100);
}
`;

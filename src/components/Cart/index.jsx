import { DivStyled } from "../styles/container";
import { StyledLi } from "../styles/containerLi";
import { StyledUl } from "../styles/containerUl";
import { StyledTypo } from "../styles/typograph";
import { CartBanner } from "./CartBanner";
import { LiCart } from "./CartBody/CartProduct";
import { Total } from "./CartTotal";
import { StyledAside } from "./styled";

export const Aside = ({ cart, setCart, resetCart }) => {
  return (
    <StyledAside>
      <CartBanner />
      <DivStyled location="cartMain">
        <StyledUl location="cart">
          {cart.length ? (
            cart.map((element, index) => {
              return (
                <LiCart
                  key={index}
                  element={element}
                  setCart={setCart}
                  cart={cart}
                />
              );
            })
          ) : (
            <StyledLi location="cartPlaceHolder">
              <DivStyled location="cartPlaceHolder">
                <StyledTypo tag="h2" fontSize="three">
                  {"Sua sacola está vazia"}
                </StyledTypo>
                <StyledTypo tag="p" fontSize="six">
                  {"Adicione Itens"}
                </StyledTypo>
              </DivStyled>
            </StyledLi>
          )}
        </StyledUl>
      </DivStyled>
      {cart.length ? (
        <Total cart={cart} resetCart={resetCart} />
      ) : (
        <DivStyled />
      )}
    </StyledAside>
  );
};

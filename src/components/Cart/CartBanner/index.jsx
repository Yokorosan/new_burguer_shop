import { DivStyled } from "../../styles/container";
import { StyledTypo } from "../../styles/typograph";

export const CartBanner = () => {
  return (
    <DivStyled location="cart">
      <StyledTypo tag="h2" fontSize="three" fontColor="#fff">
        Carrinho de Compras
      </StyledTypo>
    </DivStyled>
  );
};

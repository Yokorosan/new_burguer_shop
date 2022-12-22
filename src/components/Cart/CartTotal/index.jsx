import { StyledButtons } from "../../styles/buttons";
import { DivStyled } from "../../styles/container";
import { StyledTypo } from "../../styles/typograph";

export const Total = ({ cart, resetCart }) => {
  const format = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };

  const totalSum = () => {
    const value = cart.reduce((acc, inc) => acc + inc.qty * inc.price, 0);
    return value;
  };
  totalSum();
  return (
    <DivStyled location="cartTotal">
      <DivStyled location="cartTotalDesc">
        <StyledTypo tag="p" fontSize="eigth" fontColor="#333333">
          {"Total"}
        </StyledTypo>
        <StyledTypo tag="p" fontSize="eigth" fontColor="#333333">
          {totalSum().toLocaleString("pt-BR", format)}
        </StyledTypo>
      </DivStyled>
      <StyledButtons location="allremove" onClick={() => resetCart()}>
        {"Limpar Tudo"}
      </StyledButtons>
    </DivStyled>
  );
};

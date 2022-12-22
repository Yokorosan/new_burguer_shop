import { StyledButtons } from "../../../styles/buttons";
import { DivStyled } from "../../../styles/container";
import { StyledImg } from "../../../styles/image";
import { StyledTypo } from "../../../styles/typograph";
import { StyledLi } from "../../../styles/containerLi";

export const Li = ({ element, addFoodCart, success }) => {
  const format = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };

  return (
    <StyledLi location="main">
      <DivStyled location={"card"}>
        <StyledImg src={element.img} alt={element.name} location={"card"} />
      </DivStyled>
      <DivStyled location={"description"}>
        <StyledTypo tag="h2" fontSize="three">
          {element.name}
        </StyledTypo>
        <StyledTypo tag="p" fontSize="seven">
          {element.category}
        </StyledTypo>
        <StyledTypo tag="p" fontSize="eigth" fontColor="#27ae60">
          {element.price.toLocaleString("pt-BR", format)}
        </StyledTypo>
        <StyledButtons
          location="card"
          onClick={() => {
            addFoodCart(element);
            success();
          }}
        >
          Adicionar
        </StyledButtons>
      </DivStyled>
    </StyledLi>
  );
};

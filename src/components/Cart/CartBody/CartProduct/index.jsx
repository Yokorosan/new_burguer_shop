import { DivStyled } from "../../../styles/container";
import { StyledLi } from "../../../styles/containerLi";
import { StyledImg } from "../../../styles/image";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import { StyledTypo } from "../../../styles/typograph";
import { StyledButtons } from "../../../styles/buttons";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const LiCart = ({ element, cart, setCart }) => {
  const AddProduct = (product) => {
    const newProduct = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCart(newProduct);
  };

  const MinusProduct = (product) => {
    const newProduct = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });

    const cleanArray = newProduct.filter((item) => item.qty !== 0);
    setCart(cleanArray);
  };

  const RemoveProduct = (product) => {
    const newProduct = cart.filter((item) => item.id !== product.id);
    const success = () => {
      toast.success("Item Removido Com Sucesso", {
        position: toast.POSITION.TOP_CENTER,
      });
    };
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Deseja remover o item do carrinho?")) {
      setCart(newProduct);
      success();
    }
  };

  return (
    <StyledLi location="cart">
      <DivStyled location="cartCard">
        <DivStyled location="cartCardImg">
          <StyledImg src={element.img} alt={element.name} location="card" />
        </DivStyled>

        <DivStyled location="cartDesc">
          <StyledTypo tag="h3" fontSize="four" fontColor="#333333">
            {element.name}
          </StyledTypo>
          <StyledTypo tag="p" fontSize="seven" fontColor="#828282">
            {element.category}
          </StyledTypo>

          <DivStyled location="cartDescButton">
            <StyledButtons
              location="cartminus"
              onClick={() => MinusProduct(element)}
            >
              <AiOutlineMinusCircle />
            </StyledButtons>
            <StyledTypo tag="p" fontSize="seven" fontColor="#333333">
              {element.qty}
            </StyledTypo>
            <StyledButtons
              location="cartplus"
              onClick={() => AddProduct(element)}
            >
              <AiOutlinePlusCircle />
            </StyledButtons>
          </DivStyled>
        </DivStyled>
        <DivStyled location="cartRemove">
          <StyledButtons
            location="cartremove"
            onClick={() => RemoveProduct(element)}
          >
            <AiOutlineDelete />
          </StyledButtons>
        </DivStyled>
      </DivStyled>
    </StyledLi>
  );
};

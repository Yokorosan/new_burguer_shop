import { Li } from "./Product";
import { StyledUl } from "../../styles/containerUl";

export const Ul = ({ food, addFoodCart, success }) => {
  return (
    <StyledUl location="main">
      {food.map((element, index) => {
        return (
          <Li
            key={index}
            element={element}
            addFoodCart={addFoodCart}
            success={success}
          />
        );
      })}
    </StyledUl>
  );
};

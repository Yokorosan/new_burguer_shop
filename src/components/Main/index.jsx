import { Ul } from "./ProductList";
import { StyledMain } from "./styled";

export const Main = ({ food, addFoodCart, success }) => {
  return (
    <StyledMain>
      <Ul food={food} addFoodCart={addFoodCart} success={success} />
    </StyledMain>
  );
};

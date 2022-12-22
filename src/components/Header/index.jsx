import { Img } from "./Logo";
import { StyledHeader } from "./styled";
import Logo from "../../assets/MaskGroup.svg";
import { SearchForm } from "./SearchBox";

export const Header = ({
  valueInput,
  setValueInput,
  filterCart,
  notify,
  warn,
  food,
}) => {
  return (
    <StyledHeader>
      <Img src={Logo} alt={"Hamburgueria Kenzie"} />
      <SearchForm
        valueInput={valueInput}
        setValueInput={setValueInput}
        filterCart={filterCart}
        notify={notify}
        warn={warn}
        food={food}
      />
    </StyledHeader>
  );
};

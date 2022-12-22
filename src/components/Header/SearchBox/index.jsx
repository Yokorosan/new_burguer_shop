import { StyledButtons } from "../../styles/buttons";
import { StyledForm } from "../../styles/form";
import { StyledInput } from "../../styles/input";
import { useState } from "react";

export const SearchForm = ({
  valueInput,
  setValueInput,
  filterCart,
  notify,
  warn,
  food,
}) => {
  const [handleInput, setHandleInput] = useState("");
  return (
    <>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();

          const checkFood = food.filter(
            (item) =>
              item.name.toLowerCase().includes(handleInput.toLowerCase()) ||
              item.category.toLowerCase().includes(handleInput.toLowerCase())
          );

          if (handleInput === "") {
            return notify();
          } else if (checkFood.length === 0) {
            return warn();
          } else {
            setValueInput(handleInput);
            filterCart(valueInput);
            setHandleInput("");
          }
        }}
      >
        <StyledInput
          placeholder="Digitar Pesquisa"
          location="header"
          value={handleInput}
          onChange={(event) => setHandleInput(event.target.value)}
        />
        <StyledButtons type="submit">Pesquisar</StyledButtons>
      </StyledForm>
    </>
  );
};

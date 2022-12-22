/* eslint-disable react-hooks/exhaustive-deps */
import "./components/styles/App.css";
import { useEffect, useState } from "react";
import { instance } from "./services/api";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Aside } from "./components/Cart";
import { DivStyled } from "./components/styles/container";
import { StyledTypo } from "./components/styles/typograph";
import { StyledButtons } from "./components/styles/buttons";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [food, setFood] = useState([]);
  const [cart, setCart] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const [search, setSearch] = useState(false);

  const newFoodList = food.filter((item) =>
    valueInput === ""
      ? true
      : item.name.toLowerCase().includes(valueInput.toLowerCase()) ||
        item.category.toLowerCase().includes(valueInput.toLowerCase())
  );

  const notify = () => {
    toast.warn("Digite o Nome do Produto", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const warn = () => {
    toast.error("Não Foi Encontrado Nenhum Produto Com Esse Nome", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const success = () => {
    toast.success("Produto adicionado com sucesso", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    const getFood = async () => {
      try {
        const { data: resp } = await instance.get("/products");
        setFood(resp);
      } catch (err) {
        console.log(err);
      }
    };
    return () => {
      getFood();
    };
  }, []);

  const addFoodCart = (elementFood) => {
    const exist = cart.find((element) => element.id === elementFood.id);
    if (exist) {
      const newCart = cart.map((item) => {
        if (item.id === elementFood.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...elementFood, qty: 1 }]);
    }
  };

  const filterCart = () => {
    setSearch(true);
  };

  const resetSearch = () => {
    setValueInput("");
    setSearch(false);
  };
  const resetCart = () => {
    const success = () => {
      toast.success("Carrinho Esvaziado", {
        position: toast.POSITION.TOP_CENTER,
      });
    };
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Deseja Limpar o carrinho?")) {
      setCart([]);
      success();
    }
  };

  return (
    <div className="App">
      <ToastContainer />
      <Header
        valueInput={valueInput}
        setValueInput={setValueInput}
        filterCart={filterCart}
        notify={notify}
        warn={warn}
        food={food}
      />
      {search ? (
        <DivStyled location="results">
          <DivStyled location="resultsTypo">
            <StyledTypo tag="h2" fontSize="one">
              {"Resultados para:"}
            </StyledTypo>
            <StyledTypo tag="p" fontSize="one" fontColor="#828282">
              {valueInput}
            </StyledTypo>
          </DivStyled>
          <StyledButtons onClick={() => resetSearch()}>
            {"Limpar Pesquisa"}
          </StyledButtons>
        </DivStyled>
      ) : (
        <></>
      )}
      <DivStyled location="body">
        <Main food={newFoodList} addFoodCart={addFoodCart} success={success} />
        <Aside cart={cart} setCart={setCart} resetCart={resetCart} />
      </DivStyled>
    </div>
  );
}

export default App;

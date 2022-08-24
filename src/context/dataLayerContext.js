import { useContext, useReducer, createContext } from "react";
import { products } from "../products";
const DataLayerContext = createContext();

const initialDataState = {
  productData: [],
  filteredData: []
};

const DataLayerProvider = ({ children }) => {
  const dataReducer = (state, action) => {
    switch (action.type) {
      case "SET_PRODUCT_DATA":
        return { ...state, productData: [...products] };
      case "SET_FILTERED_DATA":
        return { ...state, filteredData: [...action.payload] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(dataReducer, initialDataState);

  return (
    <DataLayerContext.Provider
      value={{ state, dispatch }}
    ></DataLayerContext.Provider>
  );
};

const useDataLayer = () => useContext(DataLayerContext);

export { useDataLayer, DataLayerProvider };

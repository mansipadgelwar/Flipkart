import { ProductCard } from "./components/ProductCard";
import "./styles.css";
import { Filter } from "./components/Filter";
import { useDataLayer } from "./context/dataLayerContext";
import { useEffect } from "react";

export default function App() {
  const { state } = useDataLayer();

  useEffect(() => {
    console.log("hi");
  });

  return (
    <div className="App">
      <div>
        <Filter />
      </div>
      <div className="product_container">
        {state.productData.map((item, index) => {
          return <ProductCard product={item} key={index} />;
        })}
      </div>
    </div>
  );
}

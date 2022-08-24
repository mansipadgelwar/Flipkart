import { useEffect, useState } from "react";
import { useDataLayer } from "../context/dataLayerContext";

let filterBySizeDB = [
  { id: 1, size: "S", checked: false },
  { id: 2, size: "M", checked: false },
  { id: 3, size: "L", checked: false },
  { id: 4, size: "XL", checked: false }
];

let filterByBrandDB = [
  { id: 1, brand: "Vebnor", checked: false },
  { id: 2, brand: "Killer", checked: false },
  { id: 3, brand: "Purvaja", checked: false },
  { id: 4, brand: "Helmont", checked: false },
  { id: 5, brand: "Roadster", checked: false }
];

let filterByCategoryDB = [
  { id: 1, category: "Men", checked: false },
  { id: 2, category: "Women", checked: false },
  { id: 3, category: "Children", checked: false }
];

const Filter = () => {
  const [size, setSize] = useState(filterBySizeDB);
  const [brand, setBrand] = useState(filterByBrandDB);
  const [category, setCategory] = useState(filterByCategoryDB);
  const { state, dispatch } = useDataLayer();

  const handleSizeChecked = (id) => {
    const sizeList = size;
    const changeSizeList = sizeList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSize(changeSizeList);
  };

  const handleBrandChecked = (id) => {
    const brandList = brand;
    const changeBrandList = brandList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setBrand(changeBrandList);
  };

  const handleCategoryChecked = (id) => {
    const categoryList = category;
    const changeCategoryList = categoryList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategory(changeCategoryList);
  };

  useEffect(() => {
    const applyFilter = () => {
      let filteredData = state.products;

      //filter by size
      const sizeChecked = size
        .filter((item) => item.checked)
        .map((item) => item.size.toLowerCase());

      if (sizeChecked.length) {
        filteredData = filteredData?.filter((item) =>
          sizeChecked.includes(item.size)
        );
      }

      //filter by brand

      const brandChecked = brand
        .filter((item) => item.checked)
        .map((item) => item.brand.toLowerCase());

      if (brandChecked.length) {
        filteredData = filteredData?.filter((item) =>
          brandChecked.includes(item.brand)
        );
      }

      //filter by category
      const categoryChecked = category
        .filter((item) => item.checked)
        .map((item) => item.category.toLowerCase());

      if (categoryChecked.length) {
        filteredData = filteredData?.filter((item) =>
          categoryChecked.includes(item.category)
        );
      }
      dispatch({ type: "SET_FILTERED_DATA", payload: filteredData });
    };
    applyFilter();
  }, [brand, size, category, dispatch, state.products]);

  return (
    <>
      <div className="filter_wrapper">
        <div className="filter_section">
          <div className="filter_heading">
            <label htmlFor="size">Size</label>
            {filterBySizeDB.map((item) => {
              return (
                <>
                  <input
                    type="checkbox"
                    id="size"
                    name={item.size}
                    checked={item.checked}
                    onChange={() => handleSizeChecked(item.id)}
                    value={size}
                  />
                  <label htmlFor={item.size}>{item.size}</label>
                </>
              );
            })}
          </div>
        </div>
        <div className="filter_section">
          <div className="filter_heading">
            <label htmlFor="brand">Brand</label>
            {filterByBrandDB.map((item) => {
              return (
                <>
                  <input
                    type="checkbox"
                    id="brand"
                    name={item.brand}
                    checked={item.checked}
                    onChange={() => handleBrandChecked(item.id)}
                    value={brand}
                  />
                  <label htmlFor={item.brand}>{item.brand}</label>
                </>
              );
            })}
          </div>
        </div>
        <div className="filter_section">
          <div className="filter_heading">
            <label htmlFor="category">Category</label>
            {filterByCategoryDB.map((item) => {
              return (
                <>
                  <input
                    type="checkbox"
                    id="category"
                    name={item.category}
                    checked={item.checked}
                    onChange={() => handleCategoryChecked(item.id)}
                    value={category}
                  />
                  <label htmlFor={item.category}>{item.category}</label>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { Filter };

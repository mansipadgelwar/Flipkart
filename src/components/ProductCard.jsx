const ProductCard = ({ product }) => {
  return (
    <>
      <div className="product_wrapper">
        <div className="product_image">
          <img alt={product.title} src={product.image} />
        </div>
        <div className="product_description">
          <div className="brand_name">{product.brand}</div>
          <div className="product_title">{product.title}</div>
          <div className="product_price">Rs. {product.price}</div>
        </div>
      </div>
    </>
  );
};

export { ProductCard };

//import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";
function ProductList() {
  return (
    <div className="product-item text-center p-4 border border-gray-300 rounded-lg shadow-md flex flex-wrap justify-center gap-6">
      {products.map((product) => (
        // <div key={product.id}>
        //   <img
        //     src={product.image}
        //     alt={product.name}
        //     className="vinyl-image rounded-full w-32 h-32 object-cover mb-2"
        //   />
        //   <p className="font-semibold text-lg" style={{ color: "#a1431e" }}>
        //     {product.name}
        //   </p>
        //   <p className="color: '#a1431e' text-md">{product.price}</p>
        // </div>
        <ProductItem product={product} />
      ))}
    </div>
  );
}

export default ProductList;

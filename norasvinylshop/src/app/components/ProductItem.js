function ProductItem({ product }) {
  return (
    // i removed the key={product.id}
    <div className="productItem w-64 text-center p-4 border border-gray-300 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="vinyl-image rounded-full w-32 h-32 object-cover mb-2"
      />
      <p className="font-semibold text-lg" style={{ color: "#a1431e" }}>
        {product.name}
      </p>
      <p className="color: '#a1431e' text-md">{product.price}</p>
    </div>
  );
}

export default ProductItem;

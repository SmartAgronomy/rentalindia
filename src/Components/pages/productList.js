import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/products");
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.productName}</strong>
            <p>{product.productDescription}</p>
            <p>Amount: {product.amount}</p>
            <p>{product.category.categoryName}</p>
            {product.productImage && (
              <img
                src={product.productImage.location}
                alt={product.productImage.filename}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

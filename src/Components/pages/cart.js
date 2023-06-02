import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./styles/cart.css"

function Cart() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cookies] = useCookies(["access_token"]);

  useEffect(() => {
    const userId = localStorage.getItem("userID");
    const token = cookies.access_token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .post("http://localhost:8080/api/getCart", { userId }, { headers })
      .then((res) => {
        console.log("Cart Added Successfully");
        const cartData = res.data?.data?.cart || [];
        setData(cartData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!cookies.access_token) {
    return <p>Please login to view the cart.</p>;
  }

  const handelRemoveFromCart = async (productId) => {
    const userId = localStorage.getItem("userID");
    const token = cookies.access_token;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    try {
      await axios.post('http://localhost:8080/api/removeFromCart', { productId }, { headers });
      console.log("Product removed from cart successfully.");
      // Refresh cart data
      const response = await axios.post('http://localhost:8080/api/getCart', { userId }, { headers });
      const cartData = response.data?.data?.cart || [];
      setData(cartData);
    } catch (error) {
      const { message } = error.response.data;
      console.log(message);
      // Handle error message or perform any other actions
    }
  };
  
  
  
  // ...
  

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <h1>PRODUCT LIST</h1>
        <div className="product-list">
          {data.map((product) => (
            <div
              key={product._id}
              className="product-item"
            >
              <img
                className="product-image"
                src={product.productImage.location}
                alt={product.productImage.filename}
              />
              <p className="product-details">
                {product.productName} in {product.category.categoryName}
              </p>
              <p className="product-price">PRICE: {product.amount} Only/-</p>

              <button
                className="remove-button"
                onClick={() => handelRemoveFromCart(product._id)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;

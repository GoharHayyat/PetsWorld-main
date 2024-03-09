import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./productdetails.css";
import Button from "@mui/material/Button";
// import { motion } from "framer-motion";
import Box from "@mui/joy/Box";

import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cart";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClassName = i <= rating ? "star filled" : "star empty";
    stars.push(<span key={i} className={`star-icon ${starClassName}`} />);
  }
  return <div className="star-rating">{stars}</div>;
};

export default function ProductDetails({
  // product,
  addToCartHandler,
  searchQuery,
}) {
  const id = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleCartClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      handleAddToCart();
      setQuantity(1);
      setIsClicked(false);
    }, 2200);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const product = data.find((x) => x._id === id.id);

  const dispatch = useDispatch();
  const isMatch =
    searchQuery &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase());
  console.log(isMatch);
  const handleAddToCart = () => {
    // toast.success("Added to Cart");
    dispatch(addToCart({ item: { ...product, count: quantity } }));
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          style={{ height: "20%", width: "13%" }}
          src="/img/loader.gif"
          alt="Loading..."
        />
      </Box>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const imageUrl = `http://localhost:5000/${product.image}`;

  return (
    <div className="container">
      {/* <div className="back-link">
        <Link to="/shop">
          <svg
            className="back-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgb(126 34 206)"
              d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
            />
          </svg>
        </Link>
      </div> */}
      <div className="main-content">
        <div style={{ marginTop: "2%" }} className="main-image">
          <img src={imageUrl} alt={product.name} className="product-image" />
        </div>
        <div className="product-details">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-price">{product.price}.Rs</div>
          <div className="product-rating">
            <StarRating rating={product.rating} />
            <span className="review-count">{product.rating} Reviews</span>
          </div>
          <div style={{ display: "flex" }}>
            <h2>Product Details</h2>
          </div>
          <div className="product-description">
            {/* <h2>Product Details</h2> */}
            <p>{product.description}</p>
          </div>
          <div style={{ marginBottom: "3%" }} className="quantity-control">
            <Button
              onClick={handleDecrement}
              variant="outlined"
              color="error"
              className="decrement-button"
            >
              -
            </Button>

            <span
              style={{
                marginLeft: "6px",
                marginRight: "6px",
                fontWeight: "700",
                alignItems: "center",
              }}
              className="quantity"
            >
              {quantity}
            </span>

            <Button
              onClick={handleIncrement}
              variant="outlined"
              color="success"
              className="increment-button"
            >
              +
            </Button>
          </div>

          <div>
            <button
              className={`cart-button ${isClicked ? "clicked" : ""} ${
                isClicked ? "green" : ""
              }`}
              onClick={handleCartClick}
            >
              <span className="add-to-cart">Add to cart</span>
              <span className="added">Added</span>
              <i className="fa fa-shopping-cart"></i>
              <i className="fa fa-box"></i>
            </button>
          </div>
          <br />
          <hr />
          <br />
          <div
            id="details"
            class="flex flex-col text-gray-500/80 text-sm gap-1"
          >
            <span>Category: {product.category}</span>
            <hr class="w-[200px]" />
            <span>Brand: {product.brand}</span>
            <hr class="w-[200px]" />
            <span>Type: {product.categoryext}</span>
            <hr class="w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

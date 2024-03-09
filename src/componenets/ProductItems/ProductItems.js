import React from "react";
import { Link } from "react-router-dom";
import "./productitems.css";
import "font-awesome/css/font-awesome.min.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClassName = i <= rating ? "star filled" : "star empty";
    stars.push(<span key={i} className={`star-icon ${starClassName}`} />);
  }
  return <div className="star-rating">{stars}</div>;
};

export default function ProductItems({
  product,
  addToCartHandler,
  searchQuery,
}) {
  const dispatch = useDispatch();
  const isMatch =
    searchQuery &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase());

  const handleAddToCart = () => {
    toast.success("Added to Cart");
    dispatch(addToCart({ item: { ...product, count: 1 } }));
  };

  if (searchQuery && !isMatch) {
    return null;
  }

  const imageUrl = `http://localhost:5000/${product.image}`;

  return (
    <section id="product1" className="section-p1">
      <div className="pro-container">
        <div className="pro">
          <Link to={`/shop/products/${product._id}`}>
            <img src={imageUrl} alt={product.name} />
          </Link>
          <div className="des">
            <span>
              {product.brand}: {product.category}
            </span>
            <h5>{product.name}</h5>
            <div className="star">
              <StarRating rating={product.rating} />
            </div>
            <h4>{product.price}.Rs</h4>
          </div>
          {/* <button onClick={handleAddToCart}>
            <i className="fa fa-shopping-cart cart"></i>
          </button> */}
          <button
            onClick={handleAddToCart}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <i className="fa fa-shopping-cart cart"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

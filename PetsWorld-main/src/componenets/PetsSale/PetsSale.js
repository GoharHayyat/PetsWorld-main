// import React, { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./PetsSale.css";
// import { FaHeart } from "react-icons/fa";
import { AiTwotoneEnvironment } from "react-icons/ai";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// export default function PetsSale({ pets, isLiked }) {

export default function PetsSale({ pets }) {
  // const [liked, setLiked] = useState(isLiked);

  // const handleHeartClick = () => {
  //   setLiked(!liked);
  // };

  const pet = pets;
  const imageUrl =
    pet.images && pet.images.length > 0
      ? `http://localhost:5000/${pet.images[0]}`
      : "";

  return (
    <section id="product1" className="section-p1">
      <div className="pro-container">
        <div className="pro">
          <Link to={`/buyandsell/${pet._id}`}>
            <img src={imageUrl} alt={pet.petName} />
          </Link>
          <div className="des">
            <span>
              {pet.pet} ({pet.breed})
            </span>
            <h5>{pet.title}</h5>
            <h4>Rs {pet.price}</h4>
            <div>
              <div className="star">
                <AiTwotoneEnvironment />
                <span>
                  {pet.city}, {pet.state}
                </span>
              </div>
            </div>
          </div>
          <div className="cart">
            <Link to={`/buyandsell/${pet._id}`}>
              <ArrowForwardIosIcon
                style={{
                  marginBottom: "8px",
                }}
              />
            </Link>
            {/* <FaHeart
              style={{
                marginBottom: "5px",
                color: liked ? "rgb(243, 181, 25)" : "gray",
              }}
              onClick={handleHeartClick}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

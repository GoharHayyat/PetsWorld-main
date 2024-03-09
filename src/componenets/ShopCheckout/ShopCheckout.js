import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

export default function ShopCheckout() {
  const cart = useSelector((state) => state.cart.cart);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const config = {
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const products = [];
    cart.map((item, i) =>
      products.push({
        item: [i, { name: item.name, price: item.price }],
        quantity: item.count,
      })
    );
    console.log(products, cart);
    const deliveryAddress = `mll;l;`;
    console.log(deliveryAddress);
    try {
      const { data } = await axios.post(`http://localhost:5000/api/order`, {
        products: products,
        deliveryAddress,
      });
      console.log(data);
      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ marginLeft: "30px", marginTop: "40px" }}>
        <h4 style={{ fontWeight: "bold", fontSize: "40px", color: "grey" }}>
          Enter Delivery Address
        </h4>
        <br />
        <div className="form-group">
          <div>
            <input
              type="text"
              className="form-control input"
              id="autocomplete"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control input"
              id="autocomplete"
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            className="form-control input"
            id="autocomplete"
            placeholder="Street"
          />
          <input
            type="text"
            className="form-control input"
            id="inputCity"
            placeholder="City"
          />
          <input
            type="text"
            className="form-control input"
            id="inputState"
            placeholder="State"
          />
          <input
            type="text"
            className="form-control input"
            id="inputZipp"
            placeholder="Zip"
          />
          <input
            type="text"
            className="form-control input"
            id="inputCountyy"
            placeholder="Country"
            required
          />

          <motion.button
            onClick={handleSubmit}
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black/70 hover:bg-black rounded p-2 w-full md:w-48 text-white text-base font-semibold"
          >
            Continue to Payment
          </motion.button>
        </div>
      </div>
    </>
  );
}

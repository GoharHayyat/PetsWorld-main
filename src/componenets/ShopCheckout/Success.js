import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setCart } from "../../features/Cart";

export default function Success() {
  const saveOrder = async (order) => {
    try {
      await axios.post("http://localhost:5000/api/order/success", {
        order: order,
      });
      console.log("Order saved successfully");
      localStorage.setItem("cart", JSON.stringify([]));
      dispatch(setCart([]));
    } catch (error) {
      console.error("Error saving order:", error);
    }
  };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const user = JSON.parse(localStorage.getItem("user")) ?? {};
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  const order = {
    user_id: user._id,
    user_name: `${user.f_name ?? ""} ${user.l_name ?? ""}`,
    user_email: user.email,
    user_phone: user.phone,
    products: [...cart],
    subtotal: `${subtotal} Rs.`,
  };

  if (cart.length !== 0) {
    console.log("here");
    saveOrder(order);
  }

  return (
    <div style={{ textAlign: "center", padding: "40px 0" }}>
      {/* <h1 style={{ color: '#88B04B', fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif', fontWeight: 900, fontSize: '40px', marginBottom: '10px' }}>Success</h1> */}
      <div
        className="card"
        style={{
          background: "white",
          padding: "60px",
          borderRadius: "4px",
          boxShadow: "0 2px 3px #C8D0D8",
          display: "inline-block",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i
            style={{
              color: "#9ABC66",
              fontSize: "100px",
              lineHeight: "200px",
              marginLeft: "-15px",
            }}
          >
            ✓
          </i>
        </div>
        <h1>Success</h1>
        <p>
          Your order has been placed Sucessfully
          <br />
          Thanks for shoping!
        </p>
      </div>
    </div>
  );
}

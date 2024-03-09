import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCart, setIsCartOpen } from "../../features/Cart";
import CartTile from "../CartTile/CartTile";
import { useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

function CartMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart !== null && storedCart !== undefined && storedCart !== []) {
      dispatch(setCart(JSON.parse(storedCart)));
    }
  }, [dispatch]);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);

  return (
    <div
      className={`${
        isCartOpen ? "block" : "hidden"
      } z-[1000] bg-black/40 fixed w-full h-full left-0 top-0 overflow-auto scrollbar`}
    >
      {/* <div className='hidden md:block md:w-[70%] md:fixed md:top-0 md:bottom-0 md:left-0' onClick={()=>dispatch(setIsCartOpen({}))}></div> */}
      {/* Cart Sidebar  */}
      <div className="fixed right-0 top-0 w-full md:w-[max(400px,30%)] h-full bg-white">
        <div className="p-7 overflow-auto h-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-teal-600">
              Cart ({cart.length})
            </h3>
            {/* <div  onClick={()=>dispatch(setIsCartOpen({}))}>
                        X
                    </div> */}
            <MDBBtn
              onClick={() => dispatch(setIsCartOpen({}))}
              className="btn-close"
              color="none"
              aria-label="Close"
            />
          </div>
          <div>
            {cart.map((item, i) => (
              <div key={`${item.name}-${item._id}`}>
                <div>
                  <CartTile item={item} />

                  <hr />
                </div>
              </div>
            ))}
          </div>
          <div className="my-5 mx-0">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl  text-teal-600">SUBTOTAL:</h1>
              <h1 className="font-bold text-2xl">RS.{totalPrice}</h1>
            </div>
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white rounded min-w-full py-4 px-10 my-4 mx-0"
              onClick={() => {
                navigate("/shopcheckout");
                dispatch(setIsCartOpen({}));
              }}
            >
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartMenu;

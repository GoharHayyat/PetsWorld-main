// import React from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   decreaseCount,
//   increaseCount,
//   removeFromCart,
// } from "../../features/Cart";
// import { MDBBtn } from "mdb-react-ui-kit";

// function CartTile({ item }) {
//   const dispatch = useDispatch();

//   return (
//     <div className="flex justify-between items-center py-4 px-0 select-none">
//       <div className="grow shrink basis-[35%]">
//         <img
//           src={`http://localhost:5000/${item.image}`}
//           alt={item?.name}
//           className="w-28 h-36"
//         />
//       </div>

//       <div className="flex flex-col justify-center gap-8 grow shrink basis-[65%] overflow-hidden">
//         {/* Item name and Close */}
//         <div className="flex justify-between items-center mb-1 w-[100%]">
//           <Link className="w-[70%]" to={`/shop/products/${item._id}`}>
//             <h2
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.95 }}
//               className="text-xl font-bold whitespace-nowrap text-ellipsis overflow-hidden hover:text-teal-800 cursor-pointer"
//             >
//               {item.name}
//             </h2>
//           </Link>
//           {/* <div
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.8 }}
//             onClick={() => dispatch(removeFromCart({ _id: item._id }))}
//           >
//             X
//           </div> */}
//           <MDBBtn
//             onClick={() => dispatch(removeFromCart({ _id: item._id }))}
//             className="btn-close"
//             color="none"
//             aria-label="Close"
//           />
//         </div>
//         {/* Item quantity */}
//         <div className="flex justify-between items-center my-4 mx-0 ">
//           <div
//             style={{ height: "26px", width: "45px" }}
//             className="flex items-center border-solid border border-slate rounded-md"
//           >
//             <div
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.8 }}
//               onClick={() => dispatch(decreaseCount({ _id: item._id }))}
//             >
//               -
//             </div>
//             <p style={{ marginTop: "14px" }} className="border-x px-2">
//               {item.count}
//             </p>
//             <div
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.8 }}
//               onClick={() => dispatch(increaseCount({ _id: item._id }))}
//             >
//               +
//             </div>
//           </div>
//           {/* Price */}
//           <h2 className="text-xl font-bold">RS.{item.price}</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartTile;

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../features/Cart";
import { MDBBtn } from "mdb-react-ui-kit";

function CartTile({ item }) {
  const dispatch = useDispatch();

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.8 },
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ _id: item._id }));
  };

  return (
    <motion.div
      className="flex justify-between items-center py-4 px-0 select-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="grow shrink basis-[35%]">
        <motion.img
          src={`http://localhost:5000/${item.image}`}
          alt={item?.name}
          className="w-28 h-36"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
        />
      </div>

      <div className="flex flex-col justify-center gap-8 grow shrink basis-[65%] overflow-hidden">
        <div className="flex justify-between items-center mb-1 w-[100%]">
          <Link className="w-[70%]" to={`/shop/products/${item._id}`}>
            <motion.h2
              className="text-xl font-bold whitespace-nowrap text-ellipsis overflow-hidden hover:text-teal-800 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.h2>
          </Link>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleRemove}
          >
            <MDBBtn className="btn-close" color="none" aria-label="Close" />
          </motion.div>
        </div>

        <div className="flex justify-between items-center my-4 mx-0 ">
          <button
            class="btn btn-primary px-3 me-2"
            onClick={() => dispatch(decreaseCount({ _id: item._id }))}
          >
            <i>-</i>
          </button>
          <motion.p
            style={{ marginTop: "14px" }}
            className="border-x px-2"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {item.count}
          </motion.p>
          <button
            class="btn btn-primary px-3 me-2"
            onClick={() => dispatch(increaseCount({ _id: item._id }))}
          >
            <i>+</i>
          </button>

          {/* <div
            style={{ height: "26px", width: "45px" }}
            className="flex items-center border-solid border border-slate rounded-md"
          > */}

          {/* <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => dispatch(decreaseCount({ _id: item._id }))}
            >
              -
            </motion.div> */}

          {/* <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => dispatch(increaseCount({ _id: item._id }))}
            >
              +
            </motion.div> */}
          {/* </div> */}
          <h2 className="text-xl font-bold">RS.{item.price}</h2>
        </div>
      </div>
    </motion.div>
  );
}

export default CartTile;

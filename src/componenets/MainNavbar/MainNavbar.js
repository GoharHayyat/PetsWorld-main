import Sidebar from "../Sidebar/Sidebar";
import "./MainNavbar.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginSignupModal from "../LoginSignupModal/LoginSignupModal";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setIsCartOpen } from "../../features/Cart";

// ...

function MainNavbar() {
  const [modalShow, setModalShow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const auth = localStorage.getItem("user");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  //    const userData = JSON.parse(localStorage.getItem("user"));
  //    const username = userData.f_name;
  // const navigate=useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart !== null && storedCart !== undefined && storedCart !== []) {
      dispatch(setCart(JSON.parse(storedCart)));
    }
  }, [dispatch]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    //  localStorage.removeItem("user");
  };
  const logout = () => {
    localStorage.removeItem("user");

    //  navigate('/');
  };

  return (
    <Router>
      <>
        <nav className="navbar navbar_main navbar-expand">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "99%",
            }}
          >
            <div
              style={{
                width: "50%",
                alignItems: "center",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <a
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
                href="/home"
                className="navBarLogo"
              >
                <img
                  alt=""
                  style={{ height: "100%", width: "145%" }}
                  src={"/img/logo.png"}
                ></img>
              </a>
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <div className="navigation ">
                {auth ? (
                  <>
                    {" "}
                    <div className="px-3 navigationhide">
                      <h5 className="hover-underline-animation hover-color-change">
                        <a
                          style={{ marginTop: "14px" }}
                          className="hover-underline-animation hover-color-change"
                          href="/home"
                        >
                          Home
                        </a>
                      </h5>
                    </div>
                    <div
                      style={{ marginTop: "14px" }}
                      className="px-3 navigationhide"
                    >
                      <a
                        id="link_text-90-91"
                        class="ct-link-text"
                        href="/shop"
                        target="_self"
                      >
                        SHOP
                      </a>
                      {/* </h5> */}
                    </div>
                    <div className="px-3 navigationhide">
                      <h5 className="hover-underline-animation hover-color-change">
                        <a
                          style={{ marginTop: "14px", width: "140px" }}
                          className="hover-underline-animation hover-color-change"
                          href="/sep"
                        >
                          Get Appointment
                        </a>
                      </h5>
                    </div>
                    <div className="px-3">
                      <h5 className="hover-underline-animation hover-color-change">
                        <div
                          style={{ marginTop: "14px" }}
                          className="hover-underline-animation hover-color-change"
                          onClick={() => dispatch(setIsCartOpen(true))}
                        >
                          <p
                            style={{
                              zIndex: 1,
                              position: "absolute",
                              right: -8,
                              top: -10,
                              backgroundColor: "violet",
                              color: "white",
                              padding: "0px 5px",
                              fontSize: 14,
                              borderRadius: 50,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontWeight: "bold",
                            }}
                          >
                            {cart.length}
                          </p>
                          <i
                            style={{ zIndex: 2 }}
                            className="fa fa-shopping-cart cart"
                          ></i>
                        </div>
                      </h5>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="px-3 navigationhide">
                      <h5 className="hover-underline-animation hover-color-change">
                        <a
                          style={{ marginTop: "4px" }}
                          className="hover-underline-animation hover-color-change"
                          href="/home"
                        >
                          Home
                        </a>
                      </h5>
                    </div>
                    <div
                      style={{ marginTop: "5px" }}
                      className="px-3 navigationhide"
                    >
                      {/* <h5 className="hover-underline-animation hover-color-change"> */}
                      <a
                        id="link_text-90-91"
                        class="ct-link-text"
                        href="/shop"
                        target="_self"
                      >
                        SHOP
                      </a>
                      {/* </h5> */}
                    </div>
                    <div className="px-3 navigationhide">
                      <h5 className="hover-underline-animation hover-color-change">
                        <a
                          style={{ marginTop: "4px", width: "140px" }}
                          className="hover-underline-animation hover-color-change"
                          href="/sep"
                        >
                          Get Appointment
                        </a>
                      </h5>
                    </div>
                    <div className="px-3">
                      <h5 className="hover-underline-animation hover-color-change">
                        <div
                          style={{ marginTop: "7px" }}
                          className="hover-underline-animation hover-color-change"
                          onClick={() => dispatch(setIsCartOpen(true))}
                        >
                          <p
                            style={{
                              zIndex: 1,
                              position: "absolute",
                              right: -8,
                              top: -10,
                              backgroundColor: "violet",
                              color: "white",
                              padding: "0px 5px",
                              fontSize: 14,
                              borderRadius: 50,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontWeight: "bold",
                            }}
                          >
                            {cart.length}
                          </p>
                          <i
                            style={{ zIndex: 2 }}
                            className="fa fa-shopping-cart cart"
                          ></i>
                        </div>
                      </h5>
                    </div>
                  </>
                )}

                {auth ? (
                  <div className="px-3">
                    <IconButton
                      size="small"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls="avatar-menu"
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <Box
                        sx={{ display: "flex", gap: 2, alignItems: "center" }}
                      >
                        <Avatar
                          variant="soft"
                          style={{ marginBottom: "10px" }}
                        />
                      </Box>
                    </IconButton>
                    <Menu
                      style={{ marginTop: "40px", marginLeft: "28px" }}
                      id="avatar-menu"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={isMenuOpen}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleMenuClose}>
                        <a
                          style={{ color: "black", textDecoration: "none" }}
                          href="/tabs"
                        >
                          My account
                        </a>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleMenuClose();
                          logout();
                          window.location.assign("/");
                        }}
                      >
                        Logout
                      </MenuItem>

                      {/* <MenuItem onClick={handleMenuClose} onClick={logout}>Logout</MenuItem> */}
                    </Menu>
                    <div style={{ width: "40px" }}></div>
                  </div>
                ) : (
                  <div className="px-3">
                    <h5
                      style={{ marginTop: "4px" }}
                      className="hover-underline-animation hover-color-change"
                      onClick={() => setModalShow(true)}
                    >
                      Login
                    </h5>
                  </div>
                )}
              </div>
              <Sidebar />
            </div>
          </div>
        </nav>
        <LoginSignupModal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    </Router>
  );
}

export default MainNavbar;

// // function MainNavbar() {
//   const [modalShow, setModalShow] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const isMenuOpen = Boolean(anchorEl);

//   // Check if user key is present in local storage
//   //   const isLoggedIn = localStorage.getItem("user") !== null;
//   let auth = localStorage.getItem("user");

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   // ...

//   // ...

//   return (
//     <Router>
//       <>

//         {/* ... */}
//         <nav className="navbar navbar_main navbar-expand bg-light">
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "99%",
//             }}
//           >
//             {/* ... */}
//             <div
//               style={{
//                 width: "50%",
//                 display: "flex",
//                 justifyContent: "end",
//                 alignItems: "center",
//               }}
//             >

//               <div className="navigation">
//                 {/* ... */}
//                 {auth ? (
//                   // Render the logout button
//                   <>
//                     <IconButton
//                       size="small"
//                       edge="end"
//                       aria-label="account of current user"
//                       aria-controls="avatar-menu"
//                       aria-haspopup="true"
//                       onClick={handleProfileMenuOpen}
//                       color="inherit"
//                     >
//                       <AccountCircle />
//                     </IconButton>
//                     <Menu
//                       id="avatar-menu"
//                       anchorEl={anchorEl}
//                       anchorOrigin={{
//                         vertical: "top",
//                         horizontal: "right",
//                       }}
//                       keepMounted
//                       transformOrigin={{
//                         vertical: "top",
//                         horizontal: "right",
//                       }}
//                       open={isMenuOpen}
//                       onClose={handleMenuClose}
//                     >
//                       <MenuItem onClick={handleMenuClose}>
//                         <a
//                           style={{ color: "black", textDecoration: "none" }}
//                           href="/tabs"
//                         >
//                           My account
//                         </a>
//                       </MenuItem>
//                       <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//                     </Menu>
//                   </>
//                 ) : null}
//                 {/* ... */}
//                 {!auth && (
//                   // Render the login button
//                   <div className="px-3">
//                     <h5
//                       className="hover-underline-animation hover-color-change"
//                       onClick={() => setModalShow(true)}
//                     >
//                       Login
//                     </h5>
//                   </div>
//                 )}
//               </div>
//               {/* ... */}
//             </div>
//           </div>
//         </nav>
//         {/* ... */}
//       </>
//     </Router>
//   );
// // }

// // export default MainNavbar;

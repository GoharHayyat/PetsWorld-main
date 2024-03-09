import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import logo from "../../assets/img/logo.png";
// import image_sidebar from "../../assets/img/image_sidebar.jpeg";
import LoginSignupModal from "../LoginSignupModal/LoginSignupModal";
import "./Sidebar.css";
import Collapse from "react-bootstrap/Collapse";

function Sidebar(props) {
  const [openLoginSignup, setOpenLoginSignup] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const auth = localStorage.getItem("user");

  return (
    <>
      <Menu style={{ fontFamily: "sans-serif" }} right>
        <div className="sideBar_logo">
          <a href="/home" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              style={{ height: "100%", width: "100%" }}
              alt=""
              src={logo}
            ></img>
          </a>
        </div>
        <a className="menu-item" href="/home">
          Home
        </a>
        <div
          onClick={() => setOpenLoginSignup(!openLoginSignup)}
          style={{ border: "none" }}
          className="menu-item md_cursor_pointer"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              fontWeight: "540",
              borderBottom: "1px solid #c8c7cc",
            }}
          >
            My Account
            {openLoginSignup === false && (
              <svg
                style={{ marginLeft: "8px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            )}
            {openLoginSignup === true && (
              <svg
                style={{ marginLeft: "8px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            )}
          </div>
          <Collapse in={openLoginSignup}>
            <div style={{ marginLeft: "32px" }}>
              <div
                style={{
                  borderBottom: "1px solid #c8c7cc",
                  paddingTop: "15px",
                }}
              >
                {auth ? (
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    className="menu-item"
                    href="/tabs"
                  >
                    My account
                  </a>
                ) : (
                  <button
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                    className="menu-item"
                    onClick={() => setModalShow(true)}
                  >
                    Log in / Sign up
                  </button>
                  // <a
                  //   style={{ textDecoration: "none", color: "inherit" }}
                  //   className="menu-item"
                  //   onClick={() => setModalShow(true)}
                  // >
                  //   Log in / Sign up
                  // </a>
                )}
              </div>
            </div>
          </Collapse>
        </div>
        <a className="menu-item" href="/shop">
          Shop
        </a>
        <a className="menu-item" href="/Buyandsell">
          Buy and Sell
        </a>
        <a className="menu-item" href="/blog">
          Blogs
        </a>
        <a className="menu-item" href="/privacy-policy">
          Privacy Policy
        </a>
        <a className="menu-item" href="/about-us">
          About Us
        </a>
        <a className="menu-item" href="/contact-us">
          Contact Us
        </a>
        {/* <div className="sideBar_bottom">
          <img
            style={{ height: "100%", width: "100%" }}
            alt=""
            src={image_sidebar}
          ></img>
        </div> */}
      </Menu>

      <LoginSignupModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Sidebar;

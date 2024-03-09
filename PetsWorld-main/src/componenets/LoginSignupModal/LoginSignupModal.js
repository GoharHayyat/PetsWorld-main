import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import "./LoginSignupModal.css";
import Forgetpass from "../Forgetpass/Forgetpass";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [isValidFirstName, setIsValidFirstName] = useState(true);
  const [lastName, setLastName] = useState("");
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState(false);

  // ...

  const handleSignUp = async () => {
    if (
      email !== "" &&
      password !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      phoneNumber !== "" &&
      isValidEmail &&
      isValidPassword &&
      isValidFirstName &&
      isValidLastName &&
      isValidPhoneNumber
    ) {
      try {
        let response = await axios.post("http://localhost:5000/api/signup", {
          f_name: firstName,
          l_name: lastName,
          email: email,
          pass: password,
          phone: phoneNumber,
        });

        response = response.data;
        console.log("here");
        localStorage.setItem("user", JSON.stringify(response));
        setSignupSuccess(true);

        props.onHide();
      } catch (error) {
        if (error.response.status === 410) {
          toast.error("User Already Exists!");
        }
      }
    } else {
      toast.error("Enter All Required Details!");
    }
  };

  // ...

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  };
  // name validation
  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPassword(validatePassword(newPassword));
  };
  const validatePassword = (password) => {
    return password.length >= 8;
  };
  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };
  // name validation
  const validateFirstName = (firstName) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(firstName);
  };
  const handleChangeFirstName = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    setIsValidFirstName(validateFirstName(newFirstName));
  };
  const validateLastName = (lastName) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(lastName);
  };
  const handleChangeLastName = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
    setIsValidLastName(validateLastName(newLastName));
  };
  // phone no
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(?:\+92-|0)\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };
  const handleChangePhoneNumber = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    setIsValidPhoneNumber(validatePhoneNumber(newPhoneNumber));
  };

  return (
    <div>
      <ToastContainer />
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingBottom: "14px",
        }}
      >
        <input
          style={{
            width: "100%",
            border: "1px solid #e7e7e7",
            height: "46px",
            borderRadius: "30px",
            padding: "16px",
            fontSize: "18px",
            borderColor: isValidEmail ? "#e7e7e7" : "red",
          }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        ></input>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingBottom: "14px",
        }}
      >
        <input
          style={{
            width: "100%",
            border: "1px solid #e7e7e7",
            height: "46px",
            borderRadius: "30px",
            padding: "16px",
            fontSize: "18px",
            borderColor: isValidPassword ? "#e7e7e7" : "red",
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingBottom: "14px",
        }}
      >
        <input
          style={{
            width: "100%",
            border: "1px solid #e7e7e7",
            height: "46px",
            borderRadius: "30px",
            padding: "16px",
            fontSize: "18px",
            borderColor: isValidFirstName ? "#e7e7e7" : "red",
          }}
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleChangeFirstName}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingBottom: "14px",
        }}
      >
        <input
          style={{
            width: "100%",
            border: "1px solid #e7e7e7",
            height: "46px",
            borderRadius: "30px",
            padding: "16px",
            fontSize: "18px",
            borderColor: isValidLastName ? "#e7e7e7" : "red",
          }}
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChangeLastName}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingBottom: "20px",
        }}
      >
        <input
          style={{
            width: "100%",
            border: "1px solid #e7e7e7",
            height: "46px",
            borderRadius: "30px",
            padding: "16px",
            fontSize: "18px",
            borderColor: isValidPhoneNumber ? "#e7e7e7" : "red",
          }}
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handleChangePhoneNumber}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingBottom: "14px",
        }}
      >
        <button
          className="buttons_hover"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            backgroundColor: "#9a31e4",
            border: "none",
            borderRadius: "30px",
            height: "46px",
            width: "100%",
            justifyContent: "center",
          }}
          onClick={handleSignUp}
        >
          SIGN UP
          {/* {signupSuccess ? "SUCCESSFULLY SIGNED UP!" : "SIGN UP"} */}
        </button>
      </div>
      <div
        style={{
          marginLeft: "22%",
          color: "green",
          fontSize: "20px",
          marginBottom: "10px",
        }}
      >
        {signupSuccess ? "SUCCESSFULLY SIGNED UP!" : ""}
      </div>
      {/* <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "10px",
        }}
      >
        <button
          className="buttons_hover"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            // backgroundColor: "#b05fd7",
            backgroundColor: "#4267b2",
            border: "none",
            borderRadius: "30px",
            height: "46px",
            width: "48%",
            justifyContent: "center",
          }}
        >
          <svg
            style={{ marginTop: "-1px", marginRight: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          FACEBOOK
        </button>
        <button
          className="buttons_hover"
          style={{
            display: "flex",
            alignItems: "center",
            // color: "#b05fd7",
            // border: "1px solid #b05fd7",
            color: "white",
            border: "none",
            backgroundColor: "#db4939",
            borderRadius: "30px",
            height: "46px",
            width: "48%",
            boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
            justifyContent: "center",
          }}
        >
          <svg
            style={{ marginTop: "-1px", marginRight: "5px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
          GOOGLE
        </button> */}
    </div>
    // </div>
  );
}

function Login(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  // const [isLoginDisabled, setIsLoginDisabled] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        pass: password,
      });
      const { token, user } = response.data;
      console.log(token);

      delete user.pass;

      localStorage.setItem("user", JSON.stringify(user));

      localStorage.setItem("token", token);

      setIsLoggedIn(true);
      console.log(isLoggedIn);
      props.onHide();
    } catch (error) {
      toast.error("Invalid credentials");
      // console.log(error);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const checkLoginValidity = () => {
    return isValidEmail && isValidPassword;
  };

  return (
    <div>
      <ToastContainer />
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingBottom: "20px",
        }}
      >
        <input
          style={{
            width: "100%",
            border: "1px solid #e7e7e7",
            height: "46px",
            borderRadius: "30px",
            padding: "16px",
            fontSize: "18px",
          }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValidEmail(validateEmail(e.target.value));
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingBottom: "14px",
        }}
      >
        <input
          style={{
            width: "100%",
            border: "1px solid #e7e7e7",
            height: "46px",
            borderRadius: "30px",
            padding: "16px",
            fontSize: "18px",
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsValidPassword(validatePassword(e.target.value));
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#23253ac7",
          paddingBottom: "14px",
        }}
      >
        <div>
          <label className="container">
            Remember me
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div>
          <button
            // className="hover-underline-animation"
            className="buttons_hover"
            style={{
              display: "flex",
              border: "none",
              borderRadius: "30px",
            }}
            onClick={() => {
              setModalShow(true);
            }}
          >
            Forgot Password?
          </button>
          {/* <a
              // href="/"
              
            >
              
            </a> */}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          paddingBottom: "14px",
        }}
      >
        <button
          className="buttons_hover"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            backgroundColor: "#9a31e4",
            border: "none",
            borderRadius: "30px",
            height: "46px",
            width: "100%",
            justifyContent: "center",
          }}
          onClick={() => {
            if (checkLoginValidity()) {
              handleLogin();
            }
          }}
          disabled={!checkLoginValidity()}
        >
          LOG IN
        </button>
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "13px",
          margin: "0",
          color: "#23253ac7",
        }}
      >
        By Logging In I Agree To The Privacy Policy
      </p>
      <Forgetpass show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

function LoginSignupModal(props) {
  const [loginSignUp, setloginSignUp] = useState(false);

  return (
    <Modal
      onHide={props.onHide}
      style={{
        fontFamily: "ui-sans-serif",
      }}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 style={{ fontSize: "20px" }}>LOGIN / SIGN-UP</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <content>
          {loginSignUp === false && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "20px",
              }}
            >
              <button
                className="buttons_hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  // backgroundColor: "#b05fd7",
                  backgroundColor: "black",
                  border: "none",
                  borderRadius: "30px",
                  height: "46px",
                  width: "48%",
                  justifyContent: "center",
                }}
                onClick={() => setloginSignUp(false)}
              >
                LOG IN
              </button>
              <button
                className="buttons_hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  // color: "#b05fd7",
                  // border: "1px solid #b05fd7",
                  color: "black",
                  border: "1px solid black",
                  backgroundColor: "white",
                  borderRadius: "30px",
                  height: "46px",
                  width: "48%",
                  boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
                  justifyContent: "center",
                }}
                onClick={() => setloginSignUp(true)}
              >
                SIGN UP
              </button>
            </div>
          )}
          {loginSignUp === true && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "20px",
              }}
            >
              <button
                className="buttons_hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  // color: "#b05fd7",
                  // border: "1px solid #b05fd7",
                  color: "black",
                  border: "1px solid black",
                  backgroundColor: "white",
                  borderRadius: "30px",
                  height: "46px",
                  width: "48%",
                  boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
                  justifyContent: "center",
                }}
                onClick={() => setloginSignUp(false)}
              >
                LOG IN
              </button>
              <button
                className="buttons_hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  // backgroundColor: "#b05fd7",
                  backgroundColor: "black",
                  border: "none",
                  borderRadius: "30px",
                  height: "46px",
                  width: "48%",
                  justifyContent: "center",
                }}
                onClick={() => setloginSignUp(true)}
              >
                SIGN UP
              </button>
            </div>
          )}
          {loginSignUp === false && <Login onHide={props.onHide} />}
          {loginSignUp === true && <SignUp onHide={props.onHide} />}
        </content>
      </Modal.Body>
    </Modal>
  );
}

export default LoginSignupModal;

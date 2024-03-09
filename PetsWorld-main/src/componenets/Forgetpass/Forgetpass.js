import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./Forgetpass.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Forget({ onSave }) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [code, setCode] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [usersData, setUsersData] = useState([]);

  const auth = localStorage.getItem("user");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  console.log(usersData);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };
  var randomCode;
  const generateCode = () => {
    randomCode = Math.floor(100000 + Math.random() * 900000);
    setCode(randomCode.toString());
  };

  const handleConfirmationCodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setConfirmationCode(value);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleSave = () => {
    if (!isValidEmail) {
      toast.error("Invalid email format");
      return;
    }
    if (confirmationCode === code) {
      if (password.length >= 8 && password === confirmPassword) {
        console.log(email, password);
        axios
          .put("http://localhost:5000/api/reset", {
            email,
            pass: password,
          })
          .then((response) => {
            console.log(response.data);
            toast.success("Password saved!");
            onSave();
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        toast.error("Check Password Fields");
      }
    } else {
      toast.error("Invalid Confirmation Code");
    }
  };
  const sendEmail = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsersData(response.data);
      const userExists = response.data.some((user) => user.email === email);
      if (!userExists) {
        toast.error("User does not exist");
        return;
      }
      const emailData = {
        to: email,
        from: "petsworld.care@outlook.com",
        subject: "Confirmation Code",
        text: "Your confirmation code is: " + randomCode,
        html: "<h1>Your confirmation code is: " + randomCode + "</h1>",
      };
      console.log("here");

      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/forget",
          emailData
        );
        console.log(response.data);
        toast.success("code sent sucessfully!");
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const sendEmail = async () => {
  //   const emailData = {
  //     to: email,
  //     from: "petsworld.care@outlook.com",
  //     subject: "Confirmation Code",
  //     text: "Your confirmation code is: " + randomCode,
  //     html: "<h1>Your confirmation code is: " + randomCode + "</h1>",
  //   };
  //   console.log("here");

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5000/api/users/forget",
  //       emailData
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleForgetClick = () => {
    if (!email) {
      toast.error("Please enter an email");
      return;
    }

    generateCode();
    sendEmail();
  };

  const userdata = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <ToastContainer />
      {auth ? (
        <div style={{ width: "100%", display: "flex", paddingBottom: "14px" }}>
          <input
            style={{
              width: "100%",
              border: isValidEmail ? "1px solid #e7e7e7" : "1px solid red",
              height: "46px",
              borderRadius: "30px",
              padding: "16px",
              fontSize: "18px",
            }}
            type="email"
            placeholder="Email"
            value={userdata.email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
            required
          />
        </div>
      ) : (
        <div style={{ width: "100%", display: "flex", paddingBottom: "14px" }}>
          <input
            style={{
              width: "100%",
              border: isValidEmail ? "1px solid #e7e7e7" : "1px solid red",
              height: "46px",
              borderRadius: "30px",
              padding: "16px",
              fontSize: "18px",
            }}
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
            required
          />
        </div>
        // {!isValidEmail && <p style={{ color: "red" }}>Invalid email format</p>}
      )}

      <button
        className="buttons_hover"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          backgroundColor: "#4267b2",
          border: "none",
          borderRadius: "30px",
          height: "46px",
          width: "48%",
          justifyContent: "center",
        }}
        onClick={handleForgetClick}
        // onClick={generateCode}
      >
        GET CODE
      </button>
      {/* {code && <p>Generated Code: {code}</p>} */}
      <div style={{ width: "100%", display: "flex", paddingBottom: "14px" }}>
        <input
          style={{
            width: "100%",
            border: "1px solid #e7e7e7",
            height: "46px",
            borderRadius: "30px",
            padding: "16px",
            fontSize: "18px",
          }}
          type="text"
          placeholder="Confirmation code"
          value={confirmationCode}
          onChange={handleConfirmationCodeChange}
        />
      </div>
      <br />
      <br />
      <div style={{ width: "100%", display: "flex", paddingBottom: "14px" }}>
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
          placeholder="New Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div style={{ width: "100%", display: "flex", paddingBottom: "20px" }}>
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
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      {!passwordMatch && <p style={{ color: "red" }}>Passwords do not match</p>}
      {password.length > 0 && password.length < 8 && (
        <p style={{ color: "red" }}>Password must be at least 8 characters</p>
      )}
      <div style={{ width: "100%", display: "flex", paddingBottom: "14px" }}>
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
          onClick={handleSave}
        >
          SAVE
        </button>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "10px",
        }}
      ></div>
    </div>
  );
}

function Forgetpass({ show, onHide }) {
  const handleSave = () => {
    onHide();
  };

  return (
    <>
      <Modal
        style={{
          fontFamily: "ui-sans-serif",
        }}
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 style={{ fontSize: "20px" }}>Forget password</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Forget onSave={handleSave} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Forgetpass;

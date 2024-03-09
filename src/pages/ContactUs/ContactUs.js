import main_heading_below from "../../assets/img/main_heading_below.png";
import contactUs_image from "../../assets/img/contactUs_image.jpeg";
import contactUs_getInTouch1 from "../../assets/img/contactUs_getInTouch1.svg";
import contactUs_getInTouch2 from "../../assets/img/contactUs_getInTouch2.svg";
import contactUs_getInTouch3 from "../../assets/img/contactUs_getInTouch3.svg";
import contactUs_getInTouch4 from "../../assets/img/contactUs_getInTouch4.svg";
import contactUs_getInTouch5 from "../../assets/img/contactUs_getInTouch5.svg";
import contactUs_getInTouch6 from "../../assets/img/contactUs_getInTouch6.svg";
import contactUs_emailPic from "../../assets/img/contactUs_emailPic.jpeg";

import "./ContactUs.css";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import LoginSignupModal from "../../componenets/LoginSignupModal/LoginSignupModal";

function ContactUs() {
  const [openAnswer1, setOpenAnswer1] = useState(false);
  const [openAnswer2, setOpenAnswer2] = useState(false);
  const [openAnswer3, setOpenAnswer3] = useState(false);
  const [openAnswer4, setOpenAnswer4] = useState(false);
  const [openAnswer5, setOpenAnswer5] = useState(false);
  const [openAnswer6, setOpenAnswer6] = useState(false);
  const [openAnswer7, setOpenAnswer7] = useState(false);
  const [openAnswer8, setOpenAnswer8] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <content
        style={{
          fontFamily: "ui-sans-serif",
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            marginBottom: "70px",
            width: "100%",
            height: "400px",
            backgroundColor: "#f4ebf4",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ width: "60%", padding: "20px" }}>
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "65px",
                marginTop: "4rem",
              }}
            >
              Contact & Help Center
            </h1>
            <p style={{ fontSize: "22px" }}>
              Log in to PetsWorld to manage your account information and more.
              Or, visit our Help Center for answers and advice from the Embrace
              Team.
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                className="buttons_hover"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                  backgroundColor: "#b05fd7",
                  border: "none",
                  borderRadius: "18px",
                  height: "40px",
                  width: "150px",
                  justifyContent: "center",
                }}
                onClick={() => setModalShow(true)}
              >
                LOG IN
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            style={{
              width: "40%",
              height: "100%",
              display: "flex",
              alignItems: "end",
            }}
          >
            <img
              style={{ height: "95%", width: "95%" }}
              alt=""
              src={contactUs_image}
            ></img>
          </div>
        </div>
        {/* CONTACT US MAIN HEADING */}
        <div
          style={{
            marginTop: "30px",
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "3rem",
              marginBottom: "0",
            }}
          >
            Contact Us
          </h1>
          <div style={{ textAlign: "center", marginTop: "-6px" }}>
            <img alt="" src={main_heading_below}></img>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                padding: "20px",
              }}
            >
              <p style={{ fontSize: "24px" }}>
                PetsWorld is committed to the health, safety, and well-being of
                our pet parents, team members, and communities. On 3/6/20, all
                of our employees started working from home to guarantee the
                safety of our team members and to help flatten the curve.
              </p>
            </div>
          </div>
        </div>
        {/* GET IN TOUCH */}
        <div style={{ marginBottom: "70px" }}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "0",
              marginTop: "25px",
            }}
          >
            Get In Touch
          </h1>
          <div style={{ textAlign: "center" }}>
            <img alt="" src={main_heading_below}></img>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "85%",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "25px",
                }}
              >
                <div style={{ width: "30%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <img alt="" src={contactUs_getInTouch6}></img>
                    <h4>Policy Quotes & Purchase</h4>
                  </div>
                  <div style={{ fontSize: "18px", paddingLeft: "5%" }}>
                    <p style={{ margin: "10px 0px 6px 0px" }}>
                      <b>Monday – Friday:</b> 9 am – 8 pm
                    </p>
                    <p style={{ margin: "0 0 6px 0" }}>
                      <b>Saturday:</b> 10 am – 4 pm
                    </p>
                    <p style={{ margin: "0 0 6px 0" }}>
                      <b>Phone:</b> (+92) 300-4382099
                    </p>
                  </div>
                </div>
                <div style={{ width: "30%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <img alt="" src={contactUs_getInTouch5}></img>
                    <h4>Customer Care</h4>
                  </div>
                  <div style={{ fontSize: "18px", paddingLeft: "5%" }}>
                    <p style={{ margin: "10px 0px 6px 0px" }}>
                      <b>Monday – Friday:</b> 9 am – 8 pm
                    </p>
                    <p style={{ margin: "0 0 6px 0" }}>
                      <b>Saturday:</b> 10 am – 2 pm
                    </p>
                    <p style={{ margin: "0 0 6px 0" }}>
                      <b>Phone:</b> (+92) 313-6019260
                    </p>
                  </div>
                </div>
                <div style={{ width: "30%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <img alt="" src={contactUs_getInTouch2}></img>
                    <h4>Message Us</h4>
                  </div>
                  <div style={{ fontSize: "18px", paddingLeft: "5%" }}>
                    <p style={{ margin: "10px 0px 6px 0px" }}>
                      <b>Email:</b> pets@world.com
                    </p>
                    <p style={{ margin: "0 0 6px 0" }}>
                      <b>Claims Questions:</b> petsworld@jouney.com
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "35px",
                }}
              >
                <div style={{ width: "30%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <img alt="" src={contactUs_getInTouch3}></img>
                    <h4>Vet Clinic Support</h4>
                  </div>
                  <div style={{ fontSize: "18px", paddingLeft: "5%" }}>
                    <p style={{ margin: "10px 0 6px 0" }}>
                      <b>Vet Support Line:</b> (+92) 300-4382099
                    </p>
                    <p style={{ margin: "0 0 6px 0" }}>
                      <b>Send Documents to:</b> claims@petsworld.com
                    </p>
                  </div>
                </div>
                <div style={{ width: "30%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <img alt="" src={contactUs_getInTouch1}></img>
                    <h4>Mailing Address</h4>
                  </div>
                  <div style={{ fontSize: "18px", paddingLeft: "5%" }}>
                    <p style={{ margin: "10px 0px 6px 0px" }}>
                      P.O. Box 3300 | Islamabad, F1 177
                    </p>
                    <p style={{ margin: "0 0 6px 0" }}>
                      Sending documents by mail may take up to 10 days or
                      longer.
                    </p>
                  </div>
                </div>
                <div style={{ width: "30%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <img alt="" src={contactUs_getInTouch4}></img>
                    <h4>Send Documents or Submit Claims</h4>
                  </div>
                  <div style={{ fontSize: "18px", paddingLeft: "5%" }}>
                    <p style={{ margin: "10px 0px 6px 0px" }}>
                      Please send medical records or requested documents through
                      your <b>PetsWorld</b> account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT US BY EMAIL */}
        <div style={{ marginBottom: "70px" }}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "0",
              marginTop: "25px",
            }}
          >
            Contact Us By Email
          </h1>
          <div style={{ textAlign: "center" }}>
            <img alt="" src={main_heading_below}></img>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              margin: "35px 0 0 0",
            }}
          >
            <div style={{ width: "40%", height: "34vw" }}>
              <img
                alt=""
                src={contactUs_emailPic}
                style={{ height: "100%", width: "100%", borderRadius: "10px" }}
              ></img>
            </div>
            <div
              style={{
                width: "40%",
                height: "34vw",
                padding: "20px",
                display: "grid",
              }}
            >
              <div style={{ width: "100%", display: "flex" }}>
                <input
                  style={{
                    width: "100%",
                    backgroundColor: "#e7e7e7",
                    border: "none",
                    height: "65%",
                    borderRadius: "20px",
                    padding: "16px",
                    fontSize: "18px",
                  }}
                  placeholder="Name"
                ></input>
              </div>
              <div style={{ width: "100%", display: "flex" }}>
                <input
                  style={{
                    width: "100%",
                    backgroundColor: "#e7e7e7",
                    border: "none",
                    height: "65%",
                    borderRadius: "20px",
                    padding: "16px",
                    fontSize: "18px",
                  }}
                  placeholder="Email"
                ></input>
              </div>
              <div style={{ width: "100%", display: "flex" }}>
                <input
                  style={{
                    width: "100%",
                    backgroundColor: "#e7e7e7",
                    border: "none",
                    height: "65%",
                    borderRadius: "20px",
                    padding: "16px",
                    fontSize: "18px",
                  }}
                  placeholder="Subject"
                ></input>
              </div>
              <div style={{ width: "100%", display: "flex" }}>
                <input
                  style={{
                    width: "100%",
                    backgroundColor: "#e7e7e7",
                    border: "none",
                    height: "100%",
                    borderRadius: "20px",
                    padding: "16px",
                    fontSize: "18px",
                  }}
                  placeholder="Message"
                ></input>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT US BY CONTACT */}
        <div>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "0",
              marginTop: "25px",
            }}
          >
            Contact Us By Phone
          </h1>
          <div style={{ textAlign: "center" }}>
            <img alt="" src={main_heading_below}></img>
          </div>
          <div
            style={{
              marginTop: "10px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                padding: "20px",
              }}
            >
              <p style={{ fontSize: "24px" }}>
                Our customer service representatives are available at{" "}
                <b>(+92) 313-6019260</b>
              </p>
              <p style={{ fontSize: "24px" }}>
                <b>Monday-Friday</b> from 9:00 AM to 8:00 PM PST
              </p>
              <p style={{ fontSize: "24px" }}>
                <b>Saturday</b> from 10:00 AM to 6:00 PM PST
              </p>
              <p style={{ fontSize: "24px" }}>
                <b>Closed Sunday</b>
              </p>
            </div>
          </div>
        </div>
        {/* CUSTOMER CARE */}
        <div style={{ marginBottom: "70px" }}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "0",
              marginTop: "25px",
            }}
          >
            Customer Care
          </h1>
          <div style={{ textAlign: "center" }}>
            <img alt="" src={main_heading_below}></img>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                padding: "20px",
              }}
            >
              <p style={{ fontSize: "24px" }}>
                There have been no changes to our hours or service, and we are
                working diligently to make sure the right measures are in place
                to resolve your account and claim requests in a timely manner.
                We appreciate your patience as we are experiencing a higher call
                volume and longer than normal hold times. Almost all account
                management can be achieved online at any time, including filing
                a claim.
              </p>
              <p style={{ fontSize: "24px" }}>
                We've created a complete list of COVID-19 FAQs and resources
              </p>
              <p style={{ fontSize: "24px" }}>
                You can also check our{" "}
                <b>Frequently Asked Questions section Below</b> for help in
                finding an immediate answer to our most commonly asked
                questions. If you can't find your answer, please complete the
                form below and we'll respond quickly to provide assistance.
              </p>
            </div>
          </div>
        </div>
        {/* FREQUENTLY ASKED QUESTIONS */}
        <div style={{ marginBottom: "50px" }}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "0",
              marginTop: "25px",
            }}
          >
            Frequently asked questions
          </h1>
          <div style={{ textAlign: "center" }}>
            <img alt="" src={main_heading_below}></img>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <div
              onClick={() => setOpenAnswer1(!openAnswer1)}
              style={{
                width: "70%",
                border: "2px solid rgb(168 80 212)",
                borderRadius: "10px",
                fontSize: "24px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "540",
                }}
                className="md_questions"
              >
                How do I make a payment?
                <svg
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
              </div>
              <Collapse in={openAnswer1}>
                <div id="collapse-text">
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                  >
                    Making a payment is easy. PetsWorld Services can help you
                    make a payment with no login required.
                  </p>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                  >
                    You can also pay and manage your bill through our app.
                  </p>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                  >
                    Looking for another option? <b> Explore other ways </b> to
                    make a payment.
                  </p>
                </div>
              </Collapse>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <div
              onClick={() => setOpenAnswer2(!openAnswer2)}
              style={{
                width: "70%",
                border: "2px solid rgb(168 80 212)",
                borderRadius: "10px",
                fontSize: "24px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "540",
                }}
                className="md_questions"
              >
                Does PetsWorld offer accident forgiveness?
                <svg
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
              </div>
              <Collapse in={openAnswer2}>
                <div>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                    id="collapse-text"
                  >
                    Yes, we do offer accident forgiveness (not available in CA,
                    CT, and MA).
                  </p>
                </div>
              </Collapse>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <div
              onClick={() => setOpenAnswer3(!openAnswer3)}
              style={{
                width: "70%",
                border: "2px solid rgb(168 80 212)",
                borderRadius: "10px",
                fontSize: "24px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "540",
                }}
                className="md_questions"
              >
                How do I recover my password and user ID?
                <svg
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
              </div>
              <Collapse in={openAnswer3}>
                <div>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                    id="collapse-text"
                  >
                    <b>Visit our recovery page</b> and we'll help you get logged
                    in.
                  </p>
                </div>
              </Collapse>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <div
              onClick={() => setOpenAnswer4(!openAnswer4)}
              style={{
                width: "70%",
                border: "2px solid rgb(168 80 212)",
                borderRadius: "10px",
                fontSize: "24px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "540",
                }}
                className="md_questions"
              >
                How do I get my ID cards?
                <svg
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
              </div>
              <Collapse in={openAnswer4}>
                <div>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                    id="collapse-text"
                  >
                    You can get your digital ID cards on PetsWorld.com.
                  </p>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                    id="collapse-text"
                  >
                    Using PetsWorld Mobile, you can access your cards whether
                    you're logged in or logged out. You can even store your ID
                    cards in your Apple Wallet, too!
                  </p>
                </div>
              </Collapse>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <div
              onClick={() => setOpenAnswer5(!openAnswer5)}
              style={{
                width: "70%",
                border: "2px solid rgb(168 80 212)",
                borderRadius: "10px",
                fontSize: "24px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "540",
                }}
                className="md_questions"
              >
                What isn't covered by pet insurance?
                <svg
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
              </div>
              <Collapse in={openAnswer5}>
                <div
                  style={{
                    paddingTop: "12px",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                  id="collapse-text"
                >
                  <ul>
                    <li>Pre-existing conditions</li>
                    <li>Breeding, whelping, and pregnancy</li>
                    <li>
                      An intentional injury caused by you or any other person or
                      pet residing at your home
                    </li>
                    <li>
                      Injury or illness sustained from fighting, racing,
                      cruelty, or neglect
                    </li>
                    <li>
                      Unless medically necessary, cosmetic procedures like tail
                      docking, ear cropping and dew removal
                    </li>
                    <li>DNA testing or cloning</li>
                    <li>Stem cell therapy not deemed medically necessary</li>
                    <li>Avian Flu or Nuclear War</li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <div
              onClick={() => setOpenAnswer6(!openAnswer6)}
              style={{
                width: "70%",
                border: "2px solid rgb(168 80 212)",
                borderRadius: "10px",
                fontSize: "24px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "540",
                }}
                className="md_questions"
              >
                How will I get paid for a claim?
                <svg
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
              </div>
              <Collapse in={openAnswer6}>
                <div>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                    id="collapse-text"
                  >
                    After your claim is approved, we will issue payment, minus
                    the amount of your deductible and copay. When submitting
                    your claim online, you can choose either direct deposit
                    (fastest option) or check.
                  </p>
                </div>
              </Collapse>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <div
              onClick={() => setOpenAnswer7(!openAnswer7)}
              style={{
                width: "70%",
                border: "2px solid rgb(168 80 212)",
                borderRadius: "10px",
                fontSize: "24px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "540",
                }}
                className="md_questions"
              >
                When can I submit my first claim?
                <svg
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
              </div>
              <Collapse in={openAnswer7}>
                <div>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                    id="collapse-text"
                  >
                    Your accident and illness plan has a 15 day waiting period.
                    So, if you enrolled with PetsWorld on January 1st, your
                    first eligible claim would have a treatment date of January
                    16th.
                  </p>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                    id="collapse-text"
                  >
                    Any claims submitted with treatment dates within your
                    waiting period are ineligible for coverage and may result in
                    pre-existing condition(s) being added to your policy.
                  </p>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                    id="collapse-text"
                  >
                    Your wellness plan just has a 24 hour waiting period. So, if
                    you enrolled on January 1st, your first eligible claim will
                    have a treatment date of January 2nd.
                  </p>
                </div>
              </Collapse>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <div
              onClick={() => setOpenAnswer8(!openAnswer8)}
              style={{
                width: "70%",
                border: "2px solid rgb(168 80 212)",
                borderRadius: "10px",
                fontSize: "24px",
                padding: "20px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "540",
                }}
                className="md_questions"
              >
                Can you tell me if my claim will be covered before I send it to
                you?
                <svg
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
              </div>
              <Collapse in={openAnswer8}>
                <div>
                  <p
                    style={{
                      paddingTop: "12px",
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0",
                    }}
                    id="collapse-text"
                  >
                    We cannot confirm if a specific treatment or service will be
                    covered until we have received the veterinarian invoice and
                    other required information. We assess each claim upon
                    receiving that information and encourage you to send us all
                    claims you incur.
                  </p>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </content>

      <LoginSignupModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ContactUs;

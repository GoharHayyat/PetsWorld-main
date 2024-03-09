import "./Home.css";
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "animate.css";
import "./style.css";
// import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

var index = 0.01;

function CardCategory(props) {
  const delay = index + 0.05;
  index = index + 0.05;

  return (
    <motion.section
      initial={{ opacity: 0.5, scaleY: 0 }}
      whileInView={{
        opacity: 1,
        scaleY: 1,
        transition: {
          type: "spring",
          opacity: { duration: 0.6 },
          delay: delay,
          duration: 0.2,
          stiffness: 80,
          bounce: 0.3,
        },
      }}
      viewport={{ once: true }}
      className="img_shop_combine"
    >
      <img
        whileHover={{ scale: 0.9 }}
        onClick={props.onClick}
        src={props.img}
        alt=""
      />
      <h5>{props.name}</h5>
      <p>{props.off}</p>
    </motion.section>
  );
}

function CardFriendly(props) {
  const delay = index + 0.05;
  index = index + 0.05;

  return (
    <motion.section
      initial={{ opacity: 0.5, scaleY: 0, scaleX: 0 }}
      whileInView={{
        opacity: 1,
        scaleY: 1,
        scaleX: 1,
        transition: {
          type: "spring",
          opacity: { duration: 0.8 },
          delay: delay,
          duration: 0.3,
          stiffness: 80,
          bounce: 0.3,
        },
      }}
      viewport={{ once: true }}
      className="card_friendly"
    >
      <img
        style={{
          width: "100%",
          borderRadius: "30px",
          height: "13vw",
          cursor: "pointer",
          marginBottom: "8px",
        }}
        onClick={props.onClick}
        src={props.img}
        alt=""
      />
      <h5
        style={{
          margin: "0",
          paddingBottom: "0",
          fontSize: "22px",
        }}
      >
        {props.name}
      </h5>
      <p
        style={{
          fontSize: "18px",
        }}
      >
        {props.off}
      </p>
    </motion.section>
  );
}

const handleClick = () => {
  window.location.href = "/shop/Belts";
};

const handleClick_sha = () => {
  window.location.href = "/shop/Shampoos";
};

const handleClick_beds = () => {
  window.location.href = "/shop/Beds";
};

const handleClick_toys = () => {
  window.location.href = "/shop/Toys";
};

const handleClick_bowls = () => {
  window.location.href = "/shop/Bowls";
};

const handleClick_cloths = () => {
  window.location.href = "/shop/Clothes";
};

const handleClick_food = () => {
  window.location.href = "/shop/Food";
};

const handleGetInsuranceButtonClick = () => {
  window.location.href = "/insurance";
};

// ?????????????????????????????????????????????????????????????????????????
const handleClick_cat1 = () => {
  window.location.href = "/shop/Food/1000";
};

const handleClick_cat2 = () => {
  window.location.href = "/shop/Toys/1000";
};

const handleClick_cat3 = () => {
  window.location.href = "/shop/Collars/1000";
};
const handleClick_cat4 = () => {
  window.location.href = "/shop/Toys/1000";
};
const handleClick_cat5 = () => {
  window.location.href = "/shop/Beds/1000";
};
const handleClick_cat6 = () => {
  window.location.href = "/shop/Grooming/1000";
};
function Home() {
  // const navigate = useNavigate();
  const [openAnswer1, setOpenAnswer1] = useState(false);
  const [openAnswer2, setOpenAnswer2] = useState(false);
  const [openAnswer3, setOpenAnswer3] = useState(false);
  const [openAnswer4, setOpenAnswer4] = useState(false);
  const [openAnswer5, setOpenAnswer5] = useState(false);
  localStorage.removeItem("activeTab");
  localStorage.removeItem("searchQuery");
  localStorage.removeItem("buyAndSellData");
  localStorage.removeItem("selectedAnimal");

  // const myhandleClick = () => {
  //   // Navigate to the next page when the button is clicked
  //   navigate("/next");
  // };

  return (
    <div
      style={{
        fontFamily: "ui-sans-serif",
      }}
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={{ height: "100%" }}
                className="d-block w-100"
                src="/img/dog1.jpeg"
                alt="First slide"
              />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <h1 className="display-3 text-white mb-4 animate__animated animate__fadeInDown">
                        We're Here To Keep Your Pet Happy
                      </h1>
                      <p className="fs-5 text-white mb-5 animated slideInDown animate__animated animate__fadeInDown">
                        We are committed to providing a safe, comfortable, and
                        enjoyable environment for your pet.
                      </p>

                      <motion.a
                        href="/info"
                        className="btn btn-primary py-3 px-5"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        More Details
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>

      <div style={{ marginBottom: "50px" }} className="p-5">
        <h1
          className="animate__animated animate__fadeInDown p-5"
          style={{
            textAlign: "center",
            marginBottom: "0",
            marginTop: "25px",
          }}
        >
          Shop By Category
        </h1>
        <div style={{ textAlign: "center" }}>
          <img alt="" src={"/img/main_heading_below.png"}></img>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "space-between",
            margin: "20px 0px 25px 0",
            display: "flex",
            flexWrap: "wrap",
          }}
          className="row"
        >
          <CardCategory
            img={"/img/shop_by_category1.jpeg"}
            name="Belts"
            onClick={handleClick}
          />
          <CardCategory
            onClick={handleClick_sha}
            img={"/img/shop_by_category2.jpeg"}
            name="Shampoos"
          />
          <CardCategory
            onClick={handleClick_toys}
            img={"/img/shop_by_category3.jpeg"}
            name="Toys"
          />
          <CardCategory
            onClick={handleClick_bowls}
            img={"/img/shop_by_category4.jpeg"}
            name="Bowls"
          />
          <CardCategory
            onClick={handleClick_cloths}
            img={"/img/shop_by_category5.jpeg"}
            name="Clothes"
          />
          <CardCategory
            img={"/img/shop_by_category6.jpeg"}
            name="Dog Food"
            onClick={handleClick_food}
          />
          <CardCategory
            img={"/img/shop_by_category7.jpeg"}
            name="Beds"
            onClick={handleClick_beds}
          />
        </div>
      </div>

      {/* PETSWORLD INSURANCE */}

      <div style={{ marginBottom: "50px" }}>
        <h1
          className="animate__animated animate__fadeInDown"
          style={{
            textAlign: "center",
            marginBottom: "0",
            marginTop: "25px",
          }}
        >
          Appointment Scheduling
        </h1>
        <div style={{ textAlign: "center" }}>
          <img alt="" src={"/img/main_heading_below.png"}></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            margin: "20px 0",
          }}
          className="row"
        >
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              padding: "60px",
              backgroundColor: "#f8f9fa",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <motion.h1
              initial={{ scaleY: 0, scaleX: 0 }}
              whileInView={{
                scaleY: 1,
                scaleX: 1,
                transition: {
                  type: "spring",
                  opacity: { duration: 0.6 },
                  delay: 0.5,
                  duration: 0.2,
                  stiffness: 80,
                  bounce: 0.3,
                },
              }}
              viewport={{ once: true }}
            >
              We shed costs — never coverage
            </motion.h1>
            <ul className="insurance_style_none">
              <li>Everything you need for "just-in-case"</li>
              <li>Vetted by Vets</li>
              <li>Personalized for your furry fam</li>
              <li>No hidden fees</li>
            </ul>
            <a
              style={{ backgroundColor: "rgb(176, 95, 215)" }}
              href="/sep"
              className="btn btn-primary py-3 px-5"
            >
              More Details
            </a>
          </div>
          <div style={{ width: "50%", maxWidth: "600px", height: "auto" }}>
            <motion.img
              initial={{ opacity: 0.5, scaleY: 0, scaleX: 0 }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
                scaleX: 1,
                transition: {
                  type: "spring",
                  opacity: { duration: 0.6 },
                  delay: 0.2,
                  duration: 0.2,
                  stiffness: 80,
                  bounce: 0.3,
                },
              }}
              viewport={{ once: true }}
              alt=""
              style={{ width: "100%", height: "auto" }}
              src={"/img/home_insurance1.jpeg"}
            ></motion.img>
          </div>
          <div style={{ width: "50%", maxWidth: "600px", height: "auto" }}>
            <motion.img
              initial={{ opacity: 0.5, scaleY: 0, scaleX: 0 }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
                scaleX: 1,
                transition: {
                  type: "spring",
                  opacity: { duration: 0.6 },
                  delay: 0.2,
                  duration: 0.2,
                  stiffness: 80,
                  bounce: 0.3,
                },
              }}
              viewport={{ once: true }}
              alt=""
              style={{ width: "100%", height: "auto" }}
              src={"/img/home_insurance2.jpeg"}
            ></motion.img>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              padding: "60px",
              backgroundColor: "#f8f9fa",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <motion.h1
              initial={{ opacity: 0.1, scaleY: 0, scaleX: 0 }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
                scaleX: 1,
                transition: {
                  type: "spring",
                  opacity: { duration: 0.6 },
                  delay: 0.5,
                  duration: 0.2,
                  stiffness: 80,
                  bounce: 0.3,
                },
              }}
              viewport={{ once: true }}
            >
              The simplest way to keep tails wagging
            </motion.h1>
            <ul className="insurance_style_none">
              <l>Cleaner teeth and fresher breath</l>
              <li>Preventive meds covered</li>
              <li>Includes vitamins, aromatherapy, and more</li>
              <li>Made convenient for you</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="insurance_plans">
        <h1 className="animate__animated animate__fadeInDown">
          Insurance Plans
        </h1>

        <div className="main_heading_below">
          <img alt="" src="/img/main_heading_below.png" />
        </div>

        <div className="row">
          <motion.div
            initial={{ opacity: 0.5, scaleY: 0, scaleX: 0 }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
              scaleX: 1,
              transition: {
                type: "spring",
                opacity: { duration: 0.5 },
                delay: 0.3,
                duration: 0.2,
                stiffness: 80,
                bounce: 0.3,
              },
            }}
            viewport={{ once: true }}
            className="plan_card"
          >
            <img alt="" src="/img/insurance_plan_dog.jpeg" />
            <h3>Dog Insurance</h3>
            <p>from</p>
            <p className="price">
              <b>RS.2000</b>/mo
            </p>
            <button onClick={handleGetInsuranceButtonClick}>
              Get my price
            </button>
            <div className="learn_more">
              <a href="/" className="hover-underline-animation">
                Learn more
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, scaleY: 0, scaleX: 0 }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
              scaleX: 1,
              transition: {
                type: "spring",
                opacity: { duration: 0.5 },
                delay: 0.3,
                duration: 0.2,
                stiffness: 80,
                bounce: 0.3,
              },
            }}
            viewport={{ once: true }}
            className="plan_card"
          >
            <img alt="" src="/img/insurance_plan_cat.jpeg" />
            <h3>Cat Insurance</h3>
            <p>from</p>
            <p className="price">
              <b>RS.2000</b>/mo
            </p>
            <button onClick={handleGetInsuranceButtonClick}>
              Get my price
            </button>
            <div className="learn_more">
              <a href="/" className="hover-underline-animation">
                Learn more
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      {/* GET INSURANCE PLAN BUTTON */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <button
          className="img_shop_combine buttons_hover"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            backgroundColor: "#b05fd7",
            border: "none",
            borderRadius: "18px",
            height: "40px",
            width: "220px",
            justifyContent: "center",
          }}
          onClick={handleGetInsuranceButtonClick}
        >
          GET INSURANCE PLAN
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

      <div style={{ marginBottom: "50px" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "0",
            marginTop: "25px",
          }}
        >
          Pocket Friendly Deals
        </h1>
        <div style={{ textAlign: "center" }}>
          <img alt="" src={"/img/main_heading_below.png"}></img>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "space-evenly",
            margin: "20px 0 0 0",
          }}
          className="row"
        >
          <CardFriendly
            onClick={handleClick_cat1}
            img={"/img/main_friendly_deal1.jpeg"}
            name="Food Options"
            off="Under Rs 1000"
          />

          <CardFriendly
            onClick={handleClick_cat2}
            img={"/img/main_friendly_deal2.jpeg"}
            name="Toys"
            off="Under Rs 1000"
          />

          <CardFriendly
            onClick={handleClick_cat3}
            img={"/img/main_friendly_deal3.jpeg"}
            name="collars"
            off="Under Rs 1000"
          />
          <CardFriendly
            onClick={handleClick_cat4}
            img={"/img/main_friendly_deal4.jpeg"}
            name="Treats"
            off="Under Rs 1000"
          />
          <CardFriendly
            onClick={handleClick_cat5}
            img={"/img/main_friendly_deal5.jpeg"}
            name="Beds"
            off="Under Rs 1000"
          />
          <CardFriendly
            onClick={handleClick_cat6}
            img={"/img/main_friendly_deal6.jpeg"}
            name="Grooming"
            off="Under Rs 1000"
          />
        </div>
      </div>

      {/* Get Answers What You Are Looking For */}
      <div style={{ marginBottom: "50px" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "0",
            marginTop: "25px",
          }}
        >
          Get Answers What You Are Looking For
        </h1>
        <div style={{ textAlign: "center" }}>
          <img alt="" src={"/img/main_heading_below.png"}></img>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
          }}
        >
          <motion.div
            initial={{ opacity: 0.5, scaleY: 0, scaleX: 0 }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
              scaleX: 1,
              transition: {
                type: "spring",
                opacity: { duration: 0.8 },
                delay: 0.2,
                duration: 0.3,
                stiffness: 80,
                bounce: 0.3,
              },
            }}
            viewport={{ once: true }}
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
              What do I need to consider before adopting a new pet?
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
              <div
                style={{
                  paddingTop: "12px",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
                id="collapse-text"
              >
                Adopting a new pet is an exciting activity for a family, but it
                also comes with new responsibilities and chores. Include all
                family members in the pre-planning process to help set realistic
                expectations.
              </div>
            </Collapse>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0.5, scaleY: 0, scaleX: 0 }}
          whileInView={{
            opacity: 1,
            scaleY: 1,
            scaleX: 1,
            transition: {
              type: "spring",
              opacity: { duration: 0.8 },
              delay: 0.2,
              duration: 0.3,
              stiffness: 80,
              bounce: 0.3,
            },
          }}
          viewport={{ once: true }}
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
              How do I become a good pet parent?
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
              <div
                style={{
                  paddingTop: "12px",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
                id="collapse-text"
              >
                After you have decided to become a pet parent, it is important
                to make sure that your new pet is getting the attention it
                needs.
              </div>
            </Collapse>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, scaleY: 0, scaleX: 0 }}
          whileInView={{
            opacity: 1,
            scaleY: 1,
            scaleX: 1,
            transition: {
              type: "spring",
              opacity: { duration: 0.8 },
              delay: 0.2,
              duration: 0.3,
              stiffness: 80,
              bounce: 0.3,
            },
          }}
          viewport={{ once: true }}
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
              How do I protect my pet from the weather?
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
              <div
                style={{
                  paddingTop: "12px",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
                id="collapse-text"
              >
                Pets rely on you to provide them with protection throughout the
                year. Winter pet protection involves keeping them warm and
                protecting them from special winter hazards. Warmer weather
                poses different hazards, so you need to know how to keep your
                pet safe and healthy during the Summer.
              </div>
            </Collapse>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, scaleY: 0, scaleX: 0 }}
          whileInView={{
            opacity: 1,
            scaleY: 1,
            scaleX: 1,
            transition: {
              type: "spring",
              opacity: { duration: 0.8 },
              delay: 0.2,
              duration: 0.3,
              stiffness: 80,
              bounce: 0.3,
            },
          }}
          viewport={{ once: true }}
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
              How do I manage my pet insurance policy?
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
              <div
                style={{
                  paddingTop: "12px",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
                id="collapse-text"
              >
                You can Contact Us at <b>(+92) 313-6019260</b> to make a payment
                or file a claim. <br></br>Mon – Fri | 8:30 AM – 8:00 PM
                <br></br> Sat 9:00 AM – 1:00 PM (ET)
              </div>
            </Collapse>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, scaleY: 0, scaleX: 0 }}
          whileInView={{
            opacity: 1,
            scaleY: 1,
            scaleX: 1,
            transition: {
              type: "spring",
              opacity: { duration: 0.8 },
              delay: 0.2,
              duration: 0.3,
              stiffness: 80,
              bounce: 0.3,
            },
          }}
          viewport={{ once: true }}
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
                    Injury or illness sustained from fighting, racing, cruelty,
                    or neglect
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
        </motion.div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./DaycareInformation.css";
import LoginSignupModal from "../LoginSignupModal/LoginSignupModal";

const useInView = () => {
  const [isVisible, setIsVisible] = useState(true);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const elementTop =
        window.pageYOffset + elementRef.current.getBoundingClientRect().top;
      const elementHeight = elementRef.current.clientHeight;

      if (elementTop < windowHeight && elementTop + elementHeight >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isVisible, elementRef };
};

const DaycareInformation = () => {
  const { isVisible, elementRef } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isVisible, controls]);

  const handleAPT = () => {
    const auth = localStorage.getItem("user");
    if (auth) {
      window.location.href = "/daycare";
    } else if (!auth) {
      setModalShow(true);
    }
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div
        className={`ct-section-inner-wrap ${isVisible ? "visible" : ""}`}
        ref={elementRef}
      >
        <motion.div
          id="div_block-3-180"
          className="div-block"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            style={{ height: "150px" }}
            id="image-4-180"
            alt="Pet boarding daycare icon"
            src="https://chubbymeows.com/wp-content/uploads/2021/08/04-Pet-boarding-daycare-icon.png"
            className="ct-image"
          />
          <motion.h2
            id="headline-5-180"
            className="headline"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Boarding & Daycare
          </motion.h2>
        </motion.div>
      </div>
      <div
        className={`atomic-subheading ${isVisible ? "visible" : ""}`}
        ref={elementRef}
      >
        <motion.p
          id="text_block-6-180"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Trustworthy boarding and daycare for your furry friend, so that you
          can travel or fulfill your other duties stress-free.
        </motion.p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <motion.button
          id="link_button-7-180"
          className="ct-link-button center-button"
          onClick={handleAPT}
          target="_self"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          // transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Book an Appointment
        </motion.button>
      </div>

      <section id="section-9-180" className="ct-section">
        <div
          className={`ct-section-inner-wrap ${isVisible ? "visible" : ""}`}
          ref={elementRef}
        >
          <motion.h2
            initial={{ opacity: 0.5, scaleY: 0.5 }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
              transition: {
                type: "spring",
                opacity: { duration: 0.3 },
                delay: 0.3,
                duration: 0.3,
                stiffness: 80,
                bounce: 0.3,
              },
            }}
            viewport={{ once: true }}
            id="headline-10-180"
            className="ct-headline atomic-secondary-heading"
          >
            Best Pet Boarding and Daycare Service in Pakistan
          </motion.h2>

          <motion.div
            initial={{ opacity: 0.5, scaleY: 0.5 }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
              transition: {
                type: "spring",
                opacity: { duration: 0.3 },
                delay: 0.3,
                duration: 0.3,
                stiffness: 80,
                bounce: 0.3,
              },
            }}
            viewport={{ once: true }}
            id="text_block-11-180"
            className="ct-text-block atomic-subheading"
          >
            Pets World strives to provide unmatchable boarding and daycare
            services for cats and dogs in Pakistan.
          </motion.div>

          <div
            id="new_columns-12-180"
            className={`ct-new-columns atomic-content-26-columns ${
              isVisible ? "visible" : ""
            }`}
            ref={elementRef}
          >
            <div id="div_block-13-180" className="ct-div-block">
              <motion.img
                id="image-14-180"
                alt="Best pet boarding environment"
                src="https://chubbymeows.com/wp-content/uploads/2021/09/Best-Boarding-for-Cats-illustration_v1.1.png"
                className="ct-image"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0.5, scaleY: 0.5 }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
                transition: {
                  type: "spring",
                  opacity: { duration: 0.3 },
                  delay: 0.3,
                  duration: 0.3,
                  stiffness: 80,
                  bounce: 0.3,
                },
              }}
              viewport={{ once: true }}
              id="div_block-15-180"
              className="ct-div-block"
            >
              <motion.h4
                id="headline-16-180"
                className="ct-headline atomic-content-26-title"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Best Environment for All Pets
              </motion.h4>
              <motion.p
                id="text_block-17-180"
                className="ct-text-block atomic-content-26-text"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                We understand that it's difficult for your pet to stay at other
                places, so we have put together a comfortable environment that
                suits all pets. So whether you are looking for cat boarding or
                dog, you can trust us.
              </motion.p>
            </motion.div>

            <div
              id="new_columns-18-180"
              className={`ct-new-columns atomic-content-26-columns ${
                isVisible ? "visible" : ""
              }`}
              ref={elementRef}
            >
              <motion.div
                initial={{ opacity: 0.5, scaleY: 0.5 }}
                whileInView={{
                  opacity: 1,
                  scaleY: 1,
                  transition: {
                    type: "spring",
                    opacity: { duration: 0.3 },
                    delay: 0.3,
                    duration: 0.3,
                    stiffness: 80,
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true }}
                id="div_block-19-180"
                className="ct-div-block"
              >
                <motion.h4
                  id="headline-20-180"
                  className="ct-headline atomic-content-26-title"
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  We treat your pets as our own
                </motion.h4>
                <motion.p
                  id="text_block-21-180"
                  className="ct-text-block atomic-content-26-text"
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Helping pets and pet owners is more of a passion than a
                  profession for us. Having love for animals enables us to treat
                  our pet as our own.
                </motion.p>
              </motion.div>
              <div id="div_block-22-180" className="ct-div-block">
                <motion.img
                  id="image-23-180"
                  alt="Pet daycare grooming illustration"
                  src="https://chubbymeows.com/wp-content/uploads/2021/09/Pet-Daycare-Illustration.png"
                  className="ct-image"
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 1.4 }}
                />
              </div>
            </div>

            <div
              id="new_columns-24-180"
              className={`ct-new-columns atomic-content-26-columns ${
                isVisible ? "visible" : ""
              }`}
              ref={elementRef}
            >
              <div id="div_block-25-180" className="ct-div-block">
                <motion.img
                  id="image-26-180"
                  alt="Affordable pet boarding icon"
                  src="https://chubbymeows.com/wp-content/uploads/2021/09/Affordable-cat-and-dog-boarding-icon.png"
                  className="ct-image"
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 1.6 }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0.5, scaleY: 0.5 }}
                whileInView={{
                  opacity: 1,
                  scaleY: 1,
                  transition: {
                    type: "spring",
                    opacity: { duration: 0.3 },
                    delay: 0.3,
                    duration: 0.3,
                    stiffness: 80,
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true }}
                id="div_block-27-180"
                className="ct-div-block"
              >
                <motion.h4
                  id="headline-28-180"
                  className="ct-headline atomic-content-26-title"
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  We offer custom affordable packages
                </motion.h4>
                <motion.p
                  id="text_block-29-180"
                  className="ct-text-block atomic-content-26-text"
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  We understand that it's not viable to pay insane amounts for
                  your cat's or dog's daycare, so we provide custom affordable
                  packages tailored for your needs.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0.5, scaleY: 0.5 }}
        whileInView={{
          opacity: 1,
          scaleY: 1,
          transition: {
            type: "spring",
            opacity: { duration: 0.3 },
            delay: 0.3,
            duration: 0.3,
            stiffness: 80,
            bounce: 0.3,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="ct-section-inner-wrap">
          <h2
            id="headline-92-180"
            className="ct-headline atomic-secondary-heading"
          >
            Pet Boarding &amp; Daycare Pricing
          </h2>
          <div
            id="text_block-93-180"
            className="ct-text-block atomic-subheading"
          >
            Budget-friendly pet boarding and daycare services: quality care at
            an affordable price.
          </div>
          <motion.div
            initial={{ opacity: 0.5, scaleY: 0.5 }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
              transition: {
                type: "spring",
                opacity: { duration: 0.3 },
                delay: 0.3,
                duration: 0.3,
                stiffness: 80,
                bounce: 0.3,
              },
            }}
            viewport={{ once: true }}
            id="new_columns-94-180"
            className="ct-new-columns_button"
          >
            <div id="div_block-101-180" className="ct-div-block">
              <div
                id="fancy_icon-102-180"
                className="ct-fancy-icon atomic-pricing-7-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M153.7 144.8c6.9 16.3 20.6 31.2 38.3 31.2H384c17.7 0 31.4-14.9 38.3-31.2C434.4 116.1 462.9 96 496 96c44.2 0 80 35.8 80 80c0 30.4-17 56.9-42 70.4c-3.6 1.9-6 5.5-6 9.6s2.4 7.7 6 9.6c25 13.5 42 40 42 70.4c0 44.2-35.8 80-80 80c-33.1 0-61.6-20.1-73.7-48.8C415.4 350.9 401.7 336 384 336H192c-17.7 0-31.4 14.9-38.3 31.2C141.6 395.9 113.1 416 80 416c-44.2 0-80-35.8-80-80c0-30.4 17-56.9 42-70.4c3.6-1.9 6-5.5 6-9.6s-2.4-7.7-6-9.6C17 232.9 0 206.4 0 176c0-44.2 35.8-80 80-80c33.1 0 61.6 20.1 73.7 48.8z" />
                </svg>
              </div>
              <h4
                id="headline-103-180"
                className="ct-headline atomic-pricing-7-title"
              >
                Average Cost
              </h4>
              <div
                id="text_block-104-180"
                className="ct-text-block atomic-pricing-7-text"
              >
                It is for one complete day with food and litter.
              </div>
              <div
                id="text_block-105-180"
                className="ct-text-block atomic-pricing-7-cost"
              >
                1000 PKR
              </div>
              <div
                id="text_block-106-180"
                className="ct-text-block atomic-pricing-7-small-text"
              >
                one day
                <br />
              </div>
              <div id="div_block-117-180" className="ct-div-block">
                <motion.button
                  id="link_text-118-180"
                  className="ct-link-text atomic-primary-button"
                  onClick={handleAPT}
                  target="_self"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Get Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <LoginSignupModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default DaycareInformation;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AppointmentForm.css";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import GiveError from "../GiveError/GiveError";
import { motion } from "framer-motion";

function AppointmentForm() {
  const userdata = JSON.parse(localStorage.getItem("user"));
  const auth = localStorage.getItem("user");
  const { id } = useParams();
  const [doctor, setDoctor] = useState({
    f_name: "",
    l_name: "",
  });

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/doctors/${id}`
        );
        setDoctor(response.data);
        setFormData((prevState) => ({
          ...prevState,
          doctor_id: response.data._id,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctor();
  }, [id]);

  function convertToWeekday(dateString) {
    const date = new Date(dateString);
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekdayIndex = date.getDay();
    const weekday = weekdays[weekdayIndex];
    return weekday;
    // console.log(weekday);
  }

  const [formData, setFormData] = useState({
    user_name: userdata ? userdata.f_name : "",
    user_phone: userdata ? userdata.phone : "",
  });

  const [petinfo, setPetInfo] = useState([]);
  const [selectedOption, setSelectedOption] = useState("None");
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  const handleInputChange = (event) => {
    // console.log(event.datereq);

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (formData) {
  //     try {
  //       const weekday = convertToWeekday(formData.datereq); // Convert date to weekday
  //       console.log("Selected weekday:", weekday);
  //       // ... rest of the code
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   } else alert("Booked");
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData) {
      const weekday = convertToWeekday(formData.datereq);
      console.log("Selected weekday:", weekday);
      //   try {
      //     const response = await axios.post(
      //       "http://localhost:5000/api/appointments",
      //       formData
      //     );
      //     alert(
      //       "Thank you for having an appointment with us. We will contact you shortly."
      //     );
      //     setFormData(null);
      //     console.log(response.data);
      //   } catch (error) {
      //     console.error(error);
      //   }
      // } else alert("Booked");
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))._id
      : null;

    if (userId) {
      fetch(`http://localhost:5000/api/pets/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setPetInfo(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("User ID not found in localStorage");
    }
  }, []);

  const handleChange = (event) => {
    setIsOtherSelected(false);
    if (event.target.value === "99") {
      setIsOtherSelected(true);
      setSelectedOption(99);
      setFormData({
        ...formData,
        pet_id: null,
      });
    } else {
      setIsOtherSelected(false);
      const pet = petinfo.find((pet) => pet._id === event.target.value);
      if (pet) {
        setSelectedOption(event.target.value);
        setFormData({
          ...formData,
          pet_id: event.target.value,
        });
      }
    }
  };

  if (!auth) {
    return <GiveError />;
  }
  return (
    <div>
      <div id="section-34-144" class=" ct-section">
        <motion.section
          initial={{ opacity: 0.5, scaleY: 0.2 }}
          whileInView={{
            opacity: 1,
            scaleY: 1,
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
          class="ct-section-inner-wrap"
        >
          <h1 id="headline-35-144" class="ct-headline saas-heading-one">
            Ready to visit our clinic?
          </h1>
          <p id="text_block-36-144" class="ct-text-block saas-body-text">
            Just take 2 minutes and book an appointment to minimize your waiting
            time.
          </p>
        </motion.section>
      </div>

      <div
        id="inner_content-2-91"
        class="ct-inner-content"
        data-select2-id="select2-data-inner_content-2-91"
      >
        <main
          id="div_block-52-144"
          class="ct-div-block"
          data-select2-id="select2-data-div_block-52-144"
        >
          <article
            id="div_block-58-144"
            class="ct-div-block"
            data-select2-id="select2-data-div_block-58-144"
          >
            <section
              id="section-25-144"
              class=" ct-section"
              data-select2-id="select2-data-section-25-144"
            >
              <div
                class="ct-section-inner-wrap"
                data-select2-id="select2-data-8-ny82"
              >
                <div
                  id="new_columns-26-144"
                  class="ct-new-columns_new"
                  data-select2-id="select2-data-new_columns-26-144"
                >
                  <div id="div_block-27-144" class="ct-div-block">
                    <h2 id="headline-37-144" class="ct-headline">
                      About appointments
                    </h2>
                    <div id="_icon_box-40-144" class="oxy-icon-box">
                      <div class="oxy-icon-box-icon">
                        <div id="fancy_icon-41-144" class="ct-fancy-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                          </svg>
                        </div>{" "}
                      </div>

                      <div class="oxy-icon-box-content">
                        <h2
                          id="_icon_box-40-144_heading"
                          class="oxy-icon-box-heading oxygenberg-_icon_box-40-144_heading"
                        >
                          Reduced Waiting Time{" "}
                        </h2>
                        <p
                          id="_icon_box-40-144_text"
                          class="oxy-icon-box-text oxygenberg-_icon_box-40-144_text"
                        >
                          Advance appointment will help us minimize waiting time
                          and make special arrangements for your specific needs.{" "}
                        </p>
                        <div class="oxy-icon-box-link"></div>
                      </div>
                    </div>

                    <div id="_icon_box-48-144" class="oxy-icon-box">
                      <div class="oxy-icon-box-icon">
                        <div id="fancy_icon-49-144" class="ct-fancy-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                          >
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                          </svg>
                        </div>{" "}
                      </div>

                      <div class="oxy-icon-box-content">
                        <h2
                          id="_icon_box-48-144_heading"
                          class="oxy-icon-box-heading oxygenberg-_icon_box-48-144_heading"
                        >
                          Select Doctor of your choice
                        </h2>
                        <p
                          id="_icon_box-48-144_text"
                          class="oxy-icon-box-text oxygenberg-_icon_box-48-144_text"
                        >
                          Selecting your preferred doctor allows you to take
                          control of your healthcare journey and receive the
                          personalized attention you deserve.
                        </p>
                        <div class="oxy-icon-box-link"></div>
                      </div>
                    </div>

                    <div id="_icon_box-50-144" class="oxy-icon-box"></div>
                  </div>
                  <div id="div_block-28-144" class="ct-div-block">
                    <h2 id="headline-30-144" class="ct-headline">
                      Please fill the form below to book an appointment
                    </h2>
                    <h5>
                      Selected Doctor: {doctor.f_name} {doctor.l_name}
                    </h5>
                    <div
                      id="shortcode-29-144"
                      class="ct-shortcode"
                      data-select2-id="select2-data-shortcode-29-144"
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <label>
                          Name*
                          <Input
                            name="user_name"
                            defaultValue={userdata.f_name}
                            onChange={handleInputChange}
                            size="md"
                            placeholder="Name"
                          />
                        </label>
                      </div>
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <label>
                          Contact No*
                          <Input
                            name="user_phone"
                            defaultValue={userdata.phone}
                            onChange={handleInputChange}
                            size="md"
                            placeholder="Phone Number"
                          />
                        </label>
                      </div>
                      <br />
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <label>
                          Species*
                          <select
                            style={{ marginLeft: "30px" }}
                            id="options"
                            value={selectedOption}
                            onChange={handleChange}
                          >
                            <option value="0">Choose your pet</option>
                            {petinfo.map((pet, index) => (
                              <option key={index} value={pet._id}>
                                {pet.petName}
                              </option>
                            ))}
                            <option
                              style={{ backgroundColor: "#DDBEDF" }}
                              value="99"
                            >
                              Other
                            </option>
                          </select>
                          <br />
                          <br />
                          {isOtherSelected && (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <label>
                                Other Species
                                <Input
                                  name="pet_other"
                                  onChange={handleInputChange}
                                  size="md"
                                  placeholder="Other Species"
                                />
                              </label>
                            </div>
                          )}
                        </label>
                      </div>
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <label>
                          Date*
                          <div style={{ width: "240px" }}>
                            <Input
                              name="datereq"
                              onChange={handleInputChange}
                              type="date"
                              slotProps={{
                                input: {
                                  min: "2018-06-07T00:00",
                                  max: "2018-06-14T00:00",
                                },
                              }}
                            />
                          </div>
                        </label>
                      </div>
                      <br />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <label>
                          Additional Note
                          <div style={{ width: "240px" }}>
                            <Textarea
                              name="text"
                              onChange={handleInputChange}
                              minRows={4}
                              placeholder="Please feel free to share any further details or time range that may be suitable for you"
                            />
                          </div>
                        </label>
                      </div>
                      <br />

                      <button
                        id="link_text-9-53"
                        class="ct-link-text saas-primary-button cm-primary-btn-01"
                        onClick={handleSubmit}
                      >
                        Confirm Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}

export default AppointmentForm;

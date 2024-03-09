import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./appointment.css";
import { motion } from "framer-motion";

import LoginSignupModal from "../LoginSignupModal/LoginSignupModal";

function DoctorList({ doctors }) {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleBookAppointment = (doctor) => {
    navigate(`/book-appointment/${doctor._id}`);
  };

  if (!Array.isArray(doctors)) {
    return <div>Loading...</div>;
  }
  const auth = localStorage.getItem("user");

  return (
    <div>
      <ul className="ul_edit">
        {doctors.map((doctor, delay) => (
          <motion.li
            initial={{ opacity: 0.7, scaleY: 0.7 }}
            whileInView={{
              opacity: 1,
              scaleY: 1,
              transition: {
                type: "spring",
                opacity: { duration: 0.1 },
                delay: 0.1 * delay,
                duration: 0.1,
                stiffness: 80,
                bounce: 0.2,
              },
            }}
            viewport={{ once: true }}
            className="li_edit card_edit"
            key={doctor._id}
          >
            <img
              src={`http://localhost:5000/${doctor.image}`}
              alt={doctor.f_name}
            />
            <div className="card-content">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2>
                  {doctor.f_name} {doctor.l_name}
                </h2>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p>{doctor.specialization}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p>Available Days: {doctor.available_days}</p>
              </div>
              <div className="days-container"></div>
              {auth ? (
                <button
                  id="link_text-7-53"
                  class="ct-link-text saas-secondary-button"
                  onClick={() => handleBookAppointment(doctor)}
                  target="_self"
                >
                  Book Vet Appointment
                </button>
              ) : (
                <button
                  id="link_text-7-53"
                  class="ct-link-text saas-secondary-button"
                  onClick={() => setModalShow(true)}
                  target="_self"
                >
                  Book Vet Appointment
                </button>
              )}
            </div>
          </motion.li>
        ))}
      </ul>

      <LoginSignupModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default DoctorList;

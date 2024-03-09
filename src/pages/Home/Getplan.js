import React from "react";
import { useNavigate } from "react-router-dom";
import "./Getplan.css";

function NextPage() {
  const navigate = useNavigate();

  // Function to handle button click
  const handleOwnPetButtonClick = () => {
    window.location.href="/pet-info";
  };

  const handleOtherPetButtonClick = () => {
    window.location.href="/other-pet-info";
  };

  return (
    <div className="next-page-container">
      <p className="description">You want insurance for the pets you added or for any other pet. Please let us know below</p>
      <div className="button-container">
        <button className="next-page-button" onClick={handleOwnPetButtonClick}>
          Get plan for your own pet
        </button>
        <button className="next-page-button" onClick={handleOtherPetButtonClick}>
          Get plan for any other pet
        </button>
      </div>
    </div>
  );
}

export default NextPage;
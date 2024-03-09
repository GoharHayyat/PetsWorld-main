import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PetInfo.css";
import axios from "axios";
import Input from "@mui/joy/Input";
import { useParams } from "react-router-dom";

function PetInfoPage() {
  const userdata = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const [formData, setFormData] = useState({
    user_name: userdata ? userdata.f_name : "",
  });

  const [petinfo, setPetInfo] = useState([]);
  const [selectedOption, setSelectedOption] = useState("0");
  const [isOtherSelected, setIsOtherSelected] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/doctors/${id}`
        );
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

  useEffect(() => {
    const userId = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))._id
      : null;

    if (userId) {
      axios
        .get(`http://localhost:5000/api/pets/${userId}`)
        .then((response) => {
          setPetInfo(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("User ID not found in localStorage");
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/plans";
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (event) => {
    setIsOtherSelected(false);
    const selectedPetId = event.target.value;

    if (selectedPetId === "99") {
      setIsOtherSelected(true);
      setSelectedOption(99);
      setFormData({
        ...formData,
        pet_id: null,
        pet_name: null,
      });
    } else {
      setIsOtherSelected(false);
      const pet = petinfo.find((pet) => pet._id === selectedPetId);

      if (pet) {
        setSelectedOption(selectedPetId);
        setFormData({
          ...formData,
          pet_id: pet._id,
          pet_name: pet.petName,
        });
      }
    }
  };

  return (
    <div className="pet-info-page">
      <h2>Enter Details of your pet</h2>
      <div className="form-container2">
        <label>Tell us about your pet</label>
        <form onSubmit={handleFormSubmit}>
          <label>
            Species
            <select
              style={{ marginLeft: "-4px", marginTop: "13px" }}
              id="options"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="0">Choose your pet</option>
              {petinfo.map((pet) => (
                <option key={pet._id} value={pet._id}>
                  {pet.petName}
                </option>
              ))}

              <option style={{ backgroundColor: "#DDBEDF" }} value="99">
                Other
              </option>
            </select>
          </label>
          <br />
          <br />
          {isOtherSelected && (
            <div style={{ display: "flex", justifyContent: "center" }}>
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

          <button type="submit" onClick={handleFormSubmit}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default PetInfoPage;

import main_heading_below from "../../assets/img/main_heading_below.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
//import doctors from '../../utils/data1';
import DoctorList from "../../componenets/Appointments/appointment";
import "./specialist.css";
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';

// const specialties = [
//   "Cardiologist",
//   "Pediatrician",
//   "Orthopedic Surgeon",
//   "Dermatologist",
//   "Surgeon",
//   "Dentist",
//   "Nutritionist",
//   "Oncologist",
//   "Neurologist",
// ];

function Specialists() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  console.log(selectedSpecialty);
  const selectDoctors = (specialty) => {
    if (specialty) {
      const selectedDoctors = doctors.filter(
        (doctor) => doctor.specialty === specialty
      );
      setDoctors(selectedDoctors);
      setSelectedSpecialty(specialty);
    } else {
      setDoctors(doctors);
      setSelectedSpecialty("");
    }
  };
  console.log(selectDoctors);
  // const handleChange = (event) => {
  //   selectDoctors(event.target.value);
  // };

  return (
    <div>
      <h2>Specialists Available</h2>
      <div style={{ textAlign: "center", marginTop: "-25px" }}>
        <img alt="" src={main_heading_below}></img>
      </div>
      <br></br>
      {/* <div className="dropdown-container">
        <FormControl className="dropdown-menu">
          <InputLabel id="specialty-label">Select a specialist</InputLabel>
          <Select
            labelId="specialty-label"
            id="specialty-select"
            value={selectedSpecialty}
            label="Select a specialist"
            onChange={handleChange}
            MenuProps={{
              classes: { list: 'dropdown-menu-list' },
            }}
          >
            <MenuItem value="">All</MenuItem>
            {specialties.map((specialty) => (
              <MenuItem key={specialty} value={specialty}>
                {specialty}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div> */}
      <DoctorList doctors={doctors} />
    </div>
  );
}

export default Specialists;

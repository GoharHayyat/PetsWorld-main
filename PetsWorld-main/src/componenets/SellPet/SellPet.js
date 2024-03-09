import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Modal from "react-bootstrap/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@mui/joy/Input";
import { FaWeight } from "react-icons/fa";

import { CardActionArea, CardActions } from "@mui/material";

import Textarea from "@mui/joy/Textarea";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import GiveError from "../GiveError/GiveError";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function SimpleBackdrop({ open, onClose }) {
  const handleClose = () => {
    onClose(false);
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

const auth = localStorage.getItem("user");

const steps = [
  {
    label: "Select campaign settings",
  },
  {
    label: "Create an ad group",
  },
  {
    label: "Create an ad",
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [price, setprice] = React.useState("500");
  const [breed, setBreed] = React.useState("");
  const [pet, setpet] = React.useState("");
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);
  // const [formData, setFormData] = useState(1);
  const [title, setPetName] = React.useState("");
  const [gender, setGender] = useState("");
  const [vaccinated, setvaccinated] = useState(true);
  const [description, setDescription] = useState("");
  const [pictures, setPictures] = useState([]);
  const [weight, Setweight] = useState("0.5");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [county, setCounty] = useState("");

  const [modalShow, setModalShow] = React.useState(false);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCountyChange = (event) => {
    setCounty(event.target.value);
  };

  const handlevacc = (event) => {
    setvaccinated(event.target.value);
  };

  const handleChange_pet = (event) => {
    setpet(event.target.value);
    setBreed("");
  };
  const handleChangeBreed = (event) => {
    setBreed(event.target.value);
  };

  const handlePetNameChange = (event) => {
    setPetName(event.target.value);
  };

  const WeightChange = (event) => {
    const newWeight = event.target.value;
    Setweight(newWeight);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeee = (event) => {
    const selectedMonths = event.target.value;
    const selectedYearsInMonths = years * 12 + selectedMonths;
    if (selectedYearsInMonths < 1) {
      toast.error("Please select an age greater than or equal to 1 months");
      return;
    }
    setMonths(selectedMonths);
  };

  const handleChangee = (event) => {
    const selectedYears = event.target.value;
    const selectedYearsInMonths = selectedYears * 12 + months;
    if (selectedYearsInMonths < 1) {
      toast.error("Please select an age greater than or equal to 1 months");
      return;
    }
    setYears(selectedYears);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleprice = (event) => {
    setprice(event.target.value);
  };

  const handleDeletePicture = (index) => {
    setPictures((prevPictures) => {
      const updatedPictures = prevPictures.filter((_, i) => i !== index);
      return updatedPictures;
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePictureChange = (event) => {
    const files = Array.from(event.target.files);
    console.log(event.target.files);

    if (files.length > 5) {
      files.splice(5);
      toast.error("You can select up to 5 pictures.");
    }

    if (pictures.length + files.length > 5) {
      toast.error("You have already selected 5 pictures. Cannot add more.");
      return;
    }

    setPictures((prevPictures) => [...prevPictures, ...files]);
  };

  const handleSave = () => {
    if (
      pet &&
      title &&
      breed &&
      (months || years) &&
      gender &&
      weight &&
      price &&
      description.length > 10 &&
      pictures &&
      pictures.length > 0 &&
      street &&
      city &&
      state &&
      county
    ) {
      // const pictureData = pictures.map((picture) => ["image", picture]);
      setOpenBackdrop(true);
      const userData = JSON.parse(localStorage.getItem("user"));
      const userId = userData._id;

      // const petData = {
      //   pet: pet,
      //   title: title,
      //   breed: breed,
      //   months: months,
      //   years: years,
      //   gender: gender,
      //   weight: weight,
      //   price: price,
      //   description: description,
      //   pictures: pictureData,
      //   vaccinated: vaccinated,
      //   street: street,
      //   city: city,
      //   state: state,
      //   county: county,
      //   userId: userId,
      //   status: "pending",
      // };

      // console.log("Pet Data:", petData);

      const formData = new FormData();
      formData.append("pet", pet);
      formData.append("title", title);

      formData.append("breed", breed);
      formData.append("months", months);
      formData.append("years", years);
      formData.append("gender", gender);
      formData.append("weight", weight);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("vaccinated", vaccinated);
      formData.append("street", street);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("county", county);
      formData.append("userId", userId);

      formData.append("status", "pending");

      pictures.forEach((picture) => {
        formData.append("pictures", picture);
      });

      fetch("http://localhost:5000/api/buyandsell", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setOpenBackdrop(false);
          toast.success("Ad request Sent");
          window.location.href = "/Buyandsell";
        })
        .catch((error) => {
          console.error("Error saving data:", error);
        });
    } else if (description.length <= 10) {
      toast.error("Description too short!");
    } else {
      toast.error(
        "Please fill in all fields, provide at least one picture, and enter the address."
      );
    }
  };

  if (!auth) {
    // User is not logged in, do not load the component
    return <GiveError />;
  }
  return (
    <Box sx={{ maxWidth: 800, marginTop: "5%", marginLeft: "5%" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              {index === 0 && (
                <div
                  style={{
                    display: "grid",
                    width: "200px",
                    marginLeft: "30px",
                  }}
                >
                  <h5
                    style={{
                      //   fontWeight: "bold",
                      marginTop: "20px",
                      color: "grey",
                      //   textAlign: "center",
                    }}
                  >
                    Ad Title*
                  </h5>
                  <TextField
                    id="outlined-basic"
                    style={{ marginTop: "5px" }}
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={handlePetNameChange}
                  />
                  <h5
                    style={{
                      //   fontWeight: "bold",
                      marginTop: "20px",
                      marginBottom: "20px",
                      color: "grey",
                    }}
                  >
                    Would you like to Sell?
                  </h5>
                  <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={pet}
                      label="Select"
                      onChange={handleChange_pet}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="dog">Dog</MenuItem>
                      <MenuItem value="cat">Cat</MenuItem>
                      <MenuItem value="rat">Rat</MenuItem>
                      <MenuItem value="snake">Snake</MenuItem>
                      <MenuItem value="rabbit">Rabbit</MenuItem>
                      <MenuItem value="others">others</MenuItem>
                    </Select>
                  </FormControl>
                  {(pet === "dog" ||
                    pet === "cat" ||
                    pet === "snake" ||
                    pet === "rabbit" ||
                    pet === "rat") && (
                    <h5
                      style={{
                        marginTop: "20px",
                        color: "grey",
                      }}
                    >
                      Breed*
                    </h5>
                  )}

                  {pet === "others" && (
                    <TextField
                      id="outlined-basic"
                      style={{ marginTop: "20px" }}
                      label="Breed"
                      variant="outlined"
                      value={breed}
                      onChange={handleChangeBreed}
                    />
                  )}

                  {pet === "dog" && (
                    <FormControl>
                      <InputLabel id="breed-label">Breed</InputLabel>
                      <Select
                        labelId="breed-label"
                        id="breed"
                        value={breed}
                        onChange={handleChangeBreed}
                        label="Breed"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Labrador Retriever">
                          Labrador Retriever
                        </MenuItem>
                        <MenuItem value="German Shepherd">
                          German Shepherd
                        </MenuItem>
                        <MenuItem value="Rottweiler">Rottweiler</MenuItem>
                        <MenuItem value="Doberman Pinscher">
                          Doberman Pinscher
                        </MenuItem>
                        <MenuItem value="Bullmastiff">Bullmastiff</MenuItem>
                        <MenuItem value="Boxer">Boxer</MenuItem>
                        <MenuItem value="Golden Retriever">
                          Golden Retriever
                        </MenuItem>
                        <MenuItem value="Dalmatian">Dalmatian</MenuItem>
                        <MenuItem value="Shih Tzu">Shih Tzu</MenuItem>
                        <MenuItem value="Pomeranian">Pomeranian</MenuItem>
                        <MenuItem value="poodle">Poodle</MenuItem>
                        <MenuItem value="Great Dane">Great Dane</MenuItem>
                        <MenuItem value="Siberian Husky">
                          Siberian Husky
                        </MenuItem>
                        <MenuItem value="Afghan Hound">Afghan Hound</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                  {pet === "cat" && (
                    <FormControl>
                      <InputLabel id="breed-label">Breed</InputLabel>
                      <Select
                        labelId="breed-label"
                        id="breed"
                        value={breed}
                        onChange={handleChangeBreed}
                        label="Breed"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="persian">Persian</MenuItem>
                        <MenuItem value="siamese">Siamese</MenuItem>
                        <MenuItem value="maine-coon">Maine Coon</MenuItem>
                        <MenuItem value="british-shorthair">
                          British Shorthair
                        </MenuItem>
                        <MenuItem value="ragdoll">Ragdoll</MenuItem>
                        <MenuItem value="bengal">Bengal</MenuItem>
                        <MenuItem value="scottish-fold">Scottish Fold</MenuItem>
                        <MenuItem value="sphynx">Sphynx</MenuItem>
                        <MenuItem value="abyssinian">Abyssinian</MenuItem>
                        <MenuItem value="turkish-van">Turkish Van</MenuItem>
                        <MenuItem value="russian-blue">Russian Blue</MenuItem>
                        <MenuItem value="exotic-shorthair">
                          Exotic Shorthair
                        </MenuItem>
                        <MenuItem value="burmese">Burmese</MenuItem>
                        <MenuItem value="somali">Somali</MenuItem>
                        <MenuItem value="bengal">Bengal</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                        {/* cat breeds */}
                      </Select>
                    </FormControl>
                  )}
                  {pet === "rat" && (
                    <FormControl>
                      <InputLabel id="breed-label">Breed</InputLabel>
                      <Select
                        labelId="breed-label"
                        id="breed"
                        value={breed}
                        onChange={handleChangeBreed}
                        label="Breed"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="fancy">Fancy Rat</MenuItem>
                        <MenuItem value="dumbo">Dumbo Rat</MenuItem>
                        <MenuItem value="hairless">Hairless Rat</MenuItem>
                        <MenuItem value="rex">Rex Rat</MenuItem>
                        <MenuItem value="siamese">Siamese Rat</MenuItem>
                        <MenuItem value="hooded">Hooded Rat</MenuItem>
                        <MenuItem value="berkshire">Berkshire Rat</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                        {/* rat breeds */}
                      </Select>
                    </FormControl>
                  )}
                  {pet === "snake" && (
                    <FormControl>
                      <InputLabel id="breed-label">Breed</InputLabel>
                      <Select
                        labelId="breed-label"
                        id="breed"
                        value={breed}
                        onChange={handleChangeBreed}
                        label="Breed"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="indian-cobra">Indian Cobra</MenuItem>
                        <MenuItem value="russells-viper">
                          Russell's Viper
                        </MenuItem>
                        <MenuItem value="saw-scaled-viper">
                          Saw-scaled Viper
                        </MenuItem>
                        <MenuItem value="common-krait">Common Krait</MenuItem>
                        <MenuItem value="green-tree-python">
                          Green Tree Python
                        </MenuItem>
                        <MenuItem value="ball-python">Ball Python</MenuItem>
                        <MenuItem value="corn-snake">Corn Snake</MenuItem>
                        <MenuItem value="king-snake">King Snake</MenuItem>
                        <MenuItem value="rat-snake">Rat Snake</MenuItem>
                        <MenuItem value="garter-snake">Garter Snake</MenuItem>
                        <MenuItem value="black-rat-snake">
                          Black Rat Snake
                        </MenuItem>
                        <MenuItem value="whipsnake">Whipsnake</MenuItem>
                        <MenuItem value="sand-boa">Sand Boa</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                  {pet === "rabbit" && (
                    <FormControl>
                      <InputLabel id="breed-label">Breed</InputLabel>
                      <Select
                        labelId="breed-label"
                        id="breed"
                        value={breed}
                        onChange={handleChangeBreed}
                        label="Breed"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="dutch">Dutch Rabbit</MenuItem>
                        <MenuItem value="new-zealand-white">
                          New Zealand White
                        </MenuItem>
                        <MenuItem value="angora">Angora Rabbit</MenuItem>
                        <MenuItem value="lionhead">Lionhead Rabbit</MenuItem>
                        <MenuItem value="flemish-giant">Flemish Giant</MenuItem>
                        <MenuItem value="rex">Rex Rabbit</MenuItem>
                        <MenuItem value="english-lop">English Lop</MenuItem>
                        <MenuItem value="mini-lop">Mini Lop</MenuItem>
                        <MenuItem value="himalayan">Himalayan Rabbit</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                  <h5 style={{ marginTop: "20px", color: "grey" }}>
                    Is its a boy or girl?
                  </h5>
                  <FormControl
                    required
                    variant="outlined"
                    style={{ marginBottom: "20px" }}
                  >
                    <InputLabel id="gender-select-label">Gender</InputLabel>
                    <Select
                      labelId="gender-select-label"
                      id="gender-select"
                      value={gender}
                      onChange={handleGenderChange}
                      label="Gender"
                    >
                      <MenuItem value="Boy">Boy</MenuItem>
                      <MenuItem value="Girl">Girl</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <ToastContainer />
              {index === 1 && (
                <div>
                  <h5
                    style={{
                      //   fontWeight: "bold",
                      marginTop: "20px",
                      color: "grey",
                      marginBottom: "10px",
                      // paddingRight: "100px",
                      //   textAlign: "center",
                    }}
                  >
                    Age*
                  </h5>

                  <div
                    style={{
                      display: "flex",
                      // width: "400px",
                      // marginLeft: "30px",
                    }}
                  >
                    <FormControl>
                      <InputLabel id="demo-simple-select-helper-label">
                        years
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={years}
                        label="years"
                        onChange={handleChangee}
                      >
                        <MenuItem value={0}>0 years</MenuItem>
                        <MenuItem value={1}>1 years</MenuItem>
                        <MenuItem value={2}>2 years</MenuItem>
                        <MenuItem value={3}>3 years</MenuItem>
                        <MenuItem value={4}>4 years</MenuItem>
                        <MenuItem value={5}>5 years</MenuItem>
                        <MenuItem value={5}>6 years</MenuItem>
                        <MenuItem value={7}>7 years</MenuItem>
                        <MenuItem value={8}>8 years</MenuItem>
                        <MenuItem value={9}>9 years</MenuItem>
                        <MenuItem value={10}>10 years</MenuItem>
                        <MenuItem value={11}>11 years</MenuItem>
                        <MenuItem value={12}>12years</MenuItem>
                        <MenuItem value={13}>13 years</MenuItem>
                        <MenuItem value={14}>14 years</MenuItem>
                        <MenuItem value={15}>15 years</MenuItem>
                        <MenuItem value={16}>16 years</MenuItem>
                        <MenuItem value={17}>17 years</MenuItem>
                        <MenuItem value={18}>18 years</MenuItem>
                        <MenuItem value={19}>19 years</MenuItem>
                        <MenuItem value={20}>20 years</MenuItem>
                      </Select>
                    </FormControl>
                    <br></br>
                    <div style={{ marginLeft: "20px" }}>
                      <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">
                          Months
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={months}
                          label="Months"
                          onChange={handleChangeee}
                        >
                          <MenuItem value={0}>0 Months</MenuItem>
                          <MenuItem value={1}>1 Months</MenuItem>
                          <MenuItem value={2}>2 Months</MenuItem>
                          <MenuItem value={3}>3 Months</MenuItem>
                          <MenuItem value={4}>4 Months</MenuItem>
                          <MenuItem value={5}>5 Months</MenuItem>
                          <MenuItem value={6}>6 Months</MenuItem>
                          <MenuItem value={7}>7 Months</MenuItem>
                          <MenuItem value={8}>8 Months</MenuItem>
                          <MenuItem value={9}>9 Months</MenuItem>
                          <MenuItem value={10}>10 Months</MenuItem>
                          <MenuItem value={11}>11 Months</MenuItem>
                          <MenuItem value={12}>12 Months</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>

                  <h5
                    style={{
                      //   fontWeight: "bold",
                      marginTop: "20px",
                      //   textAlign: "center",
                      color: "grey",
                    }}
                  >
                    <FaWeight /> Weight in Kg
                  </h5>
                  <div style={{ width: "200px" }}>
                    <Input
                      type="number"
                      defaultValue={0.5}
                      slotProps={{
                        input: {
                          onChange: WeightChange,
                          min: 0.5,
                          max: 100,
                          step: 0.1,
                        },
                      }}
                    />
                  </div>
                  <div style={{ width: "200px" }}>
                    {pet !== "snake" && (
                      <div style={{ width: "320px" }}>
                        <h5
                          style={{
                            marginBottom: "10px",
                            color: "grey",
                            // fontWeight: "bold",
                            marginTop: "20px",
                            // textAlign: "center",
                          }}
                        >
                          Does your pet is vaccinated or not?
                        </h5>
                        <FormControl style={{ width: "120px" }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Select
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={vaccinated}
                            label="Select"
                            onChange={handlevacc}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="true">YES</MenuItem>
                            <MenuItem value="false">NO</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    )}
                    <br />

                    <h5
                      style={{
                        color: "grey",
                        marginBottom: "10px",
                        marginTop: "10px",
                        // fontSize: "20px",
                      }}
                    >
                      Address
                    </h5>
                    <p style={{ color: "red", width: "315px" }}>
                      Note: Don't Enter your complete address{" "}
                    </p>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input"
                        id="autocomplete"
                        placeholder="Street/Area"
                        value={street}
                        onChange={handleStreetChange}
                      />

                      <input
                        type="text"
                        className="form-control input"
                        id="inputCity"
                        placeholder="City"
                        value={city}
                        // onChange={(e) => setCity(e.target.value)}
                        onChange={handleCityChange}
                      />

                      <input
                        type="text"
                        className="form-control input"
                        id="inputState"
                        placeholder="State"
                        value={state}
                        // onChange={(e) => setState(e.target.value)}
                        onChange={handleStateChange}
                      />

                      {/* <input
                        type="text"
                        className="form-control input"
                        id="inputZipp"
                        placeholder="Zip"
                        // value={pickupzip}
                        // onChange={(e) => setZip(e.target.value)}
                      /> */}

                      <input
                        type="text"
                        className="form-control input"
                        id="inputCountyy"
                        placeholder="Country"
                        onChange={handleCountyChange}
                        value={county}
                        // onChange={(e) => setCounty(e.target.value)}
                      />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              )}
              {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
              {index === 2 && (
                <div
                  style={{
                    display: "grid",
                    width: "200px",
                    marginLeft: "30px",
                  }}
                >
                  <h5
                    style={{
                      fontWeight: "bold",
                      marginTop: "20px",
                      color: "gray",
                      //   textAlign: "center",
                    }}
                  >
                    Price*
                  </h5>

                  <Input
                    style={{ width: "200px" }}
                    type="number"
                    defaultValue={500}
                    slotProps={{
                      input: {
                        onChange: handleprice,
                        // ref: inputRef,
                        min: 500,
                        max: 300000,
                        step: 100,
                      },
                    }}
                  />

                  <h5
                    style={{
                      fontWeight: "bold",

                      marginTop: "20px",
                      color: "gray",
                      //   textAlign: "center",
                    }}
                  >
                    Description*
                  </h5>

                  <Textarea
                    style={{ width: "200px" }}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline="true"
                    minRows={3}
                    maxRows={10}
                    placeholder="Enter description"
                    variant="outlined"
                    value={description}
                    onChange={handleDescriptionChange}
                  />

                  <div>
                    <h5
                      style={{
                        color: "gray",
                        // fontWeight: "bold",
                        marginTop: "40px",
                        // textAlign: "center",
                      }}
                    >
                      Select picture for your pet
                    </h5>
                    {/* <br></br> */}
                    <div
                      style={
                        {
                          // textAlign: "center",
                          // marginLeft: "20px",
                        }
                      }
                    >
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handlePictureChange}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        // flexWrap: "wrap",
                        // marginLeft: "20%",
                      }}
                    >
                      {pictures.map((picture, index) => (
                        <Card key={index} sx={{ width: 140, margin: "8px" }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              src={URL.createObjectURL(picture)}
                              alt={`Picture ${index + 1}`}
                            />
                          </CardActionArea>
                          <CardActions>
                            <Button
                              size="small"
                              color="primary"
                              onClick={() => handleDeletePicture(index)}
                            >
                              Delete
                            </Button>
                          </CardActions>
                        </Card>
                      ))}

                      <br />
                    </div>
                  </div>
                </div>
              )}
              {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={
                      index === steps.length - 1 ? handleSave : handleNext
                    }
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  {/* 
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button> */}
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
        </Paper>
      )}
      <Modal
        show={modalShow}
        getOpenState={(isOpen) => setModalShow(isOpen)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Success</Modal.Title>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setModalShow(false)}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your Ad has been successfully sent for Approval. You can see your
            request status <a href="/">here</a>.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button href="/" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <SimpleBackdrop open={openBackdrop} onClose={setOpenBackdrop} />
    </Box>
  );
}

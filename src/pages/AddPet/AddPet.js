import main_heading_below from "../../assets/img/main_heading_below.png";
import "./AddPet.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { MDBFile } from "mdb-react-ui-kit";
import Input from "@mui/joy/Input";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import Button from "@mui/material/Button";

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

function AddPet() {
  const [breed, setBreed] = React.useState("");
  const [pet, setpet] = React.useState("");
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);
  // const [formData, setFormData] = useState(1);
  const [petName, setPetName] = React.useState("");
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [gender, setGender] = useState("");
  const [vaccinated, setvaccinated] = useState("true");
  const [picture, setPicture] = useState(null);
  const [weight, Setweight] = useState("1.5");

  const [openBackdrop, setOpenBackdrop] = React.useState(false);

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
    const newName = event.target.value.trim();
    const onlyAlphabets = /^[A-Za-z]+$/;
    if (!onlyAlphabets.test(newName)) {
      setIsInvalid(true);
      setPetName(newName);
    } else {
      setIsInvalid(false);
      setPetName(newName);
    }
  };

  const WeightChange = (event) => {
    const newWeight = event.target.value;
    if (newWeight >= 1) {
      Setweight(newWeight);
    } else {
      toast.error("Weight should not be less than 1kg");
    }
  };

  const handleChangeee = (event) => {
    const selectedMonths = event.target.value;
    const selectedYearsInMonths = years * 12 + selectedMonths;
    if (selectedYearsInMonths < 3) {
      toast.error("Please select an age greater than or equal to 3 months");
      return;
    }
    setMonths(selectedMonths);
  };

  const handleChangee = (event) => {
    const selectedYears = event.target.value;
    const selectedYearsInMonths = selectedYears * 12 + months;
    if (selectedYearsInMonths < 3) {
      toast.error("Please select an age greater than or equal to 3 months");
      return;
    }
    setYears(selectedYears);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handlePictureChange = (event) => {
    const selectedPicture = event.target.files[0];
    setPicture(selectedPicture);
  };
  const handleSave = () => {
    // if (pet && petName && (months || years) && gender && weight && picture) {
    //   toast.error("Please fill in all the required fields.");
    //   return;
    // }
    setOpenBackdrop(true);

    if (pet && petName && (months || years) && gender && weight && picture) {
      const userData = JSON.parse(localStorage.getItem("user"));
      const userId = userData._id;

      const formData = new FormData();
      formData.append("pet", pet);
      formData.append("petName", petName);
      formData.append("breed", breed);
      formData.append("months", months);
      formData.append("years", years);
      formData.append("gender", gender);
      formData.append("weight", weight);
      formData.append("vaccinated", vaccinated);
      formData.append("vaccinatedVerified", false);
      formData.append("incurrence", false);
      formData.append("daycare", "0");

      formData.append("userId", userId);
      formData.append("image", picture);

      for (const entry of formData.entries()) {
        console.log(entry);
      }

      fetch("http://localhost:5000/api/addPet", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setOpenBackdrop(false);
          console.log("Response from server:", data);
          toast.success("Pet Sucessfully Added");

          setpet("");
          setPetName("");
          setBreed("");
          setMonths(0);
          setYears(0);
          setGender("");
          Setweight(1.5);
          setvaccinated("");
          setPicture(null);
          localStorage.removeItem("activeTab");

          window.location.href = "/tabs";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      // Some required fields are missing, display an error message
      setOpenBackdrop(false);
      toast.error("Please fill in all the required fields.");
      return;
    }
  };

  return (
    <div
      style={{
        fontFamily: "ui-sans-serif",
      }}
    >
      <div
        style={{
          marginTop: "30px",
          marginBottom: "35px",
        }}
      >
        <ToastContainer />
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "0",
          }}
        >
          Add Pet
        </h1>
        <div style={{ textAlign: "center", marginTop: "-6px" }}>
          <img alt="" src={main_heading_below}></img>
        </div>
      </div>
      <div>
        <div style={{ display: "grid", justifyContent: "center" }}>
          <h5
            style={{
              fontWeight: "bold",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            What’s your Pet name?
          </h5>
          <TextField
            id="outlined-basic"
            style={{ marginTop: "20px" }}
            label="Pet name"
            variant="outlined"
            value={petName}
            onChange={handlePetNameChange}
            error={isInvalid}
            helperText={
              isInvalid
                ? "Pet name should contain only alphabetic characters"
                : ""
            }
            className={isInvalid ? "invalid-input" : ""}
          />
          <h5
            style={{
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Would you like to add a dog or cat?
          </h5>

          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
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
                fontWeight: "bold",
                marginTop: "40px",
                textAlign: "center",
              }}
            >
              What breed of Pet do you have?
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
                <MenuItem value="German Shepherd">German Shepherd</MenuItem>
                <MenuItem value="Rottweiler">Rottweiler</MenuItem>
                <MenuItem value="Doberman Pinscher">Doberman Pinscher</MenuItem>
                <MenuItem value="Bullmastiff">Bullmastiff</MenuItem>
                <MenuItem value="Boxer">Boxer</MenuItem>
                <MenuItem value="Golden Retriever">Golden Retriever</MenuItem>
                <MenuItem value="Dalmatian">Dalmatian</MenuItem>
                <MenuItem value="Shih Tzu">Shih Tzu</MenuItem>
                <MenuItem value="Pomeranian">Pomeranian</MenuItem>
                <MenuItem value="poodle">Poodle</MenuItem>
                <MenuItem value="Great Dane">Great Dane</MenuItem>
                <MenuItem value="Siberian Husky">Siberian Husky</MenuItem>
                <MenuItem value="Afghan Hound">Afghan Hound</MenuItem>
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
                <MenuItem value="british-shorthair">British Shorthair</MenuItem>
                <MenuItem value="ragdoll">Ragdoll</MenuItem>
                <MenuItem value="bengal">Bengal</MenuItem>
                <MenuItem value="scottish-fold">Scottish Fold</MenuItem>
                <MenuItem value="sphynx">Sphynx</MenuItem>
                <MenuItem value="abyssinian">Abyssinian</MenuItem>
                <MenuItem value="turkish-van">Turkish Van</MenuItem>
                <MenuItem value="russian-blue">Russian Blue</MenuItem>
                <MenuItem value="exotic-shorthair">Exotic Shorthair</MenuItem>
                <MenuItem value="burmese">Burmese</MenuItem>
                <MenuItem value="somali">Somali</MenuItem>
                <MenuItem value="bengal">Bengal</MenuItem>
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
                <MenuItem value="russells-viper">Russell's Viper</MenuItem>
                <MenuItem value="saw-scaled-viper">Saw-scaled Viper</MenuItem>
                <MenuItem value="common-krait">Common Krait</MenuItem>
                <MenuItem value="green-tree-python">Green Tree Python</MenuItem>
                <MenuItem value="ball-python">Ball Python</MenuItem>
                <MenuItem value="corn-snake">Corn Snake</MenuItem>
                <MenuItem value="king-snake">King Snake</MenuItem>
                <MenuItem value="rat-snake">Rat Snake</MenuItem>
                <MenuItem value="garter-snake">Garter Snake</MenuItem>
                <MenuItem value="black-rat-snake">Black Rat Snake</MenuItem>
                <MenuItem value="whipsnake">Whipsnake</MenuItem>
                <MenuItem value="sand-boa">Sand Boa</MenuItem>
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
                <MenuItem value="new-zealand-white">New Zealand White</MenuItem>
                <MenuItem value="angora">Angora Rabbit</MenuItem>
                <MenuItem value="lionhead">Lionhead Rabbit</MenuItem>
                <MenuItem value="flemish-giant">Flemish Giant</MenuItem>
                <MenuItem value="rex">Rex Rabbit</MenuItem>
                <MenuItem value="english-lop">English Lop</MenuItem>
                <MenuItem value="mini-lop">Mini Lop</MenuItem>
                <MenuItem value="himalayan">Himalayan Rabbit</MenuItem>
              </Select>
            </FormControl>
          )}
          <br></br>
          <h5 style={{ fontWeight: "bold", marginLeft: "70px" }}>
            Is its a boy or girl?
          </h5>
          <FormControl
            required
            variant="outlined"
            style={{ minWidth: 180, marginRight: "16px" }}
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
          <h5
            style={{
              fontWeight: "bold",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            And how old is he/she?
          </h5>

          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">years</InputLabel>
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
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Months</InputLabel>
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

          <h5
            style={{
              fontWeight: "bold",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            approximate Weight in Kg
          </h5>
          <Input
            type="number"
            defaultValue={1.5}
            slotProps={{
              input: {
                onChange: WeightChange,
                // ref: inputRef,
                min: 1,
                max: 50,
                step: 0.1,
              },
            }}
          />
          {pet !== "snake" && (
            <h5
              style={{
                fontWeight: "bold",
                marginTop: "40px",
                textAlign: "center",
              }}
            >
              Does your pet is vaccinated or not?
            </h5>
          )}

          {pet !== "snake" && (
            <FormControl>
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
          )}
          <br></br>

          <h5
            style={{
              fontWeight: "bold",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            Select picture for your pet
          </h5>
          <br></br>
          <div>
            {/* <MDBFile
              onChange={handlePictureChange}
              // label=""
              id="customFile"
            /> */}
            <input
              onChange={handlePictureChange}
              type="file"
              accept="image/*"
            />
          </div>
          <br></br>
          <br></br>
          <button
            className="buttons_hover"
            style={{
              color: "black",
              border: "1px solid black",
              backgroundColor: "#6f42c1",
              borderRadius: "30px",
              height: "46px",
              width: "55%",
              boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
              justifyContent: "center",
              marginLeft: "70px",
            }}
            onClick={handleSave}
          >
            Save
          </button>

          <div
            style={{
              marginTop: "50px",
              textAlign: "center",
              background: "#f1f1f1",
              borderRadius: "50px",
            }}
          >
            You can add multiple pets later on 🐶 🐱
          </div>
        </div>
      </div>

      <div
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
      >
        <img alt="" src={main_heading_below}></img>
      </div>

      <div>
        <div style={{ display: "grid", justifyContent: "center" }}></div>
      </div>
      <SimpleBackdrop open={openBackdrop} onClose={setOpenBackdrop} />
    </div>
  );
}

export default AddPet;

import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@mui/joy/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import "./DaycareService.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import GiveError from "../../componenets/GiveError/GiveError";

const auth = localStorage.getItem("user");

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

export default function DaycareService() {
  const [petinfo, setPetInfo] = useState([]);
  const [selectedOption, setSelectedOption] = useState("None");
  const [selectedPet, setSelectedPet] = useState();
  const [pickuptime, setSelectedTime] = useState("");
  const [toaldays, setSelectedDays] = useState("");
  const [pickupadress, setStreet] = useState("");
  const [pickupcity, setCity] = useState("");
  const [state, setState] = useState("");
  const [pickupzip, setZip] = useState("");
  const [county, setCounty] = useState("");
  const [pickupdate, setPickupdate] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const today = new Date().toISOString().split("T")[0];
  const [daycareData, setDaycareData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/daycare");
        setDaycareData(response.data);
      } catch (error) {
        console.error("Error fetching daycare data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setOpenBackdrop(true);
    const userId = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))._id
      : null;

    if (userId) {
      fetch(`http://localhost:5000/api/pets/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setPetInfo(data);

          if (data.length === 0) {
            toast.info("No pet found");
            setTimeout(() => {
              setOpenBackdrop(false);
              window.location.href = "/";
            }, 2500);
          } else {
            setOpenBackdrop(false);
          }

          const selectedPet = data.find((pet) => pet.id === userId);
          if (selectedPet) {
            toast.error("Selected pet is already in daycare");
            return;
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("User ID not found in localStorage");
    }
  }, []);

  var dropoffadress = "";
  var dropoffcity = "";
  var dropoff_state = "";
  var dropoffzip = "";
  var dropoff_county = "";

  console.log(petinfo);

  // const handleChange = (event) => {
  //   const pet = petinfo.find((pet) => pet.petName === event.target.value);

  //   const petInDaycare = daycareData.find(
  //     (daycare) => daycare.petid === pet._id
  //   );
  //   if (petInDaycare) {
  //     // Display an error toast if the pet is already in daycare
  //     toast.error("Selected pet is already in daycare");
  //   } else {
  //     setSelectedOption(event.target.value);
  //     setSelectedPet(pet);
  //   }
  // };
  const handleChange = (event) => {
    const pet = petinfo.find((pet) => pet._id === event.target.value);

    if (pet) {
      const petInDaycare = daycareData.find(
        (daycare) => daycare.petid === pet._id
      );

      if (petInDaycare) {
        toast.error("Selected pet is already in daycare");
      } else {
        if (pet.pet === "others") {
          toast.error("Others are not allowed as they are not specified");
        } else {
          setSelectedOption(event.target.value);
          setSelectedPet(pet);
        }
      }
    }
  };
  if (selectedPet) {
    var vaccinated = selectedPet.vaccinated;
    var petid = selectedPet._id;
    var userid = selectedPet.userId;
  }

  console.log("petid", petid);
  console.log("userid", userid);

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setSelectedTime(selectedTime);
  };

  const handleDaysChange = (event) => {
    const toaldays = event.target.value;
    setSelectedDays(toaldays);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate < today) {
      toast.error("Please select a date equal to or after today");
    } else {
      setPickupdate(selectedDate);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      selectedOption === "None" ||
      pickuptime === "" ||
      toaldays === "" ||
      pickupadress === "" ||
      pickupcity === "" ||
      state === "" ||
      pickupzip === "" ||
      county === ""
    ) {
      if (selectedOption === "") {
        toast.error('Please select an option for "Selected Option".');
        return;
      }
      if (pickuptime === "") {
        toast.error('Please enter a value for "Pickup Time".');
        return;
      }
      if (toaldays === "") {
        toast.error('Please enter a value for "Total Days".');
        return;
      }
      if (pickupadress === "") {
        toast.error('Please enter a value for "Pickup Address".');
        return;
      }
      if (pickupcity === "") {
        toast.error('Please enter a value for "Pickup City".');
        return;
      }
      if (state === "") {
        toast.error('Please enter a value for "State".');
        return;
      }
      if (pickupzip === "") {
        toast.error('Please enter a value for "Pickup Zip".');
        return;
      }
      if (county === "") {
        toast.error('Please enter a value for "County".');
        return;
      }
      if (pickupdate === "") {
        toast.error("Please Select a pickup Date");
        return;
      }

      return;
    }
    const formData = {
      identity_number: "0", // jub admin approve kr la tub deni value

      userid,
      petid,
      toaldays,
      pickuptime,
      pickupcity,
      pickupadress,
      state,
      county,
      pickupzip,

      approvedcheck: false,
      requestrejected: false,
      pickedupstatus: false,
      pickupdate: pickupdate,

      //drop off data next chhezyain hardel karn ka lia

      dropoffstatus: false,
      delivered: false,
      dropoffcity,
      dropoffadress,
      dropoffzip,
      dropoff_state,
      dropoff_county,

      dropoffdate: "0",
      daysservise: "",
      bill: "0",
      dropofftime: "0",
    };
    setOpenBackdrop(true);

    axios
      .post("http://localhost:5000/api/daycare", formData)
      .then((response) => {
        setOpenBackdrop(false);
        localStorage.setItem("activeTab", "2");
        setModalShow(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!auth) {
    return <GiveError />;
  }
  return (
    <>
      <ToastContainer />
      <div className="mx-auto gradient-custom mt-5" style={{ height: "100%" }}>
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div
              className="text-center"
              style={{ marginTop: "5%", marginLeft: "10px" }}
            >
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">
                Welcome
              </MDBTypography>
              <p className="white-text">
                we're ready to provide the highest level of care possible.
              </p>
              <img
                id="image-419-53"
                alt="Pet owner using Chubby Meows services"
                src="https://chubbymeows.com/wp-content/uploads/2021/09/ChubbyMeows-Onestop-pet-care-Hero-Animation.gif"
                className="ct-image"
              ></img>
            </div>
          </MDBCol>

          <MDBCol md="9" className="justify-content-center">
            <MDBCard
              style={{ marginBottom: "20px" }}
              className="card-custom pb-4"
            >
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: "#495057" }}>
                    Day Care
                  </MDBTypography>
                </div>
                <label style={{ fontSize: "25px" }} htmlFor="options">
                  Select a pet:
                </label>
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
                </select>
                <p style={{ color: "red", marginTop: "10px" }}>
                  {/* You have selected: {selectedPet.petName} */}
                  {selectedPet && selectedPet.pet === "snake" ? (
                    <>
                      <br />
                      *selected pet is a snake which results in higher charges
                    </>
                  ) : (
                    <> </>
                  )}
                </p>

                {selectedOption === "None" ? (
                  <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p style={{ Color: "red" }}>
                      Note* Only Verifed Vaccinated are Eligible for this
                      service
                    </p>
                  </div>
                ) : (
                  <></>
                )}
                <div>
                  <div>
                    {/* {vaccinatedVerified && vaccinated ? ( */}

                    {vaccinated === "true" && (
                      <div>
                        <label style={{ fontSize: "25px" }} htmlFor="options">
                          vaccination Status:
                        </label>
                        <p style={{ color: "green", marginTop: "10px" }}>YES</p>
                        <h1 style={{ fontSize: "25px" }}>
                          <form className="mb-0">
                            <div>
                              <h1
                                style={{ fontSize: "25px", marginTop: "50px" }}
                              >
                                Enter pickup date
                              </h1>
                              {/* <Stack spacing={1.5} sx={{ minWidth: 300 }}> */}
                              <div style={{ width: "179px" }}>
                                <Input
                                  type="date"
                                  value={pickupdate}
                                  onChange={handleDateChange}
                                  slotProps={{
                                    input: {
                                      min: "2018-06-07T00:00",
                                      max: "2018-06-14T00:00",
                                    },
                                  }}
                                />
                              </div>
                              {/* </Stack> */}
                            </div>
                            <div>
                              <br></br>
                              <div>
                                <h1 style={{ fontSize: "25px" }}>
                                  Enter aprox time For pickup
                                </h1>

                                <select
                                  id="options"
                                  required
                                  onChange={handleTimeChange}
                                >
                                  <option value="0">Select time</option>

                                  <option value="1">09:00am-10:00am</option>
                                  <option value="2">10:00am-11:00am</option>
                                  <option value="3">11:00am-12:00pm</option>
                                  <option value="4">12:00pm-01:00pm</option>
                                  <option value="5">01:00pm-02:00pm</option>
                                  <option value="6">02:00pm-03:00pm</option>
                                  <option value="7">03:00pm-04:00pm</option>
                                  <option value="8">04:00pm-05:00pm</option>
                                  <option value="9">05:00pm-06:00pm</option>
                                </select>
                              </div>
                              <br />
                              <div style={{ flex: "inline" }}>
                                <h1 style={{ fontSize: "25px" }}>
                                  Enter aprox Days
                                </h1>

                                <select
                                  id="options"
                                  required
                                  onChange={handleDaysChange}
                                >
                                  <option value="1">1 Day</option>
                                  <option value="2">2 Days</option>
                                  <option value="3">3 Days</option>
                                  <option value="4">Not Sure</option>
                                </select>
                              </div>
                            </div>
                            <br />
                            <p
                              style={{
                                fontWeight: "bold",
                                marginTop: "10px",
                                fontSize: "20px",
                              }}
                            >
                              Enter Pickup location:
                            </p>
                            <div className="form-group">
                              {/* <MDBRow className="mb-4"> */}
                              <input
                                type="text"
                                className="form-control input"
                                id="autocomplete"
                                placeholder="Street"
                                value={pickupadress}
                                onChange={(e) => setStreet(e.target.value)}
                              />

                              <input
                                type="text"
                                className="form-control input"
                                id="inputCity"
                                placeholder="City"
                                value={pickupcity}
                                onChange={(e) => setCity(e.target.value)}
                              />

                              <input
                                type="text"
                                className="form-control input"
                                id="inputState"
                                placeholder="State"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                              />

                              <input
                                type="text"
                                className="form-control input"
                                id="inputZipp"
                                placeholder="Zip"
                                value={pickupzip}
                                onChange={(e) => setZip(e.target.value)}
                              />

                              {/* <input
                                type="text"
                                className="form-control input"
                                id="inputCountyy"
                                placeholder="County"
                                value={county}
                                onChange={(e) => setCounty(e.target.value)}
                              /> */}

                              <input
                                type="text"
                                className="form-control input"
                                id="inputCountyy"
                                placeholder="Country"
                                value={county}
                                onChange={(e) => setCounty(e.target.value)}
                                required
                              />
                              {/* </MDBRow> */}
                            </div>

                            {/* <button
                              style={{ marginTop: "21%", marginLeft: "-6" }}
                              // href="/daycare"
                              onClick={handleSubmit}
                              className="btn btn-primary py-3 px-5"
                            >
                              Request
                            </button> */}
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <button
                              id="link_text-7-53"
                              class="ct-link-text saas-secondary-button"
                              onClick={handleSubmit}
                              target="_self"
                            >
                              Request
                            </button>
                          </form>
                        </h1>
                      </div>
                    )}
                    {vaccinated === "false" && (
                      <>
                        <MDBCol md="9" className="justify-content-center">
                          <MDBCard className="card-custom pb-4">
                            <MDBCardBody className="mt-0 mx-5">
                              <div className="text-center mb-3 pb-2 mt-3">
                                <MDBTypography
                                  tag="h4"
                                  style={{ color: "#495057" }}
                                >
                                  Pet not vaccinated Please make sure your pet
                                  is vaccinated before using daycare services.
                                </MDBTypography>
                              </div>
                            </MDBCardBody>
                          </MDBCard>
                        </MDBCol>
                      </>
                    )}
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <SimpleBackdrop open={openBackdrop} onClose={setOpenBackdrop} />
      </div>
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
            Your request has been successfully sent. You can see your request's
            status <a href="/tabs">here</a>.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button href="/" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

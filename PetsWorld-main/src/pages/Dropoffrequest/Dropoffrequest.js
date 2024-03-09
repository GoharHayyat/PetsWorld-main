import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
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

const Dropoffrequest = () => {
  var ID = useParams();
  console.log(ID);

  const [currentDate, setCurrentDate] = useState("0");
  const [totalDays, setTotalDays] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [calculating, setCalculating] = useState(true);

  const [data_daycare, setDaycareData] = useState([]);
  const [petinfo, setpetinfo] = useState([]);

  const [selectedTime, setSelectedTime] = useState("");
  const [dropStreet, setDropStreet] = useState("");
  const [dropCity, setDropCity] = useState("");
  const [dropState, setDropState] = useState("");
  const [dropZip, setDropZip] = useState("");
  const [dropCounty, setDropCounty] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [openBackdrop, setOpenBackdrop] = React.useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/daycare/${ID.id}`
        );
        // setOpenBackdrop(false);
        setDaycareData(response.data);
      } catch (error) {
        console.error("Error fetching daycare data:", error);
      } finally {
        setOpenBackdrop(false);
      }
    };

    fetchData();
  }, [ID.id]);

  useEffect(() => {
    const userId = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))._id
      : null;

    if (userId) {
      axios
        .get(`http://localhost:5000/api/pets/${userId}`)
        .then((response) => {
          setpetinfo(response.data);
          // setOpenBackdrop(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setOpenBackdrop(false);
        });
    } else {
      console.log("User ID not found in localStorage");
    }
  }, []);

  var petsalldata = petinfo.find((x) => x._id === data_daycare.petid);
  var petType = petsalldata?.pet;
  var petWeight = petsalldata?.weight;
  var petAge = petsalldata?.years;
  var petName = petsalldata?.petName;
  var DID = data_daycare?._id;
  var D_pickupdate = data_daycare?.pickupdate;
  var pickupadress = data_daycare?.pickupadress;
  var pickupcity = data_daycare?.pickupcity;
  var state = data_daycare?.state;
  var pickupzip = data_daycare?.pickupzip;
  var County = data_daycare?.county;
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      setCurrentDate(formattedDate);

      const systemDate = new Date();
      const pickupDate = new Date(data_daycare.pickupdate);

      const timeDiff = Math.abs(pickupDate - systemDate);
      const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setTotalDays(totalDays);

      let calculatedBill = 0;
      if (petType === "cat") {
        calculatedBill = totalDays * 800 + 100; //   cat ka lia
      } else if (petType === "dog") {
        calculatedBill = totalDays * 800 + 150; // dog ka lia
      } else if (petType === "rat") {
        calculatedBill = totalDays * 800 + 80;
      } else if (petType === "snake") {
        calculatedBill = totalDays * 1000 + 500;
      } else if (petType === "rabbit") {
        calculatedBill = totalDays * 800 + 150;
      } else {
        calculatedBill = totalDays * 900 + 200;
      }

      if (petWeight >= 0 && petWeight <= 8) {
        calculatedBill += 80;
      } else if (petWeight > 8 && petWeight <= 13) {
        calculatedBill += 100;
      } else if (petWeight > 13 && petWeight <= 18) {
        calculatedBill += 200;
      } else {
        calculatedBill += 300;
      }

      if (petAge < 1) {
        calculatedBill += 100;
      } else if (petAge >= 1 && petAge <= 5) {
        calculatedBill += 150;
      } else if (petAge > 5 && petAge <= 20) {
        calculatedBill += 200;
      } else {
        calculatedBill += 300;
      }

      setBillAmount(calculatedBill);
      setCalculating(false);
    }, 1000);
    return () => clearInterval(interval);
  }, [ID, data_daycare, petType, petWeight, petAge]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const date = new Date();
  //     const formattedDate = `${date.getDate()}/${
  //       date.getMonth() + 1
  //     }/${date.getFullYear()}`;
  //     setCurrentDate(formattedDate);

  //     const systemDate = new Date();
  //     const pickupDate = new Date(data_daycare.pickupdate);

  //     const timeDiff = Math.abs(pickupDate - systemDate);
  //     const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  //     setTotalDays(totalDays);

  //     const calculatedBill = totalDays * 900; // 900 RS per day
  //     setBillAmount(calculatedBill);
  //     setCalculating(false);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [ID, data_daycare]);

  const validateForm = () => {
    if (
      selectedTime &&
      dropStreet &&
      dropCity &&
      dropState &&
      dropZip &&
      dropCounty
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTime, dropStreet, dropCity, dropState, dropZip, dropCounty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenBackdrop(true);
    const updatedData = {
      dropoffdate: currentDate,
      dropoffadress: dropStreet,
      dropoffcity: dropCity,
      dropoff_state: dropState,
      dropoffzip: dropZip,
      dropoff_county: dropCounty,
      bill: billAmount,
      daysservise: totalDays,
      dropofftime: selectedTime,
      dropoffstatus: true,
    };

    axios
      .put(`http://localhost:5000/api/daycare/${ID.id}`, updatedData)
      .then(() => {
        console.log("Daycare updated successfully");

        setOpenBackdrop(false);
        toast.success("request submitted sucessfully");
        window.location.href = "/tabs";
      })
      .catch((error) => {
        console.error("Error updating daycare:", error);
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="mx-auto gradient-custom mt-5" style={{ height: "100%" }}>
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div
              className="text-center"
              style={{ marginTop: "50%", marginLeft: "10px" }}
            >
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">
                Bill
              </MDBTypography>
              <p className="white-text">
                {calculating ? (
                  <div>Calculating...</div>
                ) : (
                  <>
                    <p>Pickup Date: {D_pickupdate}</p>
                    <p>System Date: {currentDate}</p>
                    <p>Total Days: {totalDays}</p>
                    <p>Bill Amount: {billAmount} RS</p>
                  </>
                )}
              </p>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4 bg-white">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: "#495057" }}>
                    Day Care-Dropoff
                  </MDBTypography>
                </div>
                <label style={{ fontSize: "25px" }} htmlFor="options">
                  Pet Name: {petName} petID: {DID}
                </label>

                <div>
                  <div>
                    <h1 style={{ fontSize: "25px" }}>
                      <form className="mb-0">
                        <div>
                          <br></br>
                          <div>
                            <h1 style={{ fontSize: "25px" }}>
                              Enter aprox time For Dropoff
                            </h1>

                            <select
                              id="options"
                              onChange={(e) => setSelectedTime(e.target.value)}
                              required
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
                          <div style={{ flex: "inline" }}></div>
                        </div>

                        <br></br>
                        <p
                          style={{
                            fontWeight: "bold",
                            marginTop: "10px",
                            fontSize: "20px",
                          }}
                        >
                          Enter Dropoff location:
                        </p>
                        <div className="form-group">
                          {/* <MDBRow className="mb-4"> */}
                          <input
                            type="text"
                            className="form-control input"
                            id="autocomplete"
                            placeholder="Street"
                            defaultValue={pickupadress}
                            value={dropStreet}
                            onChange={(e) => setDropStreet(e.target.value)}
                            required
                          />

                          <input
                            type="text"
                            className="form-control input"
                            id="inputCity"
                            placeholder="City"
                            defaultValue={pickupcity}
                            value={dropCity}
                            onChange={(e) => setDropCity(e.target.value)}
                            required
                          />

                          <input
                            type="text"
                            className="form-control input"
                            id="inputState"
                            placeholder="State"
                            defaultValue={state}
                            value={dropState}
                            onChange={(e) => setDropState(e.target.value)}
                            required
                          />

                          <input
                            type="text"
                            className="form-control input"
                            id="inputZipp"
                            placeholder="Zip"
                            defaultValue={pickupzip}
                            value={dropZip}
                            onChange={(e) => setDropZip(e.target.value)}
                            required
                          />

                          <input
                            type="text"
                            className="form-control input"
                            id="inputCountyy"
                            placeholder="Country"
                            defaultValue={County}
                            value={dropCounty}
                            onChange={(e) => setDropCounty(e.target.value)}
                            required
                          />
                          {/* </MDBRow> */}
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Button
                          disabled={!formValid}
                          // onSubmit={}
                          variant="contained"
                          onClick={handleSubmit}
                        >
                          Request
                        </Button>
                      </form>
                    </h1>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <SimpleBackdrop open={openBackdrop} onClose={setOpenBackdrop} />
    </div>
  );
};

export default Dropoffrequest;

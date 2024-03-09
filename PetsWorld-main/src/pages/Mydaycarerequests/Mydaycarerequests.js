import React from "react";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
function Mydaycarerequests() {
  const [daycareData, setDaycareData] = useState([]);
  const [petinfo, setpetinfo] = useState([]);

  const [canceledRequests, setCanceledRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const userdata = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/daycare");
        // setLoading(false);
        setDaycareData(response.data);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching daycare data:", error);
      }
    };

    fetchData();
  }, []);
  const filteredDaycareData = daycareData.filter(
    (daycare) => daycare.userid === userdata._id
  );

  useEffect(() => {
    const userId = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))._id
      : null;

    if (userId) {
      axios
        .get(`http://localhost:5000/api/pets/${userId}`)
        .then((response) => {
          setLoading(false);
          setpetinfo(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("User ID not found in localStorage");
    }
  }, []);

  // const cancelRequest = async (requestId) => {
  //   // setLoading(true);
  //   try {
  //     await axios.delete(`http://localhost:5000/api/daycare/${requestId}`);
  //     setCanceledRequests([...canceledRequests, requestId]);
  //     toast.success("Request cancelled Sucessfully");

  //     window.location.reload();
  //   } catch (error) {
  //     console.error("Error canceling request:", error);
  //   }
  // };

  const cancelRequest = async (requestId) => {
    try {
      await axios.delete(`http://localhost:5000/api/daycare/${requestId}`);
      setCanceledRequests([...canceledRequests, requestId]);
      toast.success("Request cancelled successfully");

      setDaycareData(
        daycareData.filter((daycare) => daycare._id !== requestId)
      );
    } catch (error) {
      console.error("Error canceling request:", error);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          style={{ height: "20%", width: "15%" }}
          src="/img/loader.gif"
          alt="Loading..."
        />
      </Box>
    );
  }

  if (filteredDaycareData.length === 0) {
    return (
      <div className="error-container">
        <p className="error-message">Sorry, no request found.</p>
      </div>
    );
  }
  const currentDate = new Date().toLocaleDateString("en-CA");
  return (
    <>
      <ToastContainer />
      <div
        style={{
          marginBottom: "-30px",
          display: "flex",
          marginTop: "50px",
          flexDirection: "row-reverse",
          marginRight: "20px",
        }}
      >
        <a
          id="link_text-7-53"
          class="ct-link-text saas-secondary-button"
          href="http:/info"
          target="_self"
        >
          Book Daycare Request
        </a>
      </div>
      {filteredDaycareData.map((request) => {
        const pet = petinfo.find((pet) => pet._id === request.petid);
        if (!pet) {
          return null;
        }
        return (
          <Card
            style={{ marginLeft: "50px", marginTop: "80px", width: "75%" }}
            key={request.id}
          >
            <Card.Header>{`Request ID: ${request._id}`}</Card.Header>
            <Card.Body>
              <Card.Title>
                <div>{`Pet Name: ${pet.petName}`}</div>
                {request.requestrejected ? (
                  <div>
                    <h1
                      style={{
                        fontSize: "25px",
                        color: "red",
                        marginTop: "10px",
                      }}
                    >
                      Request Rejected
                    </h1>
                    <Button
                      onClick={() => cancelRequest(request._id)}
                      variant="outlined"
                      style={{ color: "red" }}
                    >
                      delete Request
                    </Button>
                  </div>
                ) : (
                  <>
                    {request.approvedcheck ? (
                      <div
                        style={{
                          color: "green",
                          marginTop: "10px",
                          fontWeight: "bold",
                          fontSize: "30px",
                        }}
                      >
                        Approved
                        <div
                          style={{
                            color: "black",
                            marginTop: "10px",
                            // fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          NOTE: When confirming the identity of a pickup person
                          and your pet, a unique code is provided and written on
                          a tag. The pickup person is required to validate their
                          identity by matching the provided code with the code
                          on the tag. Once the codes are confirmed to match, You
                          have to sign the tag, This process ensures
                          accountability and security during pickups.
                        </div>
                        <div style={{ display: "flex", color: "black" }}>
                          Code:
                          <div
                            style={{ color: "red" }}
                          >{` ${request.identity_number}`}</div>
                        </div>
                        <div
                          style={{
                            color: "black",
                            fontSize: "15px",
                            marginTop: "10px",
                          }}
                        >
                          Status:
                          {request.pickedupstatus === true && (
                            <div>
                              <div style={{ color: "green" }}>Picked Up</div>

                              <div style={{ color: "black" }}>
                                {`Date of Pickup: ${request.pickupdate}`}
                              </div>

                              {request.dropoffstatus === true && (
                                //reminder next task:  dropoff handle krna
                                <div>
                                  <div>
                                    {`Dropoff Date: ${request.dropoffdate}`}
                                  </div>
                                  <div>
                                    {`service Days: ${request.daysservise}`}
                                  </div>
                                  <div
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "20px",
                                      color: "green",
                                      marginTop: "14px",
                                    }}
                                  >
                                    {`Payable Ammount: ${request.bill}`}
                                  </div>
                                  <div>
                                    {request.delivered === true && (
                                      <div>
                                        <div style={{ display: "flex" }}>
                                          delivered:
                                          <div style={{ color: "green" }}>
                                            delivered
                                          </div>
                                        </div>
                                        <br />
                                        <Button
                                          onClick={() =>
                                            cancelRequest(request._id)
                                          }
                                          variant="outlined"
                                          style={{ color: "red" }}
                                        >
                                          delete Request
                                        </Button>
                                      </div>
                                    )}
                                    {request.delivered === false && (
                                      <div>
                                        <div style={{ display: "flex" }}>
                                          delivered:
                                          <div style={{ color: "red" }}>
                                            not yet delivered
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}
                              {request.dropoffstatus === false && (
                                <div>
                                  <br />
                                  <Card>
                                    <Button
                                      style={{
                                        borderColor: "green",
                                        color: "green",
                                      }}
                                      onClick={() => {
                                        window.location.href = `/dropoff/${request._id}`;
                                      }}
                                    >
                                      Request for dropoff
                                    </Button>
                                  </Card>
                                </div>
                              )}
                            </div>
                          )}
                          {request.pickedupstatus === false && (
                            <div>
                              <div style={{ color: "red" }}>Not yet Picked</div>
                              {new Date(request.pickupdate) <
                                new Date(currentDate) && (
                                <div>
                                  <p style={{ color: "red" }}>
                                    Pickup Date is passed Kindly request for new
                                    one
                                  </p>
                                  <Card key={request._id}>
                                    <Button
                                      style={{
                                        borderColor: "red",
                                        color: "red",
                                      }}
                                      onClick={() => cancelRequest(request._id)}
                                    >
                                      Delete Request
                                    </Button>
                                  </Card>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p
                          style={{
                            color: "red",
                            marginTop: "10px",
                            fontWeight: "bold",
                            fontSize: "30px",
                          }}
                        >
                          Waiting for approval
                        </p>
                        <div style={{ fontSize: "15px" }}>
                          <br />
                          <div>
                            <h4
                              className="cc
                            "
                            >
                              Pickup Address
                            </h4>
                          </div>
                          <div>{` ${request.pickupadress},${request.pickupzip},${request.pickupcity}.`}</div>
                          <br />
                          <div
                            style={{
                              fontWeight: "bold",
                              fontSize: "15px",
                              marginTop: "10px",
                              color: "green",
                            }}
                          >
                            {request.pickuptime === "1" && (
                              <div>Pickup Time: 09:00am-10:00am</div>
                            )}
                            {request.pickuptime === "2" && (
                              <div>Pickup Time: 10:00am-11:00am</div>
                            )}
                            {request.pickuptime === "3" && (
                              <div>Pickup Time: 11:00am-12:00pm</div>
                            )}
                            {request.pickuptime === "4" && (
                              <div>Pickup Time: 12:00pm-01:00pm</div>
                            )}
                            {request.pickuptime === "5" && (
                              <div>Pickup Time: 01:00pm-02:00pm</div>
                            )}
                            {request.pickuptime === "6" && (
                              <div>Pickup Time: 02:00pm-03:00pm</div>
                            )}
                            {request.pickuptime === "7" && (
                              <div>Pickup Time: 03:00pm-04:00pm</div>
                            )}
                            {request.pickuptime === "8" && (
                              <div>Pickup Time: 04:00pm-05:00pm</div>
                            )}
                            {request.pickuptime === "9" && (
                              <div>Pickup Time: 05:00pm-06:00pm</div>
                            )}
                            {/*  ///////////////////////////////////// */}
                            {request.pickuptime !== "1" &&
                              request.pickuptime !== "2" &&
                              request.pickuptime !== "3" &&
                              request.pickuptime !== "4" &&
                              request.pickuptime !== "5" &&
                              request.pickuptime !== "6" &&
                              request.pickuptime !== "7" &&
                              request.pickuptime !== "8" &&
                              request.pickuptime !== "9" && (
                                <div>{`Pickup Time: ${request.pickuptime}`}</div>
                              )}

                            <div>
                              <div style={{ marginTop: "10px" }}>
                                {request.toaldays === "1" && (
                                  <div>Estimated days: 1 day</div>
                                )}
                                {request.toaldays === "2" && (
                                  <div>Estimated days: 2 days</div>
                                )}
                                {request.toaldays === "3" && (
                                  <div>Estimated days: 3 days</div>
                                )}
                                {request.toaldays === "4" && (
                                  <div>Estimated days: Notsure</div>
                                )}
                                {request.toaldays !== "1" &&
                                  request.toaldays !== "2" &&
                                  request.toaldays !== "3" &&
                                  request.toaldays !== "4" && (
                                    <div>{`Estimated days: ${request.toaldays}`}</div>
                                  )}
                              </div>
                            </div>

                            <br />

                            <Card key={request._id}>
                              <Button
                                style={{ borderColor: "red", color: "red" }}
                                onClick={() => cancelRequest(request._id)}
                              >
                                Cancel Request
                              </Button>
                            </Card>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Mydaycarerequests;

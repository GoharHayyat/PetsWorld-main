import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./PetsDetails.css";
import { AiTwotoneEnvironment } from "react-icons/ai";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import LoginSignupModal from "../LoginSignupModal/LoginSignupModal";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

const auth = localStorage.getItem("user");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function PetsDetails() {
  const id = useParams();
  const [data, setData] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);

  const userdata = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/buyandsell"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchPets();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

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
          style={{ height: "20%", width: "13%" }}
          src="/img/loader.gif"
          alt="Loading..."
        />
      </Box>
    );
  }

  const pet = data.find((x) => x._id === id.id);
  if (!pet) {
    return <div>Pet not found</div>;
  }
  const imageUrls = pet.images.map((image) => `http://localhost:5000/${image}`);

  const userId = pet.userId;
  const user = users.find((user) => user._id === userId);
  var nnum;
  var posterF_name;
  var posterl_name;
  if (user) {
    nnum = user.phone;
    posterF_name = user.f_name;
    posterl_name = user.l_name;
  }
  console.log(posterF_name);

  const handleImageClick = (url) => {
    setMainImage(url);
  };

  const handleContactButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div></div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            alignContent: "stretch",
            justifyContent: "center",
            alignItems: "flex-start;",
            flexDirection: "column",
            marginLeft: "40px",
          }}
        >
          <div className="main_image_setting">
            <img
              src={mainImage || imageUrls[0]}
              alt={pet.name}
              className="product-image"
            />
          </div>

          <div className="additional-images-container">
            {imageUrls.slice(1).map((url, index) => (
              <img
                src={url}
                alt={pet.name}
                className={`additional-image ${
                  url === mainImage ? "selected" : ""
                }`}
                key={index}
                onClick={() => handleImageClick(url)}
              />
            ))}
          </div>
        </div>

        <div className="card_edit_n-details">
          <div className="card_edit_n p-5">
            <div className="mb-2">
              <h1 className="">{pet.title}</h1>
            </div>
            <div className="mb-2 flex justify-between">
              <div
                style={{ fontSize: "30px", fontWeight: "bold", color: "green" }}
                className="f-mono"
              >
                Rs {pet.price}
              </div>
            </div>
            <br />

            <div className="mb-2">
              <div style={{ display: "flex" }}>
                <span style={{ fontSize: "19px" }} className="heading">
                  Details
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }} className="mb-2">
              <h6 style={{ fontWeight: "bold" }}>Type: </h6>
              <h6 style={{ marginLeft: "6px" }}>{pet.pet}</h6>
            </div>
            <div
              style={{ display: "flex", marginTop: "-6px" }}
              className="mb-2"
            >
              <h6 style={{ fontWeight: "bold" }}>Breed: </h6>
              <h6 style={{ marginLeft: "6px" }}>{pet.breed}</h6>
            </div>
            <div
              style={{ display: "flex", marginTop: "-6px" }}
              className="mb-2"
            >
              <h6 style={{ fontWeight: "bold" }}>Gender: </h6>
              <h6 style={{ marginLeft: "6px" }}>{pet.gender} </h6>
            </div>
            <div
              style={{ display: "flex", marginTop: "-6px" }}
              className="mb-2"
            >
              <h6 style={{ fontWeight: "bold" }}>Age: </h6>
              <h6 style={{ marginLeft: "6px" }}>{pet.years} years </h6>
              <h6 style={{ marginLeft: "6px" }}>{pet.months} months </h6>
            </div>
            <div
              style={{ display: "flex", marginTop: "-6px" }}
              className="mb-2"
            >
              <h6 style={{ fontWeight: "bold" }}>Weight: </h6>
              <h6 style={{ marginLeft: "6px" }}>{pet.weight} Kg</h6>
            </div>
            <div
              style={{ display: "flex", marginTop: "-6px" }}
              className="mb-2"
            >
              <h6 style={{ fontWeight: "bold" }}>Vaccinated: </h6>
              <h6 style={{ marginLeft: "6px" }}>
                {pet.vaccinated ? "Yes" : "No"}
              </h6>
            </div>
            <div className="mb-2">
              <span style={{ fontSize: "19px" }} className="heading">
                Description
              </span>
              <div
                style={{ display: "flex", marginTop: "-6px" }}
                className="mb-2"
              >
                <h6
                  style={{
                    marginLeft: "6px",
                    marginTop: "10px",
                    color: "grey",
                  }}
                >
                  {pet.description}
                </h6>
              </div>
            </div>
            <div className="mb-2 flex justify-between">
              <div className="star">
                <AiTwotoneEnvironment />
                <span style={{ fontWeight: "bold" }}>
                  {pet.street} {pet.city}, {pet.state}
                </span>
              </div>
            </div>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                {auth ? (
                  <>
                    {pet.userId === userdata._id ? (
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        <div style={{ display: "flex" }}>
                          <Stack direction="row">
                            <Avatar src="/broken-image.jpg" />
                          </Stack>
                          <span
                            style={{
                              fontSize: "15px",
                              marginLeft: "10px",
                              marginTop: "8px",
                            }}
                            className="heading"
                          >
                            <Typography variant="h5" component="div">
                              {posterF_name} {posterl_name} (Me)
                            </Typography>
                          </span>
                        </div>
                      </Typography>
                    ) : (
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        <div style={{ display: "flex" }}>
                          <Stack direction="row">
                            <Avatar src="/broken-image.jpg" />
                          </Stack>
                          <span
                            style={{
                              fontSize: "15px",
                              marginLeft: "10px",
                              marginTop: "8px",
                            }}
                            className="heading"
                          >
                            <Typography variant="h5" component="div">
                              {posterF_name} {posterl_name}
                            </Typography>
                          </span>
                        </div>
                      </Typography>
                    )}
                  </>
                ) : (
                  <>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <div style={{ display: "flex" }}>
                        <Stack direction="row">
                          <Avatar src="/broken-image.jpg" />
                        </Stack>
                        <span
                          style={{
                            fontSize: "15px",
                            marginLeft: "10px",
                            marginTop: "8px",
                          }}
                          className="heading"
                        >
                          <Typography variant="h5" component="div">
                            {posterF_name} {posterl_name}
                          </Typography>
                        </span>
                      </div>
                    </Typography>
                  </>
                )}
              </CardContent>
              <CardActions>
                <br />
                <div style={{ marginLeft: "2%" }}>
                  {auth ? (
                    <Button
                      variant="contained"
                      startIcon={<PhoneIcon />}
                      disabled={pet.userId === userdata._id}
                      onClick={handleContactButtonClick}
                    >
                      Show phone number
                    </Button>
                  ) : (
                    <>
                      {auth ? (
                        <Button
                          variant="contained"
                          startIcon={<PhoneIcon />}
                          onClick={handleContactButtonClick}
                        >
                          Show phone number
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          startIcon={<PhoneIcon />}
                          onClick={() => setModalShow(true)}
                        >
                          Show phone number
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      <Modal
        keepMounted
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        <Box sx={style}>
          <Typography id="contact-modal-title" variant="h6" component="h2">
            Number
          </Typography>
          <Typography id="contact-modal-description" sx={{ mt: 2 }}>
            {/* {user.phone} */}
            {nnum}
          </Typography>
        </Box>
      </Modal>
      <LoginSignupModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

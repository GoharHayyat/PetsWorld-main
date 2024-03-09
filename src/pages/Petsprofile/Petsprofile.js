import main_heading_below from "../../assets/img/main_heading_below.png";
import "./Petsprofile.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Modal from "@mui/joy/Modal";
import Modall from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DeleteForever from "@mui/icons-material/DeleteForever";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import Typography from "@mui/joy/Typography";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Textarea } from "@mui/joy";

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

function Petsprofile() {
  const [loading, setLoading] = useState(true);
  const [Pets, setPet] = useState();
  const [open, setOpen] = React.useState(false);
  const [openn, setOpenn] = React.useState(false);
  const [petEdit, setPetEdit] = useState();
  const [image, setImage] = useState(null);
  const [trigger, setTrigger] = useState(null);
  const [servicedays, setServicedays] = useState("0");
  const [verify, setVerify] = useState(null);

  const handleVerify = (event) => {
    if (event.target.name === "image")
      setVerify({ ...verify, image: event.target.files[0] });
    else setVerify({ ...verify, [event.target.name]: event.target.value });
  };

  const onVerify = async () => {
    const formData = new FormData();
    formData.append("pet_name", verify.pet_name);
    formData.append("image", verify.image);
    formData.append("pet_id", verify.pet_id);
    formData.append("pet_type", verify.pet_type);
    formData.append("user_id", verify.user_id);
    formData.append("note", verify.note);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/others/verification",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        toast.success("Request Sent!");
        setOpenn(false);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleEdit = (event) => {
    setPetEdit({
      ...petEdit,
      [event.target.name]: event.target.value,
    });
  };
  const handleImage = (event) => {
    setImage(event.target.files[0]);
    setPetEdit({
      ...petEdit,
      [event.target.name]: event.target.files[0],
    });
  };

  const [openBackdrop, setOpenBackdrop] = React.useState(false);

  const ID = useParams();
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/daycare");
  //       const daycareData = response.data;

  //       // Get all pet IDs from daycareData
  //       const petIds = daycareData.map((daycarePet) => daycarePet.petid);
  //       console.log(petIds);
  //       console.log(ID);

  //       // Check if petId exists in daycareData
  //       const petExistsInDaycare = petIds.some((petId) => petId === ID.id);

  //       console.log(petExistsInDaycare);

  //       if (petExistsInDaycare) {
  //         toast.success("Pet is available in the daycare!");
  //       } else {
  //         toast.error("Pet is not available in the daycare.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching daycare data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [ID]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/daycare");
  //       const daycareData = response.data;

  //       // Get all pet IDs from daycareData
  //       const petIds = daycareData.map((daycarePet) => daycarePet.petid);
  //       console.log(petIds);
  //       console.log(ID);

  //       // Find the pet in daycareData with matching ID
  //       const petInDaycare = daycareData.find(
  //         (daycarePet) => daycarePet.petid === ID.id
  //       );

  //       if (petInDaycare && petInDaycare.pickedupstatus) {
  //         toast.success("Pet is available in the daycare!");
  //       } else {
  //         toast.error("Pet is not available in the daycare.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching daycare data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [ID]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/daycare");
        const daycareData = response.data;

        //const petIds = daycareData.map((daycarePet) => daycarePet.petid);

        const petInDaycare = daycareData.find(
          (daycarePet) => daycarePet.petid === ID.id
        );

        if (petInDaycare && petInDaycare.pickedupstatus) {
          const pickupdate = new Date(petInDaycare.pickupdate);
          const currentDate = new Date();
          const timeDifference = currentDate.getTime() - pickupdate.getTime();
          const daysDifference =
            Math.floor(timeDifference / (1000 * 3600 * 24)) + 1;

          if (petInDaycare.delivered) {
            setServicedays(0);
          } else {
            setServicedays(daysDifference);
          }
        } else {
        }
      } catch (error) {
        console.error("Error fetching daycare data:", error);
      }
    };

    fetchData();
  }, [ID]);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/petbyid/${ID.id}`
        );
        setPet(response.data[0]);
        setPetEdit(response.data[0]);
        console.log(response.data[0]);
        setVerify({
          pet_id: response.data[0]._id,
          pet_name: response.data[0].petName,
          pet_type: response.data[0].pet,
          user_id: response.data[0].userId,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error retrieving user:", error);
      }
    };
    setTrigger(null);
    fetchPet();
  }, [ID, trigger]);

  const deleteDaycare = async (daycare_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/daycare/${daycare_id}`);
      return true;
    } catch {
      return false;
    }
  };

  const handleDelete = async () => {
    setOpen(false);
    setOpenBackdrop(true);
    try {
      const daycareResponse = await axios.get(
        `http://localhost:5000/api/daycare/petid/${ID.id}`
      );

      if (daycareResponse.data !== "not found") {
        if (
          daycareResponse.data.delivered ||
          daycareResponse.data.requestrejected
        ) {
          deleteDaycare(daycareResponse.data._id).then(async (result) => {
            if (!result) {
              toast.error("Failed to delete daycare request");
            } else {
              try {
                const response = await axios.delete(
                  `http://localhost:5000/api/pet/${ID.id}`
                );
                if (response.status === 200) {
                  toast.success("Pet Deleted successfully");
                  setOpenBackdrop(false);
                  window.location.href = "/tabs";
                }
              } catch {
                toast.error("Error deleting Pet");
              }
            }
          });
        } else {
          toast.error("Cannot delete pet. Daycare is in progress.");
          setOpenBackdrop(false);
          return;
        }
      } else {
        const response = await axios.delete(
          `http://localhost:5000/api/pet/${ID.id}`
        );
        if (response.status === 200) {
          toast.success("Pet Deleted successfully");

          setOpenBackdrop(false);
          window.location.href = "/tabs";
        } else {
          console.error("Error deleting pet:", response.data.error);
        }
      }
    } catch (error) {
      console.error("Failed to delete pet:", error);
    }
  };

  const handleSave = async () => {
    setOpenBackdrop(true);
    try {
      const formData = new FormData();
      for (const field in petEdit) {
        formData.append(field, petEdit[field]);
      }
      await axios.put(`http://localhost:5000/api/updatePet`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setOpenBackdrop(false);
      toast.success("updated Sucessfully!");
      setTrigger("update");
    } catch (error) {
      console.error("Error updating pet:", error);
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
          style={{ height: "20%", width: "13%" }}
          src="/img/loader.gif"
          alt="Loading..."
        />
      </Box>
    );
  }

  if (!Pets) return <h1>Pets Not Exists!</h1>;
  // const isVaccinated = Boolean(Pets.vaccinated);

  return (
    <div
      style={{
        fontFamily: "ui-sans-serif",
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
        PET'S PROFILE
      </h1>
      <div style={{ textAlign: "center", marginTop: "-6px" }}>
        <img alt="" src={main_heading_below}></img>
      </div>

      <div className="elementstylecss">
        <motion.div
          initial={{ opacity: 0.5, scaleY: 0.2 }}
          whileInView={{
            opacity: 1,
            scaleY: 1,
            transition: {
              type: "spring",
              opacity: { duration: 0.6 },
              delay: 0.2,
              duration: 0.2,
              stiffness: 80,
              bounce: 0.3,
            },
          }}
          viewport={{ once: true }}
          id="div_block-60-53"
          class="ct-div-block flight-iconblock-4-column"
        >
          <div
            id="text_block-63-53"
            class="ct-text-block flight-iconblock-4-text"
          >
            <label
              htmlFor="image-upload"
              style={{
                cursor: "pointer",
              }}
            >
              <Avatar
                alt={Pets.petName}
                src={
                  image
                    ? URL.createObjectURL(image)
                    : `http://localhost:5000/${Pets.image}`
                }
                sx={{ width: 200, height: 200 }}
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImage}
                style={{ display: "none" }}
                id="image-upload"
              />
            </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, scaleY: 0.2 }}
          whileInView={{
            opacity: 1,
            scaleY: 1,
            transition: {
              type: "spring",
              opacity: { duration: 0.6 },
              delay: 0.2,
              duration: 0.2,
              stiffness: 80,
              bounce: 0.3,
            },
          }}
          viewport={{ once: true }}
          id="div_block-60-53"
          class="ct-div-block flight-iconblock-4-column"
        >
          <div
            id="text_block-63-53"
            class="ct-text-block flight-iconblock-4-text"
          >
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                // marginTop: "30%",
              }}
            >
              Daycare
            </h1>
            <motion.h1
              initial={{ opacity: 0.1, scaleY: 0.1 }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
                transition: {
                  type: "spring",
                  opacity: { duration: 0.6 },
                  delay: 0.6,
                  duration: 0.2,
                  stiffness: 80,
                  bounce: 0.2,
                },
              }}
              viewport={{ once: true }}
              style={{
                fontSize: "50px",
                color: "#9932e4",
                display: "flex",
                alignItems: "center",
                marginLeft: "35%",
                fontWeight: "bold",
              }}
            >
              {/* {Pets.daycare}
               */}
              {servicedays}
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, scaleY: 0.2 }}
          whileInView={{
            opacity: 1,
            scaleY: 1,
            transition: {
              type: "spring",
              opacity: { duration: 0.6 },
              delay: 0.2,
              duration: 0.2,
              stiffness: 80,
              bounce: 0.3,
            },
          }}
          viewport={{ once: true }}
          id="div_block-60-53"
          class="ct-div-block flight-iconblock-4-column"
        >
          <div
            id="text_block-63-53"
            class="ct-text-block flight-iconblock-4-text"
          >
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                // marginTop: "25%",
              }}
            >
              Vaccinated
            </h1>

            <motion.h1
              initial={{ opacity: 0.1, scaleY: 0.1 }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
                transition: {
                  type: "spring",
                  opacity: { duration: 0.6 },
                  delay: 0.6,
                  duration: 0.2,
                  stiffness: 80,
                  bounce: 0.2,
                },
              }}
              viewport={{ once: true }}
              style={{
                fontSize: "50px",
                color: Pets.vaccinated === "true" ? "#9932e4" : "red",
                display: "flex",
                marginLeft: "23%",
                fontWeight: "bold",
              }}
            >
              {Pets.vaccinated === "true" ? "YES" : "NO"}
              {Pets.vaccinated && (
                <h2
                  style={{
                    fontSize: "15px",
                    marginTop: "35px",
                    color: Pets.vaccinatedVerified === "true" ? "green" : "red",
                  }}
                >
                  {Pets.vaccinatedVerified === "true"
                    ? "/Verified"
                    : "/Not Verified"}
                </h2>
              )}
            </motion.h1>

            {Pets.vaccinated === "true" &&
              Pets.vaccinatedVerified === "false" && (
                <button
                  style={{
                    fontSize: "13px",
                    // marginTop: "35px",
                    marginLeft: "20px",
                    backgroundColor: "#9932e4",
                    color: "white",
                    border: "none",
                    padding: "8px 8px",
                    borderRadius: "5px",
                    // cursor: "pointer",
                  }}
                  onClick={() => setOpenn(true)}
                >
                  Apply for verification
                </button>
              )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, scaleY: 0.2 }}
          whileInView={{
            opacity: 1,
            scaleY: 1,
            transition: {
              type: "spring",
              opacity: { duration: 0.6 },
              delay: 0.2,
              duration: 0.2,
              stiffness: 80,
              bounce: 0.3,
            },
          }}
          viewport={{ once: true }}
          id="div_block-60-53"
          class="ct-div-block flight-iconblock-4-column"
        >
          <div
            id="text_block-63-53"
            class="ct-text-block flight-iconblock-4-text"
          >
            <h1
              style={{
                display: "flex",
                alignItems: "center",
                // marginTop: "25%",
              }}
            >
              Insurance
            </h1>

            <motion.h1
              initial={{ opacity: 0.1, scaleY: 0.1 }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
                transition: {
                  type: "spring",
                  opacity: { duration: 0.6 },
                  delay: 0.6,
                  duration: 0.2,
                  stiffness: 80,
                  bounce: 0.2,
                },
              }}
              viewport={{ once: true }}
              style={{
                fontSize: "50px",
                color: Pets.incurrence === "true" ? "#9932e4" : "red",
                //   display: "flex",
                //   alignItems: "center",
                marginLeft: "1%",
                fontWeight: "bold",
              }}
            >
              {Pets.incurrence === "true" ? "Insured" : "NO"}
            </motion.h1>
          </div>
        </motion.div>
      </div>

      <Stack direction="row">
        <h1
          direction="row"
          style={{
            fontSize: "30px",
            color: "black",
            display: "flex",
            alignItems: "center",
            marginLeft: "20%",
            fontWeight: "bold",
            marginTop: "5%",
          }}
        >
          Name:
        </h1>

        <Input
          style={{
            color: "#9932e4",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            marginLeft: "1%",
            marginTop: "5%",
          }}
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue={Pets.petName}
          name="petName"
          onChange={handleEdit}
        />
      </Stack>
      <div>
        <Stack direction="row">
          <h1
            direction="row"
            style={{
              fontSize: "30px",
              color: "black",
              display: "flex",
              alignItems: "center",
              marginLeft: "20%",
              fontWeight: "bold",
              marginTop: "2%",
            }}
          >
            Breed:
          </h1>
          <h1
            style={{
              fontSize: "30px",
              color: "#9932e4",
              display: "flex",
              alignItems: "center",
              marginLeft: "1%",
              marginTop: "2%",
            }}
          >
            {Pets.breed}
          </h1>
        </Stack>
      </div>

      <div>
        <Stack direction="row">
          <h1
            direction="row"
            style={{
              fontSize: "30px",
              color: "black",
              display: "flex",
              alignItems: "center",
              marginLeft: "20%",
              fontWeight: "bold",
              marginTop: "2%",
            }}
          >
            Type:
          </h1>
          <h1
            style={{
              fontSize: "30px",
              color: "#9932e4",
              display: "flex",
              alignItems: "center",
              marginLeft: "1%",
              marginTop: "2%",
            }}
          >
            {Pets.pet}
          </h1>

          <h1
            direction="row"
            style={{
              fontSize: "30px",
              color: "black",
              display: "flex",
              alignItems: "center",
              marginLeft: "25%",
              fontWeight: "bold",
              marginTop: "2%",
            }}
          >
            Gender:
          </h1>
          <h1
            style={{
              fontSize: "30px",
              color: "#9932e4",
              display: "flex",
              alignItems: "center",
              marginLeft: "1%",
              marginTop: "2%",
            }}
          >
            {Pets.gender}
          </h1>
        </Stack>
        <div
          style={{
            fontSize: "30px",
            color: "black",
            display: "flex",
            alignItems: "center",
            marginRight: "20%",
            fontWeight: "bold",
            marginTop: "2%",
          }}
        >
          <h1
            direction="row"
            style={{
              fontSize: "30px",
              color: "black",
              display: "flex",
              alignItems: "center",
              marginLeft: "25%",
              fontWeight: "bold",
              marginTop: "2%",
            }}
          >
            Age:
          </h1>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 160 }}>
            <InputLabel
              style={{
                fontSize: "24px",
                color: "#9932e4",
                fontWeight: "bold",
              }}
              id="demo-simple-select-filled-label"
            >
              {petEdit.months} months
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name="months"
              value={petEdit.months}
              onChange={handleEdit}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
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
          <FormControl variant="filled" sx={{ m: 1, minWidth: 155 }}>
            <InputLabel
              style={{
                fontSize: "24px",
                color: "#9932e4",
                fontWeight: "bold",
              }}
              id="demo-simple-select-filled-label"
            >
              {petEdit.years} Years
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              name="years"
              value={petEdit.years}
              onChange={handleEdit}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
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
        </div>
        <Stack direction="row">
          <h1
            style={{
              fontSize: "30px",
              color: "black",
              display: "flex",
              alignItems: "center",
              marginLeft: "20%",
              fontWeight: "bold",
              marginTop: "5%",
            }}
          >
            Weight(Kg):
          </h1>

          <Input
            style={{
              color: "#9932e4",
              fontSize: "30px",
              display: "flex",
              alignItems: "center",
              marginLeft: "1%",
              marginTop: "5%",
            }}
            id="outlined-uncontrolled"
            label="Uncontrolled"
            name="weight"
            defaultValue={petEdit.weight}
            onChange={handleEdit}
          />
        </Stack>
      </div>

      <div className="save-button">
        <button className="save-button-btn" onClick={handleSave}>
          Save
        </button>
        <div style={{ marginLeft: "40px", marginBottom: "5px" }}>
          <React.Fragment>
            <Button
              variant="outlined"
              color="danger"
              endDecorator={<DeleteForever />}
              onClick={() => setOpen(true)}
            >
              Delete Profile
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <ModalDialog
                variant="outlined"
                role="alertdialog"
                aria-labelledby="alert-dialog-modal-title"
                aria-describedby="alert-dialog-modal-description"
              >
                <Typography
                  id="alert-dialog-modal-title"
                  component="h2"
                  startDecorator={<WarningRoundedIcon />}
                >
                  Confirmation
                </Typography>
                <Divider />
                <Typography
                  id="alert-dialog-modal-description"
                  textColor="text.tertiary"
                >
                  Are you sure you want to delete your pets profile?
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "flex-end",
                    pt: 2,
                  }}
                >
                  <Button
                    variant="plain"
                    color="neutral"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="solid" color="danger" onClick={handleDelete}>
                    confirm
                  </Button>
                </Box>
              </ModalDialog>
            </Modal>
          </React.Fragment>
        </div>
      </div>
      <React.Fragment>
        <Modall open={openn} onClose={() => setOpenn(false)}>
          <ModalDialog
            variant="outlined"
            role="alertdialog"
            aria-labelledby="alert-dialog-modal-title"
            aria-describedby="alert-dialog-modal-description"
          >
            <Typography
              id="alert-dialog-modal-title"
              component="h2"
              startDecorator={<WarningRoundedIcon />}
            >
              Verification
            </Typography>
            <Divider />
            <Typography
              id="alert-dialog-modal-description"
              textColor="text.tertiary"
            >
              <label
                htmlFor="verification"
                style={{
                  cursor: "pointer",
                }}
              >
                {verify.image ? (
                  <img
                    alt={"Upload"}
                    src={URL.createObjectURL(verify.image)}
                    style={{ width: 400, height: 200 }}
                  />
                ) : (
                  <label
                    htmlFor="verification"
                    style={{
                      cursor: "pointer",
                    }}
                    className="btn btn-primary"
                  >
                    Upload Image
                  </label>
                )}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleVerify}
                  style={{ display: "none" }}
                  id="verification"
                />
              </label>
              <Textarea
                name="note"
                placeholder="Additional Information"
                minRows={4}
                onChange={handleVerify}
              ></Textarea>
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "flex-end",
                pt: 2,
              }}
            >
              <Button variant="solid" color="neutral" onClick={onVerify}>
                Send
              </Button>
            </Box>
          </ModalDialog>
        </Modall>
      </React.Fragment>
      <SimpleBackdrop open={openBackdrop} onClose={setOpenBackdrop} />
    </div>
  );
}

export default Petsprofile;

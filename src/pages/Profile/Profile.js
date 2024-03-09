import main_heading_below from "../../assets/img/main_heading_below.png";
import "./Profile.css";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import EmailFillIcon from "@rsuite/icons/EmailFill";
import MemberIcon from "@rsuite/icons/Member";
import PhoneFillIcon from "@rsuite/icons/PhoneFill";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const [petinfo, setpetinfo] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [user, setUser] = useState();
  const [cpass, setCpass] = useState();
  const [Pass, setPass] = useState({
    oldpass: "",
    newpass: "",
    cpass: "",
  });

  const passedit = (opt, val) => {
    if (opt === 0) {
      setPass((prevState) => ({
        ...prevState,
        oldpass: val,
      }));
    } else if (opt === 1) {
      setPass((prevState) => ({
        ...prevState,
        newpass: val,
      }));
    } else if (opt === 2) {
      setPass((prevState) => ({
        ...prevState,
        cpass: val,
      }));
    }
  };

  const handlePassSubmit = (event) => {
    event.preventDefault();
    if (!Pass.oldpass || !Pass.newpass || !Pass.cpass) {
      alert("Fill All Feilds");
    }
    if (Pass.oldpass === user.pass && Pass.newpass === Pass.cpass) {
      const password = { pass: Pass.newpass };
      axios
        .put(`http://localhost:5000/api/users/pass/${user._id}`, password)
        .then(() => {
          alert("Sucess");
          handleClose();
        })
        .catch((error) => {
          console.error("Error updating Password:", error);
        });
    }
  };

  const useredit = (opt, val) => {
    if (opt === 0) {
      setUser((prevState) => ({
        ...prevState,
        f_name: val,
      }));
    } else if (opt === 1) {
      setUser((prevState) => ({
        ...prevState,
        l_name: val,
      }));
    } else if (opt === 2) {
      setUser((prevState) => ({
        ...prevState,
        phone: val,
      }));
    } else if (opt === 3) {
      setCpass(val);
    }
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (!cpass) {
      alert("Enter Confirm Pass");
    } else if (user.pass === cpass) {
      axios
        .put(`http://localhost:5000/api/users/${user._id}`, user)
        .then(() => {
          const updated = {
            _id: user._id,
            f_name: user.f_name,
            l_name: user.l_name,
            phone: user.phone,
            email: userdata.email,
          };
          localStorage.setItem("user", JSON.stringify(updated));
          setUser(updated);
          handleClose();
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } else {
      alert("invalid pass");
      console.log(cpass);
    }
  };

  const numCardsPerRow = 3;
  // const cardWidth = `calc((100% - ${
  //   numCardsPerRow - 1
  // } * 16px) / ${numCardsPerRow})`;

  const userdata = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const userId = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))._id
      : null;

    if (userId) {
      axios
        .get(`http://localhost:5000/api/pets/${userId}`)
        .then((response) => {
          setpetinfo(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("User ID not found in localStorage");
    }
  }, []);

  const handleEdit = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/${userdata._id}`
      );
      setUser(response.data);
      setOpen(true);
    } catch (error) {
      console.error("Error retrieving user:", error);
    }
  };

  const handleClose = () => {
    setCpass(null);
    setUser(null);
    setPass({
      oldpass: "",
      newpass: "",
      cpass: "",
    });
    setOpen(false);
    setChangePassword(false);
  };

  // const handleSubmit = (event) => {
  //   // event.preventDefault();
  //   // handleClose();
  //   // setChangePassword(false);
  // };

  const handlePasswordChange = () => {
    setChangePassword(true);
  };

  return (
    <div
      style={{
        fontFamily: "ui-sans-serif",
      }}
    >
      <ToastContainer />
      <div
        style={{
          marginTop: "30px",
          marginBottom: "35px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "0",
          }}
        >
          Account overview{" "}
        </h1>{" "}
        <div style={{ textAlign: "center", marginTop: "-6px" }}>
          <img alt="" src={main_heading_below} />{" "}
        </div>{" "}
      </div>{" "}
      <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <div style={{ width: "90%" }}>
          <article className="profile-section">
            <h3 className="section-title">Profile</h3>
            <section className="profile-info">
              <table className="profile-table">
                <tbody>
                  <tr className="table-row">
                    <td className="label">
                      <MemberIcon
                        style={{ color: "#b3b3b3", marginBottom: "5px" }}
                      />{" "}
                      Username
                    </td>
                    <td className="value">
                      {userdata.f_name} {userdata.l_name}
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="label">
                      <EmailFillIcon
                        style={{ color: "#b3b3b3", marginBottom: "5px" }}
                      />{" "}
                      Email
                    </td>
                    <td className="value">{userdata.email}</td>
                  </tr>
                  <tr className="table-row">
                    <td className="label">
                      <PhoneFillIcon
                        style={{ color: "#b3b3b3", marginBottom: "5px" }}
                      />{" "}
                      Phoneno
                    </td>
                    <td className="value">{userdata.phone}</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </article>
          <div className="save-button">
            <button onClick={handleEdit} className="save-button-btn">
              {" "}
              Edit{" "}
            </button>{" "}
          </div>{" "}
          <h5> Pets Info: </h5>{" "}
          {/* <div style={{ marginTop: "40px" }}>
            <div
              className="elementstyleforimage"
              // style={{
              //   display: "flex",
              //   flexDirection: "row",
              //   flexWrap: "wrap",
              //   justifyContent:
              //     Object.values(data).length < numCardsPerRow
              //       ? "flex-start"
              //       : "space-between",
              //   gap: 16,
              // }}
            >
              {petinfo.map((pet, index) => (
                <motion.div
                  initial={{ opacity: 0.5, scaleY: 0.5 }}
                  whileInView={{
                    opacity: 1,
                    scaleY: 1,
                    transition: {
                      type: "spring",
                      opacity: { duration: 0.3 },
                      delay: 0.3 * index,
                      duration: 0.3,
                      stiffness: 80,
                      bounce: 0.3,
                    },
                  }}
                  viewport={{ once: true }}
                  key={index}
                  style={{
                    marginBottom: 40,
                    width: cardWidth,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.location.href = `/pets/${pet._id}`;
                  }}
                >
                  <Card sx={{ maxWidth: 400 }} style={{ height: "100%" }}>
                    <CardActionArea style={{ height: "100%" }}>
                      <CardMedia
                        component="img"
                        height="140"
                        src={`http://localhost:5000/${pet.image}`}
                        alt={pet.pet}
                      />{" "}
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {" "}
                          {pet.petName}{" "}
                        </Typography>{" "}
                        <Typography variant="body2" color="text.secondary">
                          {" "}
                          {pet.pet}{" "}
                        </Typography>{" "}
                      </CardContent>{" "}
                    </CardActionArea>{" "}
                  </Card>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div> */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            {petinfo.map((pet, index) => (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{
                  opacity: 1,
                  scaleY: 1,
                  transition: {
                    type: "spring",
                    opacity: { duration: 0.3 },
                    delay: 0.15 * index,
                    duration: 0.3,
                    stiffness: 80,
                    bounce: 0.3,
                  },
                }}
                viewport={{ once: true }}
                key={index}
                style={{
                  marginBottom: 40,
                  width: `calc((100% - ${
                    (numCardsPerRow - 1) * 16
                  }px) / ${numCardsPerRow})`,
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.location.href = `/pets/${pet._id}`;
                }}
              >
                <Card sx={{ maxWidth: 400 }} style={{ height: "100%" }}>
                  <CardActionArea style={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      src={`http://localhost:5000/${pet.image}`}
                      alt={pet.pet}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {pet.petName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {pet.pet}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>{" "}
      </div>{" "}
      <Modal open={open} onClose={handleClose}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            Edit Account Settings
          </Typography>
          {/* onSubmit={handleSubmit} */}
          <form>
            <Stack spacing={2}>
              {changePassword ? (
                <>
                  <FormLabel>Old Password</FormLabel>
                  <Input
                    placeholder="Old Password"
                    type="password"
                    autoFocus
                    required
                    onChange={(e) => {
                      passedit(0, e.target.value);
                    }}
                  />
                  <br />

                  <FormLabel>New Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    onChange={(e) => {
                      passedit(1, e.target.value);
                    }}
                  />

                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    required
                    type="password"
                    placeholder="Confirm new password"
                    onChange={(e) => {
                      passedit(2, e.target.value);
                    }}
                  />
                </>
              ) : (
                <>
                  <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      autoFocus
                      required
                      defaultValue={userdata.f_name}
                      onChange={(e) => useredit(0, e.target.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      autoFocus
                      required
                      defaultValue={userdata.l_name}
                      onChange={(e) => useredit(1, e.target.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      autoFocus
                      required
                      defaultValue={userdata.phone}
                      onChange={(e) => useredit(2, e.target.value)}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      required
                      type="password"
                      placeholder="Confirm password"
                      onChange={(e) => useredit(3, e.target.value)}
                    />
                  </FormControl>
                </>
              )}

              {changePassword ? (
                <></>
              ) : (
                <>
                  <Button
                    onClick={handlePasswordChange}
                    style={{ backgroundColor: "grey" }}
                  >
                    Change Password
                  </Button>
                </>
              )}

              {changePassword ? (
                <>
                  <Button onClick={handlePassSubmit} type="submit">
                    Submit{" "}
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={handleEditSubmit} type="submit">
                    Submit{" "}
                  </Button>
                </>
              )}
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </div>
  );
}

export default Profile;

import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function AdminPanel() {
  const [activeStep, setActiveStep] = React.useState(0);

  // ////////////////////////////////////////////////////////////////////////////////

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [mainproduct, setmainproduct] = useState("");
  const [categoryext, setCategoryext] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "mainproduct":
        setmainproduct(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "categoryext":
        setCategoryext(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "brand":
        setBrand(value);
        break;
      case "rating":
        setRating(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "image":
        setImage(event.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("mainproduct", mainproduct);
    formData.append("category", category);
    formData.append("categoryext", categoryext);
    formData.append("price", price);
    formData.append("brand", brand);
    formData.append("rating", rating);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product added:", response.data);
      // Reset form fields
      setName("");
      setmainproduct("");
      setCategory("");
      setCategoryext("");
      setPrice("");
      setBrand("");
      setRating(0);
      setDescription("");
      setImage(null);
      setError(null);
    } catch (error) {
      console.error("Error adding product:", error);
      setError("Failed to add product");
    }
  };

  const [submitted, setSubmitted] = React.useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          // justifyContent: "center"
          <div style={{ display: "grid" }}>
            <div>
              {error && <p>{error}</p>}

              <div style={{ marginLeft: "5%" }}>
                <h5
                  style={{
                    //   fontWeight: "bold",
                    marginTop: "20px",
                    marginBottom: "10px",
                    color: "grey",
                  }}
                >
                  Name*
                </h5>

                <TextField
                  id="outlined-basic"
                  style={{ marginTop: "5px" }}
                  label="Title"
                  variant="outlined"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                {/* <label>Product:</label> */}

                <h5
                  style={{
                    //   fontWeight: "bold",
                    marginLeft: "5%",
                    marginTop: "20px",
                    marginBottom: "10px",
                    color: "grey",
                  }}
                >
                  Product*
                </h5>
                <div style={{ marginLeft: "5%", display: "flex" }}>
                  <FormControl>
                    <InputLabel id="main-product-label">Product</InputLabel>
                    <Select
                      style={{ width: "160px" }}
                      labelId="main-product-label"
                      id="main-product-select"
                      name="mainproduct"
                      value={mainproduct}
                      onChange={handleInputChange}
                      label="Product"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Food">Food</MenuItem>
                      <MenuItem value="Accessories">Accessories</MenuItem>
                    </Select>
                  </FormControl>
                  <div style={{ marginLeft: "3%" }}>
                    {mainproduct === "Food" && (
                      <FormControl>
                        <InputLabel id="food-category-label">
                          Food Category
                        </InputLabel>
                        <Select
                          style={{ width: "190px" }}
                          labelId="food-category-label"
                          id="food-category-select"
                          name="category"
                          value={category}
                          onChange={handleInputChange}
                          label="Food Category"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="Dog Food">Dog Food</MenuItem>
                          <MenuItem value="Cat Food">Cat Food</MenuItem>
                          <MenuItem value="Rat Food">Rat Food</MenuItem>
                          <MenuItem value="Snake Food">Snake Food</MenuItem>
                          <MenuItem value="Rabbit Food">Rabbit Food</MenuItem>
                          <MenuItem value="Others Food">Others Food</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    {mainproduct === "Accessories" && (
                      <FormControl>
                        <InputLabel id="accessories-category-label">
                          Accessories Category
                        </InputLabel>
                        <Select
                          style={{ width: "210px" }}
                          labelId="accessories-category-label"
                          id="accessories-category-select"
                          name="category"
                          value={category}
                          onChange={handleInputChange}
                          label="Accessories Category"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="Dog Accessories">
                            Dog Accessories
                          </MenuItem>
                          <MenuItem value="Cat Accessories">
                            Cat Accessories
                          </MenuItem>
                          <MenuItem value="Rat Accessories">
                            Rat Accessories
                          </MenuItem>
                          <MenuItem value="Snake Accessories">
                            Snake Accessories
                          </MenuItem>
                          <MenuItem value="Rabbit Accessories">
                            Rabbit Accessories
                          </MenuItem>
                          <MenuItem value="Others Accessories">
                            Others Accessories
                          </MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  </div>
                  <div style={{ marginLeft: "3%" }}>
                    {mainproduct === "Accessories" && (
                      <FormControl>
                        <InputLabel id="accessories-category-label">
                          Accessories Type
                        </InputLabel>
                        <Select
                          style={{ width: "190px" }}
                          labelId="accessories-category-label"
                          id="accessories-category-select"
                          name="categoryext"
                          value={categoryext}
                          onChange={handleInputChange}
                          required
                          label="Accessories Type"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="Belts">Belts</MenuItem>
                          <MenuItem value="Beds">Beds</MenuItem>
                          <MenuItem value="Shampoos">Shampoos</MenuItem>
                          <MenuItem value="Toys">Toys</MenuItem>
                          <MenuItem value="Bowls">Bowls</MenuItem>
                          <MenuItem value="Clothes">Clothes</MenuItem>
                          <MenuItem value="Carriers">Carriers</MenuItem>
                          <MenuItem value="Collars">Collars</MenuItem>
                          <MenuItem value="Leashes">Leashes</MenuItem>
                          <MenuItem value="Grooming">
                            Grooming Supplies
                          </MenuItem>
                          <MenuItem value="Travel">Travel Accessories</MenuItem>
                          <MenuItem value="Others">others</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ marginLeft: "5%" }}>
                <h5
                  style={{
                    //   fontWeight: "bold",
                    marginTop: "20px",
                    marginBottom: "10px",
                    color: "grey",
                  }}
                >
                  Brand*
                </h5>

                <TextField
                  id="outlined-basic"
                  style={{ marginTop: "5px" }}
                  label="Title"
                  variant="outlined"
                  name="brand"
                  value={brand}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* <div>
                  <label>Category extension:</label>
                  <input
                    type="text"
                    name="categoryext"
                    value={categoryext}
                    onChange={handleInputChange}
                    required
                  />
                </div> */}
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div>
              <label>Image:</label>
              <input
                type="file"
                name="image"
                onChange={handleInputChange}
                required
              />
            </div>
            <button onClick={handleSubmit} type="submit">
              Add Product
            </button>
          </div>
        );
      case 2:
        return <></>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "0",
          marginTop: "8px",
        }}
      >
        Add Products
      </h1>
      <Box sx={{ width: "85%", marginLeft: "100px", marginTop: "30px" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {renderStepContent(activeStep)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 && !submitted ? (
              <Button onClick={handleFormSubmit}>Submit</Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </React.Fragment>
      </Box>
    </div>
  );
}

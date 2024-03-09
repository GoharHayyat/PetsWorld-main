import React, { useState, useEffect } from "react";
import axios from "axios";
import PetsSale from "./PetsSale";
import "./BuyAndSell.css";
import { FaPlus } from "react-icons/fa";
import LoginSignupModal from "../LoginSignupModal/LoginSignupModal";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function BuyAndSell() {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageChange = () => {
      localStorage.removeItem("buyAndSellData");
      localStorage.removeItem("selectedAnimal");
      localStorage.removeItem("searchQuery");
    };

    window.addEventListener("beforeunload", handlePageChange);

    return () => {
      window.removeEventListener("beforeunload", handlePageChange);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/buyandsell"
        );
        setData(response.data);
        setIsLoading(false);
        const storedQuery = localStorage.getItem("searchQuery");
        if (storedQuery) {
          setSearchQuery(storedQuery);
        }
        const storedAnimal = localStorage.getItem("selectedAnimal");
        if (storedAnimal) {
          setSelectedAnimal(storedAnimal);
        }
        localStorage.setItem("buyAndSellData", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const storedData = localStorage.getItem("buyAndSellData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
      setIsLoading(false);
      const storedQuery = localStorage.getItem("searchQuery");
      if (storedQuery) {
        setSearchQuery(storedQuery);
      }
      const storedAnimal = localStorage.getItem("selectedAnimal");
      if (storedAnimal) {
        setSelectedAnimal(storedAnimal);
      }
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const results = data.filter(
        (pets) =>
          pets.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pets.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pets.pet.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, data]);

  const handleClick = () => {
    window.location.href = "/sell";
  };

  const handleAnimalChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedAnimal(selectedValue);
    localStorage.setItem("selectedAnimal", selectedValue);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase().trim();
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  const auth = localStorage.getItem("user");

  if (isLoading) {
    return (
      <div
        className="shimmer-container"
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          marginLeft: "80px",
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <Stack spacing={1} key={index} sx={{ marginBottom: "30px" }}>
            <Skeleton
              variant="rectangular"
              width={270}
              height={300}
              sx={{
                borderRadius: "8%",
                background: "#f1f1f1",
                border: "1px solid #ccc",
              }}
            />
            <Skeleton variant="text" width={100} sx={{ fontSize: "1rem" }} />
            <Skeleton variant="text" width={140} sx={{ fontSize: "1rem" }} />
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Skeleton variant="button" width={80} height={25} />
              <div style={{ marginLeft: "50%", zIndex: "20px" }}>
                <Skeleton variant="circular" width={40} height={40} />
              </div>
            </div>
          </Stack>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div
        style={{ display: "flex", marginTop: "10px", justifyContent: "center" }}
      >
        <div style={{ marginTop: "10px", marginRight: "10px" }}>
          <Box sx={{ minWidth: 70 }}>
            <FormControl style={{ width: "120px" }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedAnimal}
                label="Category"
                onChange={handleAnimalChange}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="cat">Cat</MenuItem>
                <MenuItem value="dog">Dog</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div style={{ marginTop: "5px", width: "30%", marginLeft: "2%" }}>
          {/* <div class="flexbox"> */}
          {/* <div class="search">
              <div>
                <input type="text" placeholder="Search . . ." required />
              </div>
            </div> */}
          {/* </div> */}
          <form className="flex items-center">
            <div className="relative w-full">
              <div
                style={{ marginLeft: "10px" }}
                className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                style={{ marginLeft: "10px" }}
                // type="text"
                id="simple-search"
                value={searchQuery}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by title, breed or pet"
                onChange={handleSearchInputChange}
                required
              />
            </div>
          </form>
        </div>

        {auth ? (
          <div>
            <button
              style={{
                marginTop: "10px",
                marginLeft: "100px",
              }}
              className="glow-on-hover"
              type="button"
              onClick={handleClick}
            >
              <FaPlus style={{ marginBottom: "4px" }} /> SELL
            </button>
          </div>
        ) : (
          <div>
            <button
              style={{
                marginTop: "10px",
                marginLeft: "100px",
              }}
              className="glow-on-hover"
              type="button"
              onClick={() => setModalShow(true)}
            >
              <FaPlus style={{ marginBottom: "4px" }} /> SELL
            </button>
          </div>
        )}
      </div>
      <div
        className="items"
        style={{
          height: "100%",
          overflow: "auto",
          marginLeft: "10px",
        }}
      >
        {searchResults.length > 0
          ? searchResults.map((pets) => (
              <PetsSale pets={pets} key={pets._id}>
                <img
                  src={pets.images[0]}
                  alt={pets.title}
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <h4>{pets.title}</h4>
                  <p>{pets.breed}</p>
                  <p>Price: ${pets.price}</p>
                </div>
              </PetsSale>
            ))
          : data
              .filter(
                (pets) =>
                  selectedAnimal === "all" || pets.pet === selectedAnimal
              )
              .filter((pets) => pets.status === "approved")
              .map((pets) => (
                <PetsSale pets={pets} key={pets._id}>
                  <img
                    src={pets.images[0]}
                    alt={pets.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div>
                    <h4>{pets.title}</h4>
                    <p>{pets.breed}</p>
                    <p>Price: ${pets.price}</p>
                  </div>
                </PetsSale>
              ))}
      </div>
      <LoginSignupModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItems from "../../componenets/ProductItems/ProductItems";
import "./shop.css";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import ErrorModal from "../../componenets/ErrorModal/ErrorModal";
import NoProductsModal from "../../componenets/NoProductsModal/NoProductsModal";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "react-router-dom";

import { ToastContainer } from "react-toastify";

export default function Shop() {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("shopData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [noProductsFound, setNoProductsFound] = useState(false);
  const [filter, setFilter] = useState("");
  const [subFilter, setSubFilter] = useState("");
  const [subSubFilter, setSubSubFilter] = useState("");
  const { category, maxPrice } = useParams();
  const [maxPriceFilter, setMaxPriceFilter] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handlePageChange = () => {
      localStorage.removeItem("shopFilterState");
      localStorage.removeItem("shopData");
      localStorage.removeItem("shopsearchQuery");
    };

    window.addEventListener("beforeunload", handlePageChange);

    return () => {
      window.removeEventListener("beforeunload", handlePageChange);
    };
  }, []);

  useEffect(() => {
    const storedFilterState = localStorage.getItem("shopFilterState");
    if (storedFilterState) {
      const { filter, subFilter, subSubFilter } = JSON.parse(storedFilterState);
      setFilter(filter);
      setSubFilter(subFilter);
      setSubSubFilter(subSubFilter);
    }
  }, []);

  useEffect(() => {
    const filterState = JSON.stringify({ filter, subFilter, subSubFilter });
    localStorage.setItem("shopFilterState", filterState);
  }, [filter, subFilter, subSubFilter]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 180));

        if (data.length === 0) {
          const response = await axios.get(
            "http://localhost:5000/api/products"
          );

          if (isMounted) {
            setData(response.data);
            localStorage.setItem("shopData", JSON.stringify(response.data));

            setIsLoading(false);

            if (response.data.length === 0) {
              setNoProductsFound(true);
            }
          }
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);

        if (isMounted) {
          setError(error);
          setIsLoading(false);
          setModalShow(true);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [data]);

  const handleFilter = (filter) => {
    setFilter(filter);
    setSubFilter("");
    setSubSubFilter("");
  };
  const handleSubFilter = (subFilter) => {
    setSubFilter(subFilter);
    setSubSubFilter("");
  };

  const handleSubSubFilter = (subSubFilter) => {
    setSubSubFilter(subSubFilter);
  };

  // ???///////////???????????????????????????????????????????????????????????????????
  let filteredData = data;

  filteredData = searchResults.length !== 0 ? searchResults : data;
  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase().trim();
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const results = data.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(data); // Set search results to all products when searchQuery is empty
    }
  }, [searchQuery, data]);

  useEffect(() => {
    if (category === "Belts") {
      handleFilter("Accessories");
      handleSubFilter("Belts");

      // ????????????????????????????????????
    } else if (category === "Bowls") {
      handleFilter("Accessories");
      handleSubFilter("Bowls");
    } else if (category === "Toys") {
      if (maxPrice) {
        setMaxPriceFilter(maxPrice);
      } else {
        handleFilter("Accessories");
        handleSubFilter("Toys");
      }
    } else if (category === "Clothes") {
      handleFilter("Accessories");
      handleSubFilter("Clothes");
    } else if (category === "Shampoos") {
      handleFilter("Accessories");
      handleSubFilter("Shampoos");
    } else if (category === "Beds") {
      if (maxPrice) {
        setMaxPriceFilter(maxPrice);
      } else {
        handleFilter("Accessories");
        handleSubFilter("Beds");
      }
    } else if (category === "Food") {
      if (maxPrice) {
        setMaxPriceFilter(maxPrice);
      } else {
        handleFilter("Food");
        handleSubFilter("Dog");
      }
    }

    // ???????????????????
    else if (category === "Collars") {
      if (maxPrice) {
        setMaxPriceFilter(maxPrice);
      }
    } else if (category === "Grooming") {
      if (maxPrice) {
        setMaxPriceFilter(maxPrice);
      }
    }
  }, [category, maxPrice]);

  if (isLoading) {
    return (
      <div
        className="shimmer-container"
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          marginLeft: "30px",
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <Stack spacing={1} key={index}>
            <Skeleton variant="rectangular" width={390} height={220} />
            <Skeleton variant="text" width={300} sx={{ fontSize: "1rem" }} />
            <Skeleton variant="text" width={240} sx={{ fontSize: "1rem" }} />
            <Skeleton variant="button" width={80} height={35} />
          </Stack>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <ErrorModal
        modalShow={modalShow}
        onHide={() => setModalShow(false)}
        error={error}
      />
    );
  }

  if (noProductsFound) {
    return <NoProductsModal onHide={() => setNoProductsFound(false)} />;
  }

  if (category === "Toys" && maxPriceFilter === "1000") {
    filteredData = filteredData.filter((product) => {
      return product.categoryext === "Toys" && product.price <= 1000; // Modify the price value (1000) according to your specific requirement
    });
  } else if (category === "Food" && maxPriceFilter === "1000") {
    filteredData = filteredData.filter((product) => {
      return product.categoryext === "Pets Food" && product.price <= 1000; // Modify the price value (2000) according to your specific requirement
    });
  } else if (category === "Beds" && maxPriceFilter === "1000") {
    filteredData = filteredData.filter((product) => {
      return product.categoryext === "Beds" && product.price <= 1000; // Modify the price value (2000) according to your specific requirement
    });
  } else if (category === "Collars" && maxPriceFilter === "1000") {
    filteredData = filteredData.filter((product) => {
      return product.categoryext === "Collars" && product.price <= 1000; // Modify the price value (2000) according to your specific requirement
    });
  } else if (category === "Grooming" && maxPriceFilter === "1000") {
    filteredData = filteredData.filter((product) => {
      return product.categoryext === "Grooming" && product.price <= 1000; // Modify the price value (2000) according to your specific requirement
    });
  }
  // Apply filter based on the selected options

  if (filter === "Food") {
    filteredData = data.filter((product) => product.mainproduct === "Food");
  } else if (filter === "Accessories") {
    filteredData = data.filter(
      (product) => product.mainproduct === "Accessories"
    );
  }

  if (subFilter === "cat") {
    filteredData = filteredData.filter(
      (product) => product.category === "Cat Food"
    );
  } else if (subFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) => product.category === "Dog Food"
    );
  } else if (subFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) => product.category === "Rat Food"
    );
  } else if (subFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) => product.category === "Snake Food"
    );
  } else if (subFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) => product.category === "Rabbit Food"
    );
  } else if (subFilter === "Others") {
    filteredData = filteredData.filter(
      (product) => product.category === "Others Food"
    );
  } else if (subFilter === "Beds") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Beds"
    );
  } else if (subFilter === "Belts") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Belts"
    );
  } else if (subFilter === "Shampoos") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Shampoos"
    );
  } else if (subFilter === "Toys") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Toys"
    );
  } else if (subFilter === "Bowls") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Bowls"
    );
  } else if (subFilter === "Clothes") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Clothes"
    );
  } else if (subFilter === "Carriers") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Carriers"
    );
  } else if (subFilter === "Collars") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Collars"
    );
  } else if (subFilter === "Leashes") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Leashes"
    );
  } else if (subFilter === "Grooming") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Grooming"
    );
  } else if (subFilter === "Travel") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Travel"
    );
  } else if (subFilter === "Otherss") {
    filteredData = filteredData.filter(
      (product) => product.categoryext === "Others"
    );
  }

  if (subFilter === "Belts" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Belts" &&
        product.category === "Cat Accessories"
    );
  } else if (subFilter === "Belts" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Belts" &&
        product.category === "Dog Accessories"
    );
  } else if (subFilter === "Belts" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Belts" &&
        product.category === "Rat Accessories"
    );
  } else if (subFilter === "Belts" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Belts" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Belts" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Belts" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Belts" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Belts" &&
        product.category === "Others Accessories"
    );
  }

  // ////////////////////////////////////////////////////////////////for beds
  else if (subFilter === "Beds" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Beds" && product.category === "Cat Accessories"
    );
  } else if (subFilter === "Beds" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Beds" && product.category === "Dog Accessories"
    );
  } else if (subFilter === "Beds" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Beds" && product.category === "Rat Accessories"
    );
  } else if (subFilter === "Beds" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Beds" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Beds" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Beds" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Beds" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Beds" &&
        product.category === "Others Accessories"
    );
  }

  // ////////////////////////////////////////////////////////////////for Shampoo
  else if (subFilter === "Shampoos" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Shampoos" &&
        product.category === "Cat Accessories"
    );
  } else if (subFilter === "Shampoos" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Shampoos" &&
        product.category === "Dog Accessories"
    );
  } else if (subFilter === "Shampoos" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Shampoos" &&
        product.category === "Rat Accessories"
    );
  } else if (subFilter === "Shampoos" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Shampoos" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Shampoos" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Shampoos" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Shampoos" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Shampoos" &&
        product.category === "Others Accessories"
    );
  }

  // ////////////////////////////////////////////////////////////////for Toys
  else if (subFilter === "Toys" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Toys" && product.category === "Cat Accessories"
    );
  } else if (subFilter === "Toys" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Toys" && product.category === "Dog Accessories"
    );
  } else if (subFilter === "Toys" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Toys" && product.category === "Rat Accessories"
    );
  } else if (subFilter === "Toys" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Toys" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Toys" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Toys" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Toys" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Toys" &&
        product.category === "Others Accessories"
    );
  }

  // ////////////////////////////////////////////////////////////////for Bowls
  else if (subFilter === "Bowls" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Bowls" &&
        product.category === "Cat Accessories"
    );
  } else if (subFilter === "Bowls" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Bowls" &&
        product.category === "Dog Accessories"
    );
  } else if (subFilter === "Bowls" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Bowls" &&
        product.category === "Rat Accessories"
    );
  } else if (subFilter === "Bowls" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Bowls" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Bowls" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Bowls" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Bowls" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Bowls" &&
        product.category === "Others Accessories"
    );
  }

  // ////////////////////////////////////////////////////////////////for Cloths
  else if (subFilter === "Clothes" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Clothes" &&
        product.category === "Cat Accessories"
    );
  } else if (subFilter === "Clothes" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Clothes" &&
        product.category === "Dog Accessories"
    );
  } else if (subFilter === "Clothes" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Clothes" &&
        product.category === "Rat Accessories"
    );
  } else if (subFilter === "Clothes" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Clothes" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Clothes" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Clothes" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Clothes" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Clothes" &&
        product.category === "Others Accessories"
    );
  }

  // ////////////////////////////////////////////////////////////////for Carriers
  else if (subFilter === "Carriers" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Carriers" &&
        product.category === "Cat Accessories"
    );
  } else if (subFilter === "Carriers" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Carriers" &&
        product.category === "Dog Accessories"
    );
  } else if (subFilter === "Carriers" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Carriers" &&
        product.category === "Rat Accessories"
    );
  } else if (subFilter === "Carriers" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Carriers" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Carriers" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Carriers" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Carriers" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Carriers" &&
        product.category === "Others Accessories"
    );
  }

  // ////////////////////////////////////////////////////////////////for Collars
  else if (subFilter === "Collars" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Collars" &&
        product.category === "Cat Accessories"
    );
  } else if (subFilter === "Collars" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Collars" &&
        product.category === "Dog Accessories"
    );
  } else if (subFilter === "Collars" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Collars" &&
        product.category === "Rat Accessories"
    );
  } else if (subFilter === "Collars" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Collars" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Collars" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Collars" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Collars" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Collars" &&
        product.category === "Others Accessories"
    );
  }

  // ////////////////////////////////////////////////////////////////for Leashes
  else if (subFilter === "Leashes" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Leashes" &&
        product.category === "Cat Accessories"
    );
  } else if (subFilter === "Leashes" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Leashes" &&
        product.category === "Dog Accessories"
    );
  } else if (subFilter === "Leashes" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Leashes" &&
        product.category === "Rat Accessories"
    );
  } else if (subFilter === "Leashes" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Leashes" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Leashes" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Leashes" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Leashes" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Leashes" &&
        product.category === "Others Accessories"
    );
  }
  // ////////////////////////////////////////////////////////////////for Grooming
  else if (subFilter === "Grooming" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Grooming" &&
        product.category === "Cat Accessories"
    );
  } else if (subFilter === "Grooming" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Grooming" &&
        product.category === "Dog Accessories"
    );
  } else if (subFilter === "Grooming" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Grooming" &&
        product.category === "Rat Accessories"
    );
  } else if (subFilter === "Grooming" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Grooming" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Grooming" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Grooming" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Grooming" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Grooming" &&
        product.category === "Others Accessories"
    );
  }
  // ////////////////////////////////////////////////////////////////for Travel
  else if (subFilter === "Travel" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Travel" &&
        product.category === "Cat Accessories"
    );
  } else if (subFilter === "Travel" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Travel" &&
        product.category === "Dog Accessories"
    );
  } else if (subFilter === "Travel" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Travel" &&
        product.category === "Rat Accessories"
    );
  } else if (subFilter === "Travel" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Travel" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Travel" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Travel" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Travel" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Travel" &&
        product.category === "Others Accessories"
    );
  }
  // ////////////////////////////////////////////////////////////////for Others
  else if (subFilter === "Otherss" && subSubFilter === "cat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Others" &&
        product.category === "Cat Accessories"
    );
  } else if (subFilter === "Otherss" && subSubFilter === "Dog") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Others" &&
        product.category === "Dog Accessories"
    );
  } else if (subFilter === "Otherss" && subSubFilter === "Rat") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Others" &&
        product.category === "Rat Accessories"
    );
  } else if (subFilter === "Otherss" && subSubFilter === "Snake") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Others" &&
        product.category === "Snake Accessories"
    );
  } else if (subFilter === "Otherss" && subSubFilter === "Rabbit") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Others" &&
        product.category === "Rabbit Accessories"
    );
  } else if (subFilter === "Otherss" && subSubFilter === "Others") {
    filteredData = filteredData.filter(
      (product) =>
        product.categoryext === "Others" &&
        product.category === "Others Accessories"
    );
  }

  if (searchQuery) {
    filteredData = searchResults || filteredData;
  }

  return (
    <div>
      <section style={{ marginTop: "5px", width: "30%", marginLeft: "35%" }}>
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
      </section>

      <div style={{ display: "flex", height: "100%" }}>
        <ToastContainer />

        <div className="">
          <h4 style={{ marginTop: "10px", marginLeft: "10px" }}>Filters</h4>
          <h6
            style={{ marginTop: "40px", marginLeft: "10px", fontSize: "13px" }}
          >
            Select Category
          </h6>
          <Select
            style={{ marginLeft: "9px" }}
            placeholder="Category"
            sx={{ width: 140 }}
            value={filter}
            onChange={(event) => handleFilter(event.target.value)}
          >
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Accessories">Accessories</MenuItem>
          </Select>

          {filter === "Food" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                style={{ marginLeft: "9px" }}
                sx={{ width: 120 }}
                value={subFilter}
                onChange={(event) => handleSubFilter(event.target.value)}
              >
                {/* <MenuItem value="cat">Cat</MenuItem>
              <MenuItem value="Dog">Dog</MenuItem> */}

                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}
          {filter === "Accessories" && (
            <>
              <h6
                style={{
                  marginTop: "40px",
                  marginLeft: "10px",
                  fontSize: "13px",
                }}
              >
                Select Sub-Category
              </h6>
              <Select
                value={subFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubFilter(event.target.value)}
              >
                <MenuItem value="Belts">Belts</MenuItem>
                <MenuItem value="Beds">Beds</MenuItem>
                <MenuItem value="Shampoos">Shampoos</MenuItem>
                <MenuItem value="Toys">Toys</MenuItem>
                <MenuItem value="Bowls">Bowls</MenuItem>
                <MenuItem value="Clothes">Clothes</MenuItem>
                <MenuItem value="Carriers">Carriers</MenuItem>
                <MenuItem value="Collars">Collars</MenuItem>
                <MenuItem value="Leashes">Leashes</MenuItem>
                <MenuItem value="Grooming">Grooming Supplies</MenuItem>
                <MenuItem value="Travel">Travel Accessories</MenuItem>
                <MenuItem value="Otherss">Others</MenuItem>
              </Select>
            </>
          )}
          {subFilter === "Belts" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                {/* <MenuItem value="cat">Cat</MenuItem>
              <MenuItem value="Dog">Dog</MenuItem> */}

                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}
          {subFilter === "Beds" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}
          {subFilter === "Shampoos" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}
          {subFilter === "Toys" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}

          {subFilter === "Bowls" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}
          {subFilter === "Clothes" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}
          {subFilter === "Carriers" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}
          {subFilter === "Collars" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}

          {subFilter === "Leashes" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}

          {subFilter === "Grooming" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}
          {subFilter === "Travel" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}
          {subFilter === "Otherss" && (
            <>
              <h6
                style={{
                  fontSize: "13px",
                  marginTop: "30px",
                  marginLeft: "10px",
                }}
              >
                For Pet
              </h6>
              <Select
                value={subSubFilter}
                style={{ marginLeft: "9px" }}
                placeholder="Category"
                sx={{ width: 140 }}
                onChange={(event) => handleSubSubFilter(event.target.value)}
              >
                <MenuItem value="Dog">Dog Food</MenuItem>
                <MenuItem value="cat">Cat Food</MenuItem>
                <MenuItem value="Rat">Rat Food</MenuItem>
                <MenuItem value="Snake">Snake Food</MenuItem>
                <MenuItem value="Rabbit">Rabbit Food</MenuItem>
                <MenuItem value="Others">Others Food</MenuItem>
              </Select>
            </>
          )}
        </div>

        <div
          className="items"
          style={{
            width: "90%",
            height: "100%",
            overflow: "auto",
            marginLeft: "10px",
          }}
        >
          {filteredData.length === 0 ? (
            <div
              style={{
                position: "fixed",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                No products found matching this criteria.
              </p>
            </div>
          ) : (
            filteredData.map((product) => (
              <ProductItems product={product} key={product._id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

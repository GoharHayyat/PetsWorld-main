import axios from "axios";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState, useCallback } from "react";
import Chip from "@mui/material/Chip";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

// import PetsSale from "./PetsSale";
// import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function AdsStatus() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const userId = JSON.parse(localStorage.getItem("user"))._id;

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/buyandsell");
      const filteredProducts = response.data.filter(
        (product) => product.userId === userId
      );
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchProducts();
    };
    fetchData();
  }, [fetchProducts]);

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

  if (products.length === 0) {
    return (
      <div className="error-container">
        <p className="error-message">Sorry, no ads found.</p>
      </div>
    );
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return { icon: <HourglassTopIcon style={{ color: "yellow" }} /> };
      case "approved":
        return { icon: <CheckCircleIcon style={{ color: "green" }} /> };
      case "rejected":
        return { icon: <CancelIcon style={{ color: "red" }} /> };
      default:
        return null;
    }
  };

  const handleRemove = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/buyandsell/${productId}`);

      await fetchProducts();
    } catch (error) {
      console.error("Error removing ad:", error);
    }
  };

  return (
    <>
      <TableContainer
        component={Paper}
        style={{ width: "95%", marginLeft: "20px", marginTop: "50px" }}
      >
        <Table
          sx={{
            marginLeft: "30px",
            minWidth: 400,
            width: "1020px",
          }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>picture</TableCell>
              <TableCell>title</TableCell>
              <TableCell align="right">Pet</TableCell>
              <TableCell align="right">Breed</TableCell>
              <TableCell align="right">city</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => {
              const statusIcon = getStatusIcon(product.status);
              return (
                <TableRow key={index}>
                  <TableCell align="left">
                    {product.images && product.images.length > 0 && (
                      <img
                        style={{ height: "80px", width: "80px" }}
                        src={`http://localhost:5000/${product.images[0]}`}
                        alt={product.title}
                      />
                    )}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {product.title}
                  </TableCell>
                  <TableCell align="right">{product.pet}</TableCell>
                  <TableCell align="right">{product.breed}</TableCell>
                  <TableCell align="right">{product.city}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">
                    {statusIcon && statusIcon.icon}
                  </TableCell>
                  <TableCell align="left">
                    <Chip
                      label="Remove Ad"
                      variant="outlined"
                      style={{ backgroundColor: "#FC4E40" }}
                      onClick={() => handleRemove(product._id)}
                    />
                  </TableCell>
                  <TableCell align="left">
                    {/* <Link to={`/buyandsell/${pet._id}`}> */}
                    <Link to={`/sellpetdetails/${product._id}`}>
                      <Chip
                        label="View Ad"
                        variant="outlined"
                        style={{ backgroundColor: "grey" }}
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

import React from "react";
import APT from "./APT";
import { useState, useEffect } from "react";
import axios from "axios";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function AppointmentsStatus() {
  const { _id } = JSON.parse(localStorage.getItem("user"));
  const [apt, setApt] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `http://localhost:5000/api/appointments/user/${_id}`
        );
        setApt(response);
        console.log(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
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
              <TableCell align="left">Doctor name</TableCell>
              <TableCell align="left">Requested Date</TableCell>
              <TableCell align="left">Pet Name/breed</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      {/* <div className="card w-auto">
        <div className="row">
          <div className="col">
            <strong>Status</strong>
          </div>
          <div className="col">
            <strong>Note</strong>
          </div>
          <div className="col">
            <strong>Doctor</strong>
          </div>
        </div>
      </div> */}

      {apt.map((u) => (
        <APT key={u._id} apt={u} />
      ))}
    </div>
  );
}

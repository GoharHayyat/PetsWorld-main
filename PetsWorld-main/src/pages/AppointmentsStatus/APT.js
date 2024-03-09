import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";

export default function APT(apt) {
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

  function deleteAppointment(appointmentId) {
    console.log(appointmentId);
    fetch(`http://localhost:5000/api/appointments/${appointmentId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Appointment deleted successfully");
        } else {
          throw new Error("Failed to delete appointment");
        }
      })
      .catch((error) => {
        console.error("Error deleting appointment:", error);
        // Handle the error gracefully
      });
  }

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const u = apt.apt;
  console.log(u);
  const statusIcon = getStatusIcon(u.status);

  function convertDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);

    const date = dateTime.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const time = dateTime.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return { date, time };
  }
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
          <TableRow>
            <TableCell component="th" scope="row">
              {u.doctor_name}
            </TableCell>
            <TableCell align="left">{u.datereq}</TableCell>

            {u.pet_name === null ? (
              <>
                <TableCell align="right">{u.pet_other}</TableCell>
              </>
            ) : (
              <>
                <TableCell align="right">{u.pet_name}</TableCell>
              </>
            )}
            <TableCell align="left"></TableCell>
            <TableCell align="right">{statusIcon && statusIcon.icon}</TableCell>
            <TableCell align="right">
              <Chip
                label="Cancel appointment"
                style={{ backgroundColor: "#FC4E40" }}
                onClick={() => deleteAppointment(u._id)}
              />
            </TableCell>
          </TableRow>
        </Table>
        {u.status === "approved" ? (
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            disabled={u.status !== "approved"}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <span
                  style={{
                    fontWeight: "bold",
                    marginLeft: "30px",
                    color: "green",
                  }}
                >
                  Appointment Details*
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <TableRow>
                  <TableCell align="left">Date:</TableCell>
                  <TableCell align="left">
                    {convertDateTime(u.appointment_date).date}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Time:</TableCell>
                  <TableCell align="left">
                    {convertDateTime(u.appointment_date).time}
                  </TableCell>
                </TableRow>
                {u.additional_note === null ? (
                  <>
                    <TableRow>
                      <TableCell align="left">Note:</TableCell>
                      <TableCell align="left">
                        <p style={{ color: "red" }}>No Additional Note</p>
                      </TableCell>
                    </TableRow>
                  </>
                ) : (
                  <>
                    <TableRow>
                      <TableCell align="left">Note:</TableCell>
                      <TableCell align="left">{u.additional_note}</TableCell>
                    </TableRow>
                  </>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ) : null}
      </TableContainer>
      {/* <div className="card w-100">
      <div className="row">
        <div className="col mb-3">
          <p>{u.status}</p>
        </div>
        <div className="col mb-3">
          <p>{u.doctor_name}</p>
        </div>
        <div className="col mb-3">
          <p>{u.petName}</p>
        </div>
      </div>
    </div> */}
    </div>
  );
}

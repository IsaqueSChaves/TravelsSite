import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import passengerApi from "../services/passenger.service";
import './styles/Passengers.css'

function Passengers() {
  const [passengersData, setPassengersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const getPassengers = async () => {
    try {
      await delay(3000);
      const data = (await passengerApi.getAll()).data.passenger;
      setPassengersData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPassengers();
  }, []);

  return (
    <>
      <h1>Passengers</h1>

      {loading ? (
        <div className="spinner m-18">
          <CircularProgress size={120} />
        </div>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <strong>Name</strong>{" "}
                </TableCell>
                <TableCell align="right">
                  <strong>Email</strong>{" "}
                </TableCell>
                <TableCell align="right">
                  <strong>Age</strong>{" "}
                </TableCell>
                <TableCell align="right">
                  <strong>Assent</strong>{" "}
                </TableCell>
                <TableCell align="right">
                  <strong>Destination</strong>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {passengersData.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.assent}</TableCell>
                  <TableCell align="right">{row.destination}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default Passengers;

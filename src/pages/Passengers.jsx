import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material/';


function Passengers() {

  const location = useLocation();

  const [passengersData, setPassengersData] = useState([]);
  

  useEffect(() =>{
    if(location.state !== null){
      const passangers = location.state.data;
      passangers.forEach((val)=>{
        setPassengersData((prevValue)=>{
          return [...prevValue, val];
        });
      })}
  }, []);
    
  if(location.state !== null){
    var place = location.state.place;
  }

  return (
    <>
        <h1>Passengers</h1>

        <TableContainer >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Assent</TableCell>
            <TableCell align="right">Destination</TableCell>

          </TableRow>
        </TableHead>


        <TableBody>
          {passengersData.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.assent + 1}</TableCell>
              <TableCell align="right">{place}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default Passengers;

import React, { useState, useEffect, useRef } from "react";
import passengerApi from "../services/passenger.service";
import {CircularProgress } from '@mui/material/';

function Assents({ assent, place, id, toogleItem }) {
  const [isPressed, setIsPressed] = useState(false);
  const [passengers, setPassengers] = useState([]);
  const [loading, setLoading] = useState(true);
  const disable = useRef(false);

  const getPassengers = async () => {
    try {
      const data = (await passengerApi.getAll()).data.passenger;
      setPassengers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPassengers();
  }, []);

  passengers.map((passenger) => {
    if (place === passenger.destination) {
      if (assent === passenger.assent) {
        disable.current = true;
      } 
    }
  });

  const styleDisable = {
    backgroundColor: "#F0EEED",
  };

  const stylePressed ={
    backgroundColor: "#F9F54B",
  }

  const handleClick = (id, isPressed) => {
    setIsPressed(!isPressed);
    toogleItem(id, isPressed);
  };

  return (
    <>
      <button
        type="button"
        disabled={disable.current || loading}
        style={disable.current ? styleDisable : isPressed ? stylePressed : null}
        onClick={() => handleClick(id, isPressed)}
        className="myButton"
      >
        {loading ? <CircularProgress size={17}/> : assent }
      </button>
    </>
  );
}

export default Assents;

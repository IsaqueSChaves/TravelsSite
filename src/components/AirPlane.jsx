import React, { useState, useRef } from "react";
import { CircularProgress } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import "./styles/AirPlane.css";
import Places from "./Places";

function AirPlane({ place, price, passengers }) {
  const data = {
    place: place,
    price: price,
  };
  const [selected, setSelected] = useState([]);
  const buttonDisable = useRef(true);
  const navigate = useNavigate();

  var assents = ("" + Array(20)).split(",").map(
    function () {
      return this[0]++;
    },
    [1]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/data", {
      state: {
        assents: selected,
        data: data,
      },
    });
  };

  const toogleItem = (id, isPressed) => {
    isPressed ? deleteItem(id) : addItem(id);
  };

  const addItem = (id) => {
    buttonDisable.current = false;
    setSelected((prevItems) => {
      return [...prevItems, id];
    });
  };

  const deleteItem = (id) => {
    setSelected(selected.filter((button) => button !== id));
    if (selected.length === 1) {
      buttonDisable.current = true;
    }
  };

  console.log(passengers.length);

  return (
    <div className="airPlane">
      <form onSubmit={handleSubmit}>
        {passengers.length === 0 ?<CircularProgress / > : assents.map((assent, id) => {
          return (
            <Places
              id={id}
              place={place}
              key={id}
              assent={assent}
              toogleItem={toogleItem}
              passengers={passengers}
            />
          );
        })}
        <button
          className="button"
          type="submit"
          disabled={buttonDisable.current}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default AirPlane;

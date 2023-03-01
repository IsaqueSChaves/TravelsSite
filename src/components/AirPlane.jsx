import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Places from "./Places";
import "./styles/AirPlane.css";

function AirPlane({ place, price }) {
  const data = {
    place: place,
    price: price,
  };
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const buttonDisable = useRef(true);
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

  return (
    <div className="airPlane">
      <form onSubmit={handleSubmit}>
        {assents.map((assent, id) => {
          return (
            <Places
              id={id}
              place={place}
              key={id}
              assent={assent}
              toogleItem={toogleItem}
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

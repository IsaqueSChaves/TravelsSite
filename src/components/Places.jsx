import React, { useState, useRef } from "react";

function Assents({ assent, place, id, toogleItem, passengers }) {
  const [isPressed, setIsPressed] = useState(false);
  const disable = useRef(false);

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

  const stylePressed = {
    backgroundColor: "#F9F54B",
  };

  const handleClick = (id, isPressed) => {
    setIsPressed(!isPressed);
    toogleItem(id, isPressed);
  };

  return (
    <>
      <button
        type="button"
        disabled={disable.current}
        style={disable.current ? styleDisable : isPressed ? stylePressed : null}
        onClick={() => handleClick(id, isPressed)}
        className="myButton"
      >
        {assent}
      </button>
    </>
  );
}

export default Assents;

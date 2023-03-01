import { useLocation, useNavigate } from "react-router-dom";
import PassengersForm from "./PassengerForm";
import React, { useState, useRef } from "react";
import passengerApi from "../services/passenger.service";

function PassengersData() {
  const [mapState, setMapState] = useState(new Map());
  const loading = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();
  const assents = location.state.assents;
  const data = location.state.data;

  const addData = (index, passengerData) => {
    passengerData.destination = data.place;
    setMapState(new Map(mapState.set(index, passengerData)));
  };

  const onSubmit = () => {
    try {
      mapState.forEach(async (data) => {
        const { name, email, age, assent, destination } = data;
        const passengerData = {
          name: name,
          age: +age,
          email: email,
          assent: assent+1,
          destination: destination,
        };
        loading.current = true;
        console.log(loading);
        await passengerApi.create(JSON.stringify(passengerData));
      });
      loading.current = false;
    } catch (error) {
      console.log(error.message);
    }
    if (!loading.current) {
      navigate("/passengers");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {assents.map((assent, index) => {
        return (
          <>
            <PassengersForm
              key={index}
              assent={assent}
              index={index}
              addData={addData}
              assents={assents}
              onSubmit={onSubmit}
              price={data.price}
              state={ loading.current}
            />
          </>
        );
      })}
    </form>
  );
}

export default PassengersData;

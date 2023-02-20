import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PassengersList from '../components/PassengersList';

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
    

  return (
    <>
        <h1>Passengers</h1>
    {passengersData.map((values,index)=>{
      return(
      <PassengersList
      key={index}
      data={values}
      index={index}
      />
      )})}
    </>
  );
}

export default Passengers;

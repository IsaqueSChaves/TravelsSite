import { useLocation, useNavigate } from "react-router-dom";
import PassengersForm from "./PassengerForm";
import React, {useState} from 'react';

function PassengersData() {

  const [mapState, setMapState] = useState(new Map());
  
  const navigate = useNavigate();
  const location = useLocation();
  const assents = location.state.assents;
  const data = location.state.data;


  const addData = (index, data) =>{
    setMapState(new Map(mapState.set(index, data)));
  }  

const onSubmit = () =>{
    navigate('/passengers', {
      state: {
        data: mapState,
        place: data.place
      }});  
}

  return (
    <form onSubmit={onSubmit}>
        {assents.map((assent, index)=>{
            return(
            <PassengersForm 
            key={index}
            assent={assent}
            index={index}
            addData={addData}
            assents={assents}
            onSubmit={onSubmit}
            price={data.price}
            />
            )})}
  </form>
  );
}

export default PassengersData;

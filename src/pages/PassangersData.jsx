import { useLocation, useNavigate } from "react-router-dom";
import PassengersForm from "./PassengerForm";
import React, {useState} from 'react';

function PassengersData() {

  const [mapState, setMapState] = useState(new Map());
  
  const [mapErrors, setMapErrors] = useState(new Map());
  const [mapErrorsName, setMapErrorsName] = useState(new Map());
  const [mapErrorsAge, setMapErrorsAge] = useState(new Map());
  const [mapErrorsEmail, setMapErrorsEmail] = useState(new Map());


  const navigate = useNavigate();
  const location = useLocation();
  const assents = location.state.assents;

  const addData = (data, index) =>{
    setMapState(new Map(mapState.set(index, data)));
  }
  
const handleSubmit = (event) =>{
  event.preventDefault();

  var error = false;

  mapState.forEach((val, index) =>{
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(val.name === ""){
      setMapErrorsName(new Map(mapErrorsName.set(index, "Missing name of passenger")));
      error = true;
    }
    if(val.age === ""){
      setMapErrorsAge(new Map(mapErrorsAge.set(index, "Missing age of passenger")));
      error = true;
    }
    if(!val.email.match(validRegex)){
      setMapErrorsEmail(new Map(mapErrorsEmail.set(index, "Email is invalid")));
      error = true;
    }
  });

  if(error){
    setMapErrors(new Map(mapErrors.set("Invalid data")));
  } else{
    navigate('/passengers', {
      state: {
        data: mapState,
      }});
  }
  
}

  return (
    <form onSubmit={handleSubmit}>
        {assents.map((assent, index)=>{
            return(
            <PassengersForm 
            key={index}
            assent={assent}
            index={index}
            addData={addData}
            mapErrorsName={mapErrorsName}
            mapErrorsAge={mapErrorsAge}
            mapErrorsEmail={mapErrorsEmail}
            />
            )})}
            <button type="submit" class="btn btn-primary">Sign in</button>
  </form>
  );
}

export default PassengersData;

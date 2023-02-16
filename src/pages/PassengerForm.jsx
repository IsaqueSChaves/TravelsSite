import React, {useState} from 'react';
import Error from '../components/Error'; 

function PassengersForm(props) {
  const {assent, index, addData, mapErrorsAge, mapErrorsName, mapErrorsEmail} = props;   

  const [errors, setErrors] = useState([]);
  const [data, setData]= useState({
    name:"",
    age:"",
    email:"",
  });

  const handleChange= (event)=> {
    const { name, value } = event.target;
    setData((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
    addData(data, index);
}

if(typeof(mapErrors) != "undefined"){
  mapErrorsName.forEach((val)=>{
    setErrors((prevValue)=>{
      return [...prevValue, val];
    })});
}

if(typeof(mapErrors) != "undefined"){
  mapErrorsAge.forEach((val)=>{
    setErrors((prevValue)=>{
      return [...prevValue, val];
    })});
}

if(typeof(mapErrors) != "undefined"){
  mapErrorsEmail.forEach((val)=>{
    setErrors((prevValue)=>{
      return [...prevValue, val];
    })});
}
  
  return (
      <>
        <h3>Passanger {index+1}</h3>
        <h4>Assent {assent+1}</h4>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName4">Name</label>
      <input name="name" type="name" class="form-control" onChange={(event) => handleChange(event)} placeholder="Name" value={data.name}/>
      {errors && <Error />}
    </div>
    <div class="form-group col-md-6">
      <label for="inputAge4">Age</label>
      <input name='age' type="number" class="form-control" onChange={(event) => handleChange(event)} placeholder="Age" value={data.age}/>
    </div>
  <div class="form-group">
    <label for="inputEmail4">Email</label>
    <input type="text" name='email' class="form-control" onChange={(event) => handleChange(event)} placeholder="example@xyz.com" value={data.email}/>
  </div>
  </div>
  </>
  );
}

export default PassengersForm;

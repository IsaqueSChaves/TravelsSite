import React from 'react';

function PassengersList(props) {

    const {index, data} = props;
    const {name, age, email} = data;

  return (
    <div>
    <h2>Passenger {index + 1}</h2>
    <h3>Name: {name}</h3>
    <h3>Age: {age}</h3>
    <h4>Email: {email}</h4>
    </div>
  );
}

export default PassengersList;

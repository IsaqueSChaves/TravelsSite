import React from 'react';
import Flights from '../components/Flights';
import flights from '../FakeFlights';

function Home() {

  
  return (
    <div className='home'>
        {flights.map((flight, index) =>{
          return(<Flights
            key={index}
            id={flight.id}
            place={flight.place}
            price={flight.price}
            img={flight.img}
            />)
        })}
    </div>
  );
}

export default Home;

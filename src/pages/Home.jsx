import passengerApi from "../services/passenger.service";
import Flights from '../components/Flights';
import flights from '../FakeFlights';
import React, {useState, useEffect} from 'react';

function Home() {

  const [passengers, setPassengers] = useState([]);
  const getPassengers = async () => {
    try {
        const data = (await passengerApi.getAll()).data.passenger;
        setPassengers(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getPassengers();
  }, []);

  return (
    <div className='home'>
        {flights.map((flight, index) =>{
          return(<Flights
            key={index}
            id={flight.id}
            place={flight.place}
            price={flight.price}
            img={flight.img}
            passengers={passengers}
            />)
        })}
    </div>
  );
}

export default Home;

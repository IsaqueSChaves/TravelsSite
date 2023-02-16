import React, {useState} from 'react';
import AirPlane from './AirPlane';

function Flights(props) {

  const {place, price, img, id} = props;

  const [arrow, setArrow] = useState(">");
  const [expand, setExpand] = useState(false);
  
  const handleClick = () =>{
    setExpand(!expand);
    expand ? setArrow(">") : setArrow("<");
  }

    return (
    <div style={{ backgroundImage: `url(${img})` }} className='flights'>
    <p>Flight number: {id}</p>
    <div className='details'>
    <h1>{place}</h1>
    <h3>R${price}</h3>
    </div>
    <div className='expansiveBtn' onClick={handleClick}><div className='arrow'>{arrow}</div>
    </div>
    {expand && <AirPlane />}
    </div>
  );
}

export default Flights;

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import Places from './Places';

function AirPlane() {

  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const[disable, setDisable] = useState(true);
  var assents = (''+Array(10)).split(',').map(function(){return this[0]++;}, [1]);

  const handleSubmit = (event) =>{
    event.preventDefault();
    navigate('/data', {
      state: {
        assents: selected,
      }});
  }

  const toogleItem = (id, isPressed) =>{
    isPressed ? 
    deleteItem(id)
    : 
    addItem(id);
  }
  const addItem = (id) =>{
    setDisable(false);
    setSelected((prevItems) => {
      return [...prevItems, id];
    });;
  }

  const deleteItem = (id) =>{
    setSelected(selected.filter(button => button !== id));
    if(selected.length === 1){
      setDisable(true);
    }
  }

    return (
    <div className='airPlane'>
      <form onSubmit={handleSubmit}>
        {assents.map((assent, id)=>{
          return(
          <Places
          id={id} 
          key={id}
          place={assent}
          toogleItem={toogleItem}
          />
          )})}
          <button type='submit' disabled={disable}>Confirm</button>
      </form>
    </div>
  );
}

export default AirPlane;

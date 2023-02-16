import React, {useState} from 'react';

function Places(props) {
const {place, id, toogleItem} = props;
const [isPressed, setIsPressed] = useState(false);
const [isDisable, setIsDisable] = useState(false);

const style = {
  backgroundColor: "#F0EEED"
};

const handleClick = (id, isPressed) =>{
  setIsPressed(!isPressed);
  toogleItem(id,isPressed);
}

  return (
    <>
        <button type='button' disabled={isDisable} style={isPressed || isDisable ? style : null} onClick={()=>handleClick(id, isPressed)} className='myButton'>{place}</button>
    </>
  );
}

export default Places;

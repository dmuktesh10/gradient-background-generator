import React, { useState } from 'react';
import './Card.css'
function Card(props){
  const [backgroundColor, setBackgroundColor] = useState('red')
  return(<div className="Card"></div>);
}

export default Card;
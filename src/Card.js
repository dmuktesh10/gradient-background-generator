import React, { useState } from "react";
import "./Card.css";
import MyModal from "./MyModal";
function Card(props) {
  const [showFlg, setShowFlg] = useState(false);
  const handleCardClick =  (e) => {
    setShowFlg(!showFlg);
  };
  return (
    <div>
      <div onClick={handleCardClick} 
      className="Card" 
      style={{backgroundColor: props.color}}
      ></div>
      <MyModal 
        show={showFlg}
        onClose={handleCardClick}
        color={props.color}
        onColorChange={props.onColorChange}
      >
          <div>Modal Content</div>
      </MyModal> 
    </div>
  );
}

export default Card;

import React, { useState } from "react";
import "./Card.css";
import MyModal from "./MyModal";
function Card() {
  const [showFlg, setShowFlg] = useState(false);
  const handleCardClick =  (e) => {
    setShowFlg(!showFlg);
  };
  return (
    <div>
      <div onClick={handleCardClick} className="Card"></div>
      <MyModal 
        show={showFlg}
        onClose={handleCardClick}
      >
          <div>Modal Content</div>
      </MyModal> 
    </div>
  );
}

export default Card;

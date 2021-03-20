import React, { useState } from "react";
import "./Card.css";
import Modal from "./Modal";
function Card(props) {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [showFlg, setShowFlg] = useState(false);
  const handleCardClick = function (e) {
    setShowFlg(!showFlg);
  };
  return (
    <div>
      <div onClick={handleCardClick} className="Card"></div>
      <Modal show={showFlg}>
        <div>Modal Content</div>
      </Modal>

    </div>
  );
}

export default Card;

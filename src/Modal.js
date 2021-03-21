import { useState } from "react";
import PropTypes from 'prop-types';
import './Modal.css'
import ColourPallete from "./ColourPallete";
function Modal(props) {
  const onClose = e => {
    props.onClose && props.onClose(e);
  };
  if(props.show){
  return(
    <div className='modal' id='modal'>
      <h2>Modal Window</h2>
      <ColourPallete />
      <div class="content">{props.children}</div>
      <div class="actions">
          <button class="toggle-button" onClick={onClose}>
            close
          </button>
        </div>
    </div>
  )
  }
  else
  {
    return null;
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
export default Modal;
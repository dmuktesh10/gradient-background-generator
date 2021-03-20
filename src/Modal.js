import { useState } from "react";

function Modal(props) {
  if(props.show){
  return(
    <div className='Modal'>
      {props.children}
      Modal Message Pop
    </div>
  )
  }
  else
  {
    return null;
  }
}

export default Modal;
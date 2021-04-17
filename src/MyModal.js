import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import ColourPallete from './ColourPallete';

const MyModal = (props) => {
return(
  <Modal isOpen={props.show}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
        <ColourPallete color={props.color}
          onColorChange={props.onColorChange}
          OnChangeCleanup={props.onClose}  
        />
      
        </ModalBody>
        <Button color="secondary" onClick={props.onClose}>Closes</Button>
      </Modal>
)
}
export default MyModal
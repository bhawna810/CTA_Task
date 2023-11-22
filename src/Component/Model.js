import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Model = ({
    show,
    setShow ,
    Action1 ,
    Action2,
    content ,
    button1, 
    button2 ,
    title
}) => {
  return (
        <Modal  show={setShow} onHide={Action1} backdrop="static" centered>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
             {content}
          </Modal.Body>
  
           <Modal.Footer>
            <Button variant="secondary" onClick={Action1}>{ button1 }</Button>
            <Button variant="primary" onClick={Action2}>{ button2 }</Button>
           </Modal.Footer>
  
        </Modal>
    );
}

export default Model;
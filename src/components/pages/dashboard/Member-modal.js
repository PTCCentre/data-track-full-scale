import React, { Children, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import plusImage from '../../assets/images/plus-circle.svg'


export default function MemberModal({children}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={()=>setShow(true)}>
           Register < img src={plusImage}/>
      </Button>

      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Client Church Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}


import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const NoProductsModal = ({ onHide }) => {
  return (
    <Modal
      show={true}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          No Products Found
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>No products found.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button href="/" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    // ..?>?
  );
};

export default NoProductsModal;

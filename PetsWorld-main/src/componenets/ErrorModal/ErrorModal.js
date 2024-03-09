import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ErrorModal = ({ modalShow, onHide, error }) => {
  return (
    <Modal
      show={modalShow}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={true}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error.response && error.response.status === 404 ? (
          <p>No products found.</p>
        ) : (
          <p>Error fetching products. Please try again later.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button href="/" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    // v
  );
};

export default ErrorModal;

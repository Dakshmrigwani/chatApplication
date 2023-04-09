import React, { useState, useRef } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsImageFill, BsFillMicFill } from "react-icons/bs";
import { SlPaperClip } from "react-icons/sl";
import { CiPaperplane } from "react-icons/ci";
import { Modal, Button } from "react-bootstrap";

export default function Messages({ handleClick }) {
  const [uploadedFileName, setUploadedFileName] = useState();
  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef();
  const inputRef1 = useRef();
  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
  };

  const handleUpload1 = () => {
    inputRef1.current?.click();
  };

  return (
    <>
      <div className="px-2 input w-100">
        <InputGroup className="pb-3">
          <Button variant="outline-primary">
            <BsFillMicFill />
          </Button>

          <Form.Control
            placeholder="Enter a Message"
            aria-label="Enter a Message"
            aria-describedby="basic-addon2"
            onClick={handleClick}
          />

          <Button variant="outline-secondary" onClick={handleUpload}>
            <input
              ref={inputRef}
              onChange={handleDisplayFileDetails}
              className="d-none"
              type="file"
            />

            {uploadedFileName ? uploadedFileName : <SlPaperClip />}
          </Button>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton />

            <Modal.Body>
              <p>You have selected a photo from the file.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Button variant="outline-primary" onClick={handleUpload1}>
            <input
              ref={inputRef1}
              onMouseEnter={() => setShowModal(true)}
              onMouseLeave={() => setShowModal(false)}
              className="d-none"
              type="file"
            />

            {<BsImageFill />}
          </Button>
          <Button variant="outline-success">
            <CiPaperplane />
          </Button>
        </InputGroup>
      </div>
    </>
  );
}

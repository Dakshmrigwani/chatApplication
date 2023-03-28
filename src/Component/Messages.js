import React, { useState, useRef } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsImageFill, BsFillMicFill } from "react-icons/bs";
import { SlPaperClip } from "react-icons/sl";
import { CiPaperplane } from "react-icons/ci";
import { Button } from "react-bootstrap";

export default function Messages({ handleClick }) {
  const [uploadedFileName, setUploadedFileName] = useState();
  const inputRef = useRef();

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
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
          <Button variant="outline-primary">
            <BsImageFill />
          </Button>
          <Button variant="outline-success">
            <CiPaperplane />
          </Button>
        </InputGroup>
      </div>
    </>
  );
}

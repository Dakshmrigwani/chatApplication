import React, { useState, useRef } from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsImageFill, BsFillMicFill } from "react-icons/bs";
import { SlPaperClip } from "react-icons/sl";
import { CiPaperplane } from "react-icons/ci";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setMessage } from "./Message/messageSlice";
import { setClicked } from "./Message/buttonSlice";

export default function Messages({ handleClick }) {
  const [uploadedFileName, setUploadedFileName] = useState();
  const [message, setMessageState] = useState("");
  const dispatch = useDispatch();

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
  const handleInputChange = (event) => {
    setMessageState(event.target.value);
  };

  const handleSendClick = () => {
    dispatch(setClicked(true));
    dispatch(setMessage(message));
    setMessageState("");
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
            value={message}
            onChange={handleInputChange}
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

          <Button variant="outline-primary" onClick={handleUpload1}>
            <input ref={inputRef1} className="d-none" type="file" />

            {<BsImageFill />}
          </Button>
          <Button variant="outline-success" onClick={handleSendClick}>
            <CiPaperplane />
          </Button>
        </InputGroup>
      </div>
    </>
  );
}

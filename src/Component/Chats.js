import React, { useState } from "react";
import { InputGroup, Form, Button, Modal } from "react-bootstrap";
import picture1 from "./Picture1.jpg";
import picture3 from "./picture3.jpg";
import picture4 from "./picture4.jpg";
import picture5 from "./picture5.jpg";

export default function Chats() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const images = [picture1, picture3, picture4, picture5];
  return (
    <>
      <div className="container-fluid py-3">
        <InputGroup>
          <Form.Control type="text" placeholder="Search Users" />
          <Button variant="success">Search</Button>
        </InputGroup>
      </div>
      <div className="d-flex flex-column">
        <div className="row">
          <div className="col-3 mt-1">
            <img
              src={images[0]}
              className="thumbnail rounded-circle "
              alt=""
              style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
              onClick={() => handleImageClick(images[0])}
            />
          </div>
          <div className="col-6">
            <div className="row">
              <Button
                variant="outline-light"
                size="sm"
                style={{
                  width: "13rem",
                  height: "4rem",
                  border: "none",
                  boxShadow: "none",
                }}
                className="ms-1"
              >
                <div className="text-start text-dark">
                  <h5>Lisa</h5>
                  <p>Hello John</p>
                </div>
              </Button>
            </div>
          </div>
          <div className="col-3">
            <p>12:00am</p>
          </div>
        </div>

        <div className="row">
          <div className="col-3  mt-1">
            <img
              src={images[1]}
              className="thumbnail rounded-circle"
              alt=""
              style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
              onClick={() => handleImageClick(images[1])}
            />
          </div>
          <div className="col-6">
            <div className="row">
              <Button
                variant="outline-light"
                size="sm"
                className="ms-1"
                style={{
                  width: "13rem",
                  height: "4rem",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <div className="text-start text-dark">
                  <h5>Kat</h5>
                  <p>Hello John</p>
                </div>
              </Button>
            </div>
          </div>
          <div className="col-3">
            <p>12:00am</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3  mt-1">
            <img
              src={images[2]}
              className="thumbnail rounded-circle"
              alt=""
              style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
              onClick={() => handleImageClick(images[2])}
            />
          </div>
          <div className="col-6">
            <div className="row">
              <Button
                variant="outline-light"
                size="sm"
                className="ms-1"
                style={{
                  width: "13rem",
                  height: "4rem",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <div className="text-start text-dark">
                  <h5>Smith</h5>
                  <p>Hello John</p>
                </div>
              </Button>
            </div>
          </div>
          <div className="col-3">
            <p>12:00am</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3  mt-1">
            <img
              src={images[3]}
              className="thumbnail rounded-circle"
              alt=""
              style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
              onClick={() => handleImageClick(images[3])}
            />
          </div>
          <div className="col-6">
            <div className="row">
              <Button
                variant="outline-light"
                size="sm"
                style={{
                  width: "13rem",
                  height: "4rem",
                  border: "none",
                  boxShadow: "none",
                }}
                className="ms-1"
              >
                <div className="text-start text-dark">
                  <h5>Alex</h5>
                  <p>Hello John</p>
                </div>
              </Button>
            </div>
          </div>
          <div className="col-3">
            <p>12:00am</p>
          </div>
        </div>
        <Modal show={showModal} size="xl" onHide={() => setShowModal(false)}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt=""
              className="w-100"
              style={{ height: "36rem", padding: "0 !important" }}
            />
          )}
        </Modal>
      </div>
    </>
  );
}

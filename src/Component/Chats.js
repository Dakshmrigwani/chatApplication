import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import { InputGroup, Form, Button } from "react-bootstrap";
import picture1 from "./Picture1.jpg";
import picture3 from "./picture3.jpg";
import picture4 from "./picture4.jpg";
import picture5 from "./picture5.jpg";

const images = [picture1, picture3, picture4, picture5];

export default function Chats() {
  return (
    <>
      <div className="container-fluid py-3">
        <InputGroup>
          <Form.Control type="text" placeholder="Search Users" />
          <Button variant="success">Search</Button>
        </InputGroup>
      </div>
      <div className="d-grid">
        <div className="row">
          <div className="col-lg-2 mt-1">
            <img
              src={images[0]}
              className="thumbnail rounded-circle"
              alt=""
              style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
            />
          </div>
          <div className="col-lg-7">
            <div className="row">
              <Button
                variant="outline-light"
                size="sm"
                style={{ width: "8rem", height: "4rem", border: "none" }}
                className="ms-1"
              >
                <div className="text-start text-dark">
                  <h5>Lisa</h5>
                  <p>Hello John</p>
                </div>
              </Button>
            </div>
          </div>
          <div className="col-lg-3">
            <p>12:00am</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2  mt-1">
            <img
              src={images[1]}
              className="thumbnail rounded-circle"
              alt=""
              style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
            />
          </div>
          <div className="col-lg-7">
            <div className="row">
              <Button
                variant="outline-light"
                size="sm"
                className="ms-1"
                style={{ width: "8rem", height: "4rem", border: "none" }}
              >
                <div className="text-start text-dark">
                  <h5>Kat</h5>
                  <p>Hello John</p>
                </div>
              </Button>
            </div>
          </div>
          <div className="col-lg-3">
            <p>12:00am</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2  mt-1">
            <img
              src={images[2]}
              className="thumbnail rounded-circle"
              alt=""
              style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
            />
          </div>
          <div className="col-lg-7">
            <div className="row">
              <Button
                variant="outline-light"
                size="sm"
                className="ms-1"
                style={{ width: "8rem", height: "4rem", border: "none" }}
              >
                <div className="text-start text-dark">
                  <h5>Smith</h5>
                  <p>Hello John</p>
                </div>
              </Button>
            </div>
          </div>
          <div className="col-lg-3">
            <p>12:00am</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2  mt-1">
            <img
              src={images[3]}
              className="thumbnail rounded-circle"
              alt=""
              style={{ height: "3rem", width: "3rem", cursor: "pointer" }}
            />
          </div>
          <div className="col-lg-7">
            <div className="row">
              <Button
                variant="outline-light"
                size="sm"
                style={{ width: "8rem", height: "4rem", border: "none" }}
                className="ms-1"
              >
                <div className="text-start text-dark">
                  <h5>Alex</h5>
                  <p>Hello John</p>
                </div>
              </Button>
            </div>
          </div>
          <div className="col-lg-3">
            <p>12:00am</p>
          </div>
        </div>
      </div>
    </>
  );
}

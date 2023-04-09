import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import picture1 from "./Picture1.jpg";
import picture3 from "./picture3.jpg";
import picture4 from "./picture4.jpg";
import picture5 from "./picture5.jpg";

export default function Chats() {
  return (
    <>
      <div className="container-fluid py-3">
        <div className="">
          <InputGroup>
            <Form.Control type="text" placeholder="Search Users" />
            <Button variant="success">Search</Button>
          </InputGroup>
        </div>
      </div>
      <div className="">
        <div className="d-grid">
          <div className="row">
            <div className="col-sm-2">
              <img
                src={picture1}
                className="thumbnail rounded-circle"
                alt=""
                style={{ height: "3rem", width: "3rem" }}
              />
            </div>
            <div className="col-sm-7">
              <div className="row">
                <h5>Lisa</h5>
                <p>Hello John</p>
              </div>
            </div>
            <div className="col-sm-3">
              <p>12:00am</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-2">
              <img
                src={picture3}
                className="thumbnail rounded-circle"
                alt=""
                style={{ height: "3rem", width: "3rem" }}
              />
            </div>
            <div className="col-sm-7">
              <div className="row">
                <h5>Kat</h5>
                <p>Hello John</p>
              </div>
            </div>
            <div className="col-sm-3">
              <p>12:00am</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <img
                src={picture4}
                className="thumbnail rounded-circle"
                alt=""
                style={{ height: "3rem", width: "3rem" }}
              />
            </div>
            <div className="col-sm-7">
              <div className="row">
                <h5>Smith</h5>
                <p>Hello John</p>
              </div>
            </div>
            <div className="col-sm-3">
              <p>12:00am</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <img
                src={picture5}
                className="thumbnail rounded-circle"
                alt=""
                style={{ height: "3rem", width: "3rem" }}
              />
            </div>
            <div className="col-sm-7">
              <div className="row">
                <h5>Alex</h5>
                <p>Hello John</p>
              </div>
            </div>
            <div className="col-sm-3">
              <p>12:00am</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

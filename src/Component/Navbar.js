import React from "react";
import { InputGroup } from "react-bootstrap";
import "../App.css";
import picture from "./picture2.jpg";

export default function Navbar() {
  return (
    <>
      <div className="row d-flex" style={{ backgroundColor: "#0dcaf0" }}>
        <div className="col-sm-6">
          <div className="d-flex justify-content-start">
            <div className="fw-bolder fs-4">CHATTER</div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-end">
            <div className="">
              <InputGroup>
                <div>
                  <img
                    src={picture}
                    className="thumbnail rounded-circle "
                    alt=""
                    style={{ height: "3rem", width: "3rem" }}
                  />
                </div>

                <div className="d-flex align-items-center ms-2">
                  <b>John</b>
                </div>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

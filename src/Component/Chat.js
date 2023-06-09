import React, { useRef, useState } from "react";
import { BsCameraVideo, BsFillPersonPlusFill } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import Messages from "./Messages";
import InputGroup from "react-bootstrap/InputGroup";
import "../App.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import picture1 from "./Picture1.jpg";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { selectClicked } from "./Message/buttonSlice";
import { selectMessage } from "./Message/messageSlice";

export default function Chat() {
  const bottomRef = useRef(null);
  function handleClick() {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const message = useSelector(selectMessage);
  const clicked = useSelector(selectClicked);

  return (
    <>
      <div style={{ backgroundColor: "#fd7e14" }}>
        <div className="row">
          <div className="col-3">
            <Button
              size="sm"
              style={{
                border: "none",
                backgroundColor: "#fd7e14",

                boxShadow: "none",
              }}
              className="ms-1"
            >
              <div className="d-flex justify-content-start">
                <div>
                  <img
                    src={picture1}
                    className="thumbnail rounded-circle "
                    alt=""
                    style={{ height: "3rem", width: "3rem" }}
                  />
                </div>
                <div className="fs-4 fw-bolder ps-1 text-dark">Lisa</div>
              </div>
            </Button>
          </div>
          <div className="col-9">
            <div className="d-flex justify-content-end mt-2">
              <Button variant="outline-none">
                <BsCameraVideo />
              </Button>
              <Button variant="outline-none">
                <BsFillPersonPlusFill className="ms-4" />
              </Button>
              <Button variant="outline-none" onClick={handleShow}>
                <CiMenuKebab className="ms-3" />
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                dialogClassName="custom-modal"
              >
                <Modal.Header closeButton />
                <Modal.Body className="d-flex flex-column justify-content-start">
                  <Row className="pb-3">
                    <Button variant="bg-none">
                      <div className="text-start">Report</div>
                    </Button>
                  </Row>
                  <Row className="pb-3 ">
                    <Button variant="bg-none">
                      <div className="text-start">Block</div>
                    </Button>
                  </Row>

                  <Row className="pb-3">
                    <Button variant="bg-none">
                      <div className="text-start">Wallpaper</div>
                    </Button>
                  </Row>
                  <Row className="pb-3">
                    <Button variant="bg-none">
                      <div className="text-start">
                        <Link
                          to="/Login"
                          className="text-decoration-none text-dark"
                        >
                          LogOut
                        </Link>
                      </div>
                    </Button>
                  </Row>
                  <Row className="pb-3">
                    <Button variant="bg-none">
                      <div className="text-start">More</div>
                    </Button>
                  </Row>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden" style={{ backgroundColor: "#FFDCAF" }}>
        <InputGroup>
          <div className="overflow">
            <div className="d-grid justify-content-start">
              <div className="py-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                  alt=""
                  className="size "
                />
              </div>

              <div className="">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                  alt=""
                  className="size "
                />
              </div>
              <div className="mb-3">
                <Card className="mt-2 ">
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mt-2">
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="d-grid justify-content-end ms-5">
              <div className="py-2 ">
                <img
                  className="size ms-5"
                  alt=""
                  src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
                />
              </div>

              <div className="">
                <img
                  className="size ms-5"
                  alt=""
                  src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
                />
              </div>
              <Card className="mt-2 ">
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mt-2">
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              {clicked && (
                <Card className="mt-2">
                  <Card.Body>
                    <Card.Text>{message}</Card.Text>
                  </Card.Body>
                </Card>
              )}
            </div>
            <div ref={bottomRef}></div>
            <Messages handleClick={handleClick} className="input" />
          </div>
        </InputGroup>
      </div>
    </>
  );
}

import React from "react";
import Chat from "./Component/Chat";
import Chats from "./Component/Chats";
import Navbar from "./Component/Navbar";
import "./App.css";

export default function Home() {
  return (
    <>
      <div className="d-flex container-fluid">
        <div className="row">
          <div className="col-md-3 d-md-flex d-none flex-column">
            <Navbar />
            <Chats />
          </div>

          <div className="col-md-9 col-12">
            <a
              class="btn btn-primary d-flex d-md-none w-50 mx-5 my-3"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              See People
            </a>
            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-body">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>

                <Chats />
              </div>
            </div>
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
}

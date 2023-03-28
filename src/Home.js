import React from "react";
import Chat from "./Component/Chat";
import Chats from "./Component/Chats";
import Navbar from "./Component/Navbar";
import "./App.css";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="row">
              <Navbar />
            </div>
            <div className="row">
              <Chats />
            </div>
          </div>
          <div className="col-9">
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Header from "../../components/Header/Header.js";

export default function index() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", height: 800 }}>
        <div style={{ width: "50%", height: "100%", backgroundColor: "red" }}>
          kiri
        </div>
        <div
          style={{ width: "50%", height: "100%", backgroundColor: "yellow" }}
        >
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 200px" }}>
            <input placeholder={"nama"} />
            <input placeholder={"Email"} />
            <input placeholder={"Password"} />
          </div>
        </div>
      </div>
    </div>
  );
}

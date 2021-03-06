import React from "react";
import ItemCard from "../../components/ItemCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CContainer } from "@coreui/react";

export default function panggilmekanik() {
  return (
    <div>
      <Header />
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4>panggil mekanik</h4>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <Footer />
    </div>
  );
}

import { CSpinner } from "@coreui/react";
import React from "react";
import Footer from "../../components/Footer/Footer";
import FormRegister from "../../components/FormRegister/FormRegister";
import Header from "../../components/Header/Header";

export default function register() {
  return (
    <div style={{ position: "relative" }}>
      <div>
        <Header />
        <FormRegister />
        <Footer />
      </div>
    </div>
  );
}

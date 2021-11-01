import React from "react";
import { CCol, CCardBody, CCard, CButton } from "@coreui/react";
import {
  IC_SPAREPART,
  IC_CUSTOMERSERVICE,
  IC_PANGGILMEKANIK,
} from "../../assets";

export default function CardButton({ title, onClick, type }) {
  const Icon = ({type}) => {
    if (type === "sparepart") {
      return <IC_SPAREPART />;
    }
    if (type === "cs") {
      return <IC_CUSTOMERSERVICE />;
    }
    if (type === "mekanik") {
      return <IC_PANGGILMEKANIK />;
    }
  };
  return (
    <CButton
      color={"none"}
      className="card-button"
      style={{ width: "fit-content", padding: 0 }}
    >
      <CCol sm="auto">
        <CCard
          style={{
            width: "14rem",
            alignItems: "center",
          }}
          onClick={() => alert("test")}
        >
          <Icon type={type} />
          <CCardBody>
            <a style={{ textDecoration: "none", color: "black" }} href="#">
              {title}
            </a>
          </CCardBody>
        </CCard>
      </CCol>
    </CButton>
  );
}

import React from "react";
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CImage,
} from "@coreui/react";
import Image from "next/image";
import { PRODUK_1 } from "../assets";
import { PRODUK_2 } from "../assets";
import { PRODUK_3 } from "../assets";
import { PRODUK_4 } from "../assets";

const Card = ({ title, price }) => {
  return (
    <CCol
      className={"px-0"}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <CCard style={{ width: "12rem", alignItems: "center" }}>
        <Image src={PRODUK_1} width={136} height={136} objectFit={"cover"} />
        <CCardBody
          className={
            "d-flex justify-content-center flex-column align-items-center"
          }
        >
          <CCardTitle className={"h6 text-align-center"}>
            NAMA PRODUK
          </CCardTitle>
          <CCardText>Rp.250.000</CCardText>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default function Sparepartterbaik({ type = true }) {
  return (
    <>
      {type ? <div style={{ height: type ? 63 : 30 }} /> : <></>}

      <CContainer style={{ paddingLeft: "0px", width: "904px" }}>
        {type ? (
          <>
            <h4>Sparepart Terbaik Untuk Kamu</h4>
          </>
        ) : (
          <></>
        )}
        <div style={{ height: type ? 63 : 30 }} />
        <CCol className={"d-flex flex-column"}>
          <a className={"align-self-end"}>Lihat Semua Oli</a>
          <CRow>
            <Card />
            <Card />
            <Card />
            <Card />
          </CRow>
        </CCol>
      </CContainer>
    </>
  );
}

import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CFormCheck,
  CRow,
} from "@coreui/react";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Pengiriman() {
 
  return (
    <div>
      <Header />
      <CRow className="justify-content-center d-flex flex-row mt-4 mb-4">
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            width: 200,
          }}
        >
          <p style={{ width: "max-content" }}>Pengiriman</p>
          <div
            style={{
              width: 24,
              height: 24,
              backgroundColor: "#1BA0E2",
              borderRadius: 24,
              position: "relative",
              zIndex: 4,
            }}
          >
            <div
              style={{
                width: 180,
                height: 10,
                backgroundColor: "#DADADA;",
                position: "absolute",
                left: 23,
                top: 0,
                bottom: 0,
                marginBottom: "auto",
                marginTop: "auto",
                zIndex: 1,
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            width: 200,
          }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <p style={{ width: "max-content" }}>Pembayaran</p>
          <div
            style={{
              width: 24,
              height: 24,
              backgroundColor: "#DADADA;",
              borderRadius: 24,
              position: "relative",
              zIndex: 4,
            }}
          >
            <div
              style={{
                width: 180,

                height: 10,
                backgroundColor: "#DADADA;",
                position: "absolute",
                left: 24,
                top: 0,
                bottom: 0,
                marginBottom: "auto",
                marginTop: "auto",
                zIndex: 1,
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            width: 200,
          }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <p style={{ width: "max-content" }}>Selesai</p>
          <div
            style={{
              width: 24,
              height: 24,
              backgroundColor: "#DADADA;",
              borderRadius: 24,
              zIndex: 4,
            }}
          />
        </div>
      </CRow>
      <CContainer>
        <h4>Alamat Utama</h4>
        <CCard style={{ width: "40rem" }} className="mb-4">
          <CCardBody>
            <div className="d-flex flex-row">
              <CCardText style={{ padding: 20, width: 500 }}>
                Taufik Adi Jl. Pondok Kacang Prima Gg H Durasip RT 03 / RW 05
                No. 88 Pondok kacang timur Pondok Aren, Kota Tangerang Selatan,
                Banten, 15426 Indonesia T: 083873403992
              </CCardText>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 24,
                  backgroundColor: "#1BA0E2",
                  marginTop: 20,
                }}
              />
            </div>
            <CButton href="#">Edit</CButton>
          </CCardBody>
        </CCard>
        <CButton className="mt-4 mb-4">Tambah Alamat</CButton>
      </CContainer>
      <CContainer className="mt-4">
        <h4 className="mt-4 mb-4">Metode Pengiriman</h4>
        <CFormCheck
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          label="JNE Reguler Rp. 25.000"
          className="mt-4 mb-4"
        />
        <CButton>Selanjutnya</CButton>
      </CContainer>
      <Footer />
    </div>
  );
}

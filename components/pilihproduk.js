import React, { useState } from "react";
import { PRODUK_4, PRODUK_4A, SHOPPINGCART } from "../assets";
import Image from "next/image";
import {
  CContainer,
  CCol,
  CRow,
  CImage,
  CCarousel,
  CCarouselItem,
  CButton,
  CCard,
  CTable,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableBody,
  CInputGroup,
  CInputGroupText,
  CFormInput,
} from "@coreui/react";

export default function PilihProduk() {
  const [count, setcount] = useState(0);
  return (
    <CContainer style={{ width: "980px" }}>
      <CRow className="d-flex flex-row">
        <CCol
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ paddingTop: "50px", marginTop: "30px" }}
        >
          <CCarousel style={{ width: "18rem" }}>
            <CCarouselItem>
              <Image src={PRODUK_4} width={340} height={467} />
            </CCarouselItem>
            <CCarouselItem>
              <Image src={PRODUK_4} width={340} height={467} />
            </CCarouselItem>
            <CCarouselItem>
              <Image src={PRODUK_4} width={340} height={467} />
            </CCarouselItem>
          </CCarousel>
          <CRow>
            <CCol>
              <Image src={PRODUK_4} width={121} height={121} />
            </CCol>
            <CCol>
              <Image src={PRODUK_4} width={121} height={121} />
            </CCol>
            <CCol>
              <Image src={PRODUK_4A} width={121} height={121} />
            </CCol>
            <CCol>
              <Image src={PRODUK_4A} width={121} height={121} />
            </CCol>
          </CRow>
        </CCol>
        <CCol style={{ marginTop: "30px", paddingLeft: "0px" }}>
          <p style={{ fontWeight: "bold" }}> Nama Product</p>
          <p> 4.9 (3 ulasan) </p>
          <p> Jumlah </p>
          <div
            style={{
              display: "flex",
              maxWidth: "120px",
            }}
          >
            <CInputGroup className="mb-3">
              <CButton
                onClick={(e) => {
                  if (count > 0) {
                    setcount(count - 1);
                    e.preventDefault();
                  }
                }}
              >
                -
              </CButton>
              <CFormInput
                // placeholder="0"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={count}
                disabled
              />
              <CButton
                color="success"
                onClick={(e) => {
                  setcount(count + 1);
                  e.preventDefault();
                }}
              >
                +
              </CButton>
            </CInputGroup>
          </div>
          <p className="mt-3"> Rp. 499.000</p>

          <CCol>
            <CRow className="mb-3">
              <CCol>
                <CButton
                  style={{
                    width: "150px",
                    fontSize: "14px",
                    backgroundColor: "#1BA0E2",
                    border: "none",
                    borderRadius: "0px",
                  }}
                  href="/member/pengiriman"
                >
                  Beli Sekarang
                </CButton>
              </CCol>
              <CCol>
                <CButton
                  style={{
                    width: "200px",
                    fontSize: "12px",
                    backgroundColor: "#0080BF",
                    border: "none",
                    borderRadius: "0px",
                  }}
                >
                  Tambah Ke Keranjang <SHOPPINGCART />{" "}
                </CButton>
              </CCol>
            </CRow>
            <p style={{ fontSize: "14px" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </CCol>
        </CCol>
      </CRow>
      <CCol></CCol>

      <CTable borderless style={{ fontSize: "14px" }}>
        <CTableHead>
          <CTableRow>
            <CTableDataCell scope="col">Ulasan</CTableDataCell>
            <CTableHeaderCell scope="col">
              {" "}
              <CButton
                style={{
                  fontSize: "14px",
                  borderColor: "#1BA0E2",
                  backgroundColor: "white",
                  color: "#0080BF",
                  width: "132px",
                  borderRadius: "0px",
                }}
              >
                {" "}
                Tulis Review
              </CButton>
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell scope="row" style={{ width: "200px" }}>
              Nama Customer
            </CTableDataCell>
            <CTableDataCell>Bagus banget</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell scope="row">Nama Customer</CTableDataCell>
            <CTableDataCell>Bagus banget</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableDataCell scope="row">Nama Customer</CTableDataCell>
            <CTableDataCell colSpan="2">Bagus banget</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>

      <a
        style={{
          textDecoration: "none",
          fontSize: "14px",
          color: "#0080BF",
          paddingLeft: "8px",
        }}
        href=""
      >
        <b>Lihat lebih banyak</b>
      </a>

      <h4 style={{ paddingLeft: "8px", paddingTop: "32px", fontSize: "28px" }}>
        <b>Sparepart Lainnya</b>
      </h4>
    </CContainer>
  );
}

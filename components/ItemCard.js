import React from "react";
import Image from "next/image";
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
  CButton,
} from "@coreui/react";

import { PRODUK_4 } from "../assets";

export default function ItemCard() {
  return (
    <CContainer
      style={{
        marginTop: "60px",
        marginLeft: "0px",
        padding: "0px",
        width: "1170px",
        marginRight: "0px",
      }}
    >
      <CRow>
        <CCol sm="auto">
          <Image src={PRODUK_4} width={179} height={179} />
        </CCol>
        <CCol>
          <h4 className="mb-4 mt-4">Shell Advance AX7 Matic</h4>
          <h6 className="mb-4 mt-4">4.9 (3 Ulasan)</h6>
          <CCol className="d-flex">
            <p style={{ width: 750 }} className="mr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum quis viverra quam, vitae pellentesque nulla. Donec
              semper id lorem et pharetra. Nunc id eros nulla. Pellentesque non
              hendrerit purus, in suscipit purus.
            </p>
            <CCol className="d-flex flex-column justify-content-end align-items-end">
              <h4>Rp. 60.000</h4>
              <h4>Rp. 60.000</h4>
              <CButton href="/member/detailproduk">Lihat Detail</CButton>
            </CCol>
          </CCol>
        </CCol>
      </CRow>
    </CContainer>
  );
}

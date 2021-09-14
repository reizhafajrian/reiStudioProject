import React, { useState } from 'react';
import {
  CTable,
  CRow,
  CCol,
  CTableRow,
  CContainer,

} from "@coreui/react";

export default function FooterTop() {
  return (
    <CContainer style={{ backgroundColor: "blueviolet", maxWidth: "100%", position: "relative", padding:"34px", height: "auto" }}>
      <CRow style={{
        padding: "0px"
      }}>
        <CCol style={{ paddingLeft: "0px", fontSize: "35px", backgroundColor:"blue" }}>
          <a  style={{ color: "grey", textDecoration: "none"}} href="#">Header</a>
        </CCol>
        <CCol >
          <p style={{ fontSize: "14px", width: "250px", paddingLeft: "80px" }}>Jl. Pintu Air V No.53, RW.8, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta. 10710</p>
        </CCol>
        <CCol  style={{paddingLeft:"100px"}}>
          <CTable>
            <CTableRow>
              <b>Social</b>
            </CTableRow>
            <CTableRow>
              Twitter
            </CTableRow>
            <CTableRow>
              Instagram
            </CTableRow>
            <CTableRow>
              Facebook
            </CTableRow>
          </CTable>
        </CCol>
        <CCol>
          <CTable>
            <CTableRow border="1px">
              <b>Main Menu</b>
            </CTableRow>
            <CTableRow>
              Sparepart
            </CTableRow>
            <CTableRow>
              Aki
            </CTableRow>
            <CTableRow>
              Oli
            </CTableRow>
            <CTableRow>
              Ban
            </CTableRow>
            <CTableRow>
              Service
            </CTableRow>
          </CTable>
        </CCol>
      </CRow>
    </CContainer>

  );
}

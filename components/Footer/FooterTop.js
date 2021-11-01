import React, { useState } from 'react';
import { LINING } from '../../assets';
import {
  CTable,
  CRow,
  CCol,
  CTableRow,
  CContainer,
  CHeaderBrand,

} from "@coreui/react";

export default function FooterTop() {
  return (
    <CContainer style={{ maxWidth: "100%", height: "366px", paddingTop: "68px", backgroundColor: "#F8F8F8" }}>
      <CRow style={{
        paddingTop: "20px"
      }}>
        <CCol style={{ fontSize: "35px", textAlign: "center" }}>
          <a style={{ color: "grey", textDecoration: "none", paddingTop: "0px" }} href="#">Header</a>
        </CCol>
        <CCol xs lg={3}>
          <p style={{
            fontSize: "14px",
            width: "150px",
          }}>Jl. Pintu Air V No.53, RW.8, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta. 10710</p>
        </CCol>
        <CCol xs lg={2}>
          <CCol>
            <CRow>
              <div style={{paddingLeft:"0", display:"flex", flexDirection:"row", alignItems:"center"}}>
            <div style={{width:"2px", height:"20px", backgroundColor:"#1BA0E2",}}></div>
              <b style={{paddingLeft:"8px"}}>Social</b></div></CRow>
            <div style={{paddingTop:"15px", paddingLeft:"8px"}}>
            <CRow style={{paddingLeft:"8px"}}>Twitter</CRow>
            <CRow>Instagram</CRow>
            <CRow>Facebook</CRow>
            </div>
          </CCol>
        </CCol>
        <CCol>
            <CRow>
              <div style={{paddingLeft:"0", display:"flex", flexDirection:"row", alignItems:"center"}}>
            <div style={{width:"2px", height:"20px", backgroundColor:"#1BA0E2",}}></div>
              <b style={{paddingLeft:"8px"}}>Main Menu</b></div></CRow>
            <div style={{paddingTop:"15px", paddingLeft:"8px"}}>
            <CRow>Sparepart</CRow>
            <CRow>Aki</CRow>
            <CRow>Oli</CRow>
            <CRow>Ban</CRow>
            <CRow>Service</CRow>
            </div>
        </CCol>
      </CRow>
    </CContainer>

  );
}

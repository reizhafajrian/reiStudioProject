import React, { useState } from 'react';
import {
    CContainer,
    CRow,
    CCol,
  
  } from "@coreui/react";

  export default function FooterTop() {
    return (
        <CContainer style={{
            backgroundColor:"#F8F8F8"
        }}>
  <CRow>
    <CCol sm="auto">
        image
    </CCol>
    <CCol sm="auto">
        Jl. Pintu Air V No.53, RW.8, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta. 10710
    </CCol>
    <CCol sm="auto">One of three columns</CCol>
  </CRow>
</CContainer>

    );
}

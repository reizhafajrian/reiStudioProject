import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { IMAGE_3 } from "../assets";
import { IC_SPAREPART } from "../assets";
import { IC_CUSTOMERSERVICE } from "../assets";
import { IC_PANGGILMEKANIK } from "../assets";

import {
  CCard,
  CCardBody,
  CContainer,
  CCol,
  CRow,
} from '@coreui/react';


export default function index() {
  return (
    <div>
      <Header />

      <center>
        <IMAGE_3 />
      </center>

      <center>
      <CContainer style={{marginTop: "25px", width:"100%"}}>
        <CRow>
          <CCol>
            <CCard style={{
              width: '16rem',
              alignItems: "center"
            }}>
              <IC_SPAREPART />
              <CCardBody>
                <a href="#">Semua Sparepart</a>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol >
            <CCard style={{
              width: '16rem',
              alignItems: "center"
            }}>
              <IC_CUSTOMERSERVICE />
              <CCardBody>
                <a href="#">
                  Chat dengan CS
                </a>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol>
            <CCard style={{
              width: '16rem',
              alignItems: "center"
            }}>
              <IC_PANGGILMEKANIK />
              <CCardBody>
                <a href="#">
                  Panggil Mekanik
                </a>
              </CCardBody>
            </CCard>
          </CCol>

        </CRow>
      </CContainer>
      </center>

      <p>testttt</p>

    </div>
  );
}

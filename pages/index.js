import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Penilaian from "../components/penilaian";
import Sparepartterbaik from "../components/Sparepartterbaik";
import Image from "next/image";

<<<<<<< HEAD
import { IMAGE_2, IMAGE_3 } from "../assets";
=======
import { IMAGE_2 } from "../assets";
>>>>>>> a4e58dfd2e1163ad4201594a901747a7e77648ce
import { IC_SPAREPART } from "../assets";
import { IC_CUSTOMERSERVICE } from "../assets";
import { IC_PANGGILMEKANIK } from "../assets";

<<<<<<< HEAD
import { CCard, CCardBody, CContainer, CCol, CRow } from "@coreui/react";
=======
import {
  CCard,
  CCardBody,
  CContainer,
  CCol,
  CRow,
  CImage,
  CCarousel,
  CCarouselItem,
  CButton
} from '@coreui/react';

>>>>>>> a4e58dfd2e1163ad4201594a901747a7e77648ce

export default function index() {
  return (
    <div>
      <Header />

      <center>
        <CCarousel dark controls style={{width:"904px"}}>
          <CCarouselItem>
          <Image src={IMAGE_2}/>
          </CCarouselItem>
          <CCarouselItem>
          <Image src={IMAGE_2}/>
          </CCarouselItem>
          <CCarouselItem>
          <Image src={IMAGE_2}/>
          </CCarouselItem>
        </CCarousel>

      </center>

      <center>
        <CContainer style={{ marginTop: "25px", width: "904px", padding: "0px", backgroundColor:"blue"}}>
          <CRow>
            <CCol  sm="auto">
              <CCard style={{
                width: '14rem',
                alignItems: "center",
              }}>
                <IC_SPAREPART />
                <CCardBody>
                  <a style={{textDecoration:"none", color:"black"}} href="#">Semua Sparepart</a>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol>
              <CCard style={{
                width: '14rem',
                alignItems: "center",
              }}>
                <IC_CUSTOMERSERVICE />
                <CCardBody>
                  <a style={{textDecoration:"none", color:"black"}} href="#">
                    Chat dengan CS
                  </a>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol  sm="auto">
              <CCard style={{
                width: '14rem',
                alignItems: "center",
              }}>
                <IC_PANGGILMEKANIK />
                <CCardBody>
                  <a style={{textDecoration:"none", color:"black"}} href="/panggilmekanik">
                    Panggil Mekanik
                  </a>
                </CCardBody>
              </CCard>
            </CCol>

          </CRow>
        </CContainer>
      </center>
      
      <CContainer style={{marginTop:"32px", paddingLeft:"0px"}}>
      <h5><b>Sparepart Terbaik Untuk Kamu</b></h5>
    
        </CContainer>

      <Sparepartterbaik />
      <Penilaian />
      <Footer />
    </div>
  );
}

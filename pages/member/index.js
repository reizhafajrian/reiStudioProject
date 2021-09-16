import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Penilaian from "../../components/penilaian";
import Sparepartterbaik from "../../components/Sparepartterbaik";
import Image from "next/image";

import { IMAGE_2 } from "../../assets";
import { IC_SPAREPART } from "../../assets";
import { IC_CUSTOMERSERVICE } from "../../assets";
import { IC_PANGGILMEKANIK } from "../../assets";

import {
  CCard,
  CCardBody,
  CContainer,
  CCol,
  CRow,
  CImage,
  CCarousel,
  CCarouselItem,
  CButton,
} from "@coreui/react";
import CardButton from "../../components/CardButton/CardButton";

export default function index() {
  return (
    <div>
      <Header />
      <center>
        <CCarousel dark controls style={{ width: "904px" }}>
          <CCarouselItem>
            <Image src={IMAGE_2} />
          </CCarouselItem>
          <CCarouselItem>
            <Image src={IMAGE_2} />
          </CCarouselItem>
          <CCarouselItem>
            <Image src={IMAGE_2} />
          </CCarouselItem>
        </CCarousel>
      </center>
      <center>
        <CContainer
          style={{
            marginTop: "25px",
            width: "904px",
            padding: "0px",
          }}
        >
          <CRow className={"justify-content-between"}>
            <CardButton title={"Semua Sparepart"} type={"sparepart"} />
            <CardButton title={"Chat Dengan CS"} type={"cs"} />
            <CardButton title={"Panggil Mekanik"} type={"mekanik"} />
          </CRow>
        </CContainer>
      </center>

      <Sparepartterbaik />
      <Penilaian />
      <div style={{ height: 20 }} />
      <CContainer style={{ paddingLeft: "0px", width: "904px" }}>
        <h4>Sparepart Lainnya</h4>
      </CContainer>
      <Sparepartterbaik type={false} />
      <Sparepartterbaik type={false} />

      <Footer />
    </div>
  );
}

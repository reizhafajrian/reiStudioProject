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
import { PRODUK_1, PRODUK_2, AKI, OLI, PRODUK_3, PRODUK_4, PRODUK_5, PRODUK_6 } from "../assets";


const Card = ({ title, price }) => {
  return (
    <CRow>
      <CCol
        className={"px-0"}
        style={{ display: "flex", justifyContent: "center" }}
      >
          <Image src={AKI} width={192} height={192} objectFit={"cover"} />
         
   
      </CCol>

      <CCol
        className={"px-0"}
        style={{ display: "flex", justifyContent: "center" }}
      >

        <CCard style={{ width: "12rem", alignItems: "center" }}>
          <Image src={PRODUK_4} width={136} height={136} objectFit={"cover"} />
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

      <CCol
        className={"px-0"}
        style={{ display: "flex", justifyContent: "center" }}
      >

        <CCard style={{ width: "12rem", alignItems: "center" }}>
          <Image src={PRODUK_5} width={126} height={126} objectFit={"cover"} />
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

      <CCol
        className={"px-0"}
        style={{ display: "flex", justifyContent: "center" }}
      >

        <CCard style={{ width: "12rem", alignItems: "center" }}>
          <Image src={PRODUK_2} width={85} height={125} objectFit={"cover"} />
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
    </CRow>



  );
};

export default function Sparepartlainnyaaki({ type = true }) {
  return (
    <>
      {type ? <div style={{ height: type ? 63 : 30 }} /> : <></>}

      <CContainer style={{ paddingLeft: "0px", width: "904px" }}>
        <div style={{ height: type ? 63 : 30 }} />
        <CCol className={"d-flex flex-column"}>
          <a className={"align-self-end"}  style={{textDecoration:"none", color:"#0080BF", fontWeight:"bold"}} href="/member/aki">Lihat Semua Aki</a>
          <CRow>
            <Card />
          </CRow>
        </CCol>
      </CContainer>

      </>
  );
}


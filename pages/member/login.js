import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";

import {
  CContainer,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CLink,
  CRow,
  CCol,
  CImage,
} from "@coreui/react";
import { IMAGE_1 } from "../../assets/index";

export default function login() {
  return (
    <div>
      <Header />
      <CContainer style={{ width: "1000px", marginTop: "30px" }}>
        <CRow className={"py-60"} style={{ margintop: "100px" }}>
          <CCol>
            <Image src={IMAGE_1} width={468} height={468} objectFit={"cover"} />
          </CCol>
          <CCol style={{ paddingLeft: "0px", paddingTop: "45px" }}>
            <p>
              <b>Sudah memiliki akun</b>{" "}
            </p>
            <CForm style={{ paddingTop: "15px" }}>
              <div
                className="mb-3"
                style={{
                  height: "50px",
                  width: "430px",
                }}
              >
                <CFormLabel htmlFor="exampleInputEmail1">Email</CFormLabel>
                <CFormInput
                  type="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  style={{
                    height: "40px",
                    width: "430px",
                  }}
                />
              </div>

              <div className="mb-3" style={{ paddingTop: "10px" }}>
                <CFormLabel
                  htmlFor="exampleInputPassword1"
                  style={{
                    marginTop: "15px",
                  }}
                >
                  Password
                </CFormLabel>
                <CFormInput
                  type="password"
                  id="exampleInputPassword1"
                  style={{
                    height: "40px",
                    width: "430px",
                  }}
                />
              </div>
              <CButton
                judul={"Login"}
                style={{
                  height: "50px",
                  width: "270px",
                  marginTop: "10px",
                  backgroundColor: "#1BA0E2",
                }}>Login</CButton>
            </CForm>
            <p
              style={{
                marginTop: "10px",
              }}
            >
              Belum punya akun?
              <CLink
                href="/register"
                style={{ textDecoration: "none", color: "#1BA0E2" }}
              >
                <b> Daftar</b>
              </CLink>{" "}
            </p>
          </CCol>
        </CRow>
      </CContainer>

      <Footer />
    </div>
  );
}

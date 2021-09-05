import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import {
  CContainer,
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CLink,
} from "@coreui/react";
import { IMAGE_1 } from "../assets";

export default function Login() {
  return (
    <div>
      <Header />

        <div style={{ display: "flex",height:"800px"}}>

          <div style={{ width: "50%" }}>
            <IMAGE_1 />
          </div>

          <div style={{ marginLeft: "31px", marginTop: "50px" }}>
            <p> Sudah memiliki akun </p>
            <CForm>
              <div className="mb-3"
                style={{
                  height: "50px",
                  width: "430px"
                }}>
                <CFormLabel htmlFor="exampleInputEmail1">Email</CFormLabel>
                <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp"
                  style={{
                    height: "40px",
                    width: "430px"
                  }} />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="exampleInputPassword1"
                  style={{
                    marginTop: "15px"
                  }}>Password</CFormLabel>
                <CFormInput type="password" id="exampleInputPassword1" style={{
                  height: "40px",
                  width: "430spx"
                }} />
              </div>

              <CButton type="submit"
                style={{
                  height: "50px",
                  width: "270px",
                  marginTop: "5px",
                  backgroundColor: "#1BA0E2"
                }}>
                Login
              </CButton>
            </CForm>
            <p style={{
              marginTop: "10px;"
            }}>Belum punya akun?<CLink href="#"><b> Daftar</b></CLink> </p>
          </div>
        </div>
        </div>

  );
}

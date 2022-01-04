import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import { Post } from "../../utils/api";
import Cookies from "universal-cookie";
const Login = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const postLogin = async () => {
    const cookies = new Cookies();
    Post("/admin/login", data).then((res) => {
      if (res.isLogin) {
        cookies.set("user-admin", res.data, { path: "/" });
        cookies.set("token-admin", res.token, { path: "/" });

        window.location.href = "/admin";
      } else {
        setmodal({
          modal: true,
          message: res.data.message,
        });
      }
    });
  };
  const checkLogin = () => {
    const cookies = new Cookies();
    const user = cookies.get("user-admin");
    if (typeof user !== "undefined") {
      window.location.href = "/admin";
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText></CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => {
                          setdata({ ...data, email: e.target.value });
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText></CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => {
                          setdata({ ...data, password: e.target.value });
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={() => postLogin()}
                        >
                          Login
                        </CButton>
                      </CCol>
                      {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link href="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;

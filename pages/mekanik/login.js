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
import { useRouter } from "next/router";
const Login = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const postLogin = async () => {
    const cookies = new Cookies();
    Post("/mekanik/login", data).then((res) => {
      if (res.isLogin) {
        console.log(res, "ajsajsjsa");
        cookies.set("user-mekanik", res.user, { path: "/" });
        cookies.set("token-mekanik", res.token, { path: "/" });

        router.push("/mekanik");
      } else {
        alert("Email atau Password Salah");
      }
    });
  };
  const checkLogin = () => {
    const cookies = new Cookies();
    const user = cookies.get("user-mekanik");

    if (typeof user !== "undefined") {
      router.push("/mekanik");
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
                          onClick={(e) => {
                            e.preventDefault();
                            postLogin();
                          }}
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

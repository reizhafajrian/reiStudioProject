import React, { useEffect, useState } from "react";
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
  CModal,
  CSpinner,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
} from "@coreui/react";
import { IMAGE_1 } from "../../assets/index";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../utils/reduxData";

export default function login() {
  const [formLogin, setformLogin] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const [modal, setmodal] = useState({
    modal: false,
    message: "",
  });
  const getUser = () => {
    const cookies = new Cookies();
    const user = cookies.get("user");
    if (typeof user !== "undefined") {
      window.location.href = "/member";
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const validate = formLogin.email.length > 0 && formLogin.password.length > 0;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const loginApi = async () => {
    try {
      if (validate) {
        const cookies = new Cookies();
        setVisible(true);
        const res = await fetch("http://localhost:3000/api/member/login", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(formLogin),
        })
          .then((res) => res.json())
          .catch((err) => console.log(err));
        if (res.status === 200) {
          setVisible(false);

          cookies.set("token", res.token, { path: "/" });
          cookies.set("user", res.user, { path: "/" });
          // console.log(res.user);
        
          window.location.href = "/member";
        } else {
          setVisible(false);
          setmodal({
            modal: true,
            message: "Login gagal, email atau password salah",
          });
        }
        setVisible(false);
      } else {
        alert("Please fill all fields");
      }
    } catch (error) {
      setVisible(false);
      throw error;
    }
  };
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
                  onChange={(e) =>
                    setformLogin({ ...formLogin, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setformLogin({ ...formLogin, password: e.target.value })
                  }
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
                }}
                onClick={() => loginApi()}
              >
                Login
              </CButton>
            </CForm>
            <p
              style={{
                marginTop: "10px",
              }}
            >
              Belum punya akun?
              <CLink
                href="/member/register"
                style={{ textDecoration: "none", color: "#1BA0E2" }}
              >
                <b> Daftar</b>
              </CLink>
            </p>
          </CCol>
        </CRow>
      </CContainer>
      <>
        <CModal
          className="d-flex align-items-center modal-loading-spinner"
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <CSpinner />
        </CModal>
      </>
      <>
        <CModal
          visible={modal.modal}
          onClose={() =>
            setmodal({
              ...modal,
              modal: !modal.modal,
            })
          }
        >
          <CModalHeader
            onClose={() =>
              setmodal({
                ...modal,
                modal: !modal.modal,
              })
            }
          >
            <CModalTitle>Login</CModalTitle>
          </CModalHeader>
          <CModalBody className="text-align-center">{modal.message}</CModalBody>
          <CModalFooter>
            <CButton
              color="secondary"
              onClick={() =>
                setmodal({
                  ...modal,
                  modal: !modal.modal,
                })
              }
            >
              Close
            </CButton>
          </CModalFooter>
        </CModal>
      </>
      <Footer />
    </div>
  );
}

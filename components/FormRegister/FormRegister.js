import React, { useState } from "react";
import {
  CContainer,
  CForm,
  CButton,
  CFormLabel,
  CFormInput,
  CFormCheck,
  CSpinner,
  CModalTitle,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CCol,
  CFormFeedback,
  CFormTextarea,
} from "@coreui/react";
import { Post, Put } from "../../utils/api";
import Cookies from "universal-cookie";

export default function FormRegister() {
  const [register, setregister] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    alamat: "",
    agreement: false,
  });
  const check =
    register.name.length > 0 &&
    register.email.length > 0 &&
    register.phone.length > 0 &&
    register.password.length > 0 &&
    register.confirmPassword.length > 0 &&
    register.alamat &&
    register.agreement === true;
  const [visible, setVisible] = useState(false);
  const [modal, setmodal] = useState({
    modal: false,
    message: "",
  });
  const createUserChat = async (user) => {
    const res = await Post(`/chat`, {
      ...user,
    });

    return res;
  };
  const createUser = async () => {
    console.log(JSON.stringify(register));
    const test = await fetch("http://localhost:3000/api/member/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    console.log(test, "ini test");
    await createUserChat(test.user);
    return test;
  };
  const registerHandler = async (e) => {
    try {
      if (check) {
        if (register.password === register.confirmPassword) {
          setVisible(true);
          const res = await createUser();

          if (res.status > 201) {
            setmodal({
              modal: true,
              message: "Register Failed",
            });
          } else {
            setregister({
              name: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
              agreement: false,
            });
            setmodal({
              modal: true,
              message: "Register Success",
            });
          }
          setVisible(false);
        } else {
          alert("password not match");
        }
      } else {
        alert("Please fill all the fields");
      }
    } catch (error) {
      setVisible(false);
      setregister({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreement: false,
      });
      setmodal({
        modal: true,
        message: "Register Failed",
      });
      throw error;
    }
  };
  return (
    <CContainer
      style={{
        marginTop: "30px",
        marginLeft: "auto",
        marginRight: "auto",
        height: "800px",
        width: "454px",
      }}
    >
      <center>
        <p>
          <b>Buat Akun Baru</b>
        </p>
      </center>
      <CForm
        style={{
          width: "430px",
          height: "40px",
          marginTop: "20px",
          fontSize: "14px",
          fontcolor: "#444444",
        }}
      >
        <div>
          <CFormLabel>Nama</CFormLabel>
          <CFormInput
            type="text"
            value={register.name}
            onChange={(event) => {
              setregister({ ...register, name: event.target.value });
            }}
          />
        </div>

        <div
          style={{
            marginTop: "10px",
          }}
        >
          <CFormLabel>Email</CFormLabel>
          <CFormInput
            type="email"
            value={register.email}
            onChange={(event) => {
              setregister({ ...register, email: event.target.value });
            }}
          />
        </div>
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <CFormLabel>Alamat</CFormLabel>
          <CFormTextarea
            id="alamat"
            rows="3"
            value={register.alamat}
            onChange={(e) => {
              setregister({ ...register, alamat: e.target.value });
            }}
          ></CFormTextarea>
          {/* <CFormInput
            type="phone"
            value={register.alamat}
            onChange={(event) => {
              setregister({ ...register, alamat: event.target.value });
            }}
          /> */}
        </div>

        <div
          style={{
            marginTop: "10px",
          }}
        >
          <CFormLabel>No Handphone</CFormLabel>
          <CFormInput
            type="phone"
            value={register.phone}
            onChange={(event) => {
              setregister({ ...register, phone: event.target.value });
            }}
          />
        </div>

        <div
          style={{
            marginTop: "10px",
          }}
        >
          <CFormLabel htmlFor="exampleInputPassword1">Password</CFormLabel>
          <CFormInput
            type="password"
            id="exampleInputPassword1"
            value={register.password}
            onChange={(event) => {
              setregister({ ...register, password: event.target.value });
            }}
          />
        </div>

        <div
          style={{
            marginTop: "10px",
          }}
        >
          <CFormLabel htmlFor="exampleInputPassword1">
            Konfirmasi Password
          </CFormLabel>
          <CFormInput
            type="password"
            id="exampleInputPassword1"
            value={register.confirmPassword}
            onChange={(event) => {
              setregister({ ...register, confirmPassword: event.target.value });
            }}
          />
        </div>

        <div
          style={{
            marginTop: "10px",
          }}
        ></div>

        <CCol xs={12}>
          <CFormCheck
            type="checkbox"
            id="invalidCheck"
            label="Agree to terms and conditions"
            required
            onChange={(event) => {
              setregister({ ...register, agreement: !register.agreement });
            }}
          />
          <CFormFeedback invalid>
            Saya setuju dengan syarat dan ketentuan yang berlaku
          </CFormFeedback>
        </CCol>

        <center>
          <CButton
            type="button"
            style={{
              height: "50px",
              width: "250px",
              marginTop: "2px",
              backgroundColor: "#1BA0E2",
              fontcolor: "white",
            }}
            onClick={(e) => {
              registerHandler(e);
            }}
          >
            Daftar
          </CButton>
        </center>
      </CForm>
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
            <CModalTitle>Register</CModalTitle>
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
    </CContainer>
  );
}

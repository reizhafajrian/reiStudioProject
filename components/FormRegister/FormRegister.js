import React from "react";
import {
    CContainer,
    CForm,
    CButton,
    CFormLabel,
    CFormInput,
    CFormCheck,
} from "@coreui/react";


export default function FormRegister() {
    return (

        <CContainer style={{
            marginTop: "15px",
            marginLeft:"auto",
            marginRight:"auto",
            height: "525px",
            width: "454px"

        }}>

            <center>
                <p><b>Buat Akun Baru</b></p>
            </center>
            <CForm style={{
                width: "430px",
                height: "40px",
                marginTop: "20px",
                fontSize: "14px",
                fontcolor: "#444444",



            }}>
                <div>
                    <CFormLabel>Nama</CFormLabel>
                    <CFormInput type="text" />
                </div>

                <div style={{
                    marginTop: "10px"
                }}>
                    <CFormLabel
                    >Email</CFormLabel>
                    <CFormInput type="email" />
                </div>

                <div style={{
                    marginTop: "10px"
                }}>
                    <CFormLabel>No Handphone</CFormLabel>
                    <CFormInput type="text" />
                </div>

                <div style={{
                    marginTop: "10px"
                }}>
                    <CFormLabel htmlFor="exampleInputPassword1">Password</CFormLabel>
                    <CFormInput type="password" id="exampleInputPassword1" />
                </div>

                <div style={{
                    marginTop: "10px"
                }}>
                    <CFormLabel htmlFor="exampleInputPassword1">Konfirmasi Password</CFormLabel>
                    <CFormInput type="password" id="exampleInputPassword1" />
                </div>

                <div style={{
                    marginTop: "10px"
                }}>

                </div>

                <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="Saya setuju dengan syarat dan ketentuan yang berlaku" />

                <center>
                    <CButton type="submit"
                        style={{
                            height: "50px",
                            width: "250px",
                            marginTop: "2px",
                            backgroundColor: "#1BA0E2",
                            fontcolor: "white",

                        }}>
                        Daftar
                    </CButton>
                </center>
            </CForm>
        </CContainer>

    )
}
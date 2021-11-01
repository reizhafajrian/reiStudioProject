import React from 'react';
import Image from "next/image";
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
    CButton,
} from "@coreui/react";

import { PRODUK_4 } from "../assets";

export default function OliCard() {
    return (
        <CContainer style={{ marginTop: "60px", marginLeft: "0px", padding:"0px", width:"1170px", marginRight:"0px"}}>
            <CRow>
                <CCol sm="auto">
                    <CCard>
                        <Image src={PRODUK_4} width={130} height={130} />
                    </CCard>
                </CCol>
                <CCol>
                    <CCol>
                        <CRow><p><b>Shell Advance AX7 Matic</b></p></CRow>
                        <CRow> </CRow>
                        <CRow> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis viverra quam, vitae pellentesque nulla. Donec semper id lorem et pharetra. Nunc id eros nulla. Pellentesque non hendrerit purus, in suscipit purus.</p></CRow>
                    </CCol>

                </CCol>
                <CCol>
                    <CCol>
                        <CRow></CRow>
                        <CRow></CRow>
                        <CRow>
                            <CCol>
                                <CRow></CRow>
                                <CRow></CRow>
                                <CRow>
                                <CCol>
                                    <CRow style={{maxWidth:"max-content"}}><s>Rp. 60.000</s></CRow>
                                    <CRow>
                                    Rp. 49.000 (25% Off)
                                    </CRow>
                                    <CRow>
                                        <CButton style={{ backgroundColor:"#1BA0E2", width:"160px", height:"50px", fontSize:"14px", border:"none", borderRadius:"0px"}}> Lihat Detail</CButton>
                                    </CRow>
                                </CCol>
                                </CRow>                            
                            </CCol>
                        </CRow>

                    </CCol>


                </CCol>
            </CRow>
        
        </CContainer>
    )
}


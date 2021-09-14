import React from 'react';
import {
    CContainer,
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardImage,
    CCardTitle,
    CCardText,
    CImage
} from "@coreui/react";
import { PRODUK_1 } from "../assets";
import { PRODUK_2 } from "../assets";
import { PRODUK_3 } from "../assets";
import { PRODUK_4 } from "../assets";

export default function Sparepartterbaik() {
    return (
        <CContainer style={{ backgroundColor:"blue", paddingLeft:"0px", width:"904px"}}>
            <CCol>
                <CRow >
                    <CCol >
                        <CCard style={{ width: '12rem', alignItems:"center" }}>
                            <CImage src={PRODUK_1} />
                            <CCardBody>
                                <CCardTitle>Card title</CCardTitle>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol>
                        <CCard style={{ width: '12rem',  alignItems:"center" }}>
                        <CImage src={PRODUK_2} />
                            <CCardBody>
                                <CCardTitle>Card title</CCardTitle>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol>
                        <CCard style={{ width: '12rem',  alignItems:"center" }}>
                        <CImage src={PRODUK_3} />
                            <CCardBody>
                                <CCardTitle>Card title</CCardTitle>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol>
                        <CCard style={{ width: '12rem', alignItems:"center" }}>
                        <CImage src={PRODUK_4} />
                            <CCardBody>
                                <CCardTitle>Card title</CCardTitle>
                                <CCardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>

                </CRow>



            </CCol>



        </CContainer>
    );
}
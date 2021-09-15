import React from 'react';
import {
    CContainer,
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardImage,
    CCardTitle,
    CCardText
} from "@coreui/react";
import { PRODUK_4 } from '../assets';

export default function pilihproduk(){
    return (
        <CContainer style={{height:"783px", backgroundColor:"red",  maxWidth: "100%"}}>
        <CRow >
            <CCol>
                <CCol>
            <PRODUK_4 />
            </CCol>

            <CCol>

                </CCol>
            </CCol>
            
            <CCol>
                
            </CCol>
        </CRow>
    </CContainer>
    );
}
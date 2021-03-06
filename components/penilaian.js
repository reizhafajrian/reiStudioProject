import React from "react";
import {
    CContainer,
    CRow,
    CCol,
    CCard,
    CCardBody,
} from "@coreui/react";
import styles from "../styles/penilaian.module.scss";

export default function penilaian() {

    return (
        <div style={{backgroundColor:"#1BA0E2", marginTop:"60px", paddingTop:"20px", paddingBottom:"20px"}}>
        <CContainer style={{ width:"912px", padding:"0px"}}>
            <CRow>
                <CCol sm="auto">
                    <CCard style={{ width: '18rem'}}>
                    <CCardBody>
                        <div style={{width: "51px", height: "51px", backgroundColor: "#C4C4C4", borderRadius: "100%"}}>
                        </div>
                        <div className={styles.boxrate}>
                        Mekaniknya handal banget, penjelasannya mudah dimengerti
                        </div>
                    </CCardBody>    
                    </CCard>

                </CCol>
                <CCol>
                    <CCard style={{ width: '18rem' }}>
                    <CCardBody>
                    <div style={{width: "51px", height: "51px", backgroundColor: "#C4C4C4", borderRadius: "100%"}}>
                        </div>
                        <div className={styles.boxrate}>
                        Sparepartnya asli, belinya juga gampang, jadi mudah buat dapetin kebutuhan motor
                        </div>
                    </CCardBody>
                        
                    </CCard>

                </CCol>
                <CCol sm="auto">
                    <CCard style={{ width: '18rem' }}>
                    <CCardBody>
                    <div style={{width: "51px", height: "51px", backgroundColor: "#C4C4C4", borderRadius: "100%"}}>
                        </div>
                        <div className={styles.boxrate}>
                        Cuci kolongnya rapih banget, mobil aku berasa perbedaannya setelah pake servis ini
                        </div>
                    </CCardBody>
                        
                    </CCard>

                </CCol>
            </CRow>
        </CContainer>
        </div>


    );

}

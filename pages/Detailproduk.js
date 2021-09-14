import React from "react";
import Pilihproduk from "../components/pilihproduk";
import Header from "../components/Header/Header";
import {
    CContainer,
    CCol,
    CRow,
  } from '@coreui/react';

export default function detailproduk(){

    return(
      <div>
        <Header />
        <Pilihproduk />
        </div>
    );



}

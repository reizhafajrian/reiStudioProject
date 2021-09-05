import React, { useState } from "react";
import {
  CHeader,
  CContainer,
  CHeaderBrand,
  CHeaderToggler,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";
import { theme } from "../../constant/theme.js";
import { IC_CART, IC_SEARCH, IC_USER } from "../../assets";

export default function HeaderTop() {
  return (
    <CHeader
      style={{
        backgroundColor: theme.colorHeaderTop,
        height: "100px",
        padding: "25px 105px 25px 105px",
        borderWidth: 0,
      }}
    >
      <CContainer fluid className={"px-0 py-0"}>
        <CHeaderBrand href="#">Header</CHeaderBrand>
        <CHeaderNav>
          <CButton
            style={{
              backgroundColor: "white",
              borderWidth: 0,
              borderRadius: "10px 0px 0px 10px",
            }}
            className={"px-0 py-0"}
          >
            <IC_SEARCH />
          </CButton>
          <CNavItem>
            <CForm className="d-flex">
              <CFormInput
                type="search"
                placeholder="Cari ban, oli, atau kebutuhan motor anda"
                style={{
                  width: 540,
                  height: "40 !important",
                  borderRadius: "0px 10px 10px 0",
                  borderWidth: 0,
                  fontSize:"14px"
                }}
              />
            </CForm>
          </CNavItem>
        </CHeaderNav>
        <div
          className={
            "d-flex flex-col justify-content-between align-items-center"
          }
          style={{ width: "150px", fontSize:"12px"}}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              height: 60,
              justifyContent: "space-between",
            }}
          >
            <IC_CART />
            <CNavLink className={"py-0 px-0 text-white"} href="#">
              Keranjang
            </CNavLink>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              height: 60,
              justifyContent: "space-between",
            }}
          >
            <IC_USER />
            <CNavLink className={"py-0 px-0 text-white"} href="#">
              Login
            </CNavLink>
          </div>
        </div>
      </CContainer>
    </CHeader>
  );
}

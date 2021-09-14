import React, { useState } from "react";
import {
  CHeader,
  CContainer,
  CHeaderBrand,
  CHeaderToggler,
  CHeaderNav,
  CNavItem,
  CNavLink,

} from "@coreui/react";
import { theme } from "../../constant/theme.js";
import { IC_CART, IC_SEARCH, IC_USER } from "../../assets";
import styles from "../../styles/componentstyle.module.scss";

export default function HeaderBottom() {
  return (
    <CHeader
      style={{
        backgroundColor: theme.primary,
        height: "50px",
        padding: "0px 105px 0px 105px",
      }}
    >
      <CContainer fluid className={"px-0"} >
        <CHeaderNav style={{ fontSize:"14px" }}>
          <CNavItem>
            <CNavLink href="/" active className={styles.navLinkHeaderBottom}>
              Home
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" className={styles.navLinkHeaderBottom}>
              Sparepart
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" className={styles.navLinkHeaderBottom}>
              Aki
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" className={styles.navLinkHeaderBottom}>
              Oli
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" className={styles.navLinkHeaderBottom}>
              Ban
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" className={styles.navLinkHeaderBottom}>
              Service
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
}

import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
  CNavLink,
} from "@coreui/react";

import AppBreadcrumb from "./AppBreadcrumb";
import { AppHeaderDropdown } from "./header/index";
import { GiHamburgerMenu } from "react-icons/gi";
const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <GiHamburgerMenu />
          {/* <CIcon icon={cilMenu} size="lg" /> */}
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          {/* <CNavItem>
            <CNavLink href="/" activeClassName={"active"}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              {/* <CIcon icon={cilBell} size="lg" /> */}
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              {/* <CIcon icon={cilList} size="lg" /> */}
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              {/* <CIcon icon={cilEnvelopeOpen} size="lg" /> */}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        {/* <AppBreadcrumb /> */}
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;

import React, { useEffect, useState } from "react";
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
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CNavbarNav,
  CDropdownDivider,
} from "@coreui/react";
import { theme } from "../../constant/theme.js";
import { IC_CART, IC_SEARCH, IC_USER } from "../../assets";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

export default function HeaderTop() {
  const cookies = new Cookies();
  const router = useRouter();
  const [user, setuser] = useState({
    privacy_policy: false,
    _id: "",
    name: "",
    email: "",
    phone: "",
    role: 0,
    created_at: "",
  });
  const [data, setdata] = useState("");
  const getUser = () => {
    const user = cookies.get("user");
    if (typeof user !== "undefined") return setuser(user);
  };
  const logout = () => {
    cookies.remove("token", { path: "/" });
    cookies.remove("user", { path: "/" });
    router.push("/member/login");
  };
  useEffect(() => {
    getUser();
  }, []);
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
            <CForm
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault();
                router.push("http://localhost:3000/member/search?id=" + data);
              }}
            >
              <CFormInput
                type="search"
                placeholder="Cari ban, oli, atau kebutuhan motor anda"
                style={{
                  width: 540,
                  height: "40 !important",
                  borderRadius: "0px 10px 10px 0",
                  borderWidth: 0,
                  fontSize: "14px",
                }}
                onChange={(e) => {
                  e.preventDefault();
                  setdata(e.target.value);
                }}
              />
            </CForm>
          </CNavItem>
        </CHeaderNav>
        <div
          className={
            "d-flex flex-col justify-content-between align-items-center"
          }
          style={{ width: "150px", fontSize: "12px" }}
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
            <CNavLink className={"py-0 px-0 text-white"} href="/member/cart">
            Cart
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
            <IC_CART />
            <CNavLink className={"py-0 px-0 text-white"} href="/member/bill">
              Order
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
            {user.name.length > 0 ? (
              <CNavbarNav>
                <CDropdown dark component="li" variant="nav-item">
                  <CDropdownToggle className="py-0 px-0 text-white">
                    {user.name}
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem onClick={logout}>Keluar</CDropdownItem>
                    {/* <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem> */}
                  </CDropdownMenu>
                </CDropdown>
              </CNavbarNav>
            ) : (
              // <CNavLink className={"py-0 px-0 text-white"} href="/member/login">
              //   {user.name}
              // </CNavLink>
              <CNavLink className={"py-0 px-0 text-white"} href="/member/login">
                Login
              </CNavLink>
            )}
          </div>
        </div>
      </CContainer>
    </CHeader>
  );
}

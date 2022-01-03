import React, { useState } from "react";
import { PRODUK_4, PRODUK_4A, SHOPPINGCART } from "../assets";
import Image from "next/image";
import Script from "next/script";
import {
  CContainer,
  CCol,
  CRow,
  CImage,
  CCarousel,
  CCarouselItem,
  CButton,
  CCard,
  CTable,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableBody,
  CInputGroup,
  CInputGroupText,
  CFormInput,
} from "@coreui/react";
import formatter from "../utils/currency";
import Cookies from "universal-cookie";
import { Get, Post } from "../utils/api";

export default function PilihProduk({ item }) {
  const [count, setcount] = useState(0);

  const opneSnap = async () => {
    const cookies = new Cookies();
    const user = cookies.get("user");
    const token = cookies.get("token");

    const post = await fetch("http://localhost:3000/api/member/pay", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({
        price: count * item.price,
        email: user.email,
        first_name: user.name,
        last_name: user.name,
        phone: user.phone,
      }),
    }).then((res) => res.json());

    window.snap.pay(post.transaction.token, {
      onSuccess: async (result) => {},
      onPending: async (result) => {
        Get(`/member/pay?id=${result.order_id}`).then((res) => {
          if (res.response.transaction_status === "pending") {
            Post("/member/createorder", {
              data: {
                order_id: res.response.order_id,
                data: {
                  ...item,
                  total: count,
                  total_price: count * item.price,
                },
              },
            }).then((res) => {
              if (res.status === false) {
                alert("Stock is not enough");
              } else {
                alert("Success");
              }
            });
          }
        });
      },
      onError: async (result) => {
        return alert("Error");
        // return settemp(temp.concat(result));
      },
    });
  };
  return (
    <>
      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key="SB-Mid-client-A5zLo_R0ygqCcWAO"
      />
      <CContainer style={{ width: "980px" }}>
        <CRow className="d-flex flex-row">
          <CCol
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ paddingTop: "50px", marginTop: "30px" }}
          >
            <CCarousel style={{ width: "18rem" }}>
              <CCarouselItem>
                <img
                  src={item.image_1}
                  style={{
                    width: 340,
                    height: 467,
                    objectFit: "cover",
                  }}
                />
              </CCarouselItem>
              <CCarouselItem>
                <img src={item.image_2} width={340} height={467} />
              </CCarouselItem>
              <CCarouselItem>
                <img src={item.image_3} width={340} height={467} />
              </CCarouselItem>
            </CCarousel>
            <CRow>
              <CCol>
                <img src={item.image_1} width={121} height={121} />
              </CCol>
              <CCol>
                <img src={item.image_2} width={121} height={121} />
              </CCol>
              {/* <CCol>
              <Image src={PRODUK_4A} width={121} height={121} />
            </CCol>
            <CCol>
              <Image src={PRODUK_4A} width={121} height={121} />
            </CCol> */}
            </CRow>
          </CCol>
          <CCol style={{ marginTop: "30px", paddingLeft: "0px" }}>
            <p style={{ fontWeight: "bold" }}>{item.name}</p>
            <p> 4.9 (3 ulasan) </p>
            <p> Jumlah </p>
            <div
              style={{
                display: "flex",
                maxWidth: "120px",
              }}
            >
              <CInputGroup className="mb-3">
                <CButton
                  onClick={(e) => {
                    if (count > 0) {
                      setcount(count - 1);
                      e.preventDefault();
                    }
                  }}
                >
                  -
                </CButton>
                <CFormInput
                  // placeholder="0"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={count}
                  disabled
                />
                <CButton
                  color="success"
                  onClick={(e) => {
                    setcount(count + 1);
                    e.preventDefault();
                  }}
                >
                  +
                </CButton>
              </CInputGroup>
            </div>
            <p className="mt-3"> Rp. {formatter(item.price)}</p>

            <CCol>
              <CRow className="mb-3">
                <CCol>
                  <CButton
                    style={{
                      width: "150px",
                      fontSize: "14px",
                      backgroundColor: "#1BA0E2",
                      border: "none",
                      borderRadius: "0px",
                    }}
                    onClick={opneSnap}
                    // href="/member/pengiriman"
                  >
                    Beli Sekarang
                  </CButton>
                </CCol>
                <CCol>
                  <CButton
                    style={{
                      width: "200px",
                      fontSize: "12px",
                      backgroundColor: "#0080BF",
                      border: "none",
                      borderRadius: "0px",
                    }}
                  >
                    Chat Dengan Admin
                  </CButton>
                </CCol>
              </CRow>
              <p style={{ fontSize: "14px" }}>{item.desc}</p>
            </CCol>
          </CCol>
        </CRow>
        <CCol></CCol>

        <CTable borderless style={{ fontSize: "14px" }}>
          <CTableHead>
            <CTableRow>
              <CTableDataCell scope="col">Ulasan</CTableDataCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {typeof item.review !== "undefined" &&
              item.review.map((item, index) => {
                return (
                  <>
                    <CTableRow>
                      <CTableDataCell scope="row" style={{ width: "200px" }}>
                        {item.name}
                      </CTableDataCell>
                      <CTableDataCell>{item.comment}</CTableDataCell>
                    </CTableRow>
                  </>
                );
              })}
          </CTableBody>
        </CTable>
        {/* 
        <a
          style={{
            textDecoration: "none",
            fontSize: "14px",
            color: "#0080BF",
            paddingLeft: "8px",
          }}
          href=""
        >
          <b>Lihat lebih banyak</b>
        </a>

        <h4
          style={{ paddingLeft: "8px", paddingTop: "32px", fontSize: "28px" }}
        >
          <b>Sparepart Lainnya</b>
        </h4> */}
      </CContainer>
    </>
  );
}

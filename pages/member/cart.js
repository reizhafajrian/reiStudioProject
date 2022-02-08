import React, { useEffect, useLayoutEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Delete, Get, Post, Put } from "../../utils/api";
import formatter from "../../utils/currency";
import ReactStars from "react-rating-stars-component";
import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import Cookies from "universal-cookie";
import { IC_DELETE } from "../../assets";
import { useRouter } from "next/router";
import Script from "next/script";
import findmekanik from "../api/member/findmekanik";
const CartCard = ({ item }) => {
  const router = useRouter();
  const cookies = new Cookies();
  const user = cookies.get("user");

  const deleteItem = async () => {
    await Put(`/member/cart?id=${item._id}&user=${user._id}`);

    window.location.reload();
  };
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Order id : {item._id} </h4>
              </div>
              <div className="card-body">
                <div className="row mb-4">
                  <div className="col-aute">
                    <div className="d-flex flex-row justify-content-between">
                      <strong>
                        {item.tag === "service"
                          ? "Nama Service"
                          : "Nama Barang"}
                      </strong>
                      <div>{item.name}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <strong>
                        {" "}
                        {item.tag === "service"
                          ? "Harga Service"
                          : "Harga Barang"}
                      </strong>
                      <div>Rp. {formatter(item.price)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <strong>Jumlah Barang</strong>
                      <div>{item.total}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <strong>Diskon</strong>
                      <div>{item.promo}%</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <strong>Total Harga</strong>
                      <div>Rp. {formatter(item.total_price)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between mt-3">
                      <CButton onClick={deleteItem}>
                        <IC_DELETE />
                      </CButton>
                    </div>
                    {/* <div className="d-flex flex-row justify-content-between">
                      <strong>Status</strong>
                      <div>
                        {typeof item.status === "undefined"
                          ? "Di proses"
                          : item.status}
                      </div>
                    </div> */}
                    {typeof item.no_resi !== "undefined" && (
                      <>
                        <div className="d-flex flex-row justify-content-between">
                          <strong>Jasa Pengiriman</strong>
                          <div>{item.jenis_pengiriman}</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <strong>Nomor Resi</strong>

                          <div>{item.no_resi}</div>
                        </div>
                      </>
                    )}
                    {item.status === "selesai" &&
                      (typeof item.review === "undefined" ? (
                        <div className="d-flex flex-row justify-content-between my-4">
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {typeof item.garansi === "undefined" && (
                              <>
                                <h5>Review Produk</h5>
                                <ReactStars
                                  count={5}
                                  onChange={setstar}
                                  size={24}
                                  activeColor="#ffd700"
                                />
                                <div class="form-floating">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="floatingComment"
                                    onChange={(e) => setComment(e.target.value)}
                                  ></input>
                                  <label for="floatingPassword">Comment</label>
                                </div>
                                <CButton className="my-4" onClick={postComment}>
                                  Save
                                </CButton>
                              </>
                            )}
                            {typeof item.garansi !== "undefined" &&
                            typeof item.garansi.approve !== "undefined" ? (
                              item.garansi.approve ? (
                                <CButton className="my-4" disabled>
                                  permintaan garansi telah diterima admin akan
                                  menghubungi anda
                                </CButton>
                              ) : (
                                <CButton className="my-4" disabled>
                                  permintaan garansi telah ditolak
                                </CButton>
                              )
                            ) : (
                              <CButton
                                className="my-4"
                                onClick={(e) => {
                                  e.preventDefault();
                                  modalShow();
                                }}
                                disabled={
                                  new Date(item.created_date).getTime() >=
                                  new Date(item.end_date).getTime()
                                }
                              >
                                {new Date(item.created_date).getTime() >=
                                new Date(item.end_date).getTime()
                                  ? "Waktu Pengajuan garansi telah habis"
                                  : "Ajukan Permintaan Garansi"}
                              </CButton>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="d-flex flex-row justify-content-between my-4">
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <h5>Review Produk</h5>
                            <ReactStars
                              count={5}
                              //   onChange={setstar}
                              value={item.review.star}
                              size={24}
                              activeColor="#ffd700"
                            />
                            <div class="form-floating">
                              <input
                                type="text"
                                class="form-control"
                                id="floatingComment"
                                disabled
                                value={item.review.comment}
                                onChange={(e) => setComment(e.target.value)}
                              ></input>
                              <label for="floatingPassword">Comment</label>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <CModal visible={Modal} onClose={() => setModal(!Modal)}>
        <CModalHeader onClose={() => setModal(!Modal)}>
          <CModalTitle>Klaim Garansi</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <div className="mb-3">
              <CFormLabel htmlFor="exampleFormControlTextarea1">
                Mengapa Anda Ingin Mengembalikan Barang
              </CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setReason(e.target.value)}
              ></CFormTextarea>
            </div>
            <CButton type="submit" color="primary">
              Save changes
            </CButton>
            <CButton
              type="button"
              color="secondary"
              className="mx-3"
              onClick={() => setModal(!Modal)}
            >
              Close
            </CButton>
          </CForm>
        </CModalBody>
      </CModal> */}
    </>
  );
};

export default function cart() {
  const [data, setdata] = useState([]);
  const getMember = () => {
    const cookies = new Cookies();
    const user_id = cookies.get("user");
    Get("/member/cart?user_id=" + user_id._id).then((res) => {
      setdata(res.data);
    });
  };
  useEffect(() => {
    getMember();
  }, []);
  const opneSnap = async () => {
    const cookies = new Cookies();
    const user = cookies.get("user");
    const token = cookies.get("token");
    const price = data.reduce((a, b) => a + (b.total_price || 0), 0);
    if (typeof user !== "undefined") {
      const post = await fetch("http://localhost:3000/api/member/pay", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          price: price,
          email: user.email,
          first_name: user.name,
          last_name: user.name,
          phone: user.phone,
        }),
      }).then((res) => res.json());

      window.snap.pay(post.transaction.token, {
        onSuccess: async (result) => {},
        onPending: async (result) => {
          Get(`/member/pay?id=${result.order_id}`).then(async (res) => {
            if (res.response.transaction_status === "pending") {
              try {
                for (let i = 0; i < data.length; i++) {
                  await Post("/member/createorder", {
                    data: {
                      order_id: res.response.order_id + i,
                      data: {
                        ...data[i],
                        total: data[i].total,
                        total_price: data[i].total_price,
                      },
                    },
                  });
                }
                await Delete("/member/cart?user_id=" + user._id);
                alert("Pembayaran Berhasil");
                getMember();
              } catch (error) {}
            }
          });
        },
        onError: async (result) => {
          return alert("Error");
          // return settemp(temp.concat(result));
        },
      });
    } else {
      router.push("/member/login");
    }
  };
  return (
    <>
      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key="SB-Mid-client-A5zLo_R0ygqCcWAO"
      />
      <Header />
      {data.length > 0 ? (
        <>
          {data.map((item) => {
            return <CartCard item={item} />;
          })}

          <CButton
            style={{
              alignSelf: "flex-end",
              display: "flex",
              marginLeft: "auto",
              marginRight: 30,
            }}
            onClick={opneSnap}
          >
            Checkout
          </CButton>
        </>
      ) : (
        <h4 style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}>
          anda tidak memiliki produk untuk di checkout
        </h4>
      )}

      <Footer />
    </>
  );
}

import React, { useEffect, useLayoutEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Get, Post, Put } from "../../utils/api";
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
import findmekanik from "../api/member/findmekanik";
const BillCard = ({ item }) => {
  const [star, setstar] = useState(0);
  const [comment, setComment] = useState("");
  const valid = star > 0 && comment.length > 0;

  const postComment = async () => {
    const cookie = new Cookies();
    const user = cookie.get("user");
    if (valid) {
      Put(`/member/review?id=${item.data._id}`, {
        data: {
          user_id: user._id,
          name: user.name,
          star: star,
          comment: comment,
        },
      });
      Put(`/admin/transaksi/`, {
        data: {
          ...item,
          review: {
            star: star,
            comment: comment,
          },
        },
      });
    }
  };
  const [Reason, setReason] = useState("");
  const [Modal, setModal] = useState(false);
  const modalShow = () => {
    setModal(true);
  };
  const handleSubmit = async (e) => {
    const cookie = new Cookies();
    const user = cookie.get("user");
    e.preventDefault();
    Post("/member/garansi", {
      ...item,
      user,
      reason: Reason,
    });
    setModal(false);
  };
  const [mekanik, setmekanik] = useState("");
  const findMekanik = async (id) => {
    const temp = await Get(`/member/findmekanik?id=${id}`);
    setmekanik(temp?.data?.name);
  };
  useEffect(() => {
    if (
      typeof item.data.list_mekanik !== "undefined" &&
      item.data.list_mekanik.length > 0
    ) {
      findMekanik(item?.data?.list_mekanik[0]);
    }
  }, []);
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Order id : {item.order_id} </h4>
              </div>
              <div className="card-body">
                <div className="row mb-4">
                  <div className="col-aute">
                    <div className="d-flex flex-row justify-content-between">
                      <strong>
                        {item.data.tag === "service"
                          ? "Nama Service"
                          : "Nama Barang"}
                      </strong>
                      <div>{item.data.name}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <strong>
                        {" "}
                        {item.data.tag === "service"
                          ? "Harga Service"
                          : "Harga Barang"}
                      </strong>
                      <div>Rp. {formatter(item.data.price)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <strong>Jumlah Barang</strong>
                      <div>{item.data.total}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <strong>Total Harga</strong>
                      <div>
                        Rp. {formatter(item.data.price * item.data.total)}
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <strong>Status</strong>
                      <div>
                        {typeof item.status === "undefined"
                          ? "Di proses"
                          : item.status}
                      </div>
                    </div>
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
                    {typeof item.data.list_mekanik !== "undefined" &&
                      item.data.tag === "service" && (
                        <>
                          <div className="d-flex flex-row justify-content-between">
                            <strong>Nama Mekanik</strong>
                            <div>{mekanik}</div>
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
                              <>
                                <CButton
                                  className="mt-4 mb-2"
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
                                {
                                  <h4>
                                    batas pengajuan garansi adalaah satu minggu
                                    mulai dari tanggal{" "}
                                    {new Date(item.created_date).toUTCString() +
                                      "-" +
                                      new Date(item.end_date).toUTCString()}
                                  </h4>
                                }
                              </>
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

      <CModal visible={Modal} onClose={() => setModal(!Modal)}>
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
      </CModal>
    </>
  );
};

export default function bill() {
  const [data, setdata] = useState([]);
  const getBill = () => {
    Get("/member/bill").then((res) => {
      console.log(res);
      setdata(res.data);
    });
  };
  useEffect(() => {
    getBill();
  }, []);
  return (
    <>
      <Header />
      {data.map((item) => {
        return <BillCard item={item} />;
      })}

      <Footer />
    </>
  );
}

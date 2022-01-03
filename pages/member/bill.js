import React, { useEffect, useLayoutEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Get, Post, Put } from "../../utils/api";
import formatter from "../../utils/currency";
import ReactStars from "react-rating-stars-component";
import { CButton } from "@coreui/react";
import Cookies from "universal-cookie";
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
                      <strong>Nama Barang</strong>
                      <div>{item.data.name}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <strong>Harga Barang</strong>
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
                    {typeof item.data.resi !== "undefined" && (
                      <>
                        <div className="d-flex flex-row justify-content-between">
                          <strong>Jasa Pengiriman</strong>
                          <div>{item.data.resi}</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <strong>Nomor Resi</strong>
                          <div>{item.data.noresi}</div>
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

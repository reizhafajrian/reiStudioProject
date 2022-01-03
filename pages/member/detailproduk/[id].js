import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import PilihProduk from "../../../components/PilihProduk";
import Sparepartterbaik from "../../../components/Sparepartterbaik";
import { useRouter } from "next/dist/client/router";


export default function detailproduk() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setdata] = useState({});
  const getDetail = () => {
    fetch(`http://localhost:3000/api/member/product?id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      });
  };

  useEffect(() => {
    if (typeof id !== "undefined") {
      getDetail();
    }
  }, [id]);
  return (
    <div>
      <Header />

      <PilihProduk item={data} />

      <Sparepartterbaik />

      <Footer />
    </div>
  );
}

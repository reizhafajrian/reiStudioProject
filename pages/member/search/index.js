import { useRouter } from "next/router";
import React, { useState } from "react";
import OliCard from "../../../components/ItemCard";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export async function getServerSideProps(context) {
  const router = context;
  const res = await fetch(
    `http://localhost:3000/api/member/search?search=${router.query.id}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default function index({ data }) {
  return (
    <div>
      <Header />
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4> Search </h4>
        {data.data.length > 0 ? (
          data.data.map((item) => {
            return <OliCard item={item} />;
          })
        ) : (
          <h6>Data tidak ditemukan</h6>
        )}
      </div>
      <Footer />
    </div>
  );
}

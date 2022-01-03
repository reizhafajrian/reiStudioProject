import React, { useEffect, useState } from "react";
import ItemCard from "../../components/ItemCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CContainer } from "@coreui/react";

export default function ban() {
  const [data, setdata] = useState([]);
  const getData = () => {
    fetch("http://localhost:3000/api/admin/product?search=ban")
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
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
        <h4>Ban</h4>
        {data.length > 0 &&
          data.map((item) => {
            return <ItemCard item={item} />;
          })}
        {/* <ItemCard />
        <ItemCard />
        <ItemCard /> */}
      </div>
      <Footer />
    </div>
  );
}

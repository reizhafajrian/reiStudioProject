import React from "react";
import OliCard from "../../components/ItemCard";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CContainer } from "@coreui/react";

export default function oli() {
  const [data, setdata] = React.useState([]);
  const getData = () => {
    fetch("http://localhost:3000/api/admin/product?search=oli")
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      });
  };
  React.useEffect(() => {
    getData();
    // return () => {
    //   cleanup;
    // };
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
        <h4> Oli </h4>
        {data.map((item) => {
          return <OliCard item={item} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

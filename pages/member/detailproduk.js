import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PilihProduk from '../../components/PilihProduk';
import Sparepartterbaik from '../../components/Sparepartterbaik';


export default function detailproduk() {
    return (
        <div>
            <Header />
            <PilihProduk />

            <Sparepartterbaik />

            <Footer />
        </div>
    )
}



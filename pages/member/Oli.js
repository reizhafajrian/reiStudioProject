import React from 'react'
import OliCard from '../../components/OliCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { CContainer } from '@coreui/react';

export default function Oli() {
    return (
        <div>
            <Header />
            <div style={{marginTop:"60px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <h4> Oli </h4>
            <OliCard />
            <OliCard />
            <OliCard />
            <OliCard />
            <OliCard />
            </div>
            <Footer />
        </div>
    )
}

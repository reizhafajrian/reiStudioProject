import React, { useState } from 'react';
import {
    CContainer,

} from "@coreui/react";

export default function FooterBottom() {
    return (
        <div style={{
            backgroundColor: "#222222",
            fontSize:"13px",
            height:"50px",
            width:"100%",
            color:"white",
            marginTop:"auto", marginBottom:"auto"

        }}>
            <center>
            <p> Copyright © First Project Limited 2021 All Rights Reserved. </p>
            </center>
        </div>

    );
}
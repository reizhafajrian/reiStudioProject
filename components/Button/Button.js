import { CButton } from '@coreui/react'
import React from 'react';

function Button({style, judul}) {
    return (

        <CButton type="submit">{judul}</CButton>
    )
}

export default Button;

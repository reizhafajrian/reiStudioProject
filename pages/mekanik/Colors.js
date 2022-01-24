import React from 'react'
import { useRouter } from "next/router";
export default function Colors() {
    const data=useRouter();
    console.log(data)
    return (
        <div>
            test
        </div>
    )
}

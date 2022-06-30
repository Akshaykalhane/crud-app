import React, { useEffect, useState } from "react";
import UserTable from "../tables/userTable";

const Model=({open,children,onClose})=>{

    const [isOpen,setIsOpen]=useState(false)

    console.log(open,'text value')
    if(!open) return null

    return(
        <>
        {/* <button onClick={onClose}>Cancel</button> */}
        {children}
        </>
    )
}

export default Model;
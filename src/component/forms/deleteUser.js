import React, { useState } from "react";

const DeleteUser=(props)=>{

    const [user,setUser]=useState(props.users);
const sayNow=()=>{
    // console.log(user,'clicked on kjasfdkjklajsdfkljafl')
    user.map((item)=>{
        console.log(item.id)
        setUser(item.id)
    })
}


    return(
        <>
            <div className="delete-alert">
                <h2>Are You want to delete this student</h2>
                <button onClick={sayNow}>No</button>
                <button onClick={() => props.nowDelete(user.id+1)}>Yes</button>
            </div>
        </>
    )
}

export default DeleteUser;
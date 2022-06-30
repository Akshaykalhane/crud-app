import React, { useEffect, useState } from "react";

const EditUserForm=(props)=>{

    const [user,setUser]=useState(props.currentUser)

    useEffect(()=>{
        setUser(props.currentUser)
    },[props])

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value})
    }


    return(
        <>
         <div className="form-div">
            <div className="add-form-heading"><h1>Edit Student</h1></div>
            <form onSubmit={e=>{
                e.preventDefault();
                props.updateUser(user.id,user)
                console.log(user,user.id)
            }}>
            <label for="">Student Name*</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}  />
            {/* {renderError()} */}
            {/* <p>{isName}</p> */}
            {/* <label>UserName</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange}  /> */}
            {/* {renderUserError()} */}
            {/* <p>{isUserName}</p> */}
            <label for="">Class*</label>
            <input type="number" name="class" value={user.class} onChange={handleInputChange} />
            <p class="error-para">Please input values between 1 & 12</p>
            {/* <p>{isClass}</p> */}
            <label for="">Score*</label>
            <input type="number" name="score" value={user.score} onChange={handleInputChange} />
            <p class="error-para">Please input values between0 & 100</p>
            <label for="" class="result">Result -</label>
            <label for="" class="grade">Grade -</label>
            {/* <button>Add new User</button>  */}
            <div class="input-btn-div">
                <button class="add-form-btn cancel-btn" onClick={()=>props.setEditing(false) } >Cancel</button>
                <button class="add-form-btn">Confirm</button>
                
            </div>
            </form>
            </div>
              
        </>
    )

}

export default EditUserForm;
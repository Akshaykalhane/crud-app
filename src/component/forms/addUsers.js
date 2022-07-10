import React, { useEffect, useState } from "react";
import './adduser.css';




const AddUser = (props) => {
    const initalFormState ={ id: null, name: '', username: '', class:null, result: '', score:null, grade: '' }

    const [user, setUsers] = useState(initalFormState);
    const [isName,setName]=useState('');
    const [isUserName,setUserName]=useState('')
    const [isError,setError]=useState(false);
    const [isClass,setClass]=useState('');
    const [isScore,setScore]=useState('-')
    // console.log('add user props',props)


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUsers({ ...user, [name]: value })
        if(e.target.value.length<=3){
            console.log('value must be 3');
            // setError(true)
            setName('name must be 3')
        }
        else{
            setName('')
        }
    }


    const handleUserName=(e)=>{
        const {name,value}=e.target;
        setUsers({...user,[name]:value})
        if(e.target.value.length<=3){
            setUserName('username must be 6 letter')
        }
        else{
            setUserName('')
        }
    }

    // const handleName=(e)=>{
    //     const {name,value}=e.target;
    //     setUsers({...user,[name]:value})
    //     setName(e.target)
    // }
 
    const checkClass=(e)=>{
        const {name,value}=e.target;
        setUsers({...user,[name]:value})
        if(e.target.value>11){
            setClass('class must be in between 1-11')
        }
        else{
            setClass('')
        }
    }

    const checkScore=(e)=>{
        const {name,value}=e.target;
        setUsers({...user,[name]:value})
        if(e.target.value>23){
            setScore('good')
        }
        else if(e.target.value<12){
            setScore('bad')
        }
    }


const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log('form submitted')
   // if(!user.name || !user.username) return
        setError(false)
        props.addUser(user);
        setUsers(initalFormState)
        props.onClose();
}


    return (
        <>
            <div className="form-div">
            <div className="add-form-heading"><h1>Add Student</h1></div>
            <form onSubmit={handleSubmit}>
            <label for="">Student Name*</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}  />
            {/* {renderError()} */}
            {/* <p>{isName}</p> */}
            {/* <label>UserName</label>
            <input type="text" name="username" value={user.username} onChange={handleUserName}  /> */}
            {/* {renderUserError()} */}
            {/* <p>{isUserName}</p> */}
            <label for="">Class*</label>
            <input type="number" name="class" value={user.class} onChange={checkClass} />
            <p class="error-para">Please input values between 1 & 12</p>
            {/* <p>{isClass}</p> */}
            <label for="">Score*</label>
            <input type="number" name="score" value={user.score} onChange={checkScore} />
            <p class="error-para">Please input values between0 & 100</p>
            <label for="" class="result">Result -</label>
            <label for="" class="grade">Grade -</label>
            {/* <button>Add new User</button>  */}
            <div class="input-btn-div">
                <button class="add-form-btn cancel-btn" onClick={props.onClose} >Cancel</button>
                <button class="add-form-btn">Confirm</button>
            </div>
            </form>
            </div>
        </>
    )
}

export default AddUser;

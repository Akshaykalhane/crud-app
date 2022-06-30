import React, { useState } from "react";
import { render } from "react-dom";
import DeleteUser from "../forms/deleteUser";
const UserTable = (props) => {

    const [isDelete, setDelete] = useState(false);



    console.log(props)
    const renderUserTable = ({ users }) => {
        if (users) {
            return users.map((user) => {
                return (
                    <>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.class}</td>
                            <td>{user.result}</td>
                            <td>{user.score}</td>
                            <td>{user.grade}
                                {/* <button className="button muted-button" onClick={() => props.editUser(user)}>Edit</button>
                                <button className="button muted-button" onClick={() => props.deleteUser(user.id)}>Delete</button> */}
                                <button className="overlay" onClick={()=>props.editUser(user)}><img src="./images/edit.png" alt="" /></button> <button class="overlay" onClick={()=>props.deleteUser(user.id)}><img src="./images/delete.png" alt="" /></button>
                            </td>
                        </tr>
                    </>
                )
            })
        }
        else {
            return (
                <>
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                </>
            )
        }
    }

    console.log(props.users.length > 0)
    console.log(props)
    return (
        <table>
                <tr>
                    <th>No</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Result</th>
                    <th>Score</th>
                    <th>grade</th>
                </tr>
            <tbody>
                {renderUserTable(props)}

            </tbody>
        </table>
    )
}

export default UserTable;
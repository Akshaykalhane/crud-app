import React, { useEffect, useState } from "react";
import './home.css';
import UserTable from "./tables/userTable";
import AddUser from "./forms/addUsers";
import EditUserForm from "./forms/editForm";
import Model from './model/model';
import DeleteUser from "./forms/deleteUser";


const Home = () => {

    const usersData = [
        {
            id: 1,
            name: 'Robert Fox',
            username: 'naruto007',
            class: 8,
            result: 'Passed',
            score: 78,
            grade: 'Excellent'
        },

        {
            id: 2,
            name: 'Ralph Edwards',
            username: 'naruto007',
            class: 7,
            result: 'Failed',
            score: 20,
            grade: 'Poor'
        },

        {
            id: 3,
            name: 'Esther Howard',
            username: 'naruto007',
            class: 9,
            result: 'Passed',
            score: 60,
            grade: 'Average'
        },

        {
            id: 4,
            name: 'Eleanor Pena',
            username: 'naruto007',
            class: 8,
            result: 'Passed',
            score: 60,
            grade: 'Average'
        },

        {
            id: 5,
            name: 'Arlene McCoy',
            username: 'naruto007',
            class: 7,
            result: 'Passed',
            score: 85,
            grade: 'Excellent'
        },

        {
            id: 6,
            name: 'Marvin McKinney',
            username: 'naruto007',
            class: 9,
            result: 'Failed',
            score: 25,
            grade: 'Poor'
        },

        {
            id: 7,
            name: 'Wade Warren',
            username: 'naruto007',
            class: 7,
            result: 'Passed',
            score: 90,
            grade: 'Excellent'
        },

    ]


    const initialFormState = { id: null, name: '',  class:null, result: '', score: null, grade: '' }


    const [users, setUsers] = useState(usersData);

    const [editing, setEditing] = useState(false)

    const [currentUser, setCurrentUser] = useState(initialFormState);

    const [isDelete, setDelete] = useState(false)


    const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user])
        console.log('add user was clicked', user)
    }

    const deleteUser = (id) => {
        console.log('clicked on delete')

        setEditing(false)
        setDelete(true)
        setUsers(users.filter((user) => user.id !== id))
    }

    const nowDelete = (id) => {
        setEditing(false);
        // setDelete(false)
        console.log('clicked on nowdelete')
        setUsers(users.filter((user) => user.id !== id))
    }
    const editUser = (user) => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }


    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className="main-container">
                <div className="sub-container">
                    <div className="left-bar">
                        <div className="heading">
                            <h1><span className="rectangle"><img src="./images/Rectangle 172.png" alt="" /><span class="logo"><img
                                src="./images/logo.png" alt="" /></span></span> School Space</h1>
                        </div>
                        <div className="filter-bar">
                            <button><span>
                                <img src="https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png" />
                            </span>
                                dashboard
                            </button>
                            <button>
                                <img src="https://img.icons8.com/external-others-phat-plus/64/000000/external-courses-online-courses-outline-others-phat-plus-30.png" />
                                courses
                            </button>
                            <button class="active">
                                <span>
                                    <img src="https://img.icons8.com/external-tulpahn-basic-outline-tulpahn/48/000000/external-student-back-to-school-tulpahn-basic-outline-tulpahn.png" />
                                </span>
                                Students
                            </button>
                            <button>
                                <span>
                                    <img src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/000000/external-exam-online-learning-photo3ideastudio-lineal-photo3ideastudio-1.png" />
                                </span>
                                Exams
                            </button>
                            <button>
                                <span><img src="https://img.icons8.com/ios/50/000000/exam.png" /></span> Result
                            </button>

                            <button>
                                <span>
                                    <img src="https://img.icons8.com/pastel-glyph/64/000000/presentation-screen--v1.png" /></span>
                                notice board
                            </button>
                            <button>
                                <span>
                                    <img src="https://img.icons8.com/material-outlined/24/000000/youtube-live.png" />
                                </span> live
                                classes
                            </button>
                            <button>
                                <span>
                                    <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/000000/external-notification-basic-ui-anggara-basic-outline-anggara-putra.png" />
                                </span>
                                notifications
                            </button>
                        </div>
                        <div className="user-info">
                            <div className="user-div">
                                <img src="./images/Ellipse 1.png" alt="" />
                                <p className="admin-name">Andy Samberg</p>
                                <p className="admin-email">andy.samberg@gmail.com</p>
                                <button className="user-btn">View profile</button>
                            </div>
                        </div>
                    </div>

                    <div className="right-bar">
                        <div className="right-bar-heading">
                            <h2>Students</h2>
                            <div className="add-btn">
                                {/* <button>+ Add</button> */}
                                <button onClick={() => setOpen(true)}>+ Add</button>
                                <Model open={isOpen} onClose={() => setOpen(false)}>
                                    <AddUser addUser={addUser} onClose={() => setOpen(false)} />
                                </Model>
                            </div>
                        </div>

                        <div class="table-container">
                            <UserTable users={users} editUser={editUser} deleteUser={deleteUser} />
                        </div>
                        <footer>Showing 7 of 7 entries</footer>
                    </div>
                </div>
            </div>


            <div className="container">
                <h1>CRUD App with Hooks</h1>
                <div className="flex-large">
                    {editing ? (

                        <div>
                            {/* <h2>edit user</h2> */}
                            <EditUserForm editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser} />
                        </div>

                    ) : (

                        <div>
                            {/* <h2>Add user</h2> */}
                        </div>

                    )}
                </div>
                {/* <div className="flex-row">
                    <div className="flex-large">
                        <h2>Add user</h2>
                        <AddUser addUser={addUser} />
                    </div>
                    <div className="flex-large">
                        <h2>View users</h2>
                        <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
                    </div>
                    </div>
                */}
                <div>
                    {
                        isDelete ? (
                            <div>
                                <DeleteUser deleteUser={deleteUser} setDelete={setDelete} users={users} nowDelete={nowDelete} />
                            </div>
                        ) :
                            <div>
                                {/* <UserTable /> */}
                            </div>
                    }
                </div>
                <div className="flex-large">
                    {/* <h2>View Users</h2> */}
                    {/* <UserTable users={users} editUser={editUser} deleteUser={deleteUser} /> */}
                    {/* <UserTable users={users} editUser={editUser} deleteUser={deleteUser} /> */}
                </div>
            </div>

            {/* <button onClick={() => setOpen(true)}>Add User</button>
            <Model open={isOpen} onClose={() => setOpen(false)}>
                <AddUser addUser={addUser} onClose={() => setOpen(false)} />
                fuck you!
            </Model> */}
        </>
    )
}

export default Home;
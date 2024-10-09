"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUser, editUser } from "@/Redux/dataSlice";


const page = () => {

  const [newUser, setNewUser] = useState({
    name: "",
    email: ""
  })

  const router = useRouter();
  const dispatch = useDispatch()
  const { getAllUser } = useSelector(state => state.user)


  const handleEdit = (user, index) => {
    // console.log(user, index);
    router.push(`/users/${index}`);
    dispatch(editUser(user))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })
  }
  const saveData = (e) => {
    e.preventDefault()
    const name=newUser.name
    const email=newUser.email
    // console.log(newUser)
    dispatch(createUser({name,email}))
  }

  const handleDelete = (index) => {
    // console.log(index)
    dispatch(deleteUser(index))
  }

  return (
    <div>
      <form onSubmit={saveData}>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          placeholder="enter name"
          className="border-solid border-2 border-sky-500"
        />
        &nbsp;
        <input
          type="text"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          placeholder="enter email"
          className="border-solid border-2 border-sky-500"
        />
        <button>Add</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>S no.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getAllUser.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(item, index)}>Edit</button>{" "}
                &nbsp;
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;

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
    const name = newUser.name
    const email = newUser.email
    // console.log(newUser)
    dispatch(createUser({ name, email }))
  }

  const handleDelete = (index) => {
    // console.log(index)
    dispatch(deleteUser(index))
  }

  return (
    <div className="border-y-orange-600">
      {/* <div  className="shadow-lg p-6 rounded-lg bg-white">
        <form onSubmit={saveData} className="flex flex-col items-center w-64 mx-auto mt-4">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            placeholder="enter name"
            className="border-solid border-2 border-sky-500 w-full p-2"
          />
          &nbsp;
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            placeholder="enter email"
            className="border-solid border-2 border-sky-500 w-full p-2"
          />
          <button className="mt-4 bg-blue-500 text-white p-2 w-full rounded">Add</button>
        </form>
      </div> */}

<div className="shadow-lg p-6 rounded-lg ">
  <form onSubmit={saveData} className="flex flex-col items-center w-64 mx-auto mt-4 shadow-lg ">
    <label>Name:</label>
    <input
      type="text"
      name="name"
      value={newUser.name}
      onChange={handleChange}
      placeholder="enter name"
      className="border-solid border-2 border-sky-500 w-full p-2"
    />
    &nbsp;
    <label>Email:</label>
    <input
      type="text"
      name="email"
      value={newUser.email}
      onChange={handleChange}
      placeholder="enter email"
      className="border-solid border-2 border-sky-500 w-full p-2"
    />
    <button className="mt-4 bg-blue-500 hover:bg-gray-500 text-white p-2 w-full rounded">Add</button>
  </form>
</div>

      <table className="table">
        <thead>
          <tr>
            <th>S no.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
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
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default page


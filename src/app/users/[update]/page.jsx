"use client"
import { updateUser } from '@/Redux/dataSlice'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {

  const router = useRouter();
  const [updateData, setUpdatedata] = useState({
    name: "",
    email: ""
  })

  const { edit } = useSelector(state => state.user)
  const dispatch = useDispatch()
  // console.log(edit)

  const handleUpdateData = (e) => {
    const { name, value } = e.target
    setUpdatedata({ ...updateData, [name]: value })
  }
  const saveUpdateData = (e) => {
    e.preventDefault()
    // const name = edit.name
    // const email = edit.email
    dispatch(updateUser({
      id: edit.data.id,
      name: updateData.name,
      email: updateData.email
    }))
    router.push('/users')
  }
  useEffect(() => {
    setUpdatedata({
      name: edit.data.name,
      email: edit.data.email
    })
  }, [edit])
  return (
    <div>
      <form onSubmit={saveUpdateData}>
        <input type='text'
          name='name'
          value={updateData.name}
          onChange={handleUpdateData}
          placeholder='enter name'
        />

        <input type='email'
          name='email'
          value={updateData.email}
          onChange={handleUpdateData}
          placeholder='enter email' />
        <button >update</button>
      </form>
    </div>
  )
}

export default page
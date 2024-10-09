import React from 'react'


const page = () => {
  return (
    <div>
      <h1>contact page</h1>
      {/* <h1 classname="flex justify-center">Form</h1> */}
      <form>
        <input type="text" placeholder="enter your name" />
        <input type="email" placeholde="enter your email" />
        <input type="number" placeholder="enter your number" />
        <button>Save</button>
      </form>

    </div>
  )
}

export default page
import Link from 'next/link'
import React from 'react'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = () => {

  return (
    <div className="w-full h-[100vh] bg-slate-700 text-yellow-100 ">
      <nav className="flex justify-center bg-gray-900">
        <ul className="flex justify-center space-x-5 items-center text-center h-16">
          <li className="text-center">
            <Link href="/users">Go to Users</Link>
          </li>
        
        
        </ul>
      </nav>
    </div>
  )
}

export default Page;

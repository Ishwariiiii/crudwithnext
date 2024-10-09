import Link from 'next/link'
import React from 'react'
import './globals.css'

const Page = () => {
  return (
    <div className="w-full h-[100vh] bg-slate-700 text-yellow-100 ">
      <nav className="flex justify-center bg-gray-900">
        <ul className="flex justify-center space-x-5 items-center text-center h-16">
          <li className="text-center">
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Page;

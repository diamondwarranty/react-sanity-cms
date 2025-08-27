import React from 'react'
import { Link } from 'react-router-dom'

export default function BlueBtn({link, text}) {
  return (
    <Link
          to={link}
          className="inline-flex justify-center items-center px-6 py-4 rounded-md text-lg lg:text-xl font-lexend font-bold tracking-tight transition-all duration-100 active:enabled:scale-[0.98] bg-[#1339FF] text-white hover:enabled:bg-[#1339FF]/80"
        >
         { text}
        </Link>
  )
}

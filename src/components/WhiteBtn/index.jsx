import React from 'react'
import { Link } from 'react-router-dom'

export default function WhiteBtn({link, text}) {
  return (
     
        <Link
          to={link}
          className="inline-flex font-lexend justify-center items-center px-4 py-3 lg:px-6 lg:py-4 rounded-md text-base lg:text-xl text-center font-bold tracking-tight transition-all duration-100 active:enabled:scale-[0.98] focus:enabled:scale-100 bg-transparent text-primary ring-2 ring-inset ring-primary hover:enabled:text-primary/80 hover:enabled:ring-primary/80"
        >
            { text}
        </Link>
  )
}

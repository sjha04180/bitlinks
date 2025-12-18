import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-cyan-700 flex justify-around items-center text-white '>
      <div className="logo font-bold text-2xl cursor-pointer">
        <Link className='cursor-pointer' href="/">BitLinks</Link>
      </div>
      <ul className='flex gap-4 justify-center items-center text-white'>
        <Link href="/"><li className='cursor-pointer'>Home</li></Link>
        <Link href="/about"><li className='cursor-pointer'>About</li></Link>
        <Link href="/shorten"><li className='cursor-pointer'>Shorten</li></Link>
        <Link href="/contact"><li className='cursor-pointer'>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='bg-slate-400 shadow-lg p-3 py-2 rounded-lg font-bold cursor-pointer'>Try Now</button></Link>
          <Link href="/github"><button className='bg-slate-400 shadow-lg p-3 py-2 rounded-lg font-bold cursor-pointer'>Github</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
       <nav className='h-13 bg-purple-700 flex justify-between px-4 items-center text-white'>
         <div className='text-xl font-bold'><Link className='flex items-center' href="/"><Image alt='brand-icon' width={50} height={50} src={"/shortify-icon.svg"}></Image><span>Blink</span></Link></div>
         <ul className='flex justify-center gap-4 items-center'>
            <Link href="/"><li className='hover:text-black'>Home</li></Link>
            <Link href="/about"><li className='hover:text-black'>About</li></Link>
            <Link href="/shorten"><li className='hover:text-black'>Shorten</li></Link>
            <Link href="/contact"><li className='hover:text-black'>Contact</li></Link>
            <li className='hidden md:block'>
                <Link href="/shorten"><button className='bg-purple-500 hover:bg-purple-800 shadow-lg py-1 p-3 rounded-lg font-bold mr-2'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 hover:bg-purple-800 shadow-lg py-1 p-3 rounded-lg font-bold'>Github</button></Link>
            </li>
         </ul>
       </nav>
    </div>
  )
}

export default Navbar

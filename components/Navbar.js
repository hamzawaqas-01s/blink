import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// const Navbar = () => {
//   return (
//     <div>
//       <nav className='h-13 bg-purple-700 flex justify-between px-4 items-center text-white'>
//         <div className='text-xl font-bold'><Link className='flex items-center' href="/">          <Image alt='brand-icon' width={50} height={50} src={"/shortify-icon.svg"}></Image>
//           <span>Blink</span></Link></div>
//         <ul className='flex justify-center gap-4 items-center'>
//           <Link href="/"><li className='hover:text-black'>Home</li></Link>
//           <Link href="/about"><li className='hover:text-black'>About</li></Link>
//           <Link href="/shorten"><li className='hover:text-black'>Shorten</li></Link>
//           <Link href="/contact"><li className='hover:text-black'>Contact</li></Link>
//           <li className='hidden md:block'>
//             <Link href="/shorten"><button className='bg-purple-500 hover:bg-purple-800 shadow-lg py-1 p-3 rounded-lg font-bold mr-2'>Try Now</button></Link>
//             <Link href="/github"><button className='bg-purple-500 hover:bg-purple-800 shadow-lg py-1 p-3 rounded-lg font-bold'>Github</button></Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-purple-700">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <Image alt='brand-icon' width={50} height={50} src={"/shortify-icon.svg"}></Image>
          Blink
        </Link>
        <ul className="hidden gap-8 text-sm font-medium text-white/90 md:flex">
          <Link href="/"><li className='hover:text-black'>Home</li></Link>
          <Link href="/about"><li className='hover:text-black'>About</li></Link>
          <Link href="/shorten"><li className='hover:text-black'>Shorten</li></Link>
          <Link href="/contact"><li className='hover:text-black'>Contact</li></Link>
        </ul>
        <div className="hidden gap-3 md:flex">
          <Link href="/shorten" className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/30">
            Try now
          </Link>
          <Link href="/github" className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/30">
            Github
          </Link>
        </div>
        <div className="flex gap-2 md:hidden">
          <Link href="/shorten" className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold text-white">
            Try now
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar

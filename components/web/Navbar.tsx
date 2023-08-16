"use client";

import Link from 'next/link';
import { redirect } from "next/navigation";

export default function Navbar() {
  const handleLogin = () => {
    return redirect("/signin")
  }

  return (
    <div className='w-full py-5'>
      <nav className='w-3/5 mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Fusion<span className='text-prime'>Clips</span></h1>
        <ul className='flex justify-around w-1/3 text-light font-semibold items-center'>
          <li className='cursor-pointer'>
            <a href="#features" className='hover:text-prime_light'>
              Features
            </a>
          </li>
          <li className='cursor-pointer'>
            <Link href="/pricing" className='hover:text-prime_light'>
              Pricing
            </Link>
          </li>
          <li className='cursor-pointer'>
            <Link href="/discord" className='hover:text-prime_light'>
              Discord
            </Link>
          </li>
          {/* <li>
            <button className="bg-prime hover:bg-prime_dark text-white font-bold py-2 my-5 px-6 mx-auto text-center"><Link href="/signin">Login</Link></button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

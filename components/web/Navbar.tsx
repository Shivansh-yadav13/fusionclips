"use client";

import Link from 'next/link';
import Image from 'next/image';
import { redirect } from "next/navigation";
import DiscordBtn from './DiscordBtn';
import { useState } from 'react';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleLogin = () => {
    return redirect("/signin")
  }

  return (
    <div className='w-full py-5'>
      <nav className='mx-5 xl:hidden'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-2xl'>
            <Link href="/" className='flex items-center hover:text-prime_light'>
              <Image src="/fclogo.png" width="50" height="50"  alt='logo' />
              <h1 className='text-xl font-extrabold'>Fusion Clips AI</h1>
            </Link>
          </h1>
          <Image width="30" height="30" className='cursor-pointer'  src="/hamburger.png" alt="menu--v1" onClick={() => setMenu(!menu)}/>
        </div>
        <div className={`absolute -z-10 w-full border-x-2 border-b-2 rounded-b-xl p-2 bg-white left-0 -top-60 ${menu ? "translate-y-80" : ""} transition-all duration-300`}>
          <ul className='mx-5 font-bold text-xl flex flex-col gap-2'>
          <li className='cursor-pointer'>
            <Link href="/#features" className='hover:text-prime_light'>
              Features
            </Link>
          </li>
          <li className='cursor-pointer'>
            <Link href="/pricing" className='hover:text-prime_light'>
              Pricing
            </Link>
          </li>
          <li className='cursor-pointer'>
            <a href="/blogs" className='hover:text-prime_light'>
              Blogs
            </a>
          </li>
          <li className='cursor-pointer'>
            <DiscordBtn />
          </li>
          <li className='text-gray-200 text-xs text-center'>
            <a target="_blank" href="https://icons8.com/icon/nRgy12QAqQ08/menu">Hamburger</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
          </li>
        </ul>
        </div>
      </nav>
      <nav className='hidden xl:flex items-center justify-between mx-20'>
        <h1 className='font-bold text-2xl'>
          <Link href="/" className='flex items-center hover:text-prime_light'>
            <Image src="/fclogo.png" width="50" height="50"  alt='logo' />
            <h1 className='text-xl font-extrabold'>Fusion Clips AI</h1>
          </Link>
        </h1>
        <ul className='flex items-center justify-evenly text-lg w-1/2'>
          <li className='cursor-pointer'>
            <a href="/#features" className='hover:text-prime_light'>
              Features
            </a>
          </li>
          <li className='cursor-pointer'>
            <Link href="/pricing" className='hover:text-prime_light'>
              Pricing
            </Link>
          </li>
          <li className='cursor-pointer'>
            <a href="/blogs" className='hover:text-prime_light'>
              Blogs
            </a>
          </li>
          <li className='cursor-pointer'>
            <DiscordBtn />
          </li>
        </ul>
      </nav>
    </div>
  );
}

"use client";

import Link from 'next/link';
import Image from 'next/image';
import { redirect } from "next/navigation";
import DiscordBtn from './DiscordBtn';

export default function Navbar() {
  const handleLogin = () => {
    return redirect("/signin")
  }

  return (
    <div className='w-full py-5'>
      <nav className='xl:w-3/5 mx-auto flex xl:justify-between sm:justify-evenly items-center'>
        <h1 className='font-bold text-2xl'>
          <Link href="/" className='hover:text-prime_light'>
            <Image src="/fclogo.png" width="50" height="50"  alt='logo' />
          </Link>
        </h1>
        <ul className='flex justify-around lg:justify-end sm:justify-between lg:gap-20 w-full text-light font-semibold items-center'>
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
            <DiscordBtn />
          </li>
        </ul>
      </nav>
    </div>
  );
}

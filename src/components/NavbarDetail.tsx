"use client";
import React from 'react';
import Image from 'next/image';
import LogoImage from '../assets/images/logo.png';

export const NavbarDetail = () => {
  return (
    <div className="relative">
      <div className="px-4">
        <div className="container">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className='absolute w-full top-2 bottom-0 blur-md'></div>
              <a href='/'>
                <Image
                  src={LogoImage}
                  alt="Logo"
                  className="h-10 w-44 relative mt-1"
                />
              </a>
            </div>
            <nav className='gap-6 items-center flex'>
              <a href="https://iot.entechno.net/login/?next=/" className='bg-blue-500 py-2 px-4 rounded-lg text-white rounded-md hover:shadow-[0px_0px_10px_5px_#2563eb] transition-shadow duration-300'>
                Bulut
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

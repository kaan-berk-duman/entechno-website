"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import menuIcon from '../assets/images/menu.jpg';
import LogoImage from '../assets/images/logo.png';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="px-4">
        <div className="container">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className='absolute w-full top-2 bottom-0 blur-md'></div>
              <a onClick={() => handleScroll('hero')}>
                <Image
                  src={LogoImage}
                  alt="Logo"
                  className="h-10 w-44 relative mt-1"
                />
              </a>
            </div>

            <nav className='gap-6 items-center hidden sm:flex'>
              <button onClick={() => handleScroll('hakkimizda')} className='text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Hakkımızda</button>
              <button onClick={() => handleScroll('hizmetlerimiz')} className='text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Hizmetlerimiz</button>
              <button onClick={() => handleScroll('urunlerimiz')} className='text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Ürünlerimiz</button>
              <a href="/Platform" className='text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Platform</a>
              <button onClick={() => handleScroll('takim')} className='text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Takım</button>
              <button onClick={() => handleScroll('iletisim')} className='text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>İletişim</button>
              <a href="https://iot.entechno.net/login/?next=/" className='text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Bulut</a>
              <button onClick={() => { handleScroll('iletisim'); setIsMenuOpen(false); }} className='bg-blue-500 py-2 px-4 rounded-lg text-white rounded-md hover:shadow-[0px_0px_10px_5px_#2563eb] transition-shadow duration-300'>Başla</button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Açılır Menü"
              className="sm:hidden"
            >
              <Image src={menuIcon} alt="Menü" width={48} height={48} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-90 z-50 flex flex-col items-center pt-10">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Kapat"
            className="absolute top-4 right-4 text-white"
          >
            X
          </button>
          <nav className="flex flex-col items-center">
            <button onClick={() => { handleScroll('hakkimizda'); setIsMenuOpen(false); }} className='text-white text-lg py-2 text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Hakkımızda</button>
            <button onClick={() => { handleScroll('hizmetlerimiz'); setIsMenuOpen(false); }} className='text-white text-lg py-2 text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Hizmetlerimiz</button>
            <button onClick={() => { handleScroll('urunlerimiz'); setIsMenuOpen(false); }} className='text-white text-lg py-2 text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Ürünlerimiz</button>
            <a href="/Platform" className='text-white text-lg py-2 text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Platform</a>
            <button onClick={() => { handleScroll('takim'); setIsMenuOpen(false); }} className='text-white text-lg py-2 text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Takım</button>
            <button onClick={() => { handleScroll('iletisim'); setIsMenuOpen(false); }} className='text-white text-lg py-2 text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>İletişim</button>
            <a href="https://iot.entechno.net/login/?next=/" className='text-white text-lg py-2 text-opacity-60 hover:text-blue-500 hover:text-opacity-100 transition'>Bulut</a>
            <button onClick={() => { handleScroll('iletisim'); setIsMenuOpen(false); }} className='bg-blue-500 py-2 px-4 rounded-lg text-white rounded-md hover:shadow-[0px_0px_10px_5px_#2563eb] transition-shadow duration-300'>Başla</button>
          </nav>
        </div>
      )}
    </div>
  );
};

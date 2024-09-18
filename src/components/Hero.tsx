"use client"
import React, { useState } from 'react';

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-[32px] sm:py-32 relative overflow-clip">
      <div className="absolute inset-0 top-0 h-[50px] bg-gradient-to-b from-blue-600 to-transparent opacity-50 pointer-events-none"></div>
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#ffffff_82%,#3B82F6)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

      <div className="container relative">
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex text-blue-900'>Entechno</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className='text-xl text-center mt-8 max-w-md text-blue-900 whitespace-nowrap overflow-visible'>
            Verimlilik ve Sürdürülebilirlik Odaklı IoT Çözümleri
          </p>
        </div>
      </div>
    </div>

  )
};

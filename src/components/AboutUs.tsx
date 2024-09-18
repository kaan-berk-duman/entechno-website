"use client"
import React, { useState } from 'react';

export const AboutUs = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <section id="about" className="about py-12 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="section-title text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide">
                        BİZİ DAHA YAKINDAN TANIYIN
                    </h2>
                </div>

                <div className="row flex flex-col md:flex-row content">
                    <div className="col-lg-6 mb-6 md:mb-0 md:pr-8" data-aos="fade-up" data-aos-delay="150">
                        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                            Entechno Bilişim Teknolojileri 2021 yılında Bilişim Vadisinde kurulmuş bir IoT şirketidir. Başlıca uzmanlık alanları aşağıdaki gibidir:
                        </p>
                        <ul className="list-none pl-0">
                            <li className="relative pl-10 mb-4 text-gray-700 text-base">
                                <i className="absolute left-0 top-0 text-xl text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-blue-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </i>
                                Sımple IoT Çözümleri
                            </li>
                            <li className="relative pl-10 mb-4 text-gray-700 text-base">
                                <i className="absolute left-0 top-0 text-xl text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-blue-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </i>
                                Endüstri 4.0
                            </li>
                            <li className="relative pl-10 mb-4 text-gray-700 text-base">
                                <i className="absolute left-0 top-0 text-xl text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-blue-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </i>
                                İş Makinesi Takip Sistemleri
                            </li>
                            <li className="relative pl-10 mb-4 text-gray-700 text-base">
                                <i className="absolute left-0 top-0 text-xl text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-6 h-6 text-blue-500"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </i>
                                Araç Takip Sistemleri
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 md:pt-0" data-aos="fade-up" data-aos-delay="300">
                        <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                            Entechno, IoT (nesnelerin interneti) ve ML (makine öğrenimi) konusunda çalışan yazılım, donanım ve raporlama şirketidir.
                        </p>
                        <a
                            onClick={() => { handleScroll('iletisim'); setIsMenuOpen(false); }}
                            className="inline-block px-8 py-3 mt-2 text-white bg-blue-500 rounded-full font-semibold text-sm tracking-wider transition-shadow duration-300 hover:shadow-[0px_0px_10px_5px_#2563eb]"
                        >
                            Daha Fazlası İçin İletişime Geçin
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
};

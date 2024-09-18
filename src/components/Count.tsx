"use client"
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import CountImage from '../assets/images/count.png';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export const Count = () => {
  return (
    <section id="counts" className="py-0 mx-12 lg:mx-8">
      <div className="container px-4">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-5/12 flex items-stretch justify-center xl:justify-start" data-aos="fade-right" data-aos-delay="150">
            <Image
              src={CountImage}
              alt="Counts Image"
              width={400}
              height={400}
            />
          </div>

          <div className="w-full xl:w-7/12 pt-4 xl:pt-0 flex items-stretch" data-aos="fade-left" data-aos-delay="300">
            <div className="flex flex-col justify-center w-full">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 flex items-stretch">
                  <div className="p-5 w-full flex items-center">
                    <i className="bi bi-emoji-smile text-4xl text-blue-500 mr-4"></i>
                    <span className="text-4xl font-bold text-gray-800">
                      <CountUp start={0} end={10} duration={2} />
                    </span>
                    <p className="ml-12 text-base text-gray-600">
                      <strong>Müşteriler:</strong> Müşteri memnuniyetine ve gelen taleplere göre müşteri dostu sistemler geliştirir.
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex items-stretch">
                  <div className="p-5 w-full flex items-center">
                    <i className="bi bi-journal-richtext text-4xl text-blue-500 mr-4"></i>
                    <span className="text-4xl font-bold text-gray-800">
                      <CountUp start={0} end={124} duration={2} />
                    </span>
                    <p className="ml-12 text-base text-gray-600">
                      <strong>Projeler:</strong> Geliştirdiğimiz projelerde uçtan uca bütün sistemler %100 yerli olarak üretilmektedir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

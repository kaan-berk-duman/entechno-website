"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { Footer } from "@/components/Footer";
import { NavbarDetail } from "@/components/NavbarDetail";

// Özelleştirilmiş Pagination
const CustomPagination = () => (
    <div className="swiper-pagination flex space-x-2"></div>
);

export const ProductDetail: React.FC<{ product: { image?: string[]; name: string; description: string; technologies: string; Detail: string; } }> = ({ product }) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    <div>
                        <NavbarDetail />
                        <section id="portfolio-details" className="portfolio-details py-4 mx-6 lg:mx-12">
                            <div className="container mx-auto">
                                <div className="flex flex-col lg:flex-row lg:space-x-8">
                                    {/* Resim Slider Bölümü */}
                                    <div className="lg:w-8/12 mb-8 lg:mb-0 relative">
                                        <Swiper
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            pagination={{ clickable: true }}
                                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                                            modules={[Pagination, Autoplay]}
                                            className="swiper-container"
                                        >
                                            {product.image?.map((image, index) => (
                                                <SwiperSlide key={index} className="swiper-slide">
                                                    <Image
                                                        src={image}
                                                        alt={`Slide ${index}`}
                                                        layout="responsive"
                                                        width={400}
                                                        height={250}
                                                        className="object-cover max-w-full w-full h-auto"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <CustomPagination /> {/* Custom Pagination */}
                                    </div>

                                    {/* Ürün Bilgileri Bölümü */}
                                    <div className="lg:w-4/12">
                                        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6">
                                            <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                                            <p className="text-gray-700 mb-4">{product.description}</p>
                                        </div>
                                        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 mt-4">
                                            <h3 className="text-xl font-semibold">Ürün Detayları</h3>
                                            <ul className="list-disc list-inside text-gray-700 mt-2">
                                                <li><strong>Hizmet İsmi</strong>: {product.name}</li>
                                                <li><strong>Teknolojiler</strong>: {product.technologies}</li>
                                                <li><strong>Detaylar</strong>: {product.Detail}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

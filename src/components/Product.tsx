"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Urun1 from '../assets/images/urun1.jpeg';
import Urun2 from '../assets/images/urun2.jpeg';
import Urun3 from '../assets/images/urun3.jpeg';
import Urun456 from '../assets/images/urun456.jpg';
import Urun7 from '../assets/images/urun7.png';
import Urun8 from '../assets/images/urun8.jpg';
import Urun9 from '../assets/images/urun9.jpg';
import Urun10 from '../assets/images/urun10.jpg';

const products = [
    {
        id: 1,
        image: Urun1,
        brand: "Gateway",
        name: "Entechno IoT Gateway"
    },
    {
        id: 2,
        image: Urun2,
        brand: "IoT",
        name: "Lora Sensörler"
    },
    {
        id: 3,
        image: Urun3,
        brand: "IoT",
        name: "Entechno Uzaktan Kontrol Modülü"
    },
    {
        id: 4,
        image: Urun456,
        brand: "IoT",
        name: "Kartlı Geçiş Sistemleri"
    },
    {
        id: 5,
        image: Urun456,
        brand: "IoT",
        name: "İş Makinesi Kartla Çalıştırma Modülü"
    },
    {
        id: 6,
        image: Urun456,
        brand: "IoT",
        name: "Devam Kontrol Sistemleri (Personel vb.)"
    },
    {
        id: 7,
        image: Urun7,
        brand: "IoT",
        name: "Jeneratör"
    },
    {
        id: 8,
        image: Urun8,
        brand: "IoT",
        name: "Akıllı Araç Takip Sistemi"
    },
    {
        id: 9,
        image: Urun9,
        brand: "IoT",
        name: "İş Makinesi Takip Sistemi"
    },
    {
        id: 10,
        image: Urun10,
        brand: "Bulut Hizmeti",
        name: "Entechno Bulut"
    }
];

export const Product = () => {
    return (
        <>
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">Ürünlerimiz</h1>
                <h1>Ürün Detayları İçin Bize Ulaşın</h1>
            </div>

            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {products.map(product => (
                    <div key={product.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <Link href={`/product-detail/${product.id}`}>
                            <Image src={product.image} alt={product.name} className="w-72 h-40 object-cover rounded-t-xl" width={288} height={160}/>
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
                                <p className="text-lg font-bold text-black block capitalize">{product.name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </>
    )
};

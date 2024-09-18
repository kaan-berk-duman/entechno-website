"use client";
import React from 'react';
import 'remixicon/fonts/remixicon.css';

const features = [
    { icon: "ri-temp-hot-line", color: "#ffbb2c", title: "Sıcaklık Sensörü" },
    { icon: "ri-cloud-windy-line", color: "#5578ff", title: "Nem Sensörü" },
    { icon: "ri-hotspot-line", color: "#e80368", title: "Digital İnput Sensörü" },
    { icon: "ri-battery-2-charge-line", color: "#e361ff", title: "Analog Sensör" },
    { icon: "ri-blaze-fill", color: "#47aeff", title: "Hidrojen Sensörü" },
    { icon: "ri-gradienter-line", color: "#ffa76e", title: "Modbus Köprü Sensörü" },
    { icon: "ri-door-open-fill", color: "#11dbcf", title: "Kapı Sensörü" },
    { icon: "ri-flashlight-fill", color: "#4233ff", title: "Jeneratör İzleme Modülü" },
    { icon: "ri-rfid-fill", color: "#b2904f", title: "Hareket Sensörü" },
    { icon: "ri-fire-line", color: "#b20969", title: "Patlayıcı Madde Dedektörü" },
    { icon: "ri-base-station-line", color: "#ff5828", title: "Yangın Algılama Sistemleri" },
    { icon: "ri-fire-fill", color: "#29cc61", title: "Yangın İzleme Sensörü" },
];

export const Sensors = () => {
    return (
        <>
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">Lora Sensör Gruplarımız</h1>
                <h1>Entechno IoT Gateway ile çalışabilen sensörler</h1>
            </div>
            <section id="features" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
                {features.map((feature, index) => (
                    <div key={index} className="w-72 bg-white border border-gray-200 shadow-md rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center p-6">
                        <div className="flex items-center justify-center mb-4">
                            <i className={`text-4xl ${feature.icon}`} style={{ color: feature.color }}></i>
                        </div>
                        <h3 className="text-xl font-semibold text-center">
                            <p>{feature.title}</p>
                        </h3>
                    </div>
                ))}
            </section>
        </>
    );
};

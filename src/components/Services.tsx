"use client"
import React from 'react';
import Image from 'next/image';
import services1 from '../assets/images/services1.jpg';
import services2 from '../assets/images/services2.jpg';
import services3 from '../assets/images/services3.jpg';
import services4 from '../assets/images/services4.jpg';

export const Services = () => {
    return (
        <>
            <div className="relative overflow-hidden bg-white pt-8 pb-32 space-y-24">
                

                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Simple IoT
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Simple IoT çözümlerimiz birden fazla sektörde kullanılabilmektedir. Tarım çözümleri, perakende çözümleri , uzaktan izlenebilir mağaza, fabrika ve depo çözümleri gibi çözümler sağlayabilmekteyiz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pl-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    loading="lazy"
                                    width={647}
                                    height={486}
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={services1}
                                    alt="Simple IoT"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        İş Makinesi Takip Sistemi
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        İş makinelerini IoT ile izlemek, işletmelere operasyonel verimlilik, maliyet tasarrufu ve güvenlik gibi birçok fayda sağlar.
                                        Bu teknoloji, işletmelerin rekabet avantajı elde etmelerine ve daha akıllı işletme stratejileri geliştirmelerine olanak tanır.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pr-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    alt="İş Makinesi Takip Sistemi"
                                    loading="lazy"
                                    width={647}
                                    height={486}
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={services2}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Enerji İzleme
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        IoT, gerçek zamanlı veri toplama ve analiz imkanı sağlayarak enerji tüketimini optimize eder. Böylece işletmeler maliyetleri azaltabilir ve verimliliği artırabilir.
                                        Ayrıca uzaktan erişim ve otomasyon sayesinde enerji sistemleri daha etkin yönetilir, çevresel sürdürülebilirlik ve kaynak tasarrufu desteklenir.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pl-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    loading="lazy"
                                    width={647}
                                    height={486}
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={services3}
                                    alt="Enerji İzleme"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Sıcaklık Nem Takibi
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Entechno Sıcaklık Nem Sensörü sayesinde iklimlendirilmiş alanlarınız güvencemiz altında tutulur.
                                        Pil ile 2-10 yıl çalışan ürünlerimiz sayesinde kurulum ve montaj kolaylığı sağlar.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pr-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    alt="Sıcaklık Nem Takibi"
                                    loading="lazy"
                                    width={647}
                                    height={486}
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={services4}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

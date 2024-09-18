"use client"
import React from 'react';
import Image from 'next/image';
import Resim0 from '../../assets/platform/resim0.png';
import Resim1 from '../../assets/platform/Resim1.png';
import Resim2 from '../../assets/platform/Resim2.png';
import Resim3 from '../../assets/platform/Resim3.png';
import Resim4 from '../../assets/platform/Resim4.png';
import Resim5 from '../../assets/platform/resim5.png';
import Resim6 from '../../assets/platform/resim6.png';
import Resim7 from '../../assets/platform/resim7.png';
import Resim8 from '../../assets/platform/resim8.png';
import { NavbarDetail } from '@/components/NavbarDetail';
import { Footer } from '@/components/Footer';
const Platform = () => {
    return (
        <>
            <NavbarDetail />
            <div className="relative overflow-hidden bg-white pt-8 pb-16 space-y-12">
                {/* Başlık ve açıklama */}
                <div className="text-center">
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-blue-900">
                        Dijital dönüşümü teşvik edecek IoT ve Bulut araçları
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Fiziksel ve dijital dünyaları, içgörüler sağlayan ve sorunları çözen, konuşlandırılabilir, son kullanıcıya hazır uygulamalarla birleştirin.
                    </p>
                </div>

                <div className="relative mt-4 mx-auto max-w-4xl"> 
                    <Image
                        loading="lazy"
                        width={800}  
                        height={533}
                        className="w-full h-auto rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5"
                        src={Resim0}
                        alt="Büyük Resim"
                        layout="responsive"
                        quality={100}
                    />
                </div>

                {/*"1.alan"*/}
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Dashboard
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Dashboard üzerinden sensörlere kolay bir şekilde erişebilirsiniz. İlgili filtrelemeye göre sensör bilgilerini anlık olarak indirebilirsiniz.
                                        Sistem genelindeki Kırmızı, Sarı ve Mavi renkler ile kolayca sensörlerinizin durumunu anlayabilirsiniz.
                                        Kırmızı son 30 dakikadır sensörden veri gelmiyor, Sarı sensörde aktif alarm var ve Mavi ise sensör normal durumda anlamına gelir.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pl-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    loading="lazy"
                                    width={800}
                                    height={600}
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={Resim1}
                                    alt="Dashboard"
                                    layout="responsive"
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*"2.alan"*/}
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Sensörler
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Sensör detay sayfasında ilgili sensörlere ait geçmişe yönelik verileri ve anlık verilerini görebilir, kolay bir şekilde indirebilirsiniz.
                                        Sistemin herhangi bir yerinden istediğiniz veriyi, indirme butonları ile indirebilirsiniz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pr-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    alt="Sensörler"
                                    loading="lazy"
                                    width={800}
                                    height={600}
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={Resim2}
                                    layout="responsive"
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*"3.alan"*/}
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Araç Sensör
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Sağdaki görüntüde de görüldüğü üzere araçlarımızdaki her sensörün bilgilerini veya son durumlarını araç sensör detay sayfalarımızdan kontrol edebilirsiniz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pl-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    loading="lazy"
                                    width={800}
                                    height={600}
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={Resim3}
                                    alt="Araç Sensör"
                                    layout="responsive"
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*"4.alan"*/}
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Günlük Raporlar
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Düzenli Rapor özelliği sayesinde sensörlerin durumu, alarmlar ve ölçüm değerleri hakkında otomatik günlük rapor alabilirsiniz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pr-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    alt="Günlük Raporlar"
                                    loading="lazy"
                                    width={800}
                                    height={600}
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={Resim4}
                                    layout="responsive"
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*"5.alan"*/}
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Lokasyonlar
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Şirketinizin şubelerinin veya araçlarının anlık lokasyonlarını görebileceğiniz bir alandır. Buradan herhangi bir konuma giderek o konumdaki sensörler, alarmlar veya araçlar hakkında bilgi alabilirsiniz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pl-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    loading="lazy"
                                    width={800}
                                    height={600}
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={Resim5}
                                    alt="Lokasyonlar"
                                    layout="responsive"
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*"6.alan"*/}
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Lokasyon Detay
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Her konum için kroki çizebilir, sensörlerinizi kendi yerine sürükleyerek kaydedebilirsiniz. Burada da renkler yardımı ile kolayca sensörleri kontrol edebilirsiniz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pr-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    alt="Lokasyon Detay"
                                    loading="lazy"
                                    width={800}
                                    height={600}
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={Resim6}
                                    layout="responsive"
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*"7.alan"*/}
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Alarmlar
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Alarm ile sensörlerinize ait bir çok detay için oluşturacağınız alarmlar ile SMS, Çağrı ve Email ile sensörlerinizde olağan dışı durumlarda anında bilgi sahibi olabilirsiniz.
                                        Sensör detay sayfalarından veya Alarm sayfasından istediğiniz sensöre alarm ekleyebilirsiniz.
                                        Eğer alarm oluştururken  Alarm’ı kapatmaya izin ver seçeneğini de seçerseniz Alarm’ı belirli bir süreliğine kapatabilirsiniz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pl-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    loading="lazy"
                                    width={800}
                                    height={600}
                                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={Resim7}
                                    alt="Alarmlar"
                                    layout="responsive"
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*"8.alan"*/}
                <div className="relative">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                            <div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-bold tracking-tight text-blue-900">
                                        Destek
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Soru, görüş ve önerileriniz için sağ üst köşedeki destek butonu ile 7/24 destek bileti oluşturabilirsiniz.
                                        Yaşadığınız sorunların ekran görüntüsünü bizimle paylaşabilirsiniz. Sorunlarınıza anlık müdahale ediyoruz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="pr-6 lg:relative lg:h-full lg:px-0">
                                <Image
                                    alt="Destek"
                                    loading="lazy"
                                    width={800}
                                    height={600}
                                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                    src={Resim8}
                                    layout="responsive"
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Platform;
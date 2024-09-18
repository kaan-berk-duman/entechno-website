import React from 'react';
import { ProductDetail } from '../../../components/ProductDetail';
import gateway from '../../../assets/detail/gateway.png';
import lora from '../../../assets/detail/lora-sensor.jpeg';
import uzaktan1 from '../../../assets/detail/uzaktan-1.jpg';
import uzaktan2 from '../../../assets/detail/uzaktan-2.jpg';
import kartli from '../../../assets/detail/kartli-gecis.png';
import pdks1 from '../../../assets/detail/PDKS-1.jpg';
import pdks2 from '../../../assets/detail/pdks.png';
import jenerator from '../../../assets/detail/jenerator-1.jpg';
import car from '../../../assets/detail/car-2.jpg';
import forklift from '../../../assets/detail/forklift-1.jpg';
import bulut1 from '../../../assets/detail/bulut-1.jpg';
import bulut2 from '../../../assets/detail/bulut-2.jpg';
import bulut3 from '../../../assets/detail/bulut-3.jpg';

const productDetails = [
    {
        id: 1,
        image: [gateway],
        name: 'Entechno IoT Gateway - LoRa',
        description: 'Entechno IoT Gateway üzerinde bulunan komponentler sayesinde Wifi, BLE, LoRa, Ethernet, GSM, GPRS gibi özellikleri üzerinde dahili olarak bulunduran geniş kapsamlı bir üründür. LoRa protokolü ile aldığı dataları ethernet üzerinden internete gönderebilen bulut tabanlı yazılımımız sayesinde aldığı geri dönüşleri işleyip yorumlayabilen bir üründür. Birçok farklı sektörde kullanılmaya uygun olan bu Gateway her türlü saha koşulana ayak uydurabilmektedir. DHCP/Static IP özelliklerini üzerinde taşıyan ürün müşteri tercihine göre uzaktan veya kablolu bağlantı ile ayarlanabilmektedir.',
        technologies: "Wifi, BLE, LoRa, Ethernet, GSM, GPRS",
        Detail: "Farklı Sensör Gruplarından Veri Alışverişi Yapabilir.",
    },
    {
        id: 2,
        image: [lora],
        name: 'Entechno Lora Sensör Grubu',
        description: 'Entechno LoRa Sensör birçok özelliği üzerinde barındırmaktadır. Lora sensör grupları kısmında geçen bütün sensörleri desteklemektedir. Pil ile uzun yıllar çalışabilen bu sensör sahadan talep edilecek birçok datayı toplayıp veriyi internete göndermek için uygun bir çözümdür.',
        technologies: "Wifi, BLE, LoRa",
        Detail: "2-10 yıl pil ile çalışabilmektedir.",
    },
    {
        id: 3,
        image: [uzaktan1,uzaktan2],
        name: 'Entechno Uzaktan Kontrol Modülü',
        description: "Entechno Uzaktan Kontrol Modülü LoRa protokolü ile Entechno IoT Gateway'e bağlı veya bağımsız olarak çalışabilmektedir. Üzerinde 8 adet kuru kontak çıkış bulunan bu ürün sayesinde Kapı, Kepenk, Aydınlatma vb elektrikle çalışan ürünleri uzaktan kontrol etmemizi sağlar. Zaman saati girme seçeneğimiz sayesinde önemli ölçüde enerji tasarrufu sağlayan bu ürün endüstride sıklıkla tercih edilmektedir.Üzerinde bulunan PCB anten sayesinde deformasyon olma durumunu ortadan kaldırmıştır. Uzun yıllar bakım gerektirmeden kullanılabilen bu ürün Entechno IoT Gateway ile otomatik olarak eşleşmektedir.",
        technologies: "Wifi, BLE, LoRa",
        Detail: "Kolay kurulum ve Harici Kumanda Desteği Bulunmaktadır.",
    },
    {
        id: 4,
        image: [kartli],
        name: 'Entechno Kartlı Geçiş Sistemleri',
        description: 'Entechno Kartlı Geçiş Sistemleri sayesinde evlerinizde, ofislerinizde ve iş yerlerinizde kapı kepenk gibi birçok noktada kartlı geçiş yapmanızı sağlar. Mifare/Proximty teknolojilerini destekleyen ürünümüz üzerinde bulunan 20 Amper rölesi sayesinde kolaylıkla her sahada kullanabilirsiniz.',
        technologies: "Herhangi bir teknoloji bulundurmuyor.",
        Detail: "Daha fazla detay için şirketimizle görüşün.",
    },
    {
        id: 5,
        image: [pdks1],
        name: 'Entechno İş Makinesi Kartla Çalıştırma Modülü',
        description: 'Entechno İş Makinesi Kartla Çalıştırma Modülü sayesinde iş makinelerinizi anahtar yerine kart ile çalıştırabileceksiniz. Ehliyetsiz veya yetkisiz personellerin kullanımını engelleyen bu sistem iş kazalarını oldukça azaltmaktadır.',
        technologies: "Herhangi bir teknoloji bulundurmuyor.",
        Detail: "Daha fazla detay için şirketimizle görüşün.",
    },
    {
        id: 6,
        image: [pdks2],
        name: 'Entechno PDKS',
        description: 'Entechno PDKS ürünü sayesinde personellerinizin giriş-çıkış saatlerini öğrenebilir ve bu durumları raporlayabilirsiniz. Personel tarafından olası suistimallerin önüne geçmemizi sağlayan bu ürün bize birçok avantaj sağlamaktadır. Bu özelliklerinin yanında diğer IoT ürünleriyle birlikte çalışabilmesi bize birden fazla kazanç sağlamaktadır.',
        technologies: "Herhangi bir teknoloji bulundurmuyor.",
        Detail: "Daha fazla detay için şirketimizle görüşün.",
    },
    {
        id: 7,
        image: [jenerator],
        name: 'Entechno Akıllı Jeneratör Takip Sistemi',
        description: 'Entechno Akıllı Jeneratör Takip Sistemi sayesinde jeneratörlerinizdeki bütün verileri uzaktan izleyebilirsiniz ve jeneratörlerinizi uzaktan yönetebilirsiniz. Böylelikle kullanıcı kaynaklı suistimallerin önüne geçmiş oluyoruz. Yakıt takip, bakım takip gibi hizmetlerimiz sayesinde jeneratörlerin kullanım ömürleri arttırılmış olur.',
        technologies: "Ethernet/GSM",
        Detail: "Daha fazla detay için şirketimizle görüşün.",
    },
    {
        id: 8,
        image: [car],
        name: 'Entechno Akıllı Araç Takip Sistemi',
        description: 'Entechno Akıllı Araç Takip Sistemlerimiz her ihtiyaca uyum sağlayan yazılımı ve donanımı sayesinde birçok projede kullanmamıza olanak sağlar.',
        technologies: "2G/4G, GPRS, GNSS, BLE, Gyro",
        Detail: "Daha fazla detay için şirketimizle görüşün.",
    },
    {
        id: 9,
        image: [forklift],
        name: 'İş Makinesi Takip Sistemi',
        description: 'Verimlilik ve Performans İyileştirmeleri: IoT sayesinde, iş makinelerinin gerçek zamanlı verilerini izleyebilirsiniz. Bu, makinenin performansını, çalışma süresini, yakıt tüketimini ve verimliliğini takip etmenize yardımcı olur. Veri analizi, iş makinelerinin daha verimli çalışmasına ve iş süreçlerinin optimize edilmesine olanak tanır. Bakım ve Onarım Öngörüleri: Sensörler aracılığıyla iş makinelerinden alınan veriler, olası arızaları veya bakım gereksinimlerini önceden belirleyebilir. Bu sayede planlı bakım yapılabilir, beklenmedik duruş süreleri azaltılabilir ve ekipmanın daha uzun ömürlü olması sağlanabilir. Güvenlik İyileştirmeleri: Uzaktan izleme, iş makinelerinin güvenliğini artırabilir. Örneğin, tehlikeli koşullar algılandığında uyarılar gönderilebilir veya çalışanların güvenliğini sağlamak için belirli protokoller otomatik olarak devreye alınabilir. Maliyet Tasarrufu: Daha etkili bakım, performans optimizasyonu ve verimlilik iyileştirmeleri sayesinde işletmeler, yakıt tasarrufu gibi maliyetleri azaltabilirler. Ayrıca, beklenmedik duruş sürelerinin azaltılmasıyla kayıp gelirler önlenir. Uzaktan Yönetim ve Kontrol: İş makinelerini uzaktan izleyerek, operasyonları herhangi bir yerden yönetmek ve kontrol etmek mümkün olur.',
        technologies: "2G/4G, GPRS, GNSS, BLE, Gyro, Saf Su Seviyesi Ölçme",
        Detail: "Daha fazla detay için şirketimizle görüşün.",
    },
    {
        id: 10,
        image: [bulut1,bulut2,bulut3],
        name: 'Entechno Bulut',
        description: 'Entechno Bulut ürünü bulut tabanlı bir web yazılımdır. Bu yazılım sahada olan IoT cihazlarımızı uzaktan yönetmemize, izlememize ve raporlamamıza olanak sağlar. Entechno Cloud Sms, Mail , Arama Günlük ve Haftalık raporları sayesinde kullanılması öğrenilmesi kolay "sürdürülebilir bir yazılımdır." Entechno Bulut alarm algoritmaları sayesinde uzaktan izlediğimiz cihazlar 7/24 güvencemiz altındadır. Detaylı bilgi için lütfen demo hesap talebinde bulunun.',
        technologies: "Herhangi bir teknoloji bulundurmuyor.",
        Detail: "Daha fazla detay için şirketimizle görüşün.",
    },
];

const getProduct = async (id: number) => {
    return productDetails.find(p => p.id === id) || null;
};

const ProductPage = async ({ params }) => {
    const id = parseInt(params.id as string, 10);
    const product = await getProduct(id);

    if (!product) {
        return <p>Ürün bulunamadı</p>;
    }

    return <ProductDetail product={product} />;
};

export default ProductPage;

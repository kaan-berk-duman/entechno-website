"use client"
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg";
import {motion , AnimatePresence} from 'framer-motion';
const items = [
  {
    question: "Sensörler için elektrik bağlantısı gerekli mi?",
    answer:
      "Geliştirdiğimiz bütün LoRa sensörler düşük güç tüketimine sahiptir. Belirlenen data gönderme periyoduna göre 2 ile 10 yıl pil ömürleri vardır. Bu sebeple elektrik bağlantısına ihtiyaç duymadan çalışabilmektedir.",
  },
  {
    question: "Sensörleriniz ve Gatewayleriniz nasıl bağlantı kurar? Bu bağlantı güvenli midir?",
    answer:
      "Kurduğumuz IoT ürün altyapısı gateway ve sensör arasındaki haberleşmeyi LoRa protokolü üzerinden sağlar. Uzak mesafelere düşük güç tüketimiyle veri göndermemize olanak sağlayan bu protokol iletişim içinde oldukça güvenlidir. Sahadaki ürünlerimiz birbirleriyle otomatik olarak eşleşmektedir.",
  },
  {
    question: "Simple IoT çözümünün Entechno tarafında karşılığı nedir?",
    answer:
      "Simple IoT çözümümüz bir depo, mağaza veya fabrikada elektrik ile çalışan alet ve ekipmanların uzaktan izlenmesine ve kontrol edilmesine olanak sağlayan bir ürün ekosistemidir. Buradaki en büyük farkımız ise bu ürünlerin tamamının tek bir bulut yazılımdan takip edilebilir olmasıdır. Örnek vermek gerekirse bir depoda bulunan soğuk odalar, acil çıkış kapıları, jeneratör, enerji, forklift, PDKS vb. birçok veriyi tek bir ekran üzerinden yönetmemizi sağlayan bir sistemdir.",
  },
  {
    question: "İş makinesi takip sistemi sayesinde ehliyetsiz operatörlerin kullanımını engelleyebilir miyim?",
    answer:
      "Entechno iş makinesi takip ürünüyle ehliyetsiz operatörlerin kullanımını engellemek oldukça kolaydır. İş makinelerinin personel kartlarıyla kullanılmasını sağlar. Aynı zamanda ekipmanlarınızın bakımlarını günlük , haftalık kullanım sürelerini, ekipmana yapılan masrafları, bir sonraki bakıma kalan süreleri, operatör evraklarını sistemimiz sayesinde takip edebilmektesiniz.",
  },
  {
    question: "Jeneratörümü neden takip etmeliyim?",
    answer:
      "Jeneratörü takip etmek düşünülenin aksine çokça fayda sağlar. Yakıt hırsızlıklarının önüne geçilmesi, bakımlarının doğru ve düzenli yapılması, önceden arıza tespit yapılması gibi durumlara olanak sağlamaktadır. Bu sebeple jeneratörlerin ve iş ekipmanlarının uzaktan izlenilmesi firmalara daha sürdürülebilir bir altyapı olanağı sağlamaktadır.",
  },
];

const AccordinationItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-7 border-b border-black/30" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >{answer}</motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FAQs = () => {
  return (
    <div className="py-[72px] sm:py-2 relative z-10 pt-6">
      <div className="container relative z-10">
      <div className="text-center p-4">
                <h1 className="font-bold text-4xl mt-4">Sıkça Sorulan Sorular</h1>
            </div>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordinationItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
      {/* Background light effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-transparent opacity-40 pointer-events-none"></div>
    </div>
  );
};

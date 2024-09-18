import BizimMarket from "../assets/images/client-1.png";
import g2m from "../assets/images/client-2.png";
import sicpa from "../assets/images/client-3.png";
import akca from "../assets/images/client-4.png";
import kastamonu from "../assets/images/client-5.png";
import pysertech from "../assets/images/client-6.png";
import Image from 'next/image';
import LogoCarousel from "./companylogos";

const images = [
  { src: BizimMarket, alt: "BizimMarket" },
  { src: g2m, alt: "g2m" },
  { src: sicpa, alt: "sicpa" },
  { src: akca, alt: "akca" },
  { src: kastamonu, alt: "kastamonu" },
  { src: pysertech, alt: "pysertech" },
];

export const LogoTicker = () => {
  return (
    <div className="relative">
      <div className="container py-24 px-28">
        <LogoCarousel />
      </div>
    </div>

  )
};

import Image from 'next/image'
import BizimMarket from "../assets/images/client-1.png";
import g2m from "../assets/images/client-2.png";
import sicpa from "../assets/images/client-3.png";
import akca from "../assets/images/client-4.png";
import kastamonu from "../assets/images/client-5.png";
import pysertech from "../assets/images/client-6.png";

export default function LogoCarousel() {

  const logos = [
  { src: BizimMarket, alt: "BizimMarket" },
  { src: g2m, alt: "g2m" },
  { src: sicpa, alt: "sicpa" },
  { src: akca, alt: "akca" },
  { src: kastamonu, alt: "kastamonu" },
  { src: pysertech, alt: "pysertech" },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none [&_img]:w-36 [&_img]:h-24 animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none [&_img]:w-36 [&_img]:h-24 animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
  
}
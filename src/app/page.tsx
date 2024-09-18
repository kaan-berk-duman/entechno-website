import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import { Lead } from "@/components/Lead";
import { Contact } from "@/components/Contact";
import { AboutUs } from "@/components/AboutUs";
import { Count } from "@/components/Count";
import { Product } from "@/components/Product";
import { Sensors } from "@/components/Sensors";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <LogoTicker />
        <div id="hizmetlerimiz">
          <Services />
        </div>
        <div id="urunlerimiz">
          <Product />
        </div>
        <Sensors />
        <div id="hakkimizda">
          <AboutUs />
        </div>
        <Count />
        <div id="takim">
          <Lead />
        </div>
        <FAQs />
        <div id="iletisim">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

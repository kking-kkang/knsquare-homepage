import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Services />
      <Portfolio />
      <HowItWorks />
      <WhyUs />
      <About />
      <Research />
      <Contact />
      <Footer />
    </>
  );
}

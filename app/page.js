import Awards from "@/components/Awards ";
import Contact from "@/components/Contact";
import Fame from "@/components/Fame";
import Hero from "@/components/Hero";
import IndustrySolutions from "@/components/IndustrySolutions";
import Overview from "@/components/Overview";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Overview />
      <IndustrySolutions />
      <Services />
      <Partners />
      <SuccessStories />
      <Testimonial />
      <Awards />
      <Contact />
      <Fame />
    </main>
  );
}

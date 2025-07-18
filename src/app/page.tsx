import Hero from "@/components/Hero";
import Service from "@/components/Services";
import About from "@/components/About";
import Feature from "@/components/Feature";
import Counter from "@/components/Counter";
import Testimonials from "@/components/Testimonials";
import CallToActtion from "@/components/CallToActtion";
import Blogs from "@/components/Blogs";
import Download from "@/components/Download";
import Clients from "@/components/Clients";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <About />
      <Feature />
      <Counter />
      <Testimonials />
      <Team />
      <CallToActtion />
      <Blogs />
      <Download />
      <Clients />
    </>
  );
}

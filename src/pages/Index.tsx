
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import ClientLogos from "@/components/home/ClientLogos";
import Contact from "@/components/home/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <ClientLogos />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;

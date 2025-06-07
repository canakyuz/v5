
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Posts } from "@/components/Posts";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Posts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

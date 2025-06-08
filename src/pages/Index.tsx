import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Portfolio } from "@/features/portfolio/Portfolio";
import { Posts } from "@/features/posts/Posts";
import { Contact } from "@/features/contact/Contact";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Posts />
      <Contact />
    </>
  );
};

export default Index;

import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Dosis } from "./components/Dosis";
import { Training } from "./components/Training";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Dosis />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

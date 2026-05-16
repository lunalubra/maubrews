import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Partnerships } from "./components/Partnerships";
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
        <Process />
        <Partnerships />
        <Dosis />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

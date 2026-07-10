import { ScrollProgress } from "./components/layout/ScrollProgress";
import { CustomCursor } from "./components/layout/CustomCursor";
import { Navbar } from "./components/layout/Navbar";
import { FloatingActions } from "./components/layout/FloatingActions";
import { Footer } from "./components/layout/Footer";

import { Hero } from "./sections/Hero";
import { Story } from "./sections/Story";
import { Experience } from "./sections/Experience";
import { Menu } from "./sections/Menu";
import { Chef } from "./sections/Chef";
import { Gallery } from "./sections/Gallery";
import { Testimonials } from "./sections/Testimonials";
import { Reservation } from "./sections/Reservation";

function App() {
  return (
    <div className="noise-overlay">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Story />
        <Experience />
        <Menu />
        <Chef />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;

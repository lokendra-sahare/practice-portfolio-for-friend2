import "./App.scss";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import About from "./services/About";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Contact } from "./components/contact/Contact";

import { Test } from "./Test";
import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <div className="App">
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="services" />
      </section>
      <section className="About-section">
        <About />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test /> */}
    </div>
  );
}

export default App;

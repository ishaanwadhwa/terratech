import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhoWeAre } from "./components/WhoWeAre";
import { WhatWeDo } from "./components/WhatWeDo";
import { TerraBytePlatform } from "./components/TerraBytePlatform";
import { Industries } from "./components/Industries";
import { SustainabilityImpact } from "./components/SustainabilityImpact";
import { CaseStudies } from "./components/CaseStudies";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster"
import "./App.css";

function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre isHomePage={true} />
      <WhatWeDo isHomePage={true} />
      <TerraBytePlatform isHomePage={true} />
      <Industries isHomePage={true} />
      <SustainabilityImpact />
      <CaseStudies />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<WhoWeAre />} />
        <Route path="/solutions" element={<WhatWeDo />} />
        <Route path="/platform" element={<TerraBytePlatform />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </Router>
  );
}

export default App;

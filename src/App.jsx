import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CheckUdPage from "./components/pages/privat/CheckUdPage";
import HomePagePrivat from "./components/pages/privat/HomePage";
import HomePageErhverv from "./components/pages/erhverv/HomePage";
import OmOsPage from "./components/pages/global/OmOsPage";
import FindParkeringPage from "./components/pages/privat/FindParkeringPage";
import FAQPage from "./components/pages/privat/FAQPage";
import ProdukterPage from "./components/pages/erhverv/ProdukterPage";
import SegmenterPage from "./components/pages/erhverv/SegmenterPage";
import ParkeringsområdePage from "./components/pages/privat/ParkeringsområdePage";
import Header from "./components/ui/sections/Header";
import Footer from "./components/ui/sections/Footer";
import KontaktPagePrivat from "./components/pages/privat/KontaktPage";
import KontaktPageErhverv from "./components/pages/erhverv/KontaktPage";
import ScrollToTop from "./components/hooksAndFunctions/ScrollToTop";
import BlogPage from "./components/pages/global/BlogPage";
import ArtikelPage from "./components/pages/global/ArtikelPage";

// Ruter og navigation med React Router
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePagePrivat />} />
        <Route path="*" element={<HomePagePrivat />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<ArtikelPage />} />
        <Route path="/omos" element={<OmOsPage />} />
        <Route path="/privat" element={<HomePagePrivat />} />
        <Route path="/privat/kontakt" element={<KontaktPagePrivat />} />
        <Route path="/privat/findparkering" element={<FindParkeringPage />} />
        <Route
          path="/privat/findparkering/:id"
          element={<ParkeringsområdePage />}
        />
        <Route path="/privat/checkud" element={<CheckUdPage />} />
        <Route path="/privat/FAQ" element={<FAQPage />} />
        <Route path="/erhverv" element={<HomePageErhverv />} />
        <Route path="/erhverv/kontakt" element={<KontaktPageErhverv />} />
        <Route path="/erhverv/produkter" element={<ProdukterPage />} />
        <Route path="/erhverv/segmenter" element={<SegmenterPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

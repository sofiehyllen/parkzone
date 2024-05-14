import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import CheckUdPage from './pages/privat/CheckUdPage';
import HomePagePrivat from './pages/privat/HomePage';
import HomePageErhverv from './pages/erhverv/HomePage';
import OmOsPage from './pages/global/OmOsPage';
import FindParkeringPage from './pages/privat/FindParkeringPage';
import FAQPage from './pages/privat/FAQPage';
import ProdukterPage from './pages/erhverv/ProdukterPage';
import SegmenterPage from './pages/erhverv/SegmenterPage';
import ParkeringsområdePage from './pages/privat/ParkeringsområdePage';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import KontaktPagePrivat from './pages/privat/KontaktPage';
import KontaktPageErhverv from './pages/erhverv/KontaktPage';
import ScrollToTop from './components/functions/ScrollToTop';
import BlogPage from './pages/global/BlogPage';
import ArtikelPage from './pages/global/ArtikelPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePagePrivat />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<ArtikelPage />} />
        <Route path='/omos' element={<OmOsPage />} />
        <Route path='/privat' element={<HomePagePrivat />} />
        <Route path='/privat/kontakt' element={<KontaktPagePrivat />} />
        <Route path='/privat/findparkering' element={<FindParkeringPage />} />
        <Route
          path='/privat/findparkering/:id'
          element={<ParkeringsområdePage />}
        />
        <Route path='/privat/checkud' element={<CheckUdPage />} />
        <Route path='/privat/FAQ' element={<FAQPage />} />
        <Route path='/erhverv' element={<HomePageErhverv />} />
        <Route path='/erhverv/kontakt' element={<KontaktPageErhverv />} />
        <Route path='/erhverv/produkter' element={<ProdukterPage />} />
        <Route path='/erhverv/segmenter' element={<SegmenterPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

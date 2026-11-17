
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Science from './pages/Science';
import Practices from './pages/Practices';
import Resources from './pages/Resources';
import Inclusion from './pages/Inclusion';
import Tics from './pages/Tics';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/ciencia" element={<Science />} />
        <Route path="/praticas" element={<Practices />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/inclusao" element={<Inclusion />} />
        <Route path="/tics" element={<Tics />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

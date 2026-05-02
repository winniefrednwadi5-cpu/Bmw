/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import Home from './pages/Home';
import Models from './pages/Models';
import Configurator from './pages/Configurator';
import Innovation from './pages/Innovation';
import Electric from './pages/Electric';
import { AnimatePresence } from 'motion/react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isConfigurator = location.pathname === '/configurator';

  return (
    <div className="flex flex-col min-h-screen">
      {!isConfigurator && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isConfigurator && <Footer />}
      <MobileCTA />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageWrapper>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/electric" element={<Electric />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </PageWrapper>
    </Router>
  );
}

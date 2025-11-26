
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Research from './pages/Research';
import ResearchDetail from './pages/ResearchDetail';
import Investments from './pages/Investments';
import InvestmentDetail from './pages/InvestmentDetail';
import Awards from './pages/Awards';
import AwardDetail from './pages/AwardDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import StudentCorner from './pages/StudentCorner';

function App() {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
  );
}

function Main() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<ResearchDetail />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/investments/:slug" element={<InvestmentDetail />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/awards/:slug" element={<AwardDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-corner" element={<StudentCorner />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;

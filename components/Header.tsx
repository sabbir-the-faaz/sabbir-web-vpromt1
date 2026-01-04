import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { personalInfo } from '../constants';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/research', label: 'Research' },
  { path: '/investments', label: 'Investments' },
  { path: '/awards', label: 'Awards' },
  { path: '/blog', label: 'Blog' },
  { path: '/student-corner', label: 'Student' },
  { path: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-background/90 backdrop-blur-2xl border-b border-white/5 py-3' : 'bg-transparent py-7'
      }`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 transition-transform group-hover:scale-110">
              <img 
                src={personalInfo.profilePicture} 
                alt="S. R. Akash" 
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-black text-white tracking-tight leading-none">
                S. R. AKASH
              </span>
              <span className="text-[9px] text-primary font-corporate font-bold tracking-[0.3em] mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity uppercase">
                Engineer & Strategist
              </span>
            </div>
          </Link>
          
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `px-4 py-2 text-[13px] font-corporate font-semibold tracking-wider transition-all rounded-lg hover:bg-white/5 ${
                    isActive ? 'text-primary' : 'text-text-secondary hover:text-white'
                  }`
                }
              >
                {link.label.toUpperCase()}
              </NavLink>
            ))}
          </nav>

          <div className="xl:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="xl:hidden bg-background border-b border-white/5 overflow-hidden"
        >
          <nav className="flex flex-col p-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-4 text-lg font-corporate font-bold transition-all rounded-xl ${
                    isActive ? 'text-primary bg-primary/5' : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
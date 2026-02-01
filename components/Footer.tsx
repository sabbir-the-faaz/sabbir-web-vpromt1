
import React from 'react';
import { Github, Linkedin, BrainCircuit, Youtube, Facebook } from 'lucide-react';
import { personalInfo } from '../constants';

const socialLinks = [
  { icon: Github, href: personalInfo.socials.github, name: 'GitHub' },
  { icon: Linkedin, href: personalInfo.socials.linkedin, name: 'LinkedIn' },
  { icon: BrainCircuit, href: personalInfo.socials.researchGate, name: 'ResearchGate' },
  { icon: Youtube, href: personalInfo.socials.youtube, name: 'YouTube' },
  { icon: Facebook, href: personalInfo.socials.facebook, name: 'Facebook' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 text-text-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} <span className="text-text-primary">{personalInfo.name}</span>
            </p>
            <p className="text-xs mt-1 text-text-secondary/50 uppercase tracking-widest">
              Engineer | Researcher | Strategist
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

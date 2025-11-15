import React from 'react';
import { Github, Linkedin, BrainCircuit, Youtube } from 'lucide-react';
import { personalInfo } from '../constants';

const socialLinks = [
  { icon: Github, href: personalInfo.socials.github, name: 'GitHub' },
  { icon: Linkedin, href: personalInfo.socials.linkedin, name: 'LinkedIn' },
  // FIX: Property 'twitter' does not exist on type 'personalInfo.socials'. Replaced with 'researchGate'.
  { icon: BrainCircuit, href: personalInfo.socials.researchGate, name: 'ResearchGate' },
  { icon: Youtube, href: personalInfo.socials.youtube, name: 'YouTube' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-text-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
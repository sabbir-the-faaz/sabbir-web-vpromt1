
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, BrainCircuit, Youtube, Eye, Facebook } from 'lucide-react';
import { personalInfo } from '../constants';

const socialLinks = [
  { icon: Github, href: personalInfo.socials.github, name: 'GitHub' },
  { icon: Linkedin, href: personalInfo.socials.linkedin, name: 'LinkedIn' },
  { icon: BrainCircuit, href: personalInfo.socials.researchGate, name: 'ResearchGate' },
  { icon: Youtube, href: personalInfo.socials.youtube, name: 'YouTube' },
  { icon: Facebook, href: personalInfo.socials.facebook, name: 'Facebook' },
];

const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // A unique key for your portfolio site
        const response = await fetch('https://api.countapi.xyz/hit/sabbir-akash-portfolio/visits');
        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.value);
        }
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <footer className="bg-surface text-text-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
            {visitorCount !== null && (
              <div className="flex items-center gap-2 bg-background px-3 py-1 rounded-full text-sm">
                <Eye size={16} className="text-primary" />
                <span>{visitorCount.toLocaleString()} Visitors</span>
              </div>
            )}
          </div>
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

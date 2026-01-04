import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ResearchProject } from '../types';
import { itemVariants } from '../utils/animations';
import { Beaker, ArrowRight } from 'lucide-react';

interface ResearchCardProps {
  project: ResearchProject;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ project }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10 }}
    className="group bg-surface-light border border-white/5 rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] hover:border-primary/40 flex flex-col h-full"
  >
    <Link to={`/research/${project.slug}`} className="flex flex-col h-full">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-6 left-6 p-4 bg-background/60 backdrop-blur-md rounded-2xl border border-white/10 text-primary group-hover:text-white group-hover:bg-primary transition-all">
            <Beaker size={24} />
        </div>
      </div>
      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted group-hover:text-primary transition-colors">{project.institution}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-4 leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-text-secondary text-lg leading-relaxed flex-grow line-clamp-3 mb-8">{project.description}</p>
        
        <div className="flex items-center gap-3 text-primary font-black text-xs tracking-[0.2em] group-hover:gap-5 transition-all mt-auto uppercase">
            Full Publication <span><ArrowRight size={18} /></span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ResearchCard;

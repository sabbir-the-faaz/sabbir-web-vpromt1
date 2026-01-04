import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { itemVariants } from '../utils/animations';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10 }}
    className="group relative bg-surface-light border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] hover:border-primary/30"
  >
    <Link to={`/portfolio/${project.slug}`} className="block">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
        
        <div className="absolute top-5 right-5 bg-primary/20 backdrop-blur-md p-2.5 rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight size={20} className="text-primary" />
        </div>

        <div className="absolute bottom-5 left-8 right-8">
             <span className="inline-block px-3 py-1 bg-primary/10 backdrop-blur-md border border-primary/30 rounded-full text-[8px] font-corporate font-bold text-primary uppercase tracking-[0.3em] mb-3">
                {project.category}
            </span>
        </div>
      </div>
      <div className="p-8 md:p-10">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors duration-500 leading-tight tracking-tight">{project.title}</h3>
        <p className="text-text-secondary text-base font-light leading-relaxed line-clamp-2 mb-8 font-sans">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
            {project.technologies.slice(0, 3).map(tech => (
                <span key={tech} className="text-[9px] text-text-muted font-corporate font-bold px-3 py-1 bg-background border border-white/5 rounded-full uppercase tracking-widest">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
                <span className="text-[9px] text-text-muted font-corporate font-bold px-3 py-1 bg-background border border-white/5 rounded-full uppercase tracking-widest">+{project.technologies.length - 3}</span>
            )}
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ProjectCard;
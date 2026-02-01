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
    className="card-natural rounded-xl overflow-hidden group h-full flex flex-col"
  >
    <Link to={`/portfolio/${project.slug}`} className="flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-4 right-4 bg-primary p-2 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={20} />
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <span className="text-[10px] text-primary font-bold uppercase tracking-widest mb-3">{project.category}</span>
        <h3 className="text-2xl font-display font-bold mb-4 text-white leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-text-secondary text-sm font-light leading-relaxed flex-grow">{project.description}</p>
        <div className="mt-8 flex gap-3 flex-wrap">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="text-[10px] text-text-secondary bg-surface-light/30 border border-white/5 px-3 py-1 rounded-md uppercase tracking-tighter">{tech}</span>
          ))}
        </div>
      </div>
    </Link>
  </motion.div>
);

export default ProjectCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { itemVariants } from '../utils/animations';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 163, 255, 0.1), 0 10px 10px -5px rgba(0, 163, 255, 0.04)" }}
    className="bg-surface rounded-lg overflow-hidden shadow-lg group h-full flex flex-col"
  >
    <Link to={`/portfolio/${project.slug}`} className="flex flex-col h-full">
      <div className="overflow-hidden">
        <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-primary font-semibold mb-1">{project.category}</p>
        <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-text-secondary text-sm flex-grow">{project.description}</p>
      </div>
    </Link>
  </motion.div>
);

export default ProjectCard;

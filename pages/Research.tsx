
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { researchProjects } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ResearchProject } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Research: React.FC = () => {
  return (
    <AnimatedPage>
      {/* Banner */}
      <div className="h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://i.imgur.com/74atleo.png')" }}>
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
            <h1 className="text-5xl font-display font-bold text-white">Research & Publications</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {researchProjects.map(project => (
            <ResearchCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

const ResearchCard: React.FC<{ project: ResearchProject }> = ({ project }) => (
  <motion.div variants={itemVariants} className="bg-surface rounded-lg overflow-hidden shadow-lg group">
    <Link to={`/research/${project.slug}`}>
      <div className="overflow-hidden">
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-text-secondary font-semibold mb-1">{project.institution}</p>
        <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-text-secondary text-sm">{project.description}</p>
      </div>
    </Link>
  </motion.div>
);

export default Research;

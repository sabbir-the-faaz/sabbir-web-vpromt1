
import React, { useState, useMemo } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { projects } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

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

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], []);
  
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <AnimatedPage>
      {/* Banner */}
      <div className="h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://i.imgur.com/Th0OGFa.png')" }}>
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
            <h1 className="text-5xl font-display font-bold text-white">My Portfolio</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === category 
                ? 'bg-primary text-background' 
                : 'bg-surface text-text-secondary hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div variants={itemVariants} className="bg-surface rounded-lg overflow-hidden shadow-lg group">
    <Link to={`/portfolio/${project.slug}`}>
      <div className="overflow-hidden">
        <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-primary font-semibold mb-1">{project.category}</p>
        <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-text-secondary text-sm">{project.description}</p>
      </div>
    </Link>
  </motion.div>
);

export default Portfolio;

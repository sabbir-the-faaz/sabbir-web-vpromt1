import React, { useState, useMemo } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { projects } from '../constants';
import { motion } from 'framer-motion';
import { containerVariants } from '../utils/animations';
import ProjectCard from '../components/ProjectCard';

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
          key={activeCategory} // Add key to re-trigger animation on filter change
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

export default Portfolio;

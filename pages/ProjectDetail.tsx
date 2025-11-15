
import React, { useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { projects } from '../constants';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
            <button onClick={() => navigate('/portfolio')} className="text-secondary hover:underline">
                Back to Portfolio
            </button>
        </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RouterLink to="/portfolio" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft size={16} />
          Back to Portfolio
        </RouterLink>

        <motion.h1 
          className="text-5xl font-display font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h1>
        <motion.p 
          className="text-xl text-text-secondary mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {project.description}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={project.images[0]} alt={project.title} className="w-full rounded-lg shadow-xl" />
            </motion.div>
            
            <h2 className="text-3xl font-bold mb-4">About The Project</h2>
            <p className="text-text-secondary leading-relaxed">{project.longDescription}</p>

            {project.images.length > 1 && (
                <div className="mt-8">
                     <h3 className="text-2xl font-bold mb-4">Gallery</h3>
                     <div className="grid grid-cols-2 gap-4">
                        {project.images.map((img, index) => (
                            <motion.img 
                                key={index} 
                                src={img} 
                                alt={`${project.title} - screenshot ${index + 1}`} 
                                className="w-full rounded-lg" 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            />
                        ))}
                     </div>
                </div>
            )}
          </div>

          <aside className="md:col-span-1">
            <div className="bg-surface p-6 rounded-lg sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Project Info</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-background px-3 py-1 text-sm rounded-full text-text-primary">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-background font-bold py-2 px-4 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
                    <Github size={18} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProjectDetail;

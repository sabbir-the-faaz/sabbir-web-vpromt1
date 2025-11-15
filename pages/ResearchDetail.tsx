
import React, { useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { researchProjects } from '../constants';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ResearchDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = researchProjects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Research Not Found</h1>
            <button onClick={() => navigate('/research')} className="text-secondary hover:underline">
                Back to Research
            </button>
        </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RouterLink to="/research" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft size={16} />
          Back to Research
        </RouterLink>

        <motion.h1 
          className="text-5xl font-display font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h1>
        <motion.div 
            className="text-lg text-text-secondary mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            <p><strong>Institution:</strong> {project.institution}</p>
            <p><strong>Duration:</strong> {project.duration}</p>
            <p><strong>Supervisor:</strong> {project.supervisor}</p>
        </motion.div>
        
        <div className="prose prose-invert max-w-none prose-h2:text-primary prose-a:text-secondary">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-xl" />
            </motion.div>
            
            <h2 className="text-3xl font-bold mb-4">Abstract</h2>
            <p className="text-text-secondary leading-relaxed">{project.longDescription}</p>

            {project.images && project.images.length > 0 && (
                <div className="mt-8">
                     <h3 className="text-2xl font-bold mb-4">Figures & Results</h3>
                     <div className="grid grid-cols-2 gap-4">
                        {project.images.map((img, index) => (
                            <motion.img 
                                key={index} 
                                src={img} 
                                alt={`${project.title} - figure ${index + 1}`} 
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
            
            {project.videoUrl && (
                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">Video Presentation</h3>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe 
                            src={project.videoUrl} 
                            title="Video presentation" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ResearchDetail;

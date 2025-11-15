
import React, { useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { awards } from '../constants';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const AwardDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const award = awards.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!award) {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Award Not Found</h1>
            <button onClick={() => navigate('/awards')} className="text-secondary hover:underline">
                Back to Awards
            </button>
        </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RouterLink to="/awards" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft size={16} />
          Back to Awards
        </RouterLink>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img src={award.image} alt={award.title} className="w-full rounded-lg shadow-2xl" />
            </motion.div>
            <div>
                <motion.h1 
                  className="text-4xl font-display font-bold mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {award.title}
                </motion.h1>
                <motion.div 
                    className="text-lg text-text-secondary mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p><strong>Organization:</strong> {award.organization}</p>
                    <p><strong>Date:</strong> {award.date}</p>
                </motion.div>
                <motion.p 
                    className="text-text-primary leading-relaxed"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {award.longDescription}
                </motion.p>
            </div>
        </div>
            
        {award.images && award.images.length > 0 && (
            <div className="mt-16">
                 <h3 className="text-3xl font-bold mb-6 text-center">Gallery</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {award.images.map((img, index) => (
                        <motion.img 
                            key={index} 
                            src={img} 
                            alt={`${award.title} - gallery ${index + 1}`} 
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
        
        {award.videoUrl && (
            <div className="mt-16">
                <h3 className="text-3xl font-bold mb-6 text-center">Related Video</h3>
                <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
                    <iframe 
                        src={award.videoUrl} 
                        title="Video presentation" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full rounded-lg shadow-2xl"
                    ></iframe>
                </div>
            </div>
        )}
      </div>
    </AnimatedPage>
  );
};

export default AwardDetail;

import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { awards } from '../constants';
import { motion } from 'framer-motion';
import { containerVariants } from '../utils/animations';
import AwardCard from '../components/AwardCard';

const Awards: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-display font-bold text-primary">Honors & Awards</h1>
            <p className="text-xl text-text-secondary mt-2">Recognition of my dedication and hard work.</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {awards.map(award => (
              <AwardCard key={award.slug} award={award} />
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Awards;

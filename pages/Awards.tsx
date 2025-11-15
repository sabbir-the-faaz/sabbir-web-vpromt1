
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { awards } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Award } from '../types';

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

const AwardCard: React.FC<{ award: Award }> = ({ award }) => (
  <motion.div variants={itemVariants} className="bg-background rounded-lg overflow-hidden shadow-lg group">
    <Link to={`/awards/${award.slug}`}>
      <div className="overflow-hidden">
        <img 
            src={award.image} 
            alt={award.title} 
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-text-secondary font-semibold mb-1">{award.date}</p>
        <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">{award.title}</h3>
        <p className="text-text-secondary text-sm">{award.organization}</p>
      </div>
    </Link>
  </motion.div>
);

export default Awards;

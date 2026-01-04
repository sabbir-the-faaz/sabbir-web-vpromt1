import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Award } from '../types';
import { itemVariants } from '../utils/animations';

interface AwardCardProps {
  award: Award;
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 163, 255, 0.1), 0 10px 10px -5px rgba(0, 163, 255, 0.04)" }}
    className="bg-surface rounded-lg overflow-hidden shadow-lg group h-full flex flex-col"
  >
    <Link to={`/awards/${award.slug}`} className="flex flex-col h-full">
      <div className="overflow-hidden">
        <img 
            src={award.image} 
            alt={award.title} 
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-text-secondary font-semibold mb-1">{award.date}</p>
        <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">{award.title}</h3>
        <p className="text-text-secondary text-sm flex-grow">{award.organization}</p>
      </div>
    </Link>
  </motion.div>
);

export default AwardCard;

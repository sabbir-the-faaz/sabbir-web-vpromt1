import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Award } from '../types';
import { itemVariants } from '../utils/animations';
import { Award as AwardIcon, Calendar } from 'lucide-react';

interface AwardCardProps {
  award: Award;
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10 }}
    className="group bg-surface border border-white/5 rounded-[40px] overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:border-secondary/30 flex flex-col h-full"
  >
    <Link to={`/awards/${award.slug}`} className="flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
            src={award.image} 
            alt={award.title} 
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-6 left-6 flex items-center gap-3">
             <div className="p-3 bg-secondary/20 backdrop-blur-md rounded-xl text-secondary border border-secondary/30">
                <AwardIcon size={20} />
            </div>
            <div className="flex flex-col">
                <span className="text-[9px] font-black text-white/50 uppercase tracking-widest">{award.date}</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">{award.organization}</span>
            </div>
        </div>
      </div>
      <div className="p-8 md:p-10 flex flex-col flex-grow justify-center">
        <h3 className="text-xl md:text-2xl font-display font-black text-white group-hover:text-secondary transition-colors leading-tight mb-4 uppercase">{award.title}</h3>
        <p className="text-text-secondary text-base leading-relaxed line-clamp-2">{award.description}</p>
        
        <div className="mt-8 flex items-center gap-2 text-secondary font-black text-[10px] tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
            DETAILS & GALLERY <span>&rarr;</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default AwardCard;

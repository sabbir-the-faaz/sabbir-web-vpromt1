import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { InvestmentOpportunity } from '../types';
import { itemVariants } from '../utils/animations';
import { TrendingUp, DollarSign, Clock, AlertCircle, Scale, ArrowUpRight } from 'lucide-react';

interface InvestmentCardProps {
  opportunity: InvestmentOpportunity;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({ opportunity }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-green-500 text-background border-green-500';
      case 'Closed': return 'bg-red-500 text-white border-red-500';
      case 'Coming Soon': return 'bg-amber-500 text-background border-amber-500';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
        case 'Low': return 'text-green-400';
        case 'Medium': return 'text-amber-400';
        case 'High': return 'text-red-400';
        default: return 'text-text-secondary';
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group bg-surface border border-white/10 rounded-[40px] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] hover:border-secondary/40 h-full flex flex-col"
    >
      <Link to={`/investments/${opportunity.slug}`} className="flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden">
          <img 
              src={opportunity.image} 
              alt={opportunity.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          
          <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusStyles(opportunity.status)} shadow-lg`}>
            {opportunity.status}
          </div>

          <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight size={20} className="text-white" />
          </div>
        </div>
        
        <div className="p-8 md:p-10 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-4">
              <span className="p-2 bg-secondary/10 rounded-lg text-secondary"><Scale size={16} /></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">{opportunity.model} MODEL</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-8 group-hover:text-secondary transition-colors leading-tight uppercase">{opportunity.title}</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-background/40 border border-white/5 p-5 rounded-3xl group-hover:bg-background transition-colors">
                <div className="flex items-center gap-2 text-text-muted text-[10px] font-black uppercase tracking-widest mb-2">
                    <TrendingUp size={14} className="text-green-400" /> Target ROI
                </div>
                <div className="text-green-400 font-display font-black text-xl">{opportunity.roi}</div>
            </div>
            <div className="bg-background/40 border border-white/5 p-5 rounded-3xl group-hover:bg-background transition-colors">
                <div className="flex items-center gap-2 text-text-muted text-[10px] font-black uppercase tracking-widest mb-2">
                    <DollarSign size={14} className="text-primary" /> Capital
                </div>
                <div className="text-text-primary font-display font-black text-xl">{opportunity.minInvestment.split(' ')[1]}<span className="text-[10px] ml-1 text-text-muted">{opportunity.minInvestment.split(' ')[0]}</span></div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-text-muted mt-auto pt-6 border-t border-white/5">
            <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" /> {opportunity.duration}
            </div>
            <div className="flex items-center gap-2">
                Risk: <span className={`${getRiskColor(opportunity.riskLevel)}`}>{opportunity.riskLevel}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default InvestmentCard;

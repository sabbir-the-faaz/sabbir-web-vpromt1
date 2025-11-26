
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { InvestmentOpportunity } from '../types';
import { itemVariants } from '../utils/animations';
import { TrendingUp, DollarSign, Clock, AlertCircle, Scale } from 'lucide-react';

interface InvestmentCardProps {
  opportunity: InvestmentOpportunity;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({ opportunity }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Closed': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'Coming Soon': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
        case 'Low': return 'text-green-400';
        case 'Medium': return 'text-yellow-400';
        case 'High': return 'text-red-400';
        default: return 'text-text-secondary';
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 163, 255, 0.1), 0 10px 10px -5px rgba(0, 163, 255, 0.04)" }}
      className="bg-surface rounded-xl overflow-hidden shadow-lg group flex flex-col border border-white/5"
    >
      <Link to={`/investments/${opportunity.slug}`} className="flex flex-col h-full">
        <div className="relative h-56 overflow-hidden">
          <img 
              src={opportunity.image} 
              alt={opportunity.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(opportunity.status)} backdrop-blur-md`}>
            {opportunity.status}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-sm text-primary font-semibold mb-2 flex items-center gap-1"><Scale size={14} /> {opportunity.model}</p>
          <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-primary transition-colors">{opportunity.title}</h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-background p-3 rounded-lg">
                <div className="flex items-center gap-1 text-text-secondary text-xs mb-1">
                    <TrendingUp size={12} /> ROI
                </div>
                <div className="text-green-400 font-bold text-sm">{opportunity.roi}</div>
            </div>
            <div className="bg-background p-3 rounded-lg">
                <div className="flex items-center gap-1 text-text-secondary text-xs mb-1">
                    <DollarSign size={12} /> Capital
                </div>
                <div className="text-text-primary font-bold text-sm">{opportunity.minInvestment}</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-text-secondary mt-auto pt-4 border-t border-white/10">
            <div className="flex items-center gap-1">
                <Clock size={14} /> {opportunity.duration}
            </div>
            <div className="flex items-center gap-1">
                <AlertCircle size={14} /> Risk: <span className={`font-bold ${getRiskColor(opportunity.riskLevel)}`}>{opportunity.riskLevel}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default InvestmentCard;

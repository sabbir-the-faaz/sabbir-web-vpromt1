
import React, { useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { investmentOpportunities } from '../constants';
import { ArrowLeft, TrendingUp, DollarSign, Clock, AlertCircle, CheckCircle, ArrowRight, Scale, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

// Basic markdown parser for description
const parseMarkdown = (text: string) => {
    let html = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<li>$1</li>')
        .replace(/\n/g, '<br />');
    return { __html: html };
};

const InvestmentDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const opportunity = investmentOpportunities.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!opportunity) {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Opportunity Not Found</h1>
            <button onClick={() => navigate('/investments')} className="text-secondary hover:underline">
                Back to Investments
            </button>
        </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RouterLink to="/investments" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft size={16} />
          Back to Opportunities
        </RouterLink>

        <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                     <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">{opportunity.category}</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{opportunity.title}</h1>
                </motion.div>

                <motion.div 
                    className="flex flex-wrap items-center gap-4 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                     <span className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-white/10 text-primary font-bold">
                        <Scale size={18} /> {opportunity.model}
                     </span>
                     <span className={`px-4 py-2 rounded-lg font-bold border ${opportunity.status === 'Open' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                        {opportunity.status}
                     </span>
                </motion.div>

                <motion.img 
                    src={opportunity.image} 
                    alt={opportunity.title} 
                    className="w-full rounded-xl shadow-2xl mb-8 border border-white/10 max-h-96 object-cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />

                <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                     className="prose prose-invert max-w-none"
                >
                    <div dangerouslySetInnerHTML={parseMarkdown(opportunity.longDescription)} />
                </motion.div>
            </div>

            {/* Right Sidebar - Investment Data */}
            <div className="lg:col-span-1">
                <motion.div 
                    className="bg-surface rounded-xl p-8 sticky top-24 border border-white/10 shadow-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Financial Overview</h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-text-secondary">
                                <FileText size={20} /> <span>Contract Value</span>
                            </div>
                            <span className="font-bold text-text-primary text-right">{opportunity.contractValue}</span>
                        </div>

                         <div className="flex items-center justify-between">
                             <div className="flex items-center gap-2 text-text-secondary">
                                <DollarSign size={20} /> <span>Required Capital</span>
                            </div>
                            <span className="font-bold text-white text-lg">{opportunity.minInvestment}</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-text-secondary">
                                <TrendingUp size={20} /> <span>Est. Profit</span>
                            </div>
                            <span className="font-bold text-green-400 text-lg text-right">{opportunity.estimatedProfit}</span>
                        </div>
                        
                         <div className="flex items-center justify-between">
                             <div className="flex items-center gap-2 text-text-secondary">
                                <Clock size={20} /> <span>Return Date</span>
                            </div>
                            <span className="font-bold text-text-primary text-right">{opportunity.duration.replace('Return: ', '')}</span>
                        </div>

                        <div className="flex items-center justify-between">
                             <div className="flex items-center gap-2 text-text-secondary">
                                <AlertCircle size={20} /> <span>Risk Level</span>
                            </div>
                            <span className={`font-bold text-lg ${
                                opportunity.riskLevel === 'Low' ? 'text-green-400' : 
                                opportunity.riskLevel === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                            }`}>{opportunity.riskLevel}</span>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <RouterLink 
                            to="/contact" 
                            className="w-full block bg-primary text-background text-center font-bold py-4 rounded-lg hover:bg-secondary transition-colors"
                        >
                            Invest Now
                        </RouterLink>
                         <p className="text-xs text-text-secondary text-center mt-4">
                            Click to contact Mart Builders directly regarding this opportunity.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default InvestmentDetail;

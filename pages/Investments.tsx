
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { investmentOpportunities } from '../constants';
import { motion } from 'framer-motion';
import { containerVariants } from '../utils/animations';
import InvestmentCard from '../components/InvestmentCard';
import { Briefcase } from 'lucide-react';

const Investments: React.FC = () => {
  return (
    <AnimatedPage>
      {/* Banner */}
      <div className="h-72 bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=1920')" }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-secondary/20 p-4 rounded-full mb-4 backdrop-blur-sm border border-secondary/50"
            >
                <Briefcase size={48} className="text-secondary" />
            </motion.div>
            <h1 className="text-5xl font-display font-bold text-white mb-2">Investment Portal</h1>
            <p className="text-xl text-text-secondary max-w-2xl">
              Partner in high-yield, Shariah-compliant projects managed with transparency and expertise.
            </p>
        </div>
      </div>

      <div className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-primary">Live Opportunities</h2>
            <p className="text-text-secondary mt-2">Verified government and industrial projects open for investment.</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {investmentOpportunities.map(opp => (
              <InvestmentCard key={opp.slug} opportunity={opp} />
            ))}
          </motion.div>

          <div className="mt-20 bg-surface rounded-2xl p-8 md:p-12 text-center border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
             
             <h2 className="text-3xl font-bold mb-4 relative z-10">Looking for Custom Investment Plans?</h2>
             <p className="text-text-secondary max-w-2xl mx-auto mb-8 relative z-10">
                We manage diverse portfolios in Engineering, Construction, and Tech. If you are looking for specific ROI targets or long-term partnerships, let's discuss.
             </p>
             <a href="#/contact" className="relative z-10 inline-block bg-primary text-background font-bold py-3 px-8 rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-105">
                Contact for Investment
             </a>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Investments;

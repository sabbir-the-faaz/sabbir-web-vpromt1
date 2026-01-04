import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { FolderKanban, ExternalLink, GraduationCap, BookCopy, FileSearch, MessageSquareQuote } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const StudentCorner: React.FC = () => {
  const resourceLink = "https://drive.google.com/drive/folders/1gDSJUWinWryZ0EXSVRAsts96VNAI6Vkm?usp=sharing";

  const features = [
    { icon: BookCopy, title: "Lecture Notes", desc: "Access comprehensive slides and hand-written notes for all modules." },
    { icon: FileSearch, title: "Exam Prep", desc: "Past questions, sample solutions, and high-impact study guides." },
    { icon: MessageSquareQuote, title: "Doubt Clearing", desc: "Request specific topics or ask questions regarding current syllabus." },
  ];

  return (
    <AnimatedPage>
      {/* Dynamic Header */}
      <section className="relative pt-40 pb-20 bg-background overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 p-4 bg-primary/10 rounded-3xl w-fit mx-auto border border-primary/20 text-primary"
            >
                <GraduationCap size={48} />
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-none mb-6">
                STUDENT <br />
                <span className="text-primary italic">CORNER</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
              A centralized repository for all academic resources, lecture materials, and shared knowledge for current students.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Main Hub */}
            <motion.div className="lg:col-span-8 space-y-12">
                <motion.div
                    className="bg-surface p-12 md:p-16 rounded-[48px] border border-white/10 shadow-2xl relative overflow-hidden group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -mr-32 -mt-32"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-4 bg-primary/10 rounded-2xl text-primary"><FolderKanban size={32}/></div>
                            <h2 className="text-3xl font-display font-black text-white uppercase tracking-tight">Main Resource Drive</h2>
                        </div>
                        
                        <p className="text-xl text-text-secondary leading-relaxed mb-12">
                            Access our shared Google Drive folder which contains categorized materials for Edexcel O/A Level Mathematics, Computer Science, and Engineering modules. This folder is updated weekly with new lecture notes and assignment samples.
                        </p>

                        <motion.a
                            href={resourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 bg-primary text-background px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-[0_15px_30px_rgba(0,163,255,0.3)] group/btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Open Drive Link <ExternalLink size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Grid features */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <motion.div 
                            key={i}
                            className="bg-surface-light p-8 rounded-[32px] border border-white/5 hover:border-primary/20 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <f.icon className="text-primary mb-6" size={32} />
                            <h3 className="text-xl font-display font-black text-white mb-3 uppercase tracking-tight">{f.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Support/Sidebar */}
            <motion.div 
                className="lg:col-span-4 sticky top-32 space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="bg-surface-light p-10 rounded-[40px] border border-white/5">
                    <h3 className="text-2xl font-display font-black text-white mb-6 uppercase tracking-tighter">Support Hours</h3>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center text-text-secondary border-b border-white/5 pb-2">
                            <span>Mon - Fri</span>
                            <span className="text-white font-bold">10 AM - 6 PM</span>
                        </li>
                        <li className="flex justify-between items-center text-text-secondary border-b border-white/5 pb-2">
                            <span>Saturday</span>
                            <span className="text-primary font-bold">Closed</span>
                        </li>
                        <li className="flex justify-between items-center text-text-secondary">
                            <span>Sunday</span>
                            <span className="text-white font-bold">11 AM - 4 PM</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-primary/10 p-10 rounded-[40px] border border-primary/20">
                    <h3 className="text-2xl font-display font-black text-primary mb-4 uppercase tracking-tighter">Join the Community</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-8 italic">
                        "Education is not the learning of facts, but the training of the mind to think."
                    </p>
                    <a href="#/contact" className="block text-center bg-white text-background font-black py-4 rounded-2xl hover:bg-primary hover:text-white transition-all uppercase tracking-widest text-xs">
                        Contact Instructor
                    </a>
                </div>
            </motion.div>
        </div>

      </div>
    </AnimatedPage>
  );
};

export default StudentCorner;

import React, { useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo, projects, awards, youtubeChannel, researchProjects } from '../constants';
import { ArrowRight, ChevronDown, FileText, Presentation, Trophy, Users, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants } from '../utils/animations';

// Import reusable card components
import ProjectCard from '../components/ProjectCard';
import AwardCard from '../components/AwardCard';
import ResearchCard from '../components/ResearchCard';
import AnimatedCounter from '../components/AnimatedCounter';

const Home: React.FC = () => {
  const featuredProjects = projects.slice(0, 2);
  const featuredResearch = researchProjects.slice(0, 2);
  const featuredAwards = awards.slice(0, 3);

  const achievements = [
    { icon: FileText, value: 4, label: "Publications", suffix: "+" },
    { icon: Presentation, value: 40, label: "Presentations", suffix: "+" },
    { icon: Trophy, value: 5, label: "Awards", suffix: "" },
    { icon: Users, value: 40, label: "Team Size", suffix: "+" },
    { icon: Briefcase, value: 3, label: "Case Wins", suffix: "" },
    { icon: Zap, value: 7, label: "IELTS", suffix: "" },
  ];

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 100]);

  return (
    <AnimatedPage>
      {/* Dynamic Hero Section - Video Visibility Increased */}
      <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute top-0 left-0 w-full h-full opacity-70 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="https://www.pexels.com/download/video/7255352/"
          />
        </div>
        {/* Refined gradient for better video clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>

        <motion.div 
            style={{ opacity, y }}
            className="relative z-20 text-center container mx-auto px-4 max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
                src={personalInfo.profilePicture}
                alt={personalInfo.name}
                className="w-36 h-36 rounded-full mx-auto border-4 border-primary/40 object-cover shadow-[0_0_50px_-12px_rgba(56,189,248,0.6)]"
            />
          </motion.div>
          <motion.h1 
            className="text-6xl md:text-8xl font-display font-extrabold mb-6 tracking-tight leading-none text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            MD. SABBIR <br />
            <span className="text-primary">RAHMAN AKASH</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary font-medium mb-12 uppercase tracking-widest drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Engineer • Researcher • Strategist
          </motion.p>
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6, duration: 0.6 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact" className="btn-natural">
              Get in Touch <ArrowRight size={20} />
            </Link>
            <Link to="/portfolio" className="bg-surface-light px-8 py-3 rounded-lg border border-white/10 hover:bg-white hover:text-black transition-all uppercase text-sm tracking-widest font-bold">
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={32} className="text-primary" />
            </motion.div>
        </div>
      </section>

      {/* Impact Stats on Pure Black */}
      <section className="py-20 border-y border-white/5 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {achievements.map((item, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                        <AnimatedCounter to={item.value} />
                        <span className="text-primary">{item.suffix}</span>
                    </div>
                    <p className="text-text-secondary uppercase text-[10px] tracking-widest font-bold">{item.label}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      <div className="bg-background space-y-32 py-32">
        {/* Featured Projects */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Recent Projects</h2>
              <div className="h-1.5 w-20 bg-primary mt-4 rounded-full"></div>
            </div>
            <Link to="/portfolio" className="hidden sm:flex items-center gap-2 text-primary hover:text-white transition-colors uppercase text-xs tracking-widest font-bold">
                View All <ArrowRight size={16} />
            </Link>
          </div>
          <motion.div 
            className="grid md:grid-cols-2 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredProjects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </section>

        {/* Research Highlights */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-right">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Research Impact</h2>
              <div className="h-1.5 w-20 bg-secondary mt-4 rounded-full ml-auto"></div>
            </div>
            <motion.div 
              className="grid md:grid-cols-2 gap-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {featuredResearch.map(project => (
                <ResearchCard key={project.slug} project={project} />
              ))}
            </motion.div>
        </section>

        {/* Video Feature */}
        <section className="bg-surface/30 border-y border-white/5 py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">STEM Knowledge Base</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">{youtubeChannel.name}</h2>
                        <p className="text-text-secondary text-lg mb-8 leading-relaxed font-light">{youtubeChannel.description}</p>
                        <a 
                            href={personalInfo.socials.youtube} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-natural"
                        >
                            Open YouTube <ArrowRight size={18} />
                        </a>
                    </div>
                    <div className="lg:w-1/2 w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                        <iframe 
                            src={youtubeChannel.featuredVideoUrl} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>

        {/* Honors Gallery */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Distinctions</h2>
                <div className="h-1.5 w-20 bg-primary mt-4 rounded-full mx-auto"></div>
            </div>
             <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
              {featuredAwards.map(award => (
                <AwardCard key={award.slug} award={award} />
              ))}
            </motion.div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Home;
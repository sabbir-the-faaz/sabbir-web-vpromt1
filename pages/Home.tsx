import React, { useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo, projects, awards, researchProjects } from '../constants';
import { ArrowRight, ChevronDown, FileText, Presentation, Trophy, Users, Briefcase, Languages, ExternalLink, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { containerVariants } from '../utils/animations';

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
    { icon: Trophy, value: 5, label: "Competition Wins", suffix: "+" },
    { icon: Users, value: 40, label: "Team Members Led", suffix: "+" },
    { icon: Briefcase, value: 3, label: "Business Case Wins", suffix: "+" },
    { icon: Languages, value: 7, label: "IELTS Band", suffix: "" },
  ];

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]);

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[95vh] flex items-center justify-center -mt-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale opacity-30"
          src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/95 via-background/80 to-background z-10"></div>
        
        <motion.div 
            style={{ opacity, scale }}
            className="relative z-20 text-center container mx-auto px-4 max-w-6xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-block p-1 rounded-full border border-white/10"
          >
            <img
                src={personalInfo.profilePicture}
                alt={personalInfo.name}
                className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-background object-cover grayscale"
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight leading-[1.1] text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Md. Sabbir <br />
            <span className="text-primary italic font-serif">Rahman Akash</span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-[10px] md:text-xs font-corporate font-bold text-text-secondary px-5 py-2 bg-white/5 rounded-full border border-white/5 uppercase tracking-[0.3em]">Engineer</span>
            <span className="text-[10px] md:text-xs font-corporate font-bold text-text-secondary px-5 py-2 bg-white/5 rounded-full border border-white/5 uppercase tracking-[0.3em]">Researcher</span>
            <span className="text-[10px] md:text-xs font-corporate font-bold text-text-secondary px-5 py-2 bg-white/5 rounded-full border border-white/5 uppercase tracking-[0.3em]">Strategist</span>
          </motion.div>

          <motion.div
             initial={{ y: 15, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6, duration: 0.8 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link to="/portfolio" className="w-full sm:w-auto bg-primary text-background font-corporate font-bold py-3.5 px-10 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-lg flex items-center justify-center group text-base tracking-wider uppercase">
              Portfolio <ArrowRight className="ml-3 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link to="/investments" className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white font-corporate font-bold py-3.5 px-10 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10 flex items-center justify-center text-base tracking-wider uppercase">
              Investments <ExternalLink className="ml-3" size={18} />
            </Link>
          </motion.div>
        </motion.div>

         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={32} className="text-text-muted/40" />
            </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative bg-surface border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              {achievements.map((item, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-white/5 group hover:border-primary/20 transition-all duration-300"
                >
                    <item.icon className="text-text-muted group-hover:text-primary transition-colors mb-4" size={24} strokeWidth={1.5} />
                    <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                        <AnimatedCounter to={item.value} />
                        <span className="text-primary italic">{item.suffix}</span>
                    </div>
                    <p className="text-[9px] text-text-muted uppercase tracking-[0.25em] font-bold">{item.label}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Main Content Areas */}
      <div className="space-y-32 py-32">
        
        {/* Portfolio Showcase */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-corporate font-bold tracking-[0.4em] text-[9px] uppercase block mb-3">Professional Body of Work</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight uppercase leading-none">Portfolio</h2>
              <p className="text-text-secondary text-lg font-light leading-relaxed">Bridging high-level research with industrial implementation through advanced AI and sustainable engineering.</p>
            </div>
            <Link to="/portfolio" className="text-primary font-corporate font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 group hover:gap-4 transition-all pb-1 border-b border-transparent hover:border-primary/50">
                View All Projects <ArrowRight size={18} />
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

        {/* Research Excellence */}
        <section className="bg-surface-light py-32 relative overflow-hidden border-y border-white/5">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full"></div>
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-primary font-corporate font-bold tracking-[0.4em] text-[9px] uppercase block mb-3">Academic Excellence</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight uppercase leading-none">Research</h2>
                        <p className="text-text-secondary text-lg font-light leading-relaxed max-w-2xl">Published research and advanced studies in automated grading systems and sustainable material processing.</p>
                    </div>
                    <Link to="/research" className="text-primary font-corporate font-bold text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2 group hover:gap-4 transition-all pb-1 border-b border-transparent hover:border-primary/50">
                        Publications Index <ArrowRight size={18} />
                    </Link>
                </div>
                <motion.div 
                    className="grid lg:grid-cols-2 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {featuredResearch.map(project => (
                        <ResearchCard key={project.slug} project={project} />
                    ))}
                </motion.div>
           </div>
        </section>

        {/* Honors & Recognitions */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-primary font-corporate font-bold tracking-[0.4em] text-[9px] uppercase block mb-3">Academic & Career Recognition</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight uppercase leading-none mb-6">Honors</h2>
                <div className="h-[2px] w-20 bg-primary/30 mx-auto rounded-full"></div>
            </div>
             <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              {featuredAwards.map(award => (
                <AwardCard key={award.slug} award={award} />
              ))}
            </motion.div>
            <div className="text-center mt-16">
                <Link to="/awards" className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-lg font-corporate font-bold text-[10px] tracking-[0.3em] hover:bg-white/10 transition-colors uppercase">
                    All Recognitions <ArrowRight size={18} className="text-primary" />
                </Link>
            </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-7xl font-display font-bold text-background mb-8 leading-[1] tracking-tight uppercase">Let's Establish <br/> A Partnership</h2>
                    <p className="text-background/90 max-w-2xl mx-auto mb-12 text-lg font-medium tracking-tight">Open for research collaboration, leadership roles, and Shariah-compliant investment ventures.</p>
                    <Link 
                        to="/contact" 
                        className="bg-background text-white font-corporate font-bold py-5 px-12 rounded-lg hover:bg-white hover:text-background transition-all duration-500 inline-flex items-center gap-3 text-base uppercase tracking-[0.2em] shadow-xl"
                    >
                        Contact Official <Mail size={22} />
                    </Link>
                </div>
            </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Home;
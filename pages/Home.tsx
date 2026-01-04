import React, { useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo, projects, awards, blogPosts, youtubeChannel, researchProjects } from '../constants';
import { ArrowRight, ChevronDown, FileText, Presentation, Trophy, Users, Briefcase, Languages, ExternalLink, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants } from '../utils/animations';

// Import reusable card components
import ProjectCard from '../components/ProjectCard';
import AwardCard from '../components/AwardCard';
import BlogPostCard from '../components/BlogPostCard';
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
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center -mt-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale opacity-40"
          src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/95 via-background/80 to-background z-10"></div>
        
        <motion.div 
            style={{ opacity, scale }}
            className="relative z-20 text-center container mx-auto px-4 max-w-6xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="mb-12 inline-block p-1 rounded-full border border-white/10"
          >
            <img
                src={personalInfo.profilePicture}
                alt={personalInfo.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-background object-cover grayscale"
            />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-[8rem] font-display font-black mb-8 tracking-tight leading-[0.85] text-white"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Md. Sabbir <br />
            <span className="text-primary italic font-serif">Rahman Akash</span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-xs md:text-sm font-corporate font-extrabold text-text-secondary px-6 py-2.5 bg-white/5 rounded-full border border-white/5 uppercase tracking-[0.25em]">Engineer</span>
            <span className="text-xs md:text-sm font-corporate font-extrabold text-text-secondary px-6 py-2.5 bg-white/5 rounded-full border border-white/5 uppercase tracking-[0.25em]">Researcher</span>
            <span className="text-xs md:text-sm font-corporate font-extrabold text-text-secondary px-6 py-2.5 bg-white/5 rounded-full border border-white/5 uppercase tracking-[0.25em]">Strategist</span>
          </motion.div>

          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6, duration: 0.8 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/portfolio" className="w-full sm:w-auto bg-primary text-background font-corporate font-black py-4.5 px-14 rounded-xl hover:bg-white hover:text-primary transition-all duration-500 shadow-xl flex items-center justify-center group text-lg tracking-wider">
              PORTFOLIO <ArrowRight className="ml-3 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link to="/investments" className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white font-corporate font-black py-4.5 px-14 rounded-xl hover:bg-white/10 transition-all duration-500 border border-white/10 flex items-center justify-center text-lg tracking-wider">
              INVESTMENTS <ExternalLink className="ml-3" size={20} />
            </Link>
          </motion.div>
        </motion.div>

         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={36} className="text-text-muted/30" />
            </motion.div>
        </div>
      </section>

      {/* Institutional Stats */}
      <section className="py-40 relative bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 md:gap-6">
              {achievements.map((item, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-background border border-white/5 group hover:border-primary/25 transition-all duration-500"
                >
                    <item.icon className="text-text-muted group-hover:text-primary transition-colors mb-6" size={30} strokeWidth={1.5} />
                    <div className="text-4xl md:text-5xl font-display font-black text-white mb-2">
                        <AnimatedCounter to={item.value} />
                        <span className="text-primary italic">{item.suffix}</span>
                    </div>
                    <p className="text-[10px] text-text-muted uppercase tracking-[0.3em] font-extrabold">{item.label}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Major Content Sections */}
      <div className="space-y-52 pb-52">
        
        {/* Portfolio Showcase */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-52">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-3xl">
              <span className="text-primary font-corporate font-black tracking-[0.5em] text-[10px] uppercase block mb-4">Industrial Applications</span>
              <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter uppercase leading-none">Portfolio</h2>
              <p className="text-text-secondary text-2xl font-light leading-relaxed">Synthesizing computer vision, edge intelligence, and sustainable methodologies to redefine industrial quality control.</p>
            </div>
            <Link to="/portfolio" className="text-primary font-corporate font-black text-sm uppercase tracking-[0.3em] inline-flex items-center gap-3 group hover:gap-5 transition-all">
                EXPLORE ALL WORKS <ArrowRight size={22} />
            </Link>
          </div>
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
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
        <section className="bg-surface-light py-52 relative overflow-hidden">
           <div className="absolute -top-60 -right-60 w-[35rem] h-[35rem] bg-primary/5 blur-[180px] rounded-full"></div>
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-3xl">
                        <span className="text-primary font-corporate font-black tracking-[0.5em] text-[10px] uppercase block mb-4">Scholarly Contributions</span>
                        <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter uppercase leading-none">Research</h2>
                        <p className="text-text-secondary text-2xl font-light leading-relaxed">Advancing the intersection of theoretical physics and applied material science in automated industrial ecosystems.</p>
                    </div>
                    <Link to="/research" className="text-primary font-corporate font-black text-sm uppercase tracking-[0.3em] inline-flex items-center gap-3 group hover:gap-5 transition-all">
                        PUBLICATIONS INDEX <ArrowRight size={22} />
                    </Link>
                </div>
                <motion.div 
                    className="grid lg:grid-cols-2 gap-12"
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
            <div className="text-center mb-24">
                <span className="text-primary font-corporate font-black tracking-[0.5em] text-[10px] uppercase block mb-4">Academic & Professional Merit</span>
                <h2 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter uppercase leading-none mb-6">Honors</h2>
                <div className="h-[3px] w-32 bg-primary/40 mx-auto rounded-full"></div>
            </div>
             <motion.div 
                className="grid md:grid-cols-3 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              {featuredAwards.map(award => (
                <AwardCard key={award.slug} award={award} />
              ))}
            </motion.div>
            <div className="text-center mt-24">
                <Link to="/awards" className="inline-flex items-center gap-5 bg-white/5 border border-white/10 px-12 py-6 rounded-[1.5rem] font-corporate font-black text-[11px] tracking-[0.4em] hover:bg-white/10 transition-colors uppercase">
                    VIEW ALL RECOGNITIONS <ArrowRight size={22} className="text-primary" />
                </Link>
            </div>
        </section>

        {/* Executive Call to Action */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-[4rem] p-20 md:p-40 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="relative z-10">
                    <h2 className="text-6xl md:text-[9rem] font-display font-black text-background mb-10 leading-[0.8] tracking-tighter uppercase">Let's Synthesize <br/> Excellence</h2>
                    <p className="text-background/90 max-w-3xl mx-auto mb-20 text-2xl font-medium tracking-tight">Available for high-stakes research collaborations, strategic leadership roles, and investment partnerships.</p>
                    <Link 
                        to="/contact" 
                        className="bg-background text-white font-corporate font-black py-7 px-20 rounded-[1.25rem] hover:bg-white hover:text-background transition-all duration-500 inline-flex items-center gap-4 text-xl uppercase tracking-[0.3em] shadow-2xl"
                    >
                        ESTABLISH CONTACT <Mail size={26} />
                    </Link>
                </div>
            </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Home;
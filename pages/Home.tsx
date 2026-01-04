import React, { useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo, projects, awards, blogPosts, youtubeChannel, researchProjects } from '../constants';
import { ArrowRight, ChevronDown, FileText, Presentation, Trophy, Users, Briefcase, Languages } from 'lucide-react';
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
  const featuredBlogPosts = blogPosts.slice(0, 2);

  const achievements = [
    { icon: FileText, value: 4, label: "Publications", suffix: "+" },
    { icon: Presentation, value: 40, label: "Presentations", suffix: "+" },
    { icon: Trophy, value: 5, label: "Competition Wins", suffix: "+" },
    { icon: Users, value: 40, label: "Team Members Led", suffix: "+" },
    { icon: Briefcase, value: 3, label: "Business Case Wins", suffix: "+" },
    { icon: Languages, value: 7, label: "IELTS Band", suffix: "" },
  ];

  const achievementsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: achievementsRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white -mt-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
        <div className="relative z-20 text-center container mx-auto px-4">
          <motion.img
            src={personalInfo.profilePicture}
            alt={personalInfo.name}
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-black mb-4 uppercase tracking-wider"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {personalInfo.title}
          </motion.p>
          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/contact" className="bg-primary text-background font-bold py-3 px-8 rounded-full hover:bg-secondary transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              Get in Touch <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
            >
                <ChevronDown size={48} className="text-white/50" />
            </motion.div>
        </div>
      </section>

      {/* Achievements by the Numbers */}
      <section 
        ref={achievementsRef}
        className="py-20 relative overflow-hidden"
      >
        <motion.div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
                backgroundImage: "url('https://i.imgur.com/Th0OGFa.png')",
                y: backgroundY,
            }}
        />
        <div className="absolute inset-0 z-10 bg-background/85"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Achievements by the Numbers</h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {achievements.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex flex-col items-center p-4">
                    <item.icon className="text-secondary mb-4" size={48} />
                    <div className="text-5xl font-display font-bold text-secondary">
                        <AnimatedCounter to={item.value} />
                        {item.suffix}
                    </div>
                    <p className="text-text-secondary mt-2 text-lg">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </section>

      {/* Sections Wrapper */}
      <div className="bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
          
          {/* Featured Projects */}
          <section>
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Featured Projects</h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {featuredProjects.map(project => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>
            <div className="text-center mt-12">
                <Link to="/portfolio" className="text-primary hover:underline text-lg">View all projects &rarr;</Link>
            </div>
          </section>

          {/* Featured Research */}
          <section>
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Featured Research</h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {featuredResearch.map(project => (
                <ResearchCard key={project.slug} project={project} />
              ))}
            </motion.div>
            <div className="text-center mt-12">
                <Link to="/research" className="text-primary hover:underline text-lg">View all research &rarr;</Link>
            </div>
          </section>

          {/* Featured Awards */}
          <section>
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Recent Awards</h2>
             <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
              {featuredAwards.map(award => (
                <AwardCard key={award.slug} award={award} />
              ))}
            </motion.div>
            <div className="text-center mt-12">
                <Link to="/awards" className="text-primary hover:underline text-lg">View all awards &rarr;</Link>
            </div>
          </section>
          
           {/* YouTube Channel */}
          <section className="bg-background rounded-lg p-8">
             <h2 className="text-4xl font-display font-bold mb-8 text-center">{youtubeChannel.name}</h2>
             <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
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
                <div className="md:w-1/2">
                    <p className="text-text-secondary mb-6">{youtubeChannel.description}</p>
                    <motion.a 
                        href={personalInfo.socials.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition-all duration-300 inline-flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Visit Channel <ArrowRight className="ml-2" />
                    </motion.a>
                </div>
             </div>
          </section>

          {/* Featured Blog Posts */}
          <section>
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Latest from the Blog</h2>
            <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
              {featuredBlogPosts.map(post => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </motion.div>
             <div className="text-center mt-12">
                <Link to="/blog" className="text-primary hover:underline text-lg">Read all posts &rarr;</Link>
            </div>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
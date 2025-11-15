
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { personalInfo, projects, awards, blogPosts, youtubeChannel } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  
  const featuredProjects = projects.slice(0, 2);
  const featuredAwards = awards.slice(0, 3);
  const featuredBlogPosts = blogPosts.slice(0, 2);

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
      </section>

      {/* Sections Wrapper */}
      <div className="bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          
          {/* Featured Projects */}
          <section>
            <h2 className="text-4xl font-display font-bold mb-8 text-center">Featured Projects</h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredProjects.map(project => (
                <motion.div key={project.slug} variants={itemVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center mt-8">
                <Link to="/portfolio" className="text-primary hover:underline">View all projects</Link>
            </div>
          </section>

          {/* Featured Awards */}
          <section>
            <h2 className="text-4xl font-display font-bold mb-8 text-center">Recent Awards</h2>
             <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              {featuredAwards.map(award => (
                <motion.div key={award.slug} variants={itemVariants}>
                  <AwardCard award={award} />
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center mt-8">
                <Link to="/awards" className="text-primary hover:underline">View all awards</Link>
            </div>
          </section>
          
           {/* YouTube Channel */}
          <section className="bg-background rounded-lg p-8">
             <h2 className="text-4xl font-display font-bold mb-8 text-center">{youtubeChannel.name}</h2>
             <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
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
                    <p className="text-text-secondary mb-4">{youtubeChannel.description}</p>
                    <a href={personalInfo.socials.youtube} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition-all duration-300 inline-flex items-center">
                        Visit Channel <ArrowRight className="ml-2" />
                    </a>
                </div>
             </div>
          </section>

          {/* Featured Blog Posts */}
          <section>
            <h2 className="text-4xl font-display font-bold mb-8 text-center">Latest from the Blog</h2>
            <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              {featuredBlogPosts.map(post => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <BlogPostCard post={post} />
                </motion.div>
              ))}
            </motion.div>
             <div className="text-center mt-8">
                <Link to="/blog" className="text-primary hover:underline">Read all posts</Link>
            </div>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};

// Sub-components for cards for better organization
const ProjectCard = ({ project }: { project: any }) => (
  <Link to={`/portfolio/${project.slug}`} className="block bg-background rounded-lg overflow-hidden group">
    <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-text-secondary text-sm">{project.description}</p>
    </div>
  </Link>
);

const AwardCard = ({ award }: { award: any }) => (
  <Link to={`/awards/${award.slug}`} className="block bg-background rounded-lg p-6 text-center group hover:bg-primary/10 transition-colors">
     <img src={award.image} alt={award.title} className="w-full h-32 object-contain mb-4" />
    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{award.title}</h3>
    <p className="text-text-secondary text-sm">{award.organization}</p>
  </Link>
);

const BlogPostCard = ({ post }: { post: any }) => (
  <Link to={`/blog/${post.slug}`} className="block bg-background rounded-lg overflow-hidden group">
    <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-6">
      <p className="text-sm text-text-secondary mb-2">{post.date} &bull; {post.category}</p>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
      <p className="text-text-secondary text-sm">{post.excerpt}</p>
    </div>
  </Link>
);


export default Home;

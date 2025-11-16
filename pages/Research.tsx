import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { researchProjects, publications } from '../constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ResearchProject, Publication } from '../types';
import { Link as LinkIcon } from 'lucide-react';
import ResearchCard from '../components/ResearchCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Research: React.FC = () => {

  const groupedPublications = publications.reduce((acc, pub) => {
    const type = pub.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(pub);
    return acc;
  }, {} as Record<Publication['type'], Publication[]>);
  
  const publicationOrder: Publication['type'][] = ['Journal', 'Conference', 'Poster Presentation'];

  return (
    <AnimatedPage>
      {/* Banner */}
      <div className="h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://i.imgur.com/74atleo.png')" }}>
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
            <h1 className="text-5xl font-display font-bold text-white">Research & Publications</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-display font-bold">Featured Research Projects</h2>
        </motion.div>
        <motion.div
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {researchProjects.map(project => (
            <ResearchCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>

      {/* Full Publication List */}
      <div className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-display font-bold">Full Publication List</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-12">
              {publicationOrder.map(type => (
                groupedPublications[type] && (
                  <div key={type}>
                    <h3 className="text-3xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">{type}s</h3>
                    <motion.ul
                      className="space-y-6"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {groupedPublications[type].map((pub, index) => (
                        <motion.li
                          key={index}
                          variants={itemVariants}
                          className="bg-surface p-6 rounded-lg shadow-md"
                        >
                          <p className="font-bold text-lg text-text-primary">{pub.title}</p>
                          <p className="text-text-secondary mt-1">{pub.details}</p>
                          {pub.link && (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-secondary hover:underline mt-2 inline-flex items-center gap-1 transition-colors"
                            >
                              View Publication <LinkIcon size={14} />
                            </a>
                          )}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                )
              ))}
            </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Research;
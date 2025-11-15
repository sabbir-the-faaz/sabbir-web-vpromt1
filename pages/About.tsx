
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { personalInfo, skills, timelineEvents, education, certifications, publications } from '../constants';
import { motion } from 'framer-motion';
import type { TimelineEvent, Education, Skill, Certification, Publication } from '../types';
// Fix: import CheckCircle icon.
import { Link, CheckCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const About: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-display font-bold text-primary mb-4">About Me</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A glimpse into my professional journey, skills, and background.
          </p>
        </motion.div>

        {/* Bio Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.img 
            src={personalInfo.profilePicture} 
            alt={personalInfo.name} 
            className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="md:w-2/3"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Professional Summary</h2>
            <p className="text-text-secondary leading-relaxed">{personalInfo.bio}</p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-12">My Skill Set</h2>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skills.map(skill => <SkillBar key={skill.name} skill={skill} />)}
            </motion.div>
        </section>
        
        {/* Experience Timeline */}
        <section className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-12">Experience & Leadership</h2>
            <div className="relative border-l-2 border-primary/30 ml-6 md:ml-0">
                {timelineEvents.map((event, index) => <TimelineItem key={index} event={event} isLast={index === timelineEvents.length - 1} />)}
            </div>
        </section>
        
        {/* Education Section */}
        <section className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-12">Education</h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {education.map((edu, index) => <EducationCard key={index} education={edu} />)}
            </motion.div>
        </section>
        
        {/* Certifications and Publications */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-3xl font-bold text-center mb-8">Certifications</h3>
                <motion.ul 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {certifications.map((cert, i) => <CertificationItem key={i} certification={cert} />)}
                </motion.ul>
            </div>
            <div>
                <h3 className="text-3xl font-bold text-center mb-8">Publications</h3>
                <motion.ul 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {publications.map((pub, i) => <PublicationItem key={i} publication={pub} />)}
                </motion.ul>
            </div>
        </section>

      </div>
    </AnimatedPage>
  );
};

// Fix: Use React.FC to correctly type props and allow for React's special `key` prop.
const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <motion.div variants={itemVariants}>
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-text-primary">{skill.name}</span>
            <span className="text-sm font-medium text-primary">{skill.level}%</span>
        </div>
        <div className="w-full bg-background rounded-full h-2.5">
            <motion.div 
                className="bg-primary h-2.5 rounded-full" 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>
    </motion.div>
);

// Fix: Use React.FC to correctly type props and allow for React's special `key` prop.
const TimelineItem: React.FC<{ event: TimelineEvent, isLast: boolean }> = ({ event, isLast }) => (
    <motion.div 
        className={`pl-12 relative ${!isLast ? 'pb-12' : ''}`}
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div className="absolute -left-[23px] top-0 bg-surface p-2 rounded-full border-2 border-primary/50">
            <event.icon className="text-primary" size={24} />
        </div>
        <p className="text-sm text-text-secondary">{event.duration}</p>
        <h3 className="text-xl font-bold text-primary">{event.title}</h3>
        <p className="font-semibold text-text-primary mb-2">{event.subtitle}</p>
        <p className="text-text-secondary">{event.description}</p>
        {event.image && <img src={event.image} alt={event.title} className="mt-4 rounded-lg w-full max-w-sm" />}
    </motion.div>
);

// Fix: Use React.FC to correctly type props and allow for React's special `key` prop.
const EducationCard: React.FC<{ education: Education }> = ({ education }) => (
    <motion.div 
        className="bg-surface p-8 rounded-lg"
        variants={itemVariants}
    >
        <h3 className="text-2xl font-bold text-primary">{education.institution}</h3>
        <p className="font-semibold text-text-primary mb-1">{education.degree}</p>
        <p className="text-sm text-text-secondary mb-4">{education.duration}</p>
        <ul className="list-disc list-inside space-y-1 text-text-secondary mb-4">
            {education.details.map((detail, i) => <li key={i}>{detail}</li>)}
        </ul>
        {education.thesisTitle && (
            <p><strong className="text-text-primary">Thesis:</strong> {education.thesisTitle}</p>
        )}
    </motion.div>
);

// Fix: Use React.FC to correctly type props and allow for React's special `key` prop.
const CertificationItem: React.FC<{ certification: Certification }> = ({ certification }) => (
    <motion.li 
        className="bg-surface p-4 rounded-lg flex items-center gap-4"
        variants={itemVariants}
    >
        <CheckCircle className="text-primary flex-shrink-0" />
        <div>
            <p className="font-bold">{certification.name}</p>
            <p className="text-sm text-text-secondary">{certification.issuer} - {certification.date}</p>
        </div>
    </motion.li>
);

// Fix: Use React.FC to correctly type props and allow for React's special `key` prop.
const PublicationItem: React.FC<{ publication: Publication }> = ({ publication }) => (
    <motion.li 
        className="bg-surface p-4 rounded-lg"
        variants={itemVariants}
    >
        <p className="font-bold">{publication.title}</p>
        <p className="text-sm text-text-secondary">{publication.details}</p>
        {publication.link && (
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mt-1 inline-flex items-center gap-1">
                Read More <Link size={14}/>
            </a>
        )}
    </motion.li>
);

export default About;

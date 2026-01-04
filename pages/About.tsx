
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { personalInfo, technicalSkills, professionalSkills, timelineEvents, education, certifications, publications } from '../constants';
import { motion } from 'framer-motion';
import type { TimelineEvent, Education, Skill, Certification, Publication } from '../types';
import { Link as LinkIcon, CheckCircle, Code, Users, Star } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const getYear = (dateString: string): number => {
    if (!dateString) return 0;
    const yearMatch = dateString.match(/\d{4}/);
    return yearMatch ? parseInt(yearMatch[0], 10) : 0;
};

const getSortableDate = (duration: string): { end: number, start: number } => {
    const parts = duration.split(' - ');
    const startPart = parts[0];
    const endPart = parts.length > 1 ? parts[1] : startPart;

    let endYear;
    if (endPart.toLowerCase().includes('continuing') || endPart.toLowerCase().includes('present')) {
        endYear = new Date().getFullYear() + 1; // Future year to always be on top
    } else {
        endYear = getYear(endPart);
    }
    
    const startYear = getYear(startPart);

    return { end: endYear, start: startYear };
};


const About: React.FC = () => {
  const professionalEvents = timelineEvents
    .filter(event => event.type === 'Career' || event.type === 'Teaching' || event.type === 'Research')
    .sort((a, b) => {
        const dateA = getSortableDate(a.duration);
        const dateB = getSortableDate(b.duration);
        if (dateB.end !== dateA.end) {
            return dateB.end - dateA.end;
        }
        return dateB.start - dateA.start;
    });

  const leadershipEvents = timelineEvents
    .filter(event => event.type === 'Leadership')
    .sort((a, b) => {
        const dateA = getSortableDate(a.duration);
        const dateB = getSortableDate(b.duration);
        if (dateB.end !== dateA.end) {
            return dateB.end - dateA.end;
        }
        return dateB.start - dateA.start;
    });
  
  return (
    <AnimatedPage>
       {/* Banner */}
      <div className="h-64 bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://i.imgur.com/du9IEPR.jpeg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl font-display font-bold text-white">About Me</h1>
            <p className="text-xl text-text-secondary mt-2 max-w-3xl">
              A glimpse into my professional journey, skills, and background.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            <p className="text-text-secondary leading-relaxed text-lg">{personalInfo.bio}</p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold mb-4">My Skill Set</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">Combining technical precision in Engineering & AI with strategic expertise in Business Development & Leadership.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Technical Skills - Progress Bars */}
                <div className="bg-surface p-8 rounded-2xl border border-white/5">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-primary">
                        <Code className="text-primary" size={28} /> Technical Expertise
                    </h3>
                    <motion.div 
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {technicalSkills.map(skill => (
                            <SkillBar key={skill.name} skill={skill} colorClass="bg-primary" textClass="text-primary" />
                        ))}
                    </motion.div>
                </div>

                {/* Professional Skills - Grid Cards */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-secondary ml-2">
                         <Star className="text-secondary" size={28} /> Professional & Soft Skills
                    </h3>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {professionalSkills.map(skill => (
                             <motion.div 
                                key={skill.name}
                                variants={itemVariants} 
                                className="bg-surface border border-secondary/10 p-6 rounded-xl flex flex-col gap-3 hover:border-secondary/50 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-secondary/10 group"
                                whileHover={{ y: -5 }}
                             >
                                <div className="flex items-center justify-between">
                                    {skill.icon ? (
                                        <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-background transition-colors">
                                            <skill.icon size={24} />
                                        </div>
                                    ) : (
                                        <div className="p-3 bg-secondary/10 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-background transition-colors">
                                             <CheckCircle size={24} />
                                        </div>
                                    )}
                                    <span className="text-sm font-bold text-secondary">{skill.level}%</span>
                                </div>
                                <h4 className="font-bold text-text-primary text-lg leading-tight mt-2">{skill.name}</h4>
                                <div className="w-full bg-background rounded-full h-1 mt-auto">
                                    <div className="bg-secondary h-1 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
        
        {/* Professional Experience Timeline */}
        <section className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-12">Professional Experience</h2>
            <div className="relative border-l-2 border-primary/30 ml-6 md:max-w-3xl md:mx-auto">
                {professionalEvents.map((event, index) => <TimelineItem key={index} event={event} isLast={index === professionalEvents.length - 1} />)}
            </div>
        </section>
        
        {/* Club & Leadership Experience */}
        <section className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-12">Club & Leadership Experience</h2>
            <div className="relative border-l-2 border-primary/30 ml-6 md:max-w-3xl md:mx-auto">
                {leadershipEvents.map((event, index) => <TimelineItem key={index} event={event} isLast={index === leadershipEvents.length - 1} />)}
            </div>
        </section>
        
        {/* Education Section */}
        <section className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-12">Education</h2>
            <motion.div
                className="max-w-3xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {education.map((edu, index) => <EducationCard key={index} education={edu} />)}
            </motion.div>
        </section>
        
        {/* Certifications and Publications */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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

interface SkillBarProps {
    skill: Skill;
    colorClass?: string;
    textClass?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, colorClass = "bg-primary", textClass = "text-primary" }) => (
    <motion.div variants={itemVariants}>
        <div className="flex justify-between mb-2">
            <span className="text-base font-medium text-text-primary">{skill.name}</span>
            <span className={`text-sm font-bold ${textClass}`}>{skill.level}%</span>
        </div>
        <div className="w-full bg-black/30 rounded-full h-3 border border-white/5">
            <motion.div 
                className={`h-3 rounded-full ${colorClass} shadow-[0_0_10px_rgba(0,163,255,0.5)]`} 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
        </div>
    </motion.div>
);

const TimelineItem: React.FC<{ event: TimelineEvent, isLast: boolean }> = ({ event, isLast }) => (
    <motion.div 
        className={`pl-12 relative ${!isLast ? 'pb-12' : ''}`}
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div className="absolute -left-[23px] top-0 bg-surface p-2 rounded-full border-2 border-primary/50 shadow-lg shadow-primary/20">
            <event.icon className="text-primary" size={24} />
        </div>
        <p className="text-sm text-secondary font-bold mb-1">{event.duration}</p>
        <h3 className="text-xl font-bold text-text-primary">{event.title}</h3>
        <p className="font-medium text-primary/80 mb-3">{event.subtitle}</p>
        <p className="text-text-secondary">{event.description}</p>
        {event.image && <img src={event.image} alt={event.title} className="mt-4 rounded-lg w-full max-w-sm border border-white/10 shadow-lg" />}
    </motion.div>
);

const EducationCard: React.FC<{ education: Education }> = ({ education }) => (
    <motion.div 
        className="bg-surface p-8 rounded-xl border border-white/5 shadow-lg"
        variants={itemVariants}
    >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
             <h3 className="text-2xl font-bold text-primary">{education.institution}</h3>
             <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold w-fit mt-2 md:mt-0">{education.duration}</span>
        </div>
        
        <p className="font-bold text-xl text-text-primary mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-secondary" /> {education.degree}
        </p>
        
        <ul className="space-y-2 text-text-secondary mb-6">
            {education.details.map((detail, i) => <li key={i} className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>{detail}</li>)}
        </ul>
        {education.thesisTitle && (
            <div className="bg-black/20 p-4 rounded-lg border-l-4 border-secondary">
                <p className="text-sm text-secondary font-bold uppercase mb-1">Thesis</p>
                <p className="text-text-primary italic">"{education.thesisTitle}"</p>
            </div>
        )}
    </motion.div>
);

const CertificationItem: React.FC<{ certification: Certification }> = ({ certification }) => (
    <motion.li 
        className="bg-surface p-4 rounded-lg flex items-center gap-4 border border-white/5 hover:border-primary/30 transition-colors"
        variants={itemVariants}
    >
        <CheckCircle className="text-primary flex-shrink-0" />
        <div>
            <p className="font-bold text-text-primary">{certification.name}</p>
            <p className="text-sm text-text-secondary">{certification.issuer} <span className="text-white/20 mx-1">|</span> {certification.date}</p>
        </div>
    </motion.li>
);

const PublicationItem: React.FC<{ publication: Publication }> = ({ publication }) => (
    <motion.li 
        className="bg-surface p-4 rounded-lg border border-white/5 hover:border-secondary/30 transition-colors"
        variants={itemVariants}
    >
        <div className="flex items-start justify-between gap-4">
             <p className="font-bold text-text-primary">{publication.title}</p>
             <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20 whitespace-nowrap">{publication.type}</span>
        </div>
       
        <p className="text-sm text-text-secondary mt-2">{publication.details}</p>
        {publication.link && (
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:underline mt-2 inline-flex items-center gap-1 font-medium">
                Read More <LinkIcon size={14}/>
            </a>
        )}
    </motion.li>
);

export default About;

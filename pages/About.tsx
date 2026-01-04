import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { personalInfo, technicalSkills, professionalSkills, timelineEvents, education, certifications, publications } from '../constants';
import { motion } from 'framer-motion';
import type { TimelineEvent, Education, Skill, Certification, Publication } from '../types';
import { CheckCircle, Code, Star, ExternalLink, Mail, Phone, Briefcase, GraduationCap } from 'lucide-react';
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
        endYear = new Date().getFullYear() + 1;
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
       {/* Prestige Header */}
      <section className="relative pt-36 pb-20 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 blur-[180px] rounded-full -mr-64 -mt-64"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white uppercase tracking-tight leading-[0.9] mb-8">
                    Credentials & <br />
                    <span className="text-primary italic font-serif">Expertise</span>
                </h1>
            </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Biography Block */}
        <section className="grid lg:grid-cols-12 gap-16 mb-40 items-start">
          <motion.div 
            className="lg:col-span-5"
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-28">
                <div className="relative group p-1 rounded-3xl border border-white/10 bg-surface shadow-2xl">
                    <img 
                        src={personalInfo.profilePicture} 
                        alt={personalInfo.name} 
                        className="w-full aspect-square object-cover rounded-[1.25rem] grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                </div>
                
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ContactCard icon={Mail} label="Professional Email" value={personalInfo.contact.email} />
                    <ContactCard icon={Phone} label="Direct Contact" value={personalInfo.contact.phone} />
                </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-[9px] font-corporate font-bold tracking-[0.5em] text-primary uppercase mb-6 border-l border-primary/40 pl-4">Professional Overview</h2>
            <div className="space-y-8">
                 {personalInfo.bio.split('. ').map((sentence, idx) => (
                     <p key={idx} className="text-text-secondary leading-relaxed text-[1.4rem] md:text-[1.6rem] font-light font-sans tracking-tight">
                        {sentence}{idx !== personalInfo.bio.split('. ').length - 1 ? '.' : ''}
                     </p>
                 ))}
            </div>
            
            <div className="mt-16 pt-16 border-t border-white/5 flex flex-wrap gap-4">
                <a 
                    href={personalInfo.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-corporate font-bold text-[11px] tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-3 uppercase"
                >
                    LinkedIn <ExternalLink size={16} className="text-primary" />
                </a>
                <a 
                    href="#/contact" 
                    className="px-8 py-4 bg-primary text-background rounded-lg font-corporate font-bold hover:bg-white transition-all uppercase tracking-[0.2em] text-[11px]"
                >
                    Contact Official
                </a>
            </div>
          </motion.div>
        </section>

        {/* Competencies Section */}
        <section className="mb-40">
            <div className="text-center mb-24">
                <span className="text-primary font-corporate font-bold tracking-[0.4em] text-[9px] uppercase block mb-3">Professional Toolkit</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-4">Competencies</h2>
                <div className="h-[2px] w-20 bg-primary/25 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Technical Domain */}
                <div className="bg-surface rounded-3xl p-12 border border-white/5 relative group shadow-xl overflow-hidden">
                    <div className="absolute -top-10 -right-10 p-12 text-primary/5 group-hover:text-primary/10 transition-all duration-700">
                        <Code size={140} strokeWidth={1} />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-12 text-white flex items-center gap-3">
                         <div className="p-2.5 bg-primary/10 rounded-lg text-primary"><Code size={20} /></div> TECHNICAL DOMAIN
                    </h3>
                    <motion.div 
                        className="space-y-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {technicalSkills.map(skill => (
                            <SkillBar key={skill.name} skill={skill} colorClass="bg-primary" />
                        ))}
                    </motion.div>
                </div>

                {/* Professional Domain */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-display font-bold mb-12 text-white flex items-center gap-3 ml-4">
                         <div className="p-2.5 bg-secondary/10 rounded-lg text-secondary"><Star size={20} /></div> STRATEGIC LEADERSHIP
                    </h3>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {professionalSkills.map(skill => (
                             <motion.div 
                                key={skill.name}
                                variants={itemVariants} 
                                className="bg-surface border border-white/5 p-8 rounded-2xl flex flex-col gap-5 hover:border-secondary/30 transition-all duration-700 shadow-lg group"
                             >
                                <div className="p-4 bg-background border border-white/5 rounded-xl text-text-muted group-hover:text-secondary group-hover:bg-secondary/10 transition-all duration-500 w-fit">
                                    {skill.icon ? <skill.icon size={28} strokeWidth={1.5} /> : <CheckCircle size={28} strokeWidth={1.5} />}
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-white text-xl mb-1 leading-tight tracking-tight">{skill.name}</h4>
                                    <span className="text-[9px] font-corporate font-bold text-text-muted uppercase tracking-[0.2em] opacity-60">Level: {skill.level}%</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
        
        {/* Career & Impact Split */}
        <section className="grid lg:grid-cols-2 gap-20 mb-40">
            <div className="space-y-16">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary"><Briefcase size={28} strokeWidth={1.5}/></div>
                    <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tighter">Career Path</h2>
                </div>
                <div className="space-y-12">
                    {professionalEvents.map((event, index) => <TimelineItem key={index} event={event} color="text-primary" />)}
                </div>
            </div>
            <div className="space-y-16">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/10 rounded-xl text-secondary"><Star size={28} strokeWidth={1.5}/></div>
                    <h2 className="text-4xl font-display font-bold text-white uppercase tracking-tighter">Leadership</h2>
                </div>
                <div className="space-y-12">
                    {leadershipEvents.map((event, index) => <TimelineItem key={index} event={event} color="text-secondary" />)}
                </div>
            </div>
        </section>
        
        {/* Educational Credentials */}
        <section className="mb-40">
            <div className="text-center mb-20">
                <span className="text-primary font-corporate font-bold tracking-[0.4em] text-[9px] uppercase block mb-3">Academic Foundations</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-4">Education</h2>
                <div className="h-[2px] w-20 bg-primary/25 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
                {education.map((edu, index) => <EducationCard key={index} education={edu} />)}
            </div>
        </section>
        
        {/* Final Scholarly Lists */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto pb-40">
            <div className="bg-surface rounded-3xl p-10 border border-white/5 shadow-xl">
                <h3 className="text-2xl font-display font-bold text-white mb-10 uppercase italic tracking-tight flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-primary"></div> Certifications
                </h3>
                <motion.div className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {certifications.map((cert, i) => <CertificationItem key={i} certification={cert} />)}
                </motion.div>
            </div>
            <div className="bg-surface rounded-3xl p-10 border border-white/5 shadow-xl">
                <h3 className="text-2xl font-display font-bold text-white mb-10 uppercase italic tracking-tight flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-secondary"></div> Publications
                </h3>
                <motion.div className="space-y-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {publications.map((pub, i) => <PublicationItem key={i} publication={pub} />)}
                </motion.div>
            </div>
        </section>

      </div>
    </AnimatedPage>
  );
};

const ContactCard: React.FC<{ icon: any, label: string, value: string }> = ({ icon: Icon, label, value }) => (
    <div className="bg-surface-light border border-white/5 p-5 rounded-2xl group hover:border-primary/40 transition-all duration-500 shadow-md">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-1.5 bg-primary/10 rounded-md text-primary">
                <Icon size={14} />
            </div>
            <span className="text-[9px] font-corporate font-bold uppercase tracking-[0.3em] text-text-muted">{label}</span>
        </div>
        <p className="text-base font-medium text-white/90 truncate font-sans">{value}</p>
    </div>
);

const SkillBar: React.FC<{ skill: Skill, colorClass: string }> = ({ skill, colorClass }) => (
    <motion.div variants={itemVariants}>
        <div className="flex justify-between mb-4 items-end">
            <span className="text-lg font-display font-bold text-white/95 tracking-tight">{skill.name}</span>
            <span className="text-[10px] font-corporate font-bold text-primary tracking-[0.2em]">{skill.level}% Mastery</span>
        </div>
        <div className="w-full bg-background rounded-full h-[2px] relative overflow-hidden border border-white/5">
            <motion.div 
                className={`h-full rounded-full ${colorClass} shadow-[0_0_15px_rgba(0,163,255,0.3)]`} 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
        </div>
    </motion.div>
);

const TimelineItem: React.FC<{ event: TimelineEvent, color: string }> = ({ event, color }) => (
    <motion.div 
        className="group relative pl-12 border-l border-white/5 transition-all duration-500 hover:border-white/20"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-background rounded-full border border-white/20 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-md"></div>
        <div className="mb-2">
            <span className={`text-[9px] font-corporate font-bold uppercase tracking-[0.3em] ${color} bg-white/5 px-3 py-1 rounded-full border border-white/5`}>{event.duration}</span>
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-1 leading-tight group-hover:text-primary transition-colors">{event.title}</h3>
        <p className="font-corporate font-bold text-text-muted text-[10px] mb-4 uppercase tracking-[0.2em]">{event.subtitle}</p>
        <p className="text-text-secondary leading-relaxed mb-6 text-lg font-light font-sans">{event.description}</p>
        {event.image && (
            <div className="overflow-hidden rounded-2xl border border-white/10 group-hover:border-primary/20 shadow-xl transition-all duration-700">
                <img src={event.image} alt={event.title} className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
        )}
    </motion.div>
);

const EducationCard: React.FC<{ education: Education }> = ({ education }) => (
    <motion.div 
        className="bg-surface p-12 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl relative group overflow-hidden"
        variants={itemVariants}
    >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-8">
             <div className="relative z-10">
                <div className="p-4 bg-background border border-white/5 rounded-2xl text-primary w-fit mb-8 shadow-inner"><GraduationCap size={36} strokeWidth={1.2}/></div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white uppercase leading-[1.1] tracking-tighter">{education.institution}</h3>
                <p className="text-primary font-display italic font-bold text-xl mt-4">{education.degree}</p>
             </div>
             <span className="bg-background border border-white/5 text-white/80 px-6 py-2 rounded-full text-[10px] font-corporate font-bold uppercase tracking-[0.3em] h-fit shadow-md mt-2">{education.duration}</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
                 <ul className="space-y-5">
                    {education.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-4 text-text-secondary">
                            <span className="mt-2.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                            <span className="text-lg leading-relaxed font-sans font-light">{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {education.thesisTitle && (
                <div className="bg-background/40 p-10 rounded-[2rem] border border-white/5 h-fit relative shadow-inner">
                    <p className="text-[9px] text-secondary font-corporate font-bold uppercase tracking-[0.4em] mb-5">Thesis Research</p>
                    <p className="text-white italic text-[1.5rem] leading-[1.3] font-display font-bold">"{education.thesisTitle}"</p>
                </div>
            )}
        </div>
    </motion.div>
);

const CertificationItem: React.FC<{ certification: Certification }> = ({ certification }) => (
    <motion.div 
        className="bg-background border border-white/5 p-6 rounded-2xl flex items-center gap-6 hover:border-primary/20 transition-all duration-500 group shadow-lg"
        variants={itemVariants}
    >
        <div className="p-4 bg-surface rounded-xl group-hover:text-primary transition-all duration-500">
            <CheckCircle size={22} strokeWidth={1.5} />
        </div>
        <div>
            <p className="font-display font-bold text-white text-xl leading-tight">{certification.name}</p>
            <p className="text-[9px] text-text-muted font-corporate font-bold uppercase tracking-[0.2em] mt-2">{certification.issuer} • {certification.date}</p>
        </div>
    </motion.div>
);

const PublicationItem: React.FC<{ publication: Publication }> = ({ publication }) => (
    <motion.div 
        className="bg-background border border-white/5 p-8 rounded-2xl hover:border-secondary/30 transition-all duration-500 group shadow-lg"
        variants={itemVariants}
    >
        <div className="flex items-start justify-between gap-4 mb-4">
             <h4 className="font-display font-bold text-white text-xl leading-[1.3] group-hover:text-secondary transition-colors duration-500">{publication.title}</h4>
             <span className="text-[8px] bg-surface text-text-muted px-2.5 py-1 rounded-full border border-white/5 font-corporate font-bold tracking-[0.3em] uppercase whitespace-nowrap">{publication.type}</span>
        </div>
        <p className="text-base text-text-secondary leading-relaxed mb-6 italic font-sans font-light">{publication.details}</p>
        {publication.link && (
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-[9px] text-secondary font-corporate font-bold tracking-[0.3em] hover:text-white transition-all duration-500 flex items-center gap-2 uppercase">
                Access Resource <ExternalLink size={14}/>
            </a>
        )}
    </motion.div>
);

export default About;
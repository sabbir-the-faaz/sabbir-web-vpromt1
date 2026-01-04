import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { personalInfo, technicalSkills, professionalSkills, timelineEvents, education, certifications, publications } from '../constants';
import { motion } from 'framer-motion';
import type { TimelineEvent, Education, Skill, Certification, Publication } from '../types';
import { Link as LinkIcon, CheckCircle, Code, Star, ExternalLink, Mail, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';
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
      <section className="relative pt-44 pb-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-primary/5 blur-[200px] rounded-full -mr-72 -mt-72"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-7xl md:text-[10rem] font-display font-black text-white uppercase tracking-tight leading-[0.85] mb-12">
                    Expertise & <br />
                    <span className="text-primary italic font-serif">Credentials</span>
                </h1>
            </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Biography Block */}
        <section className="grid lg:grid-cols-12 gap-20 mb-48 items-start">
          <motion.div 
            className="lg:col-span-5"
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-32">
                <div className="relative group p-1.5 rounded-[3rem] border border-white/10 bg-surface shadow-2xl">
                    <img 
                        src={personalInfo.profilePicture} 
                        alt={personalInfo.name} 
                        className="w-full aspect-square object-cover rounded-[2.75rem] grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                    />
                </div>
                
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <ContactCard icon={Mail} label="Official Email" value={personalInfo.contact.email} />
                    <ContactCard icon={Phone} label="Contact Line" value={personalInfo.contact.phone} />
                </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-[10px] font-corporate font-black tracking-[0.6em] text-primary uppercase mb-8 border-l-2 border-primary/40 pl-4">Executive Brief</h2>
            <div className="space-y-10">
                 {personalInfo.bio.split('. ').map((sentence, idx) => (
                     <p key={idx} className="text-text-secondary leading-relaxed text-[1.65rem] font-light font-sans tracking-tight">
                        {sentence}{idx !== personalInfo.bio.split('. ').length - 1 ? '.' : ''}
                     </p>
                 ))}
            </div>
            
            <div className="mt-20 pt-20 border-t border-white/5 flex flex-wrap gap-5">
                <a 
                    href={personalInfo.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-10 py-5 bg-white/5 border border-white/10 rounded-[1.25rem] font-corporate font-extrabold text-[12px] tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-3 uppercase"
                >
                    Professional Network <ExternalLink size={18} className="text-primary" />
                </a>
                <a 
                    href="#/contact" 
                    className="px-10 py-5 bg-primary text-background rounded-[1.25rem] font-corporate font-black hover:bg-white transition-all uppercase tracking-[0.3em] text-[12px]"
                >
                    Secure Consultation
                </a>
            </div>
          </motion.div>
        </section>

        {/* Global Competencies Section */}
        <section className="mb-48">
            <div className="text-center mb-28">
                <span className="text-primary font-corporate font-black tracking-[0.5em] text-[10px] uppercase block mb-4">Competency Map</span>
                <h2 className="text-5xl md:text-[6rem] font-display font-black text-white uppercase tracking-tighter mb-6">Toolkit</h2>
                <div className="h-[2px] w-24 bg-primary/30 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Technical Domain */}
                <div className="bg-surface rounded-[3.5rem] p-16 border border-white/5 relative group shadow-2xl overflow-hidden">
                    <div className="absolute -top-10 -right-10 p-12 text-primary/5 group-hover:text-primary/10 transition-all duration-700">
                        <Code size={180} strokeWidth={1} />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-14 text-white flex items-center gap-4">
                         <div className="p-3 bg-primary/10 rounded-xl text-primary"><Code size={24} /></div> TECHNICAL INFRASTRUCTURE
                    </h3>
                    <motion.div 
                        className="space-y-12"
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
                    <h3 className="text-2xl font-display font-bold mb-14 text-white flex items-center gap-4 ml-6">
                         <div className="p-3 bg-secondary/10 rounded-xl text-secondary"><Star size={24} /></div> STRATEGIC LEADERSHIP
                    </h3>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-7"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {professionalSkills.map(skill => (
                             <motion.div 
                                key={skill.name}
                                variants={itemVariants} 
                                className="bg-surface border border-white/5 p-10 rounded-[2.5rem] flex flex-col gap-6 hover:border-secondary/30 transition-all duration-700 shadow-xl group"
                             >
                                <div className="p-5 bg-background border border-white/5 rounded-2xl text-text-muted group-hover:text-secondary group-hover:bg-secondary/10 group-hover:border-secondary/20 transition-all duration-700 w-fit shadow-inner">
                                    {skill.icon ? <skill.icon size={36} strokeWidth={1.5} /> : <CheckCircle size={36} strokeWidth={1.5} />}
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-white text-2xl mb-2 leading-tight tracking-tight">{skill.name}</h4>
                                    <span className="text-[10px] font-corporate font-black text-text-muted uppercase tracking-[0.3em] opacity-60">Level: {skill.level}% Mastery</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
        
        {/* Professional History Split */}
        <section className="grid lg:grid-cols-2 gap-24 mb-48">
            <div className="space-y-20">
                <div className="flex items-center gap-5">
                    <div className="p-4 bg-primary/10 rounded-2xl text-primary shadow-lg"><Briefcase size={32} strokeWidth={1.5}/></div>
                    <h2 className="text-5xl font-display font-black text-white uppercase tracking-tighter">Career</h2>
                </div>
                <div className="space-y-16">
                    {professionalEvents.map((event, index) => <TimelineItem key={index} event={event} color="text-primary" />)}
                </div>
            </div>
            <div className="space-y-20">
                <div className="flex items-center gap-5">
                    <div className="p-4 bg-secondary/10 rounded-2xl text-secondary shadow-lg"><Star size={32} strokeWidth={1.5}/></div>
                    <h2 className="text-5xl font-display font-black text-white uppercase tracking-tighter">Impact</h2>
                </div>
                <div className="space-y-16">
                    {leadershipEvents.map((event, index) => <TimelineItem key={index} event={event} color="text-secondary" />)}
                </div>
            </div>
        </section>
        
        {/* Educational Credentials */}
        <section className="mb-48">
            <div className="text-center mb-24">
                <span className="text-primary font-corporate font-black tracking-[0.5em] text-[10px] uppercase block mb-4">Academic Background</span>
                <h2 className="text-5xl md:text-8xl font-display font-black text-white uppercase tracking-tighter mb-6">Education</h2>
                <div className="h-[2px] w-24 bg-primary/30 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-5xl mx-auto">
                {education.map((edu, index) => <EducationCard key={index} education={edu} />)}
            </div>
        </section>
        
        {/* Verification & Scholarly Lists */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto pb-48">
            <div className="bg-surface rounded-[3rem] p-14 border border-white/5 shadow-2xl">
                <h3 className="text-3xl font-display font-bold text-white mb-14 uppercase italic tracking-tight flex items-center gap-4">
                    <div className="w-10 h-[2px] bg-primary"></div> Certifications
                </h3>
                <motion.div className="space-y-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {certifications.map((cert, i) => <CertificationItem key={i} certification={cert} />)}
                </motion.div>
            </div>
            <div className="bg-surface rounded-[3rem] p-14 border border-white/5 shadow-2xl">
                <h3 className="text-3xl font-display font-bold text-white mb-14 uppercase italic tracking-tight flex items-center gap-4">
                    <div className="w-10 h-[2px] bg-secondary"></div> Publications
                </h3>
                <motion.div className="space-y-5" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {publications.map((pub, i) => <PublicationItem key={i} publication={pub} />)}
                </motion.div>
            </div>
        </section>

      </div>
    </AnimatedPage>
  );
};

const ContactCard: React.FC<{ icon: any, label: string, value: string }> = ({ icon: Icon, label, value }) => (
    <div className="bg-surface-light border border-white/5 p-6 rounded-[1.75rem] group hover:border-primary/40 transition-all duration-500 shadow-xl">
        <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                <Icon size={16} />
            </div>
            <span className="text-[10px] font-corporate font-black uppercase tracking-[0.3em] text-text-muted">{label}</span>
        </div>
        <p className="text-[1.1rem] font-medium text-white/90 truncate font-sans">{value}</p>
    </div>
);

const SkillBar: React.FC<{ skill: Skill, colorClass: string }> = ({ skill, colorClass }) => (
    <motion.div variants={itemVariants}>
        <div className="flex justify-between mb-5 items-end">
            <span className="text-[1.4rem] font-display font-bold text-white/95 tracking-tight">{skill.name}</span>
            <span className="text-[11px] font-corporate font-black text-primary tracking-[0.3em]">{skill.level}% Proficiency</span>
        </div>
        <div className="w-full bg-background rounded-full h-[3px] relative overflow-hidden border border-white/5">
            <motion.div 
                className={`h-full rounded-full ${colorClass} shadow-[0_0_20px_rgba(0,163,255,0.4)]`} 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
        </div>
    </motion.div>
);

const TimelineItem: React.FC<{ event: TimelineEvent, color: string }> = ({ event, color }) => (
    <motion.div 
        className="group relative pl-14 border-l-2 border-white/5 transition-all duration-700 hover:border-white/10"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background rounded-full border-2 border-white/10 group-hover:scale-125 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl"></div>
        <div className="mb-3">
            <span className={`text-[10px] font-corporate font-black uppercase tracking-[0.4em] ${color} bg-white/5 px-3 py-1 rounded-full border border-white/5`}>{event.duration}</span>
        </div>
        <h3 className="text-3xl font-display font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors duration-500">{event.title}</h3>
        <p className="font-corporate font-extrabold text-text-muted text-[11px] mb-6 uppercase tracking-[0.25em]">{event.subtitle}</p>
        <p className="text-text-secondary leading-relaxed mb-8 text-xl font-light font-sans">{event.description}</p>
        {event.image && (
            <div className="overflow-hidden rounded-[2rem] border border-white/10 group-hover:border-primary/30 shadow-2xl transition-all duration-1000">
                <img src={event.image} alt={event.title} className="w-full grayscale group-hover:grayscale-0 transition-all duration-1500 ease-out" />
            </div>
        )}
    </motion.div>
);

const EducationCard: React.FC<{ education: Education }> = ({ education }) => (
    <motion.div 
        className="bg-surface p-16 md:p-24 rounded-[4rem] border border-white/5 shadow-2xl relative group overflow-hidden"
        variants={itemVariants}
    >
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-primary/10"></div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16 gap-10">
             <div className="relative z-10">
                <div className="p-5 bg-background border border-white/5 rounded-[1.5rem] text-primary w-fit mb-10 shadow-inner group-hover:scale-110 transition-transform duration-700"><GraduationCap size={44} strokeWidth={1.2}/></div>
                <h3 className="text-4xl md:text-6xl font-display font-black text-white uppercase leading-[1.1] tracking-tighter">{education.institution}</h3>
                <p className="text-primary font-display italic font-bold text-2xl mt-6">{education.degree}</p>
             </div>
             <span className="bg-background border border-white/5 text-white/80 px-8 py-3 rounded-full text-[11px] font-corporate font-black uppercase tracking-[0.4em] h-fit shadow-xl mt-4">{education.duration}</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
                 <ul className="space-y-6">
                    {education.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-5 text-text-secondary group/li">
                            <span className="mt-3 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 group-hover/li:scale-150 transition-transform duration-300"></span>
                            <span className="text-xl leading-relaxed font-sans font-light">{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {education.thesisTitle && (
                <div className="bg-background/40 p-12 rounded-[3rem] border border-white/5 h-fit relative shadow-inner group-hover:border-primary/10 transition-colors duration-1000">
                    <p className="text-[10px] text-secondary font-corporate font-black uppercase tracking-[0.5em] mb-6">Thesis Publication</p>
                    <p className="text-white italic text-[1.75rem] leading-[1.3] font-display font-bold">"{education.thesisTitle}"</p>
                </div>
            )}
        </div>
    </motion.div>
);

const CertificationItem: React.FC<{ certification: Certification }> = ({ certification }) => (
    <motion.div 
        className="bg-background border border-white/5 p-8 rounded-[1.5rem] flex items-center gap-7 hover:border-primary/30 transition-all duration-700 group shadow-xl"
        variants={itemVariants}
    >
        <div className="p-5 bg-surface rounded-2xl group-hover:text-primary group-hover:bg-primary/5 transition-all duration-700 border border-white/5 shadow-inner">
            <CheckCircle size={28} strokeWidth={1.5} />
        </div>
        <div>
            <p className="font-display font-bold text-white text-2xl leading-tight group-hover:tracking-tight transition-all">{certification.name}</p>
            <p className="text-[10px] text-text-muted font-corporate font-black uppercase tracking-[0.3em] mt-3">{certification.issuer} • {certification.date}</p>
        </div>
    </motion.div>
);

const PublicationItem: React.FC<{ publication: Publication }> = ({ publication }) => (
    <motion.div 
        className="bg-background border border-white/5 p-10 rounded-[1.75rem] hover:border-secondary/40 transition-all duration-700 group shadow-xl"
        variants={itemVariants}
    >
        <div className="flex items-start justify-between gap-6 mb-6">
             <h4 className="font-display font-bold text-white text-[1.65rem] leading-[1.25] group-hover:text-secondary transition-colors duration-500">{publication.title}</h4>
             <span className="text-[9px] bg-surface text-text-muted px-3 py-1.5 rounded-full border border-white/5 font-corporate font-black tracking-[0.4em] uppercase whitespace-nowrap">{publication.type}</span>
        </div>
        <p className="text-[1.05rem] text-text-secondary leading-relaxed mb-8 italic font-sans font-light">{publication.details}</p>
        {publication.link && (
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-[10px] text-secondary font-corporate font-black tracking-[0.4em] hover:text-white transition-all duration-500 flex items-center gap-3 uppercase">
                ACCESS SCHOLARLY RESOURCE <ExternalLink size={16}/>
            </a>
        )}
    </motion.div>
);

export default About;

import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { FolderKanban, ExternalLink } from 'lucide-react';

const StudentCorner: React.FC = () => {
  const resourceLink = "https://drive.google.com/drive/folders/1gDSJUWinWryZ0EXSVRAsts96VNAI6Vkm?usp=sharing";

  return (
    <AnimatedPage>
      {/* Banner */}
      <div className="h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://picsum.photos/seed/students/1920/1080')" }}>
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
            <h1 className="text-5xl font-display font-bold text-white">Student Corner</h1>
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
            <h2 className="text-4xl font-display font-bold">Welcome, Students!</h2>
            <p className="text-xl text-text-secondary mt-2 max-w-3xl mx-auto">
              This space is dedicated to you. Here you'll find all the necessary resources for our courses.
            </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
            <motion.a
              href={resourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-surface rounded-lg overflow-hidden shadow-lg group p-8"
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 163, 255, 0.1), 0 10px 10px -5px rgba(0, 163, 255, 0.04)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                  <FolderKanban className="text-primary flex-shrink-0 w-24 h-24" />
                  <div>
                      <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                        Course Resources
                      </h3>
                      <p className="text-text-secondary mb-4">
                        Click here to access all lecture slides, notes, assignments, and supplementary materials in our shared Google Drive folder.
                      </p>
                      <span className="font-semibold text-secondary inline-flex items-center">
                        Go to Resources <ExternalLink className="ml-2" size={18} />
                      </span>
                  </div>
              </div>
            </motion.a>
        </div>

      </div>
    </AnimatedPage>
  );
};

export default StudentCorner;

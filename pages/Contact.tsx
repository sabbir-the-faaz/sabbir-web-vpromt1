import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../constants';

const Contact: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-display font-bold text-primary">Contact Me</h1>
          <p className="text-xl text-text-secondary mt-2">I'd love to hear from you. Let's get in touch.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6">Direct Info</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href={`mailto:${personalInfo.contact.email}`} className="text-text-secondary hover:text-primary break-all">{personalInfo.contact.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-text-secondary">{personalInfo.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-text-secondary">{personalInfo.contact.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            {/* 
              This form now submits to Formspree.
              IMPORTANT: Replace "YOUR_FORM_ID" with your actual Formspree form ID.
            */}
            <form 
              action="https://formspree.io/f/YOUR_FORM_ID" 
              method="POST" 
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full bg-surface border-transparent rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full bg-surface border-transparent rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full bg-surface border-transparent rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <div>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    className="w-full bg-primary text-background font-bold py-3 px-4 rounded-lg hover:bg-secondary transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
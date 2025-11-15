import React, { useState, useMemo } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { blogPosts } from '../constants';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { containerVariants } from '../utils/animations';
import BlogPostCard from '../components/BlogPostCard';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = useMemo(() => ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))], []);
  
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter(post => activeCategory === 'All' || post.category === activeCategory)
      .filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [activeCategory, searchTerm]);

  return (
    <AnimatedPage>
      <div className="bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-display font-bold text-primary">The Blog</h1>
            <p className="text-xl text-text-secondary mt-2">Thoughts on technology, research, and everything in between.</p>
          </motion.div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
            <div className="relative w-full md:w-1/3">
                <input 
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-background border-2 border-primary/20 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-primary"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            </div>
            <div className="flex justify-center flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === category 
                    ? 'bg-primary text-background' 
                    : 'bg-background text-text-secondary hover:bg-primary/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        
          {/* Posts Grid */}
          <motion.div
            className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8"
            key={activeCategory + searchTerm} // Re-trigger animation on filter/search change
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                    <BlogPostCard key={post.slug} post={post} />
                ))
            ) : (
                <p className="text-center text-text-secondary col-span-full">No posts found.</p>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Blog;

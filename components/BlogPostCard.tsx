import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { BlogPost } from '../types';
import { itemVariants } from '../utils/animations';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 163, 255, 0.1), 0 10px 10px -5px rgba(0, 163, 255, 0.04)" }}
    className="bg-surface rounded-lg overflow-hidden shadow-lg group h-full flex flex-col"
  >
    <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
      <div className="overflow-hidden">
        <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-text-secondary font-semibold mb-2">{post.date} &bull; {post.category}</p>
        <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">{post.title}</h3>
        <p className="text-text-secondary flex-grow">{post.excerpt}</p>
      </div>
    </Link>
  </motion.div>
);

export default BlogPostCard;

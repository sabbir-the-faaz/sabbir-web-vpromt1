import React, { useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { blogPosts } from '../constants';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

// A more robust markdown-to-HTML converter
const parseMarkdown = (markdown: string): { __html: string } => {
    let html = `\n${markdown.trim()}\n`;

    // Block elements
    // Code blocks
    html = html.replace(/\n```python\n([\s\S]*?)\n```\n/g, (match, code) => {
        const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `\n<pre><code>${escapedCode}</code></pre>\n`;
    });

    // Blockquotes
    html = html.replace(/\n> (.*)/g, '\n<blockquote>$1</blockquote>');
    
    // Lists
    html = html.replace(/((\n(\*|\d+\.) [^\n]+)+)/g, (match) => {
        const listItems = match.trim().split('\n');
        const isOrdered = /^\d+\./.test(listItems[0]);
        const listTag = isOrdered ? 'ol' : 'ul';
        const items = listItems.map(item => `<li>${item.replace(/^\s*(\*|\d+\.)\s/, '')}</li>`).join('');
        return `\n<${listTag}>${items}</${listTag}>\n`;
    });

    // Headers
    html = html.replace(/\n## (.*)/g, '\n<h2>$1</h2>');
    html = html.replace(/\n### (.*)/g, '\n<h3>$1</h3>');

    // Paragraphs
    html = html.replace(/\n(?!<h|<p|<ul|<ol|<li|<blockquote|<pre)(.*)\n/g, '\n<p>$1</p>\n');
    html = html.replace(/<br \/>/g, '</p><p>');


    // Inline elements
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    return { __html: html.trim() };
};


const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
            <button onClick={() => navigate('/blog')} className="text-secondary hover:underline">
                Back to Blog
            </button>
        </div>
    );
  }

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
            <RouterLink to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft size={16} />
              Back to Blog
            </RouterLink>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {post.title}
            </motion.h1>

            <motion.div 
                className="flex items-center space-x-4 text-text-secondary mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                </div>
            </motion.div>

            <motion.img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            <motion.div 
                className="prose"
                dangerouslySetInnerHTML={parseMarkdown(post.content)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
            </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default BlogPost;

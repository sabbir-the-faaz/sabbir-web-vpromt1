
import React, { useEffect } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { blogPosts, personalInfo } from '../constants';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

// A simple markdown to HTML converter
const parseMarkdown = (text: string) => {
    // This is a very basic parser. For a real app, use a library like 'marked' or 'react-markdown'.
    const html = text
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
      .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-surface px-1 rounded text-secondary">$1</code>')
      .replace(/```python\n([\s\S]*?)```/g, '<pre class="bg-surface p-4 rounded-lg overflow-x-auto my-4"><code class="language-python">$1</code></pre>')
      .replace(/\n/g, '<br />');

    return { __html: html };
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
                className="prose prose-lg prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-text-primary prose-strong:text-text-primary prose-a:text-primary hover:prose-a:text-secondary"
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

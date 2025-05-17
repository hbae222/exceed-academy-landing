
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const blogArticles = {
  'improving-essay-structure': {
    title: "Improving Essay Structure: A Guide for Middle and High School Students",
    content: `
      <h2>Introduction</h2>
      <p>This is a placeholder for the full article content. The actual content will be added later.</p>
      <h2>Key Points</h2>
      <ul>
        <li>Start with a compelling introduction</li>
        <li>Develop clear topic sentences</li>
        <li>Use evidence to support your arguments</li>
        <li>Create smooth transitions between paragraphs</li>
        <li>Craft a conclusion that reinforces your thesis</li>
      </ul>
      <p>Check back soon for the complete guide!</p>
    `,
    author: "Dr. Emma Chen",
    date: "May 10, 2025",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  'creative-writing-techniques': {
    title: "Creative Writing Techniques That Captivate Readers",
    content: `
      <h2>Introduction</h2>
      <p>This is a placeholder for the full article content. The actual content will be added later.</p>
      <h2>Key Points</h2>
      <ul>
        <li>Show, don't tell</li>
        <li>Develop distinctive character voices</li>
        <li>Use sensory details</li>
        <li>Create conflict and tension</li>
        <li>Experiment with different narrative perspectives</li>
      </ul>
      <p>Check back soon for the complete guide!</p>
    `,
    author: "Michael Rivera",
    date: "April 25, 2025",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
  },
  'college-essay-tips': {
    title: "College Essays That Stand Out: Tips from Admissions Officers",
    content: `
      <h2>Introduction</h2>
      <p>This is a placeholder for the full article content. The actual content will be added later.</p>
      <h2>Key Points</h2>
      <ul>
        <li>Be authentic in your voice</li>
        <li>Focus on a specific story or experience</li>
        <li>Demonstrate growth and self-reflection</li>
        <li>Connect your experience to your future goals</li>
        <li>Edit ruthlessly for clarity and impact</li>
      </ul>
      <p>Check back soon for the complete guide!</p>
    `,
    author: "Sarah Johnson",
    date: "April 12, 2025",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
};

const BlogArticle: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? blogArticles[articleId as keyof typeof blogArticles] : null;
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="section-container min-h-[60vh] flex items-center justify-center flex-col">
          <h1 className="text-3xl font-bold text-exceed-navy mb-4">Article Not Found</h1>
          <p className="text-gray-700 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-10 pb-20 bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/blog" className="flex items-center text-exceed-blue hover:text-exceed-indigo mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold text-exceed-navy mb-4">{article.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">{article.date}</span>
              <span>By {article.author}</span>
            </div>
          </div>
          
          <div className="mb-10">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-[400px] object-cover rounded-xl" 
            />
          </div>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-exceed-navy font-semibold mb-4">Ready to improve your writing skills?</h3>
            <Button className="cta-button" asChild>
              <Link to="/#pricing">Start Your Writing Journey</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogArticle;

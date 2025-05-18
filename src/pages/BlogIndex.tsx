
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const BlogIndex: React.FC = () => {
  const blogPosts = [
    {
      id: 'how-to-structure-an-essay',
      title: "How to Structure an Essay: A Step-by-Step Guide for Middle and High School Students",
      excerpt: "Learn how to write a well-structured essay that grabs attention, keeps readers engaged, and earns top grades.",
      date: "May 18, 2025",
      author: "Dr. Emma Chen",
      imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 'improving-essay-structure',
      title: "Improving Essay Structure: A Guide for Middle and High School Students",
      excerpt: "Learn the fundamentals of crafting well-structured essays that engage readers and earn top grades.",
      date: "May 10, 2025",
      author: "Dr. Emma Chen",
      imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 'creative-writing-techniques',
      title: "Creative Writing Techniques That Captivate Readers",
      excerpt: "Discover powerful techniques that will transform your creative writing and help your stories come alive.",
      date: "April 25, 2025",
      author: "Michael Rivera",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
    },
    {
      id: 'college-essay-tips',
      title: "College Essays That Stand Out: Tips from Admissions Officers",
      excerpt: "Insider advice on crafting college application essays that capture attention and show your unique perspective.",
      date: "April 12, 2025",
      author: "Sarah Johnson",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="py-12">
        <div className="section-container bg-white/90 rounded-2xl shadow-lg">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-exceed-navy mb-4">
              Writing Resources & Insights
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our collection of articles on writing techniques, essay structure, academic success, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <h3 className="font-bold text-xl text-exceed-navy">{post.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-3">{post.excerpt}</p>
                  <div className="text-sm text-gray-500 mt-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" className="text-exceed-blue p-0" asChild>
                    <Link to={`/blog/${post.id}`} className="flex items-center">
                      Read More <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogIndex;

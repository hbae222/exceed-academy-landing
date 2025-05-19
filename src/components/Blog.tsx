
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, User } from "lucide-react";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 'how-to-structure-an-essay',
      title: "How to Structure an Essay: A Step-by-Step Guide for Middle and High School Students",
      excerpt: "Learn how to write a well-structured essay that grabs attention, keeps readers engaged, and earns top grades.",
      date: "May 18, 2025",
      author: "Dr. Emma Chen",
      imageUrl: "/lovable-uploads/44158310-5fc4-4f97-bc82-b64222735643.png"
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
    }
  ];

  return (
    <section id="blog" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy mb-4">
            Writing Resources & Insights
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our latest articles on writing techniques, essay structure, and academic success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-52 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="font-bold text-xl text-exceed-navy line-clamp-2">{post.title}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mt-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1 text-exceed-blue" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1 text-exceed-blue" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="link" className="text-exceed-blue p-0 hover:text-exceed-indigo" asChild>
                  <Link to={`/blog/${post.id}`} className="flex items-center font-medium">
                    Read More <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;


import React, { useRef, useEffect, useState } from 'react';
import { blogPosts } from '@/data/blogPosts';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const BlogPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-[#59ACC8] mb-2">Insights & Perspectives</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#152043]">University Blog</h3>
          </div>
          <a 
            href="#" 
            className="mt-4 md:mt-0 inline-flex items-center text-[#152043] hover:text-[#59ACC8] transition-colors font-medium group"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className={cn(
                "group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <a href="#" className="block">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#152043] text-xs font-medium py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#152043] group-hover:text-[#59ACC8] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-[#59ACC8] font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 delay-500`}>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest research, campus events, and stories from our diverse community of scholars and students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

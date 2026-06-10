
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "global-education-trends",
    title: "Global Education Trends Reshaping Universities",
    excerpt: "An exploration of how international education standards are evolving and influencing academic institutions worldwide.",
    author: "Dr. Emily Chen",
    date: "June 12, 2023",
    category: "Education",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3"
  },
  {
    id: "climate-research",
    title: "AMET Leads Breakthrough Climate Research",
    excerpt: "Our Environmental Science department has made significant discoveries in climate adaptation strategies.",
    author: "Prof. Michael Rodriguez",
    date: "May 23, 2023",
    category: "Research",
    imageUrl: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3"
  },
  {
    id: "ai-curriculum",
    title: "New AI Curriculum Launches This Fall",
    excerpt: "The Faculty of Computing Sciences introduces a cutting-edge AI program designed in collaboration with industry leaders.",
    author: "Dr. Sarah Johnson",
    date: "April 18, 2023",
    category: "Academics",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=2606&ixlib=rb-4.0.3"
  }
];

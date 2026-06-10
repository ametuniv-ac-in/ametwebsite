
export interface NewsEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  imageUrl: string;
  type: 'news' | 'event';
}

export const newsEvents: NewsEvent[] = [
  {
    id: "international-symposium",
    title: "International Academic Symposium",
    description: "Join global scholars for our annual symposium on higher education innovation and cross-cultural learning.",
    date: "October 15-17, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Grand Hall, AMET University",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    type: "event"
  },
  {
    id: "research-partnership",
    title: "AMET Forms Partnership with Oxford University",
    description: "New collaboration will enable student exchanges and joint research initiatives between our institutions.",
    date: "September 5, 2023",
    imageUrl: "/src/assets/amet-oxford-partnership.jpg",
    type: "news"
  },
  {
    id: "stem-exhibition",
    title: "Annual STEM Innovation Exhibition",
    description: "Showcasing student projects and research from our science and engineering departments.",
    date: "November 12, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Technology Center, AMET Campus",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    type: "event"
  },
  {
    id: "faculty-award",
    title: "AMET Professor Receives International Recognition",
    description: "Dr. Maria Santos from our Faculty of Life Sciences has been awarded the prestigious Global Science Award.",
    date: "August 28, 2023",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    type: "news"
  }
];

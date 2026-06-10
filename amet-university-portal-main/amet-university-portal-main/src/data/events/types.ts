
export interface GalleryEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  description?: string;
  organizer?: string;
  imageUrl: string;
  images?: string[];
  featured?: boolean;
  location?: string;
  videoUrl?: string;
}

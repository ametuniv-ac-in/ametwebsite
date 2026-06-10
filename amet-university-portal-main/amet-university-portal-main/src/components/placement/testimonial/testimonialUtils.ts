
import { Testimonial } from '@/data/testimonials/types';

/**
 * Paginates an array of testimonials
 * @param array The array to paginate
 * @param currentPage The current page number
 * @param itemsPerPage Number of items per page
 * @returns A slice of the array for the current page
 */
export const paginateArray = (
  array: Testimonial[], 
  currentPage: number, 
  itemsPerPage: number
): Testimonial[] => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return array.slice(startIndex, endIndex);
};

/**
 * Formats the program name for display
 * @param program The full program name
 * @returns A shorter, formatted version for display
 */
export const formatProgramName = (program: string): string => {
  // Shorten B.Tech or M.Tech to BTech/MTech for UI display
  return program.replace('B.Tech', 'BTech').replace('M.Tech', 'MTech');
};

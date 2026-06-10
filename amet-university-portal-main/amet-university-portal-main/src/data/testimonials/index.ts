
import { nauticalTestimonials } from './nautical';
import { marineTestimonials } from './marine';
import { navalTestimonials } from './naval';
import { electricalTestimonials } from './electrical';
import { mechanicalTestimonials } from './mechanical';
import { managementTestimonials } from './management';
import { Testimonial } from './types';

// Export the Testimonial type for use in components
export type { Testimonial };

// Combine all testimonials for easy filtering
export const allTestimonials: Record<string, Testimonial[]> = {
  'nautical': nauticalTestimonials,
  'marine': marineTestimonials,
  'naval': navalTestimonials,
  'electrical': electricalTestimonials,
  'mechanical': mechanicalTestimonials,
  'management': managementTestimonials
};

// All testimonials in a flat array
export const flattenedTestimonials: Testimonial[] = [
  ...nauticalTestimonials,
  ...marineTestimonials,
  ...navalTestimonials,
  ...electricalTestimonials,
  ...mechanicalTestimonials,
  ...managementTestimonials
];

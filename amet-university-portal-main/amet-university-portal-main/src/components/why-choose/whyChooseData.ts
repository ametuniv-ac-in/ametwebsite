
export interface Reason {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  points: string[];
}

export const reasons: Reason[] = [
  {
    id: 1,
    title: "Global Recognition",
    description: "AMET University ranks among the top 1% of universities worldwide, with prestigious accreditations and partnerships with leading global institutions.",
    imageUrl: "/images/why-choose/naval-students.jpg",
    points: [
      "Internationally accredited programs",
      "Top 100 in global university rankings",
      "Recognized degrees in 160+ countries",
      "Industry-endorsed curriculum"
    ]
  },
  {
    id: 2,
    title: "World-Class Faculty",
    description: "Learn from distinguished professors and industry professionals who are leaders in their fields, bringing real-world expertise to the classroom.",
    imageUrl: "/images/why-choose/maritime-students.jpg",
    points: [
      "70% of faculty with PhD from top universities",
      "Award-winning researchers and authors",
      "Industry professionals as visiting faculty",
      "Low student-to-faculty ratio of 15:1"
    ]
  },
  {
    id: 3,
    title: "Innovative Research",
    description: "Our university is at the forefront of groundbreaking research, with state-of-the-art facilities and opportunities for students to participate in pioneering projects.",
    imageUrl: "/images/why-choose/engineering-students.jpg",
    points: [
      "$200M+ annual research funding",
      "Research partnerships with Fortune 500 companies",
      "300+ research publications annually",
      "Student involvement in cutting-edge projects"
    ]
  },
  {
    id: 4,
    title: "Global Career Opportunities",
    description: "Our graduates are highly sought after by employers worldwide, with 93% securing employment or continuing to advanced studies within six months of graduation.",
    imageUrl: "/images/why-choose/marine-engineering.jpg",
    points: [
      "93% employment rate within 6 months",
      "500+ global employer partnerships",
      "International internship opportunities",
      "Comprehensive career development services"
    ]
  }
];

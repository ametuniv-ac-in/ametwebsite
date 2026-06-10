
export type PlacementRecord = {
  id: number;
  name: string;
  course: string;
  company: string;
  salary: string; // in LPA (Lakhs Per Annum)
  imageUrl: string;
};

export const placementRecords: PlacementRecord[] = [
  {
    id: 1,
    name: "Aditya Sharma",
    course: "B.Tech Marine Engineering",
    company: "Maersk Line",
    salary: "24 LPA",
    imageUrl: "/lovable-uploads/a1d561b4-352f-4a71-8bbb-891bbf67958e.png"
  },
  {
    id: 2,
    name: "Priya Nair",
    course: "MBA Maritime Management",
    company: "DP World",
    salary: "18 LPA",
    imageUrl: "/lovable-uploads/8545f12b-ea57-4369-851b-4728a5b6bb37.png"
  },
  {
    id: 3,
    name: "Rahul Khanna",
    course: "B.Sc Nautical Science",
    company: "MSC Shipping",
    salary: "22 LPA",
    imageUrl: "/lovable-uploads/1e1c1117-1fe0-49bf-8957-32adfad33ed2.png"
  },
  {
    id: 4,
    name: "Meera Patel",
    course: "M.Tech Naval Architecture",
    company: "L&T Shipbuilding",
    salary: "16 LPA",
    imageUrl: "/lovable-uploads/2d402877-7aa1-4e1f-a765-50e7c6aeab1b.png"
  },
  {
    id: 5,
    name: "Vikram Singh",
    course: "B.Tech Marine Engineering",
    company: "Shell Shipping",
    salary: "26 LPA",
    imageUrl: "/lovable-uploads/3fa8d108-1bbc-44e8-8ae1-88fc5378d171.png"
  },
  {
    id: 6,
    name: "Ananya Kapoor",
    course: "MBA Shipping & Logistics",
    company: "Adani Ports",
    salary: "19 LPA",
    imageUrl: "/lovable-uploads/5300736f-96d4-47ea-b8e4-cf413ad5cf51.png"
  },
  {
    id: 7,
    name: "Ravi Chandra",
    course: "B.Sc Nautical Science",
    company: "APM Terminals",
    salary: "21 LPA",
    imageUrl: "/lovable-uploads/ff822d02-e89d-4c12-a5db-da0b2c070808.png"
  },
  {
    id: 8,
    name: "Shreya Verma",
    course: "M.Tech Ocean Engineering",
    company: "ONGC",
    salary: "23 LPA",
    imageUrl: "/lovable-uploads/a1d561b4-352f-4a71-8bbb-891bbf67958e.png"
  }
];

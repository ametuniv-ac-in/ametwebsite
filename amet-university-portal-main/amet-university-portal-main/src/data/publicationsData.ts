
import { Publication } from '@/components/research/publications/RecentPublications';
import { HighImpactPublication } from '@/components/research/publications/HighImpactPublications';
import { BookType, FileText, BookOpen } from 'lucide-react';

export const recentPublications: Publication[] = [
  {
    title: "Advanced composite materials for marine structures: A review of recent developments",
    authors: "Kumar, S., Rajagopal, T., & Senthil, P.",
    journal: "Journal of Marine Engineering and Technology",
    year: "2023",
    volume: "42(3)",
    pages: "215-228"
  },
  {
    title: "Evaluation of ship collision avoidance systems using artificial intelligence",
    authors: "Venkatesh, R., Mahadevan, G., & Sharma, A.",
    journal: "Maritime Safety Research Journal",
    year: "2023",
    volume: "18(2)",
    pages: "78-92"
  },
  {
    title: "Sustainable energy solutions for port operations: A case study of Chennai Port",
    authors: "Krishnakumar, M., Ramesh, S., & Singh, H.",
    journal: "International Journal of Sustainable Maritime Operations",
    year: "2022",
    volume: "7(4)",
    pages: "342-358"
  },
  {
    title: "Analysis of ship-to-shore crane productivity in container terminals",
    authors: "Anand, P., Rajkumar, V., & Thomas, J.",
    journal: "Journal of Port and Terminal Management",
    year: "2022",
    volume: "12(1)",
    pages: "56-72"
  },
  {
    title: "Impact of COVID-19 on global shipping networks: A comparative analysis",
    authors: "Meenakshi, S., Kumar, A., & Ramachandran, R.",
    journal: "Maritime Economics & Logistics",
    year: "2021",
    volume: "23(2)",
    pages: "189-205"
  }
];

export const publicationStats = [
  { category: "Total Publications", count: 3382, icon: BookType },
  { category: "Scopus Publications", count: 2286, icon: FileText },
  { category: "Web of Science", count: 709, icon: BookType },
  { category: "Books & Chapters", count: 856, icon: BookOpen }
];

export const highImpactPublications: HighImpactPublication[] = [
  {
    title: "Enhanced mechanical and biocompatible properties of strontium ions doped mesoporous bioactive glass",
    journal: "Composites Part B: Engineering",
    impactFactor: 12.7
  },
  {
    title: "Gamma irradiated poly (methyl methacrylate)-reduced graphene oxide composite thin films for multifunctional applications",
    journal: "Composites Part B: Engineering",
    impactFactor: 12.7
  },
  {
    title: "Ameliorative photocatalytic dye degradation of hydrothermally synthesized bimetallic Ag-Sn hybrid nanocomposite treated upon domestic wastewater under visible light irradiation",
    journal: "Journal of Hazardous Materials",
    impactFactor: 12.2
  },
  {
    title: "Alleviation of environmental stress in plants: The role of beneficial Pseudomonas spp",
    journal: "Critical Reviews in Environmental Science and Technology",
    impactFactor: 11.4
  },
  {
    title: "IoT-enabled EMS for grid-connected solar PV-fed DC residential buildings with hybrid HBA-DCGNN approach",
    journal: "Energy Conversion and Management",
    impactFactor: 9.9
  },
  {
    title: "Recent advances in lignocellulosic biomass for biofuels and value-added bioproducts - A critical review",
    journal: "Bioresource Technology",
    impactFactor: 9.7
  },
  {
    title: "Recent developments in biorefining of macroalgae metabolites and their industrial applications - A circular economy approach",
    journal: "Bioresource Technology",
    impactFactor: 9.7
  },
  {
    title: "Experimental evaluation and neural network modelling of reactivity-controlled compression ignition engine using cashew nut shell oil biodiesel-alumina nanoparticle blend and gasoline injection",
    journal: "Energy",
    impactFactor: 9.0
  },
  {
    title: "Battery-like supercapacitor electrodes utilizing porous hierarchical bush-like ZnO/SnS on nickel foam framework",
    journal: "Journal of Energy Storage",
    impactFactor: 8.9
  },
  {
    title: "Morphological nanoflowers of Ni-doped SnS for high-performance electrode materials for supercapacitors",
    journal: "Journal of Energy Storage",
    impactFactor: 8.9
  }
];

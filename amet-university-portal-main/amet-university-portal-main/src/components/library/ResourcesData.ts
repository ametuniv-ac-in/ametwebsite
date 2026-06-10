
import { LucideIcon } from 'lucide-react';

export type PrintCollectionItem = {
  sno: number;
  collectionType: string;
  numberOfItems: string;
};

export type NonPrintCollectionItem = {
  sno: number;
  collectionType: string;
  numberOfItems: string;
};

export type LinkItem = {
  label: string;
  url: string;
};

export type EDatabaseItem = {
  sno: number;
  database: string;
  url?: string;
  note?: string;
  multipleLinks?: LinkItem[];
};

export const printCollections: PrintCollectionItem[] = [
  { sno: 1, collectionType: 'Total No of Books', numberOfItems: '103,754' },
  { sno: 2, collectionType: 'Total No. of Titles', numberOfItems: '19,556' },
  { sno: 3, collectionType: 'Book Bank', numberOfItems: '1,224' },
  { sno: 4, collectionType: 'Theses / Project / Dissertations', numberOfItems: '2,657' },
  { sno: 5, collectionType: 'Proceeding and Standard', numberOfItems: '26' },
  { sno: 6, collectionType: 'Patents', numberOfItems: '50' },
  { sno: 7, collectionType: 'Reports', numberOfItems: '23' },
  { sno: 8, collectionType: 'Bound (back) Volumes of Journals', numberOfItems: '2,461' },
  { sno: 9, collectionType: 'Current Journals on Subscription', numberOfItems: '126' },
  { sno: 10, collectionType: 'Rare Books Collections', numberOfItems: '102' },
  { sno: 11, collectionType: 'News Papers', numberOfItems: '14' },
];

export const nonPrintCollections: NonPrintCollectionItem[] = [
  { sno: 1, collectionType: 'CD / DVD', numberOfItems: '2,793' },
  { sno: 2, collectionType: 'Subscribed E-Books', numberOfItems: '2,20,000' },
  { sno: 3, collectionType: 'Subscribed E-Journals', numberOfItems: '40,954' },
  { sno: 4, collectionType: 'NPTEL Videos', numberOfItems: '36,802' },
];

export const eDatabases: EDatabaseItem[] = [
  { sno: 1, database: 'PROQUEST', url: 'https://search.proquest.com/' },
  { sno: 2, database: 'IEEE', url: 'https://ieeexplore.ieee.org/Xplore/home.jsp' },
  { sno: 3, database: 'J-GATE', url: 'https://jgateplus.com/search/' },
  { sno: 4, database: 'DELNET', url: 'http://164.100.247.26/' },
  {
    sno: 5,
    database: 'NPTEL (Video courses: 41,780)',
    multipleLinks: [
      { label: 'In Campus', url: 'http://172.20.1.121:8000/' },
      { label: 'Out Campus', url: 'http://172.20.1.121:8001/' },
    ],
  },
  {
    sno: 6,
    database: 'SWAYAM PRABHA (32 DTH Channels of High Quality Educational Programmes)',
    url: 'https://www.swayamprabha.gov.in/',
  },
  {
    sno: 7,
    database: 'DSpace E-Learning Resources',
    multipleLinks: [
      { label: 'In Campus - Digital Resources', url: 'http://172.20.1.126:8080/jspui/' },
      { label: 'Out Campus - Digital Resources', url: 'http://103.136.136.202:8080/jspui/' },
    ],
  },
  {
    sno: 8,
    database: 'Remote Access facility provided INFLIBNET - Access Management Federation (INFED)',
    url: 'http://idp.ametuniv.ac.in/',
  },
  {
    sno: 9,
    database: 'Online Public Access Catalogue (OPAC)',
    multipleLinks: [
      { label: 'In Campus', url: 'http://172.20.1.37:8080/AutoLib/opac.jsp' },
      { label: 'Out Campus', url: 'http://14.139.187.186:8080/AutoLib/index.jsp' },
    ],
  },
  { sno: 10, database: 'National Digital Library (NDL)', url: 'https://ndl.iitkgp.ac.in/' },
  { sno: 11, database: 'UGC- SHODHGANGA', url: 'https://shodhganga.inflibnet.ac.in/handle/10603/190485' },
  {
    sno: 12,
    database: 'DELNET',
    multipleLinks: [
      { label: 'In Campus access', url: 'http://164.100.247.26/' },
      { label: 'Out Campus access', url: 'http://www.delnet.in/' },
    ],
  },
  { sno: 13, database: 'UGC-INFLIBNET', url: 'https://inflibnet.ac.in/' },
  { sno: 14, database: 'E-Shodhsindhu Consortium for Higher Education', url: 'https://ess.inflibnet.ac.in/oes/selfsubscribed.php' },
  {
    sno: 15,
    database: 'E-PG Pathshala',
    note: 'Open Access for all user',
    url: 'http://epgp.inflibnet.ac.in/',
  },
  {
    sno: 16,
    database: 'VIDYA-MITRA, Integrated E-Content Portal',
    note: 'Open Access for all user',
    url: 'http://content.inflibnet.ac.in/index.php/uploaded_content',
  },
  {
    sno: 17,
    database: 'E-resources developed by UGC',
    url: 'http://ugceresources.in/',
  },
  {
    sno: 18,
    database: 'The Networked Digital Library of Theses and Dissertations (NDLTD)',
    url: 'https://ndltd.org/',
  },
  {
    sno: 19,
    database: 'VIDWAN',
    url: 'https://vidwan.inflibnet.ac.in/',
  },
  {
    sno: 20,
    database: 'ShodhShuddhi',
    url: 'https://shodhshuddhi.inflibnet.ac.in/',
  },
  {
    sno: 21,
    database: 'Virtual Labs project - Initiative of Ministry of Human Resource Development (MHRD)',
    url: 'https://www.vlab.co.in/about-us',
  },
  {
    sno: 22,
    database: 'The Spoken Tutorial project',
    url: 'https://spoken-tutorial.org/',
  },
  {
    sno: 23,
    database: 'Media Centre (Educational Materials Resource, video lectures and other E contents By AMET)',
    url: 'https://www.ametuniv.ac.in/media-centre.html',
  },
  {
    sno: 24,
    database: 'MARITIME DIGITAL REPOSITORY',
    url: 'https://maritimedigitalrepository.blogspot.com/',
  },
  {
    sno: 25,
    database: 'eGyanKosh - a National Digital Repository',
    url: 'https://www.egyankosh.ac.in',
  },
  {
    sno: 26,
    database: 'Consortium for Educational Communication (CEC)',
    url: 'https://www.cec-lor.edu.in',
  },
  {
    sno: 27,
    database: 'AICTE Technical Book Writing Scheme (Hindi, Tamil, Gujarati, Kannada, Marathi, Bengali, Telugu, Punjabi, Odia)',
    note: 'Open Access for all user',
    url: 'https://ekumbh.aicte-india.org/#',
  },
  {
    sno: 28,
    database: 'ekumbh.aicte',
    note: 'Open Access for all user',
    url: 'https://ekumbh.aicte-india.org/#',
  },
  {
    sno: 29,
    database: 'IMO e-books',
    note: 'Login: IMOCC86701 | Password: READNWDR-JRYA-3VKN-7GZR',
    url: 'https://www.imobookshelf.org',
  },
  {
    sno: 30,
    database: 'Institution of Engineers (India) (IEI) - E-JOURNALS',
    url: 'https://www.ieindia.org/AdminUI/IEI-Dashboard.aspx',
  },
  {
    sno: 31,
    database: 'Abhilekh Patal - Digital repository by National Archives of India (NAI)',
    url: 'https://www.abhilekh-patal.in/jspui/',
  },
  {
    sno: 32,
    database: 'NSDL',
    url: 'https://oercommons.org/hubs/NSDL',
  },
  {
    sno: 33,
    database: 'Parliament Digital Library',
    url: 'https://eparlib.nic.in/',
  },
  {
    sno: 34,
    database: 'UNESCO Digital Library',
    url: 'https://unesdoc.unesco.org/',
  },
  {
    sno: 35,
    database: 'Directorate of Technical Education, Tamilnadu',
    url: 'http://www.tndte.gov.in/site/e-text-book/',
  },
  {
    sno: 36,
    database: 'CSIR-NIScPR',
    note: 'Open Access for all user',
    url: 'https://or.niscpr.res.in/',
  },
];

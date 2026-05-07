
import React from 'react';
import LibraryLayout from '@/components/library/LibraryLayout';
import { ExternalLink, BookOpen, Link as LinkIcon, FileText, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LibraryLinks = () => {
  return (
    <LibraryLayout 
      title="Important Links" 
      subtitle="Useful resources and external links related to maritime education, research, and library services."
    >
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-aemet-navy mb-6">Important Links</h1>
        <p className="text-gray-700 mb-8">
          Access a comprehensive collection of resources for maritime education, research, and library services.
        </p>

        {/* AMET Links Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-aemet-navy mb-4 flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-aemet-blue" />
            AMET Links
          </h2>
          
          <ul className="space-y-3 ml-2">
            <LinkItem 
              title="AMET Study Materials" 
              subtitle="E-Books, Video Tutorials, Previous Year Question Papers"
              href="http://www.ametonline.com/studymaterial/"
            />
            
            <li className="pl-6 mt-6">
              <h3 className="font-medium text-aemet-navy mb-2">AMET In-house Publications</h3>
              <ul className="space-y-2 ml-4">
                <LinkItem title="AIJM (AMET International Journal of Management)" href="http://www.ametjournal.com/" />
                <LinkItem title="AMJ (AMET Maritime Journal)" href="http://www.amj.co.in/" />
                <LinkItem title="AIJPCS (AMET International Journal of Physical & Chemical Science)" href="http://www.aijpcs.com/" />
                <LinkItem title="JMBS (Journal of Marine Biosciences)" href="http://www.jmbs.co.in/index.html" />
              </ul>
            </li>
          </ul>
        </div>

        {/* Major Categories with Accordions */}
        <Accordion type="multiple" className="space-y-4">
          {/* E-Books Section */}
          <AccordionItem value="ebooks" className="border rounded-lg shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-aemet-blue" />
                <span className="font-semibold text-aemet-navy">Open Access E-Books</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <LinkItem title="Arts & Photography" href="http://www.e-booksdirectory.com/listing.php?category=108" />
                <LinkItem title="Ask Sam E-books" subtitle="Shakespeare, legal & governmental texts" href="http://www.asksam.com/ebooks/" />
                <LinkItem title="Baen Free Library" subtitle="Downloadable science fiction novels" href="http://www.baen.com/library/" />
                <LinkItem title="Biographies & Memoirs" href="http://www.e-booksdirectory.com/listing.php?category=146" />
                <LinkItem title="Book Yards" subtitle="Books, education materials, information" href="http://www.bookyards.com/" />
                <LinkItem title="Business & Investing" href="http://www.e-booksdirectory.com/listing.php?category=118" />
                <LinkItem title="Computer Science & Internet" href="http://www.e-booksdirectory.com/listing.php?category=9" />
                <LinkItem title="Directory of Open Access Books" href="http://www.doabooks.org/" />
                <LinkItem title="e-Book Lobby" subtitle="Collection of various subjects" href="http://www.ebooklobby.com/" />
                <LinkItem title="Engineering & Technology" href="http://www.e-booksdirectory.com/listing.php?category=73" />
                <LinkItem title="ENVIS Bulletin" subtitle="Telemetry in Wildlife Science" href="http://www2.wii.gov.in/envis/telemetry/index.html" />
                <LinkItem title="Free Book Spot" subtitle="4485 Titles in various subjects" href="http://www.freebookspot.es/" />
                <LinkItem title="Free Online Books" href="http://freeonlinebooks.net/" />
                <LinkItem title="Free Tech Books" href="http://www.freetechbooks.com/" />
                <LinkItem title="Free Computer Books" href="http://www.freecomputerbooks.com/" />
                <LinkItem title="Get Free EBooks" href="http://www.getfreeebooks.com/" />
                <LinkItem title="Gigapedia" subtitle="More than 300,000 free e-books" href="http://www.library.nu/" />
                <LinkItem title="Project Gutenberg" subtitle="20,000+ public domain books" href="http://www.gutenberg.org/" />
                <LinkItem title="Health, Mind & Body" href="http://www.e-booksdirectory.com/listing.php?category=83" />
                <LinkItem title="History" href="http://www.e-booksdirectory.com/listing.php?category=110" />
                <LinkItem title="Humanities" href="http://www.e-booksdirectory.com/listing.php?category=282" />
                <LinkItem title="Law" href="http://www.e-booksdirectory.com/listing.php?category=268" />
                <LinkItem title="Literature & Fiction" href="http://www.e-booksdirectory.com/listing.php?category=74" />
                <LinkItem title="ManyBooks" subtitle="More than 20,000 e-books" href="http://www.manybooks.net/" />
                <LinkItem title="Mathematics" href="http://www.e-booksdirectory.com/listing.php?category=3" />
                <LinkItem title="Medical Science" href="http://www.e-booksdirectory.com/listing.php?category=77" />
                <LinkItem title="Nonfiction" href="http://www.e-booksdirectory.com/listing.php?category=19" />
                <LinkItem title="Online Books for Children" href="http://www.biguniverse.com/" />
                <LinkItem title="Online Programming Books" href="http://www.onlineprogrammingbooks.com/" />
                <LinkItem title="Open Book Publishers" subtitle="Academic books in humanities and social sciences" href="http://www.openbookpublishers.com/" />
                <LinkItem title="Outdoors & Nature" href="http://www.e-booksdirectory.com/listing.php?category=136" />
                <LinkItem title="Pure Science" href="http://www.e-booksdirectory.com/listing.php?category=1" />
                <LinkItem title="Religion & Spirituality" href="http://www.e-booksdirectory.com/listing.php?category=65" />
                <LinkItem title="Read Print" href="http://www.readprint.com/" />
                <LinkItem title="Scribd" subtitle="Document sharing site" href="http://www.scribd.com/" />
                <LinkItem title="Snip Files" subtitle="Free e-books and software" href="http://www.snipfiles.com/" />
                <LinkItem title="Science & Engineering Free Books" href="http://www.techbooksforfree.com/science.shtml" />
                <LinkItem title="The Online Books Page" subtitle="Over 30,000 free books" href="http://digital.library.upenn.edu/books/" />
                <LinkItem title="ibiblio Digital Library" href="http://www.ibiblio.org/" />
                <LinkItem title="Free-Ebooks.net" href="http://www.free-ebooks.net/" />
                <LinkItem title="Tourism & Travel" href="http://www.e-booksdirectory.com/listing.php?category=174" />
                <LinkItem title="PDF Drive" href="http://www.pdfdrive.net/" />
                <LinkItem title="Rare Book Society of India" href="https://www.rarebooksocietyofindia.org/grid-layout.php?c=Rare%20Books" />
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* E-Journals Section */}
          <AccordionItem value="ejournals" className="border rounded-lg shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-aemet-blue" />
                <span className="font-semibold text-aemet-navy">Open Access E-Journals</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="mb-6">
                <h3 className="font-medium text-aemet-navy mb-3">Marine Journals</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <LinkItem title="ICES Journal of Marine Science" href="http://icesjms.oxfordjournals.org/" />
                  <LinkItem title="International Journal of e-Navigation and Maritime Economy" href="http://www.sciencedirect.com/science/journal/aip/24055352" />
                  <LinkItem title="International Journal of Marine Science and Engineering" href="http://ijmase.srbiau.ac.ir/" />
                  <LinkItem title="International Journal of Naval Architecture and Ocean Engineering" href="http://www.degruyter.com/view/j/ijnaoe" />
                  <LinkItem title="International Journal of Naval History" href="http://www.ijnhonline.org/" />
                  <LinkItem title="Journal of Marine Engineering and Technology" href="http://www.tandfonline.com/toc/tmar20/current" />
                  <LinkItem title="Journal of Marine Research" href="http://www.ingentaconnect.com/content/jmr" />
                  <LinkItem title="Journal of Sailboat Technology" href="http://www.sname.org/sailboattechnology/home" />
                  <LinkItem title="Maritime Studies" href="http://maritimestudiesjournal.springeropen.com/articles" />
                  <LinkItem title="Oceanologia" href="http://www.iopan.gda.pl/oceanologia/issues.html" />
                  <LinkItem title="Open Journal of Marine Science" href="http://www.scirp.org/journal/ojms/" />
                  <LinkItem title="Terra et Aqua" href="http://www.iadc-dredging.com/" />
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-aemet-navy mb-3">Marine Magazines</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <LinkItem title="Ausmarine" href="http://www.bairdmaritime.com/index.php?option=com_wrapper&view=wrapper&Itemid=96" />
                  <LinkItem title="Cargo Talk" href="http://www.cargotalk.in/" />
                  <LinkItem title="Digital Ship" href="http://www.thedigitalship.com/" />
                  <LinkItem title="Indian Ports Association E-Magazine" href="http://ipa.nic.in/e-magazine.pdf" />
                  <LinkItem title="Marine & Offshore Technology" href="http://www.marineoffshoretechnology.net/current-issue" />
                  <LinkItem title="Maritime Gateway" href="http://www.maritimegateway.com/mgw/index.php/magazine/download-magazine-pdf" />
                  <LinkItem title="Maritime Reporter and Marine News" href="http://www.marinelink.com/magazines/archive.aspx" />
                  <LinkItem title="Professional Boat Builder" href="http://digital.proboat.com/Default.aspx" />
                  <LinkItem title="Seatec International Maritime Review" href="http://www.seatec.fi/magazine/" />
                  <LinkItem title="Ships and Shipping" href="http://www.bairdmaritime.com/" />
                  <LinkItem title="Tanker Operator" href="http://www.tankeroperator.com/AllMagazine.aspx" />
                  <LinkItem title="IMO News" href="http://www.imo.org/en/MediaCentre/MaritimeNewsMagazine/Pages/Home.aspx" />
                  <LinkItem title="Marine Waves" href="http://themarinewaves.com/" />
                  <LinkItem title="Command Magazine" href="http://cmmi.co.in/command-magazine" />
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-aemet-navy mb-3">General E-Journals</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <LinkItem title="Access to Global Online Research in Agriculture (AGORA)" href="http://www.aginternetwork.org/en" />
                  <LinkItem title="Bioline International" subtitle="Open Source Journals" href="http://www.bioline.org.br/journals" />
                  <LinkItem title="CIMMYT" subtitle="International Maize and Wheat Improvement Centre" href="http://www.cimmyt.org/" />
                  <LinkItem title="Directory of Open Access Journals (DOAJ)" href="https://doaj.org/" />
                  <LinkItem title="EPW (Economic and Political Weekly)" href="http://www.epw.in/epw/user/userindex.jsp" />
                  <LinkItem title="European Scientific Co-operative on Phytotherapy" subtitle="European Phyto journal" href="http://www.escop.com/" />
                  <LinkItem title="Evidence-Based Complementary and Alternative Medicine" href="http://www.hindawi.com/journals/ecam/" />
                  <LinkItem title="Electronic Resources for Mathematicians Science" href="http://www.emis.de/" />
                  <LinkItem title="Free Medical Journals" href="http://www.freemedicaljournals.com/" />
                  <LinkItem title="Free On-line Chemistry Journals" href="http://www.abc.chemistry.bsu.by/current/fulltext.htm" />
                  <LinkItem title="Health Inter Network Access to Research Initiative" href="http://www.who.int/hinari/en" />
                  <LinkItem title="High Wire Press" subtitle="Repository of free peer-reviewed content" href="http://intl.highwire.org/lists/freeart.dtl" />
                  <LinkItem title="Indian Academy of Sciences (IAS)" href="http://www.ias.ac.in/" />
                  <LinkItem title="International Network for the Availability of Scientific Publications (INASP)" href="http://www.inasp.info/" />
                  <LinkItem title="INSPIRE-HEP Literature Database" href="http://inspirehep.net/?ln=en" />
                  <LinkItem title="Indian Academy of Sciences Publications" href="http://www.ias.ac.in/publications.html" />
                  <LinkItem title="Journal of Postgraduate Medicine" href="http://www.jpgmonline.com/" />
                  <LinkItem title="MyOwnJournal" href="http://myownjournal.com/" />
                  <LinkItem title="MedIND - Medical Journals" subtitle="33 Full text journals" href="http://www.medind.nic.in/" />
                  <LinkItem title="Molecular Diversity Preservation International (MDPI)" href="http://www.mdpi.org/" />
                  <LinkItem title="National Preservation Office – NPO" href="http://www.bl.uk/blpac/journaltemp.html" />
                  <LinkItem title="Nature Proceedings" subtitle="Preprint server for Life Science" href="http://precedings.nature.com/" />
                  <LinkItem title="Nature Publishing Group" subtitle="Open Access Journals" href="http://lib.pondiuni.edu.in/nature.php" />
                  <LinkItem title="Nutrition Bytes" subtitle="Free full text" href="http://escholarship.org/uc/uclabiolchem_nutritionbytes" />
                  <LinkItem title="OMICS Publishing Group" subtitle="Open Access Journals" href="http://www.omicsonline.org/open-access-journals-list.php" />
                  <LinkItem title="Open Access Library (OALIB)" subtitle="263,388 Academic Articles" href="http://www.oalib.com/" />
                  <LinkItem title="Open Science Directory" subtitle="By EBSCO and Hasselt University" href="http://www.opensciencedirectory.net/" />
                  <LinkItem title="Palgrave Macmillan" subtitle="Open Access Journals" href="http://www.palgrave-journals.com/palgraveopen/index.html" />
                  <LinkItem title="Physics Related Free Access Journals" href="http://www.eps.org/physNet/journals.html" />
                  <LinkItem title="PSIgate" subtitle="Resources in physical sciences" href="http://www.psigate.org/" />
                  <LinkItem title="Public Library of Science" subtitle="Open-access journals in Biology and Medicine" href="http://www.plos.org/" />
                  <LinkItem title="BioMed Central" subtitle="Publisher of 150+ peer-reviewed Open Access Journals" href="http://www.biomedcentral.com/" />
                  <LinkItem title="SAGE Open Subject Collections" href="http://sgo.sagepub.com/" />
                  <LinkItem title="Social Science Research Network (SSRN)" href="http://www.ssrn.com/" />
                  <LinkItem title="Springer Open" subtitle="Free access in Science, Technology and Medicine" href="http://www.springeropen.com/" />
                  <LinkItem title="The African Journal Archive" href="http://www.sabinet.co.za/?page=african-journal-archive" />
                  <LinkItem title="PubMed Central (NIH)" subtitle="Biomedical archive" href="http://www.pubmedcentral.com/" />
                  <LinkItem title="University of Tennessee" subtitle="Research Guides" href="http://libguides.utk.edu/style" />
                  <LinkItem title="Wiley Open Access Journal" href="http://www.wileyopenaccess.com/index.html" />
                  <LinkItem title="Hindawi" href="https://www.hindawi.com/" />
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* E-Theses Section */}
          <AccordionItem value="etheses" className="border rounded-lg shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-aemet-blue" />
                <span className="font-semibold text-aemet-navy">E-Theses (Open Access)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <ul className="space-y-2">
                <LinkItem title="DART-Europe E-theses Portal" href="http://www.dart-europe.eu/basic-search.php" />
                <LinkItem title="National Chemical Laboratory Pune" subtitle="Theses full text free" href="http://docs.ndltd.org/" />
                <LinkItem title="Networked Digital Library of Theses and Dissertations (NDLTD)" href="http://www.ndltd.org/find" />
                <LinkItem title="Open Access ProQuest Dissertations & Theses (PQDT Open)" href="http://pqdtopen.proquest.com/" />
                <LinkItem title="Vidyanidhi" subtitle="Access to Indian theses" href="http://www.vidyanidhi.org.in/" />
                <LinkItem title="Open Access Theses/Dissertations" href="http://oatd.org/" />
                <LinkItem title="Shodhganga" href="http://shodhganga.inflibnet.ac.in/" />
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* E-Reference Section */}
          <AccordionItem value="ereference" className="border rounded-lg shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-aemet-blue" />
                <span className="font-semibold text-aemet-navy">E-Reference</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                <LinkItem title="Cambridge Dictionaries Online" href="http://www.dictionary.cambridge.org/" />
                <LinkItem title="Foreign Language Dictionary-French" href="http://www.libraryspot.com/dictionaries/frenchdictionaries.htm" />
                <LinkItem title="Foreign Language Dictionary-Spanish" href="http://www.libraryspot.com/dictionaries/spanishdictionaries.htm" />
                <LinkItem title="Glossarist" href="http://www.glossarist.com/" />
                <LinkItem title="Librarian's Index to the Internet" href="http://lii.org/" />
                <LinkItem title="Merriam-Webster" href="http://www.merriam-webster.com/" />
                <LinkItem title="One Look Dictionaries" href="http://www.onelook.com/" />
                <LinkItem title="Scholarpedia" href="http://www.scholarpedia.org/" />
                <LinkItem title="Subject Dictionary-Business/Finance" href="http://www.libraryspot.com/dictionaries/businessdictionaries.htm" />
                <LinkItem title="Subject Dictionary-Library and Information Science" href="http://www.abc-clio.com/ODLIS/odlis_d.aspx" />
                <LinkItem title="Subject Dictionary-Medical Science" href="http://www.medterms.com/script/main/hp.asp" />
                <LinkItem title="Subject Dictionary-Science" href="http://www.libraryspot.com/dictionaries/sciencedictionaries.htm" />
                <LinkItem title="Subject Dictionary-Technology" href="http://www.libraryspot.com/dictionaries/computerdictionaries.htm" />
                <LinkItem title="Wikipedia" href="http://www.wikipedia.org/" />
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* General & Search Engine Section */}
          <AccordionItem value="general" className="border rounded-lg shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg">
              <div className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-aemet-blue" />
                <span className="font-semibold text-aemet-navy">General & Search Engine</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <ul className="space-y-2">
                <LinkItem title="BASE (Bielefeld Academic Search Engine)" href="http://www.base-search.net/" />
                <LinkItem title="Intute" subtitle="Access to best internet resources" href="http://www.intute.ac.uk/" />
                <LinkItem title="List of top companies in India and abroad" href="http://www.vcsdata.com/" />
                <LinkItem title="Nobel Prize Internet Archive" href="http://www.almaz.com/nobel/" />
                <LinkItem title="Scirus" subtitle="Scientific search engine for scholarly literature" href="http://www.scirus.com/" />
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* E-Patents Section */}
          <AccordionItem value="epatents" className="border rounded-lg shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-aemet-blue" />
                <span className="font-semibold text-aemet-navy">E-Patents</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <ul className="space-y-2">
                <LinkItem title="Canadian Patents" href="http://brevets-patents.ic.gc.ca/opic-cipo/cpd/eng/introduction.html" />
                <LinkItem title="European Patents" href="http://ep.espacenet.com/" />
                <LinkItem title="Indian Patent Design and Trademark Office" href="http://www.ipindia.nic.in/" />
                <LinkItem title="Internet Sites for Patent Search" href="http://www.pfc.org.in/info/site.htm" />
                <LinkItem title="Thai Patents" href="http://www.patentarea.com/thai_patent_requirements.html" />
                <LinkItem title="United States Patents" href="http://patft.uspto.gov/" />
                <LinkItem title="WIPO PCT Database" href="http://pctgazette.wipo.int/" />
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* E-Newspapers */}
          <AccordionItem value="enewspapers" className="border rounded-lg shadow-sm">
            <AccordionTrigger className="px-4 py-3 hover:bg-slate-50 rounded-t-lg">
              <div className="flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-aemet-blue" />
                <span className="font-semibold text-aemet-navy">E-Newspapers</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="py-2 text-gray-600 italic">
                Access to electronic versions of popular newspapers and periodicals.
              </div>
              <a href="http://www.onlinenewspapers.com/" target="_blank" rel="noopener noreferrer">
                <Button className="mt-2 bg-aemet-blue hover:bg-aemet-navy text-white flex items-center gap-2">
                  <span>Access E-Newspapers</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </LibraryLayout>
  );
};

// Helper component for link items
const LinkItem = ({ title, subtitle, href }: { title: string; subtitle?: string; href?: string }) => {
  return (
    <li className="relative pl-6 group">
      <ExternalLink className="absolute left-0 top-1 h-4 w-4 text-gray-400 group-hover:text-aemet-blue" />
      <a 
        href={href || "#"}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className="inline-flex items-center text-gray-700 hover:text-aemet-blue hover:underline"
      >
        {title}
      </a>
      {subtitle && <span className="text-sm text-gray-500 ml-1">- {subtitle}</span>}
    </li>
  );
};

export default LibraryLinks;

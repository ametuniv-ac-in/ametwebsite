import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Search, Phone, ChevronDown, User } from 'lucide-react';

interface Stop {
  stop: string;
  time: string;
}

interface RouteData {
  route_no: string;
  route_name: string;
  driver: { name: string; phone: string };
  stops: Stop[];
}

const busRoutes: RouteData[] = [
  {
    route_no: "01",
    route_name: "Madhavaram",
    driver: { name: "Mani", phone: "8610956017" },
    stops: [
      { stop: "MADHAVARAM ARUL NAGAR", time: "05:50" },
      { stop: "MOOLAKADAI", time: "06:00" },
      { stop: "MADHAVARAM ROUNTANA", time: "06:10" },
      { stop: "RETTERI", time: "06:15" },
      { stop: "NATHAMUNI", time: "06:20" },
      { stop: "I.C.F BUS TERMINUS", time: "06:30" },
      { stop: "ANNA NAGAR ROUNTANA", time: "06:35" },
      { stop: "THIRUMANGALAM", time: "06:40" },
      { stop: "KOYAMBEDU ROUNTANA", time: "06:45" },
      { stop: "VADAPALANI", time: "06:50" },
      { stop: "KODAMBAKKAM", time: "06:55" },
      { stop: "VALLUVAR KOTTAM", time: "07:00" },
      { stop: "TEYNAMPET", time: "07:05" },
      { stop: "KOTTURPURAM", time: "07:15" },
      { stop: "MATHIYA KAILASH", time: "07:25" },
      { stop: "THIRUVANMIYUR", time: "07:30" },
      { stop: "AMET UNIVERSITY", time: "08:00" }
    ]
  },
  {
    route_no: "02",
    route_name: "Tambaram",
    driver: { name: "Zahirhussain", phone: "9940043331" },
    stops: [
      { stop: "TAMBARAM RAILWAY STATION", time: "06:55" },
      { stop: "AIRFORCE ROAD", time: "07:02" },
      { stop: "CAMP ROAD", time: "07:05" },
      { stop: "MAHALAKSHMI NAGAR", time: "07:07" },
      { stop: "RAJAKILPAKKAM", time: "07:09" },
      { stop: "SEMBAKKAM", time: "07:10" },
      { stop: "SANTHOSAPURAM", time: "07:13" },
      { stop: "MEDAVAKKAM JUNCTION", time: "07:20" },
      { stop: "MEDAVAKKAM", time: "07:25" },
      { stop: "PERUMBAKKAM", time: "07:35" },
      { stop: "SHOLINGANALLUR", time: "07:40" },
      { stop: "AMET UNIVERSITY", time: "08:00" }
    ]
  },
  {
    route_no: "03",
    route_name: "Anna Nagar (HOD - Staff Only)",
    driver: { name: "Praveen", phone: "6374463105" },
    stops: [
      { stop: "ANNANAGAR", time: "06:25" },
      { stop: "PADI", time: "06:30" },
      { stop: "ICF", time: "06:35" },
      { stop: "KILPAUK", time: "06:45" },
      { stop: "NUNGAMBAKKAM", time: "06:50" },
      { stop: "ADYAR", time: "07:10" },
      { stop: "TIRUVANMIYUR", time: "07:20" },
      { stop: "PALAVAKKAM", time: "07:25" },
      { stop: "AMET UNIVERSITY", time: "08:00" }
    ]
  },
  {
    route_no: "04",
    route_name: "K.K. Nagar (HOD - Staff Only)",
    driver: { name: "Arumugaswamy", phone: "9884581176" },
    stops: [
      { stop: "K.K. NAGAR", time: "06:50" },
      { stop: "VADAPALANI", time: "06:55" },
      { stop: "VELACHERI", time: "07:15" },
      { stop: "UTHANDI", time: "07:50" },
      { stop: "AMET UNIVERSITY", time: "08:00" }
    ]
  },
  {
    route_no: "05",
    route_name: "Avadi",
    driver: { name: "Babu", phone: "8608271959" },
    stops: [
      { stop: "AVADI BUS TERMINAS", time: "06:10" },
      { stop: "TIRUMULLAIVOYAL", time: "06:15" },
      { stop: "ROCKY THEATRE", time: "06:20" },
      { stop: "DUNLOP", time: "06:25" },
      { stop: "AMBATHUR ESTATE", time: "06:30" },
      { stop: "WAVIN", time: "06:30" },
      { stop: "GOLDEN FLAT", time: "06:35" },
      { stop: "THIRUMANGALAM", time: "06:40" },
      { stop: "C.M.B.T", time: "06:45" },
      { stop: "VADAPALANI", time: "06:50" },
      { stop: "ASHOK PILLAR", time: "06:55" },
      { stop: "GUINDY", time: "07:00" },
      { stop: "MATHIYA KAILASH", time: "07:10" },
      { stop: "THIRUVANMIYUR", time: "07:15" },
      { stop: "AMET UNIVERSITY", time: "08:00" }
    ]
  },
  {
    route_no: "06",
    route_name: "Ponnamallee",
    driver: { name: "Shankar", phone: "9941404260" },
    stops: [
      { stop: "KUMANAN CHAVADI", time: "06:20" },
      { stop: "KATTUPAKKAM", time: "06:25" },
      { stop: "IYYAPPAN THANGAL", time: "06:27" },
      { stop: "PORUR", time: "06:35" },
      { stop: "MUGALIVAKKAM", time: "06:40" },
      { stop: "MIOT HOSPITAL", time: "06:45" },
      { stop: "BUTT ROAD", time: "06:45" },
      { stop: "ALANDUR", time: "06:50" },
      { stop: "MADIPAKKAM", time: "07:00" },
      { stop: "KEELKATTALAI", time: "07:02" },
      { stop: "ECHANKADU", time: "07:05" },
      { stop: "KOVILAMBAKKAM", time: "07:05" },
      { stop: "MEDAVAKKAM", time: "07:10" },
      { stop: "SHOLINGANALLUR", time: "07:35" },
      { stop: "AMET UNIVERSITY", time: "08:00" }
    ]
  },
  {
    route_no: "07",
    route_name: "Pallavaram",
    driver: { name: "Immanisravel", phone: "8111081781" },
    stops: [
      { stop: "POLICHALUR", time: "06:25" },
      { stop: "PAMMAL", time: "06:30" },
      { stop: "PALLAVARAM", time: "06:35" },
      { stop: "AIRPORT", time: "06:40" },
      { stop: "NANGANALLUR", time: "06:50" },
      { stop: "VANUVAMPET", time: "06:55" },
      { stop: "PUZHUTHI VAKKAM", time: "07:00" },
      { stop: "VELACHERY", time: "07:05" },
      { stop: "BABY NAGAR", time: "07:05" },
      { stop: "THARAMANI", time: "07:10" },
      { stop: "M.G.R. ROAD", time: "07:15" },
      { stop: "PERUNGUDI", time: "07:15" },
      { stop: "THORAIPAKKAM", time: "07:20" },
      { stop: "KANNAGI NAGAR", time: "07:25" },
      { stop: "OKKIYAMPET", time: "07:30" },
      { stop: "SHOLINGANALLUR", time: "07:45" },
      { stop: "AMET UNIVERSITY", time: "08:00" }
    ]
  },
  {
    route_no: "08",
    route_name: "Ennore",
    driver: { name: "Vijay", phone: "9789660877" },
    stops: [
      { stop: "ENNURE", time: "06:00" },
      { stop: "THIRUVETRIYUR", time: "06:15" },
      { stop: "TOLL GATE", time: "06:20" },
      { stop: "TONDIAR PET", time: "06:20" },
      { stop: "TONDIAR PET MAHARANI", time: "06:25" },
      { stop: "MINT BUS STAND", time: "06:40" },
      { stop: "NATARAJA THEATRE", time: "06:45" },
      { stop: "CENTRAL", time: "06:50" },
      { stop: "SATHIYA STUDIO", time: "07:05" },
      { stop: "ADYAR", time: "07:10" },
      { stop: "THIRUVANMIYUR RTO", time: "07:20" },
      { stop: "NEELANKARAI", time: "07:30" },
      { stop: "AMET UNIVERSITY", time: "08:00" }
    ]
  },
  {
    route_no: "09",
    route_name: "Padur",
    driver: { name: "Elangovan", phone: "9840057963" },
    stops: [
      { stop: "KANDIGAI", time: "06:50" },
      { stop: "PUDUPAKKAM", time: "07:00" },
      { stop: "THALAMBUR", time: "07:10" },
      { stop: "NAVALUR JUNCTION", time: "07:20" },
      { stop: "PADUR", time: "07:30" },
      { stop: "KELAMBAKKAM", time: "07:35" },
      { stop: "KOVALAM", time: "07:40" },
      { stop: "MGM", time: "07:45" },
      { stop: "AMET UNIVERSITY", time: "07:55" }
    ]
  }
];

const BusRoute: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openRoutes, setOpenRoutes] = useState<string[]>(busRoutes.map(r => r.route_no));

  const filteredRoutes = useMemo(() => {
    if (!searchQuery.trim()) return busRoutes;
    const q = searchQuery.toLowerCase();
    return busRoutes.filter(route =>
      route.route_name.toLowerCase().includes(q) ||
      route.route_no.includes(q) ||
      route.stops.some(s => s.stop.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const toggleRoute = (routeNo: string) => {
    setOpenRoutes(prev =>
      prev.includes(routeNo) ? prev.filter(r => r !== routeNo) : [...prev, routeNo]
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>Bus Routes - AMET University</title>
        <meta name="description" content="AMET University bus route schedule with stops and timings for student and staff transportation." />
      </Helmet>

      <section className="bg-gradient-to-r from-[#0a1628] to-[#1a3a5c] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bus Routes</h1>
          <p className="text-lg opacity-90">University Transportation Schedule</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Transport Manager */}
        <div className="bg-accent/30 border border-border rounded-lg p-4 mb-6 flex flex-wrap items-center gap-3">
          <Phone className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground">Transport Manager:</span>
          <a href="tel:9383350111" className="text-primary hover:underline font-medium">9383350111</a>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by route name or stop..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {filteredRoutes.length === 0 && (
          <p className="text-center text-muted-foreground py-8">No routes found matching "{searchQuery}"</p>
        )}

        {/* Routes */}
        <div className="space-y-4">
          {filteredRoutes.map(route => {
            const isStaffOnly = route.route_name.includes('Staff Only');
            return (
              <Collapsible
                key={route.route_no}
                open={openRoutes.includes(route.route_no)}
                onOpenChange={() => toggleRoute(route.route_no)}
              >
                <CollapsibleTrigger className="w-full">
                  <div className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors hover:bg-accent/50 ${isStaffOnly ? 'border-amber-300 bg-amber-50/50 dark:bg-amber-950/20' : 'border-border bg-card'}`}>
                    <div className="flex items-center gap-3 text-left">
                      <span className="bg-primary text-primary-foreground font-bold text-sm rounded-full w-9 h-9 flex items-center justify-center shrink-0">
                        {route.route_no}
                      </span>
                      <div>
                        <span className="font-semibold text-foreground">{route.route_name}</span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
                          <User className="h-3.5 w-3.5" />
                          <span>{route.driver.name}</span>
                          <span>•</span>
                          <a href={`tel:${route.driver.phone}`} onClick={e => e.stopPropagation()} className="text-primary hover:underline">{route.driver.phone}</a>
                        </div>
                      </div>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${openRoutes.includes(route.route_no) ? 'rotate-180' : ''}`} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="border border-t-0 border-border rounded-b-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="w-12">#</TableHead>
                          <TableHead>Stop</TableHead>
                          <TableHead className="w-24 text-right">Time</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {route.stops.map((stop, idx) => (
                          <TableRow key={idx}>
                            <TableCell className="text-muted-foreground">{idx + 1}</TableCell>
                            <TableCell className="font-medium">{stop.stop}</TableCell>
                            <TableCell className="text-right font-mono text-sm">{stop.time}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </div>

    </Layout>
  );
};

export default BusRoute;

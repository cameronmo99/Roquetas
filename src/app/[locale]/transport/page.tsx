
import type { Metadata } from 'next';
import { Bus, Plane, Building, Phone, Info, Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Transport in Roquetas de Mar',
  description:
    'Your guide to getting around Roquetas de Mar, including local buses and taxis.',
};

export default function TransportPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Getting Around Roquetas de Mar
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find information on local buses, taxis, and other ways to explore the
          area.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Bus className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">
                  Local Buses
                </CardTitle>
              </div>
              <CardDescription>
                The most economical way to travel around Roquetas and to nearby
                areas. Buses are managed by the Almería Transport Consortium.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5" />
                      To Almería Airport (LEI)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>
                      There is no direct bus line from Roquetas de Mar to
                      Almería Airport. The most common route is to take a bus to
                      Almería city and then another bus to the airport.
                    </p>
                    <ol className="list-decimal list-inside space-y-1 pl-2">
                      <li>
                        Take line{' '}
                        <span className="font-semibold text-primary">
                          M-330
                        </span>{' '}
                        from Roquetas to Almería Bus/Train Station (Estación
                        Intermodal).
                      </li>
                      <li>
                        From the Estación Intermodal, take line{' '}
                        <span className="font-semibold text-primary">
                          L30
                        </span>{' '}
                        to the airport.
                      </li>
                    </ol>
                    <p>
                      The total journey time is approximately 1.5 - 2 hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5" />
                      To Almería City
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      The{' '}
                      <span className="font-semibold text-primary">
                        M-330
                      </span>{' '}
                      and{' '}
                      <span className="font-semibold text-primary">
                        M-333
                      </span>{' '}
                      lines connect Roquetas de Mar with the center of Almería.
                      Buses run frequently throughout the day.
                    </p>
                    <p className="mt-2">
                      The main stop in Almería is the Estación Intermodal, which
                      is convenient for connecting to other buses and trains.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-3">
                      <Bus className="h-5 w-5" />
                      Local Routes in Roquetas
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Several local bus lines (Líneas Urbanas) operate within
                      Roquetas de Mar, connecting the town center, the port, the
                      urbanizaciones (Playa Serena), and shopping centers like
                      Gran Plaza.
                    </p>
                    <p className="mt-2">
                      Look for bus stops marked with local line numbers. These
                      are perfect for getting from one end of the resort to the
                      other.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" x2="12" y1="9" y2="13"></line>
                  <line x1="12" x2="12.01" y1="17" y2="17"></line>
                </svg>
                <CardTitle className="font-headline text-2xl">Taxis</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Taxis are a convenient way to get around, especially for short
                trips or when traveling late at night.
              </p>
              <div className="flex items-start">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div className="ml-3">
                  <p className="font-semibold">Main Taxi Rank Phone:</p>
                  <a href="tel:+34950333333" className="hover:underline">
                    +34 950 33 33 33 (Example)
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                You can find taxi ranks at major points like the bus station, large hotels, and the Gran Plaza shopping center.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Info className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">
                  Travel Tips
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                <div className="flex items-start">
                    <Star className="mt-1 h-4 w-4 flex-shrink-0 text-accent fill-accent" />
                    <p className="ml-3">Bus tickets can usually be purchased directly from the driver. It's helpful to have small change.</p>
                </div>
                 <div className="flex items-start">
                    <Star className="mt-1 h-4 w-4 flex-shrink-0 text-accent fill-accent" />
                    <p className="ml-3">Consider purchasing a multi-trip bus card from a "estanco" (tobacconist) for a discount on fares.</p>
                </div>
                 <div className="flex items-start">
                    <Star className="mt-1 h-4 w-4 flex-shrink-0 text-accent fill-accent" />
                    <p className="ml-3">Bus times can be less frequent on Sundays and public holidays. Always check the schedule.</p>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

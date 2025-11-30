import type { Metadata } from 'next';
import { Mail, Phone, Shield, LifeBuoy, Building, Plane } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Contact Us | Roquetas Explorer',
  description: 'Get in touch with support, and find emergency and other useful contact numbers for Roquetas de Mar.',
};

const emergencyContacts = [
    { name: 'General Emergencies', number: '112', icon: Shield },
    { name: 'Ambulance (Ambulancia)', number: '061', icon: LifeBuoy },
    { name: 'National Police (Policía Nacional)', number: '091', icon: Shield },
    { name: 'Local Police (Policía Local)', number: '092', icon: Shield },
    { name: 'Fire Department (Bomberos)', number: '080', icon: LifeBuoy },
];

const usefulContacts = [
    { name: 'Tourist Information Office', number: '+34 950 33 32 02', icon: Building },
    { name: 'Iberia Airlines', number: '+34 901 11 15 00', icon: Plane },
    { name: 'Ryanair (Spain)', number: '+34 972 18 34 57', icon: Plane },
    { name: 'EasyJet (Spain)', number: '+34 936 41 00 24', icon: Plane },
    { name: 'Vueling', number: '+34 900 64 50 00', icon: Plane },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          Contact & Useful Numbers
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find important contact information for your stay in Roquetas de Mar.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Support & General Inquiries */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Mail className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-2xl">Support & Inquiries</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                For questions about the app, partnership inquiries, or general feedback, please email us. We'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:roquetasexplorer@gmail.com"
                className="font-semibold text-primary hover:underline flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                roquetasexplorer@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Numbers */}
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <div className="flex items-center gap-4 text-destructive">
                <Shield className="h-8 w-8" />
                <CardTitle className="font-headline text-2xl">Emergency Numbers</CardTitle>
            </div>
             <CardDescription className="text-destructive/80">
              In any life-threatening situation, always dial 112 first.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {emergencyContacts.map((contact) => (
                <li key={contact.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <contact.icon className="h-5 w-5 flex-shrink-0" />
                    <span>{contact.name}</span>
                  </div>
                  <a href={`tel:${contact.number.replace(/\s/g, '')}`} className="font-mono font-bold text-lg hover:underline">
                    {contact.number}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Useful Numbers */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">Other Useful Contacts</CardTitle>
            </div>
            <CardDescription>
                Contact numbers for travel and tourism information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
               {usefulContacts.map((contact, index) => (
                <React.Fragment key={contact.name}>
                    <li className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <contact.icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                            <span>{contact.name}</span>
                        </div>
                        <a href={`tel:${contact.number.replace(/\s/g, '')}`} className="font-semibold text-primary hover:underline text-right">
                            {contact.number}
                        </a>
                    </li>
                    {index < usefulContacts.length - 1 && <Separator />}
                </React.Fragment>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

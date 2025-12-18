
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { getBusinesses, getBusinessById } from '@/lib/firestore-data';
import BusinessDetails from '@/components/BusinessDetails';

type Props = {
  params: { id: string };
};

// Re-generate routes at build time
export const dynamic = 'force-static';

export async function generateStaticParams() {
  const businesses = await getBusinesses();
  return businesses.map((business) => ({
    id: business.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const business = await getBusinessById((await params).id);
  if (!business) {
    return {
      title: 'Business Not Found',
    };
  }
  return {
    title: `${business.name} | Roquetas Explorer`,
    description: business.description,
  };
}

export default async function BusinessDetailsPage({ params }: Props) {
  const business = await getBusinessById((await params).id);

  if (!business) {
    notFound();
  }

  return <BusinessDetails business={business} />;
}


import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { businesses } from '@/lib/data';
import BusinessDetails from '@/components/BusinessDetails';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return businesses.map((business) => ({
    id: business.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const business = businesses.find((b) => b.id === params.id);
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

export default function BusinessDetailsPage({ params }: Props) {
  const business = businesses.find((b) => b.id === params.id);

  if (!business) {
    notFound();
  }

  return <BusinessDetails business={business} />;
}

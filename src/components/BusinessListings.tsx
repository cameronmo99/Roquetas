
'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';

import type { Business, BusinessCategory } from '@/lib/types';
import BusinessCard from './BusinessCard';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface BusinessListingsProps {
  allBusinesses: Business[];
}

export default function BusinessListings({ allBusinesses }: BusinessListingsProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') as BusinessCategory | 'all' || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<BusinessCategory | 'all'>(initialCategory);

  const filteredBusinesses = useMemo(() => {
    return allBusinesses.filter((business) => {
      const matchesSearch =
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        category === 'all' ||
        (Array.isArray(business.categories) && business.categories.includes(category));

      return matchesSearch && matchesCategory;
    });
  }, [allBusinesses, searchTerm, category]);

  return (
    <div className="mt-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for a business..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select
          value={category}
          onValueChange={(value: BusinessCategory | 'all') => setCategory(value)}
        >
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Restaurant">Restaurants</SelectItem>
            <SelectItem value="Bar">Bars</SelectItem>
            <SelectItem value="Cafe">Cafes</SelectItem>
            <SelectItem value="Hotel">Hotels</SelectItem>
            <SelectItem value="Takeaway">Takeaways</SelectItem>
            <SelectItem value="Apartment">Apartments</SelectItem>
            <SelectItem value="Shop">Shops</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredBusinesses.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <h3 className="font-headline text-2xl font-semibold">No businesses found</h3>
          <p className="mt-2 text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}

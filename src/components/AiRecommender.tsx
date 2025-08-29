'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bot, Loader2, Sparkles } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { handlePersonalizedRecommendations } from '@/app/actions';

const formSchema = z.object({
  userPreferences: z.string().min(10, 'Please describe your preferences in a bit more detail.'),
  pastActivities: z.string().optional(),
  trendingPopularity: z.enum(['Any', 'Low', 'Medium', 'High']),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiRecommender() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userPreferences: '',
      pastActivities: '',
      trendingPopularity: 'Any',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const result = await handlePersonalizedRecommendations(data);
      if (result.recommendations) {
        setRecommendations(result.recommendations);
      } else {
        throw new Error('No recommendations returned.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate recommendations. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-background">
      <CardHeader>
        <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
            </div>
            <div>
                <CardTitle className="font-headline text-3xl">Your Personal Guide</CardTitle>
                <CardDescription>Let our AI help you find the perfect experience.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="userPreferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are you in the mood for?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'A quiet, romantic restaurant with seafood' or 'a lively bar with live music'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="pastActivities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Any places you've liked before? (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., 'Loved the tapas at El Rincón'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="trendingPopularity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Popularity Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select popularity" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Any">Any</SelectItem>
                        <SelectItem value="Low">Hidden Gem</SelectItem>
                        <SelectItem value="Medium">Popular</SelectItem>
                        <SelectItem value="High">Trending Hotspot</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-6">
            <Button type="submit" disabled={isLoading} size="lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Get Recommendations
                </>
              )}
            </Button>

            {recommendations && !isLoading && (
              <Card className="w-full bg-background/80">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" /> Here are your recommendations:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none dark:prose-invert whitespace-pre-wrap font-body">{recommendations}</div>
                </CardContent>
              </Card>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

'use server';

import { getPersonalizedRecommendations, type PersonalizedRecommendationsInput, type PersonalizedRecommendationsOutput } from "@/ai/flows/personalized-recommendations";

export async function handlePersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  try {
    const recommendations = await getPersonalizedRecommendations(input);
    return recommendations;
  } catch (error) {
    console.error('Error getting personalized recommendations:', error);
    // In a real app, you might want to return a more structured error
    return { recommendations: 'Sorry, we were unable to generate recommendations at this time.' };
  }
}

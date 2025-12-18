import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Get projectId from the same environment variable as the Firebase config
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

export const ai = genkit({
  plugins: [
    googleAI({
      projectId: projectId, // Explicitly set the project ID for Genkit
    }),
  ],
  model: 'googleai/gemini-2.5-flash',
});

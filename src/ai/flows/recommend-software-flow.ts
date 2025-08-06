'use server';
/**
 * @fileOverview A software recommendation AI agent.
 * 
 * - recommendSoftware - A function that handles the software recommendation process.
 * - SoftwareRecommendation - The return type for the recommendSoftware function.
 */

import { ai } from '@/ai/genkit';
import { softwareList } from '@/lib/software-list';
import { z } from 'genkit';

const RecommendationSchema = z.object({
  name: z.string().describe('The name of the recommended software.'),
  description: z.string().describe('A brief description of the software.'),
  category: z.string().describe('The category the software belongs to.'),
  rating: z.number().describe('The rating of the software.'),
  tags: z.array(z.string()).describe('Tags associated with the software.'),
  reason: z.string().describe('A short explanation of why this software is a good recommendation for the user\'s need.'),
});

export type SoftwareRecommendation = z.infer<typeof RecommendationSchema>;

const RecommendSoftwareOutputSchema = z.array(RecommendationSchema);

export async function recommendSoftware(need: string): Promise<SoftwareRecommendation[]> {
  const result = await recommendSoftwareFlow(need);
  return result;
}

const softwareData = JSON.stringify(
  softwareList.map(category => ({
    category: category.category,
    description: category.description,
    items: category.items.map(item => ({
      name: item.name,
      description: item.description,
      tags: item.tags,
      rating: item.rating,
    })),
  }))
);

const prompt = ai.definePrompt({
  name: 'recommendSoftwarePrompt',
  input: { schema: z.string() },
  output: { schema: RecommendSoftwareOutputSchema },
  prompt: `You are an AI assistant for a software download website called Cobra. Your goal is to help users find the right software based on their needs.

You have access to a list of available software. Analyze the user's request and recommend up to 4 relevant items from the list. For each recommendation, you MUST provide a short reason explaining why it's a good fit for the user's request.

Do not recommend software that is not in the provided list.

Here is the list of available software:
${softwareData}

User's request: {{{prompt}}}
`,
});

const recommendSoftwareFlow = ai.defineFlow(
  {
    name: 'recommendSoftwareFlow',
    inputSchema: z.string(),
    outputSchema: RecommendSoftwareOutputSchema,
  },
  async (promptText) => {
    const { output } = await prompt(promptText);
    return output || [];
  }
);

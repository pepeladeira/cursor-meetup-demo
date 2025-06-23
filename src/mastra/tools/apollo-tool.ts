import { createTool } from '@mastra/core/tools';
import axios from 'axios';
import { z } from 'zod';

const APOLLO_API_BASE_URL = 'https://api.apollo.io/api/v1/people/match';

export const apolloTool = createTool({
  id: 'apollo-get-lead-info',
  description: 'Gets information about a lead from an email address using Apollo.io.',
  inputSchema: z.object({
    email: z.string().email().describe('The email of the lead to look up.'),
  }),
  outputSchema: z.object({
    person: z.any().describe('The person data returned from the Apollo API.'),
  }),
  execute: async ({ context }) => {
    const { email } = context;

    if (!process.env.APOLLO_API_KEY) {
      throw new Error('APOLLO_API_KEY environment variable is not set.');
    }

    try {
      const response = await axios.post(
        APOLLO_API_BASE_URL,
        {
          email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'X-Api-Key': process.env.APOLLO_API_KEY,
          },
        }
      );

      if (response.data && response.data.person) {
        return {
          person: response.data.person,
        };
      } else {
        throw new Error(`No person found for email: ${email}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Apollo API Error:', error.response?.data);
      }
      throw new Error(`Failed to fetch data from Apollo.io: ${error}`);
    }
  },
}); 
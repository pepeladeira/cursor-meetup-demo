import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';
import { meetingPrepAgent } from '../agents';

const generateBriefing = createStep({
  id: 'generate-briefing',
  description: 'Generates a sales meeting briefing based on a lead email.',
  inputSchema: z.object({
    email: z.string().email().describe('The corporate email of the lead.'),
  }),
  outputSchema: z.object({
    briefing: z.string().describe('The full briefing document.'),
  }),
  execute: async ({ inputData }) => {
    if (!inputData) {
      throw new Error('Input data with email is required.');
    }

    const { email } = inputData;

    const response = await meetingPrepAgent.stream([
      {
        role: 'user',
        content: `Gere um briefing de preparação para uma reunião com um lead da empresa cujo e-mail é ${email}.`,
      },
    ]);

    let briefingText = '';
    for await (const chunk of response.textStream) {
      briefingText += chunk;
    }

    return {
      briefing: briefingText,
    };
  },
});

export const meetingPrepWorkflow = createWorkflow({
  id: 'meeting-prep-workflow',
  inputSchema: z.object({
    email: z.string().email().describe('The corporate email of the lead.'),
  }),
  outputSchema: z.object({
    briefing: z.string().describe('The full briefing document.'),
  }),
}).then(generateBriefing);

meetingPrepWorkflow.commit(); 
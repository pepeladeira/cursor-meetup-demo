import { createTool } from "@mastra/core/tools";
import FirecrawlApp from "@mendable/firecrawl-js";
import { z } from "zod";

export const firecrawlTool = createTool({
  id: "firecrawl-scrape-url",
  description: "Scrapes a URL and returns the content in markdown format.",
  inputSchema: z.object({
    url: z.string().url().describe("The URL to scrape."),
  }),
  outputSchema: z.object({
    markdown: z
      .string()
      .describe("The scraped content of the website in markdown format."),
    url: z.string().url(),
  }),
  execute: async ({ context }) => {
    const url = context.url;
    const app = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY });
    const scrapeResult = await app.scrapeUrl(url, {
      formats: ["markdown"],
    });

    if (!scrapeResult.success) {
      throw new Error(`Failed to scrape URL: ${url}`);
    }

    return {
      markdown: scrapeResult.markdown || "",
      url: url,
    };
  },
});

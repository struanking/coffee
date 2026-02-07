import { defineCollection, z } from "astro:content";
import client from "../tina/__generated__/client";

const coffee = defineCollection({
  loader: async () => {
    const response = await client.queries.coffeeConnection();

    // Map Tina content to the correct format for Astro
    return response.data.coffeeConnection.edges
      ?.filter((post) => !!post)
      .map((post) => {
        const node = post?.node;
        console.log(node)
        return {
          ...node,
          // id: node?._sys.relativePath.replace(/\.mdx?$/, ""), // Generate clean URLs
          id: node?._sys.relativePath.replace(node?._sys.extension, ""), // Generate clean URLs
          tinaInfo: node?._sys, // Include Tina system info if needed
        };
      });
  },
  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }),
    title: z.string(),
    country: z.string(),
    // description: z.string(),
    // pubDate: z.coerce.date(),
    // updatedDate: z.coerce.date().optional(),
    // heroImage: z.string().nullish(),
  }),
});

export const collections = { coffee };

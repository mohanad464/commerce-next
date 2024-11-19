/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: "vsglhiyp",
  dataset: "production",
  apiVersion: "2024-18-25",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
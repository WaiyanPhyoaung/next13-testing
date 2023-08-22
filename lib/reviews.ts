import { marked } from "marked";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { ReviewCardProps } from "@/components/ReviewCard";

export async function getFeaturedReview() {
  const reviews = await getReviews()
  return reviews[0]
}

export async function getReview(slug : string): Promise<ReviewCardProps | null> {
  try {
    const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
    // get front matter as js object
    const { data, content } = matter(text);
    // change md to html
    const html = marked(content);

    return { title: data.title, img: data.img, date: data.date, body: html };
  } catch (error) {
    console.log("Error in server", error);
    return null;
  }
}

export async function getReviews() {
  const slugs = await getAllSlugs();
  const reviews: (ReviewCardProps & { slug: string })[] = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    if (!review) continue;

    reviews.push({ ...review, slug });
  }
  reviews.sort((a, b) => b.date.localeCompare(a.date))

  return reviews;
}

export async function getAllSlugs() {
  const files = await readdir("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

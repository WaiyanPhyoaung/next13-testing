

import ReviewCard from "@/components/ReviewCard";
import { getAllSlugs, getReview } from "@/lib/reviews";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();

  return slugs.map((slug) => ({ slug }));
}

export default async function Review({ params }: { params: { slug: string } }) {
  const review = await getReview(params.slug);
  console.log("calling review page", params.slug);
  if (!review) return null;
  return (
    <div>
      <h1 className="text-2xl text-cyan-400">The Review Page Details</h1>
      <ReviewCard {...review} />
    </div>
  );
}

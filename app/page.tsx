import ReviewCard from "../components/ReviewCard"
import { getFeaturedReview } from "@/lib/reviews";

export default async function Home() {
  const featuredReview = await getFeaturedReview();
  return (
    <main className="p-8">
      <h2>This is HOME page</h2>
      <p>Featured review</p>
      <ReviewCard {...featuredReview} />
    </main>
  );
}

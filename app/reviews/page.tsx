import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

export default async function Reviews() {
  const reviews = await getReviews();
  return (
    <>
      <h1>Reviews Page</h1>
      <div className="flex justify-start items-start flex-wrap">
        {reviews.map((review) => (
          <Link href={`/reviews/${review.slug}`} key={review.title}>
            <h3>{review.title}</h3>
            <p>{review.date}</p>
            {review.img && (
              <Image
                width={300}
                height={300}
                src={review.img}
                alt={review.title || "review image"}
                priority
                // placeholder="blur"
                // blurDataURL={review.img}
                className="w-auto h-auto"
              />
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

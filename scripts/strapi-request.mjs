import { writeFileSync } from "node:fs";
import qs from "qs";

const api =
  "http://localhost:1337/api/reviews" +
  "?" +
  qs.stringify(
    {
      fields: ["title", "slug", "publishedAt", "subtitle"],
      populate: { image: { fields: ["url"] } },
      sort: ["publishedAt:desc"],
      pagination: { pageSize: 6 },
    },
    { encodeValuesOnly: true }
  );

console.log("api", api);

const response = await fetch(api);
const body = await response.json();
const file = JSON.stringify(body, null, 4);

writeFileSync("scripts/strapi-response.json", file, "utf-8");

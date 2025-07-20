import { getAllPosts } from "@/sanity/lib/fetch/getAllPosts";
import { PortableText, PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";

export default async function HomePage() {
  const data = await getAllPosts();

  if (!data) {
    return notFound();
  }
  return (
    <main className="container mx-auto px-4 py-8">
      {data.map((r) => (
        <div key={r.title} >
          <p>{r.title}</p>
          <div className="prose text-black marker:text-black">
            {Array.isArray(r.body) && (
              <PortableText value={r.body as PortableTextBlock[]} />
            )}
          </div>
        </div>
      ))}
    </main>
  );
}

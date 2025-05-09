// app/blogs/[slug]/page.jsx or page.tsx (based on your setup)
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import styles from "./blog.module.css";

export default async function BlogPost({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://darkred-pheasant-811225.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { cache: "no-store" }
  );

  const posts = await res.json();

  if (!posts || posts.length === 0) {
    return notFound();
  }

  const post = posts[0];
  const imageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""; // Extract featured image URL

  return (
    <div className={styles.container}>
      <Link href="/blogs" className={styles.backLink}>
        ← Back to Blogs
      </Link>

      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.title.rendered}
          width={800}
          height={400} // Set the desired width
          className={styles.featuredImage}
        />
      )}

      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      <p className={styles.date}>
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}

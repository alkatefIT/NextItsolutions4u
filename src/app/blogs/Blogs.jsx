// "use client"; // Ensure this runs on the client side

// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation"; // Fix for App Router
// import "./Blogs.css";
// import Blog1 from "../../assets/blog_1.jpg";
// // import Whatsapp from "../components/Whatsapp";

// export default function Blogs() {

//   const router = useRouter(); // Use for navigation

//   return (
//     <div>
//       {/* <Whatsapp /> */}
//       <div className="blog-page-conatiner">
//         <div className="blog-page-top">
//           <h1>
//             <span className="text-white">Our Blogs</span>
//           </h1>
//           <p className="text-white">
//             Our blog is a comprehensive resource that offers valuable insights
//             and expert advice on various aspects of digital marketing and
//             website services. It is designed to keep you informed about the
//             latest trends, strategies, and industry best practices, enabling you
//             to enhance your online visibility and drive business expansion.
//           </p>
//           <div className="newsletter">
//             <input type="email" placeholder="Your Email" />
//             <button className="newsletter-btn btn">Join newsletter</button>
//           </div>
//         </div>

//         <div className="blog-content-section">
//           <div
//             className="blog-page-blog_section"
//             onClick={() =>
//               router.push(
//                 "/maximizing-your-social-media-presence-tips-from-a-top-uae-agency"
//               )
//             }
//           >
//             <Image
//               src={Blog1}
//               alt="Maximizing Social Media Presence"
//               width={500}
//               height={300}
//             />
//             <h5>
//               Maximizing Your Social Media Presence Tips from a Top UAE Agency
//             </h5>
//             <p>
//               Social media has become an integral part of our daily lives, and
//               it's no secret...
//             </p>
//           </div>
//         </div>
//       </div>

//       <section className="footer-section">
//       </section>
//     </div>
//   );
// }

////////////////slug code//////////////////

"use client";

import { useRouter } from "next/navigation";
import "./Blogs.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // ✅ Moved to top to follow Rules of Hooks

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://darkred-pheasant-811225.hostingersite.com/wp-json/wp/v2/posts"
        );

        const text = await res.text();
        const safeText = text.replace(/\\(?!["\\/bfnrtu])/g, "\\\\"); // Fix invalid escapes
        const data = JSON.parse(safeText);

        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch or parse posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ padding: "2rem" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return <p style={{ padding: "2rem" }}>No blog posts found.</p>;
  }

  return (
    <div>
      {/* <Whatsapp /> */}
      <div className="blog-page-conatiner">
        <div className="blog-page-top">
          <h1>
            <span className="text-white">Our Blogs</span>
          </h1>
          <p className="text-white">
            Our blog is a comprehensive resource that offers valuable insights
            and expert advice on various aspects of digital marketing and
            website services. It is designed to keep you informed about the
            latest trends, strategies, and industry best practices, enabling you
            to enhance your online visibility and drive business expansion.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Your Email" />
            <button className="newsletter-btn btn">Join newsletter</button>
          </div>
        </div>

        <div className="blog-content-section">
          {posts.map((post) => {
            const imageUrl =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

            return (
              <div
                key={post.id}
                className="blog-card"
                onClick={() => router.push(`/blog/${post.slug}`)}
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={post.title.rendered}
                    width={500}
                    height={300}
                    className="blog-card-image"
                  />
                )}
                <h3
                  className="blog-card-title"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <div
                  className="blog-card-excerpt"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt?.rendered || "",
                  }}
                />
                <button className="blog-read-more">Read More →</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

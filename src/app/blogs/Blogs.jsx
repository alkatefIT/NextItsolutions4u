"use client"; // Ensure this runs on the client side

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // Fix for App Router
import "./Blogs.css";
import Blog1 from "../../assets/blog_1.jpg";
// import Whatsapp from "../components/Whatsapp";


export default function Blogs() {


  const router = useRouter(); // Use for navigation

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
          <div
            className="blog-page-blog_section"
            onClick={() =>
              router.push(
                "/maximizing-your-social-media-presence-tips-from-a-top-uae-agency"
              )
            }
          >
            <Image
              src={Blog1}
              alt="Maximizing Social Media Presence"
              width={500}
              height={300}
            />
            <h5>
              Maximizing Your Social Media Presence Tips from a Top UAE Agency
            </h5>
            <p>
              Social media has become an integral part of our daily lives, and
              it's no secret...
            </p>
          </div>
        </div>
      </div>

      <section className="footer-section">
      </section>
    </div>
  );
}

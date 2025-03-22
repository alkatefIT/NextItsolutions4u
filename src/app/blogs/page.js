import BlogPage from "./BlogPage";

// app/services/page.js
export const metadata = {
  title: "Trends and Tips: Abu Dhabi's Digital Marketing Scene",
  description: "Explore the latest and hottest topics with our top trending blogs, offering insightful content and staying ahead of the curve in diverse subjects.' / 'Explore the latest trends, insights, and diverse topics with the top trending blogs. Stay informed and entertained with cutting-edge content.",
  alternates: {
    canonical: "https://www.itsolutions4u.co/blogs",
  },
};


export default function Page() {
  return <BlogPage />;
}

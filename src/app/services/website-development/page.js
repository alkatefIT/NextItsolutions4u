import WebDevPage from "./WebDevPage";

// app/services/page.js
export const metadata = {
  title: "Best Digital Marketing agency in Abu Dhabi",
  description: "Al Katef IT Solutions UAE creating and building websites to establish an online presence.It encompasses various aspects, including web design,coding,content creation functionality.",
  alternates: {
    canonical: "https://www.itsolutions4u.co/website-development",
  },
};


export default function Page() {
  return <WebDevPage />;
}

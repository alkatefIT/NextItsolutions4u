import AboutPage from "./AboutPage";

// app/services/page.js
export const metadata = {
  title: "Digital Marketing Agency in UAE | IT Solutions",
  description:
    "With the help of our Abu Dhabi-based digital marketing agency, you may achieve outstanding results online. Boost your online visibility with professional methods and creative ideas made for the success of your brand",
  alternates: {
    canonical: "https://www.itsolutions4u.co/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <AboutPage />;
}

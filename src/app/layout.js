import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export const metadata = {
  title:
    "Digital Marketing Agency in UAE | Digital Marketing Agency in Abu Dhabi - Al Katef",
  description:
    "Looking for the best digital marketing agency in UAE and Abu Dhabi? Al Katef offers exceptional web design, SEO, eCommerce, social media, ads, and content creation to transform your online presence.",
  keywords: [
    "Al Katef Advertising Agency is a dynamic and creative firm specializing in innovative marketing solutions.we focus on delivering impactful advertising campaigns, we are the best leading IT solutions provider in UAE",
    "digital marketing agency in uae",
    "best digital marketing agency in uae",
    "best digital marketing company in uae",
    "best marketing agency in uae",
    "best digital marketing agency uae",
    "digital marketing abu dhabi",
    "digital marketing agency in abu dhabi",
    "best digital marketing agency in abu dhabi",
    "social media agencies in abu dhabi",
    "abu dhabi digital marketing company",
    "best digital marketing abu dhabi",
    "best digital marketing company in abu dhabi",
    "best social media agencies in abu dhabi",
    "digital marketing services in abu dhabi",
  ].join(", "),
  alternates: {
    canonical: "https://www.itsolutions4u.co",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Whatsapp />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

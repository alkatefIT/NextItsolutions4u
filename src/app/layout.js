import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Whatsapp from "@/components/whatsapp/Whatsapp";

export const metadata = {
  title:
    "UAE's Trusted IT Partner, every business for one solution in al katef",
  description:
    "Al Katef Advertising Agency is a dynamic and creative firm specializing in innovative marketing solutions.we focus on delivering impactful advertising campaigns, we are the best leading IT solutions provider in UAE",
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
        <Whatsapp/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

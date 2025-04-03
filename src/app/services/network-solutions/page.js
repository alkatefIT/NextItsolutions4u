import NetworkSolutionsPage from "./NetworkSolutionsPage";

// app/services/page.js
export const metadata = {
  title: "Best Network Solutions in Abu Dhabi",
  description: "Tailored network solutions are offered to businesses throughout the UAE by Al Katef IT Solutions, headquartered in Abu Dhabi's Musaffah district. Experience seamless connectivity and robust network infrastructure customized to your needs. Contact us today.",
  alternates: {
    canonical: "https://www.itsolutions4u.co/network-solutions",
  },
};


export default function Page() {
  return <NetworkSolutionsPage />;
}
import ServicesPage from "./ServicesPage";

// app/services/page.js
export const metadata = {
  title: "Best digital services in Dubai",
  description: "Delivering expert digital marketing services to boost online presence, drive engagement, and optimise results for businesses seeking growth and success.",
  alternates: {
    canonical: "https://www.itsolutions4u.co/services",
  },
};


export default function Page() {
  return <ServicesPage />;
}

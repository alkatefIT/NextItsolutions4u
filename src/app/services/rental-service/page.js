import RentalServicePage from "./RentalServicePage";

// app/services/page.js
export const metadata = {
  title: "Best rental Services In Abu Dhabi",
  description: "We are the best services in Abu Dhabi. We offer flexibility and cost-effectiveness, allowing users to rent printers with various features and capabilities without the upfront investment of purchasing.",
  alternates: {
    canonical: "https://www.itsolutions4u.co/services",
  },
};


export default function Page() {
  return <RentalServicePage />;
}

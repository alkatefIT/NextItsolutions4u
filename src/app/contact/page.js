import ContactPage from "./ContactPage";

// app/services/page.js
export const metadata = {
  title: "Best IT Solutions in Abu Dhabi",
  description: "A leading Web Design Company in Abu Dhabi, we are also a Digital Marketing Agency that provides Social Media Services and Management, SEO and Mobile App Development",
  alternates: {
    canonical: "https://www.itsolutions4u.co/contact",
  },
};


export default function Page() {
  return <ContactPage />;
}

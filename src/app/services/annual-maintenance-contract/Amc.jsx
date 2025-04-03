import Image from "next/image";
import amc from "../../../assets/amc.webp"; // Ensure the image is placed inside the public folder
import "./Amc.css";
import CTA from "@/components/CTA/CTA";

const Amc = () => {
  return (
    <div>
      <div className="container amc-container">
        <h1 className="mt-5">
          <span className="title-blue">Secure Year-Round Peace of Mind:</span>
          <span className="title-orange">Top-Tier AMC Services in UAE</span>
        </h1>

        <div className="amc-img d-flex justify-content-center align-items-center">
          <Image
            src={amc}
            className="object-fit-cover"
            alt="AMC Services"
          />
        </div>

        <p>
        Living in the tech-driven heart of UAE, unexpected gadget meltdowns can disrupt your life and drain your wallet. But worry not! Al Katef IT Solutions offers premier AMC (Annual Maintenance Contract) services designed to shield you from the stress and expense of breakdowns. With customized plans to suit your needs and budget, we're your one-stop shop for worry-free electronics in UAE.
        </p>

        <h2 className="mt-5">
          <span className="title-blue">Why Choose Our AMC Services in UAE?</span>
        </h2>

        <p> <b>Unmatched Protection: </b>Say goodbye to repair shop anxieties. Our AMC plans cover a wide range of electronic devices, from laptops and desktops to printers, air conditioners, and more. Get a customized plan tailored to your specific needs and location.</p>
        <p> <b>Priority Access, Priority You: </b> Skip the queue! Our AMC members receive priority service from our expert technicians, ensuring prompt and efficient resolution to any tech hiccups.Predictable Budget, Happy Wallet: Enjoy fixed annual fees with our AMC plans, eliminating the sting of surprise repair bills. Regular maintenance also extends the lifespan of your devices, saving you money in the long run.</p>
        <p> <b>Expert Care, Zero Worries:</b>  Relax knowing your devices are in good hands. Our team of highly qualified and experienced technicians use industry-standard tools and methods to ensure top-notch service for all your electronics.</p>
        <p> <b>Hassle-Free Maintenance, Stress-Free Living:</b>  We handle everything, from regular checkups and cleaning to proactive troubleshooting. Enjoy seamless performance and maximized lifespan for your gadgets with our meticulous AMC services.</p>
        <p> <b>Convenient & Accessible: </b>  Schedule appointments at your convenience. We offer flexible options, including onsite and remote support, to fit your busy schedule in UAE </p>

        <h2 className="mt-5">
          <span className="title-blue">Invest in Peace of Mind with UAE 's  Leading AMC Provider:</span>
        </h2>
        <p>Choosing our AMC services is an investment in your peace of mind and the longevity of your valuable electronics. Ditch the repair shop worries and embrace the confidence of knowing your gadgets are covered year-round, wherever you are in UAE</p>
        
        <h2 className="mt-5">
          <span className="title-blue">Ready to Experience the AMC Advantage?</span>
        </h2>
        <p>Contact Al Katef today and let us take the worry out of your tech life. We'll assess your needs, recommend the perfect AMC plan for your location, and ensure your devices stay happy and healthy, always.</p>
        

        <CTA />
      </div>
    </div>
  );
};

export default Amc;

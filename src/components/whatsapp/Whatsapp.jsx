import Image from "next/image";
import whatsappIcon from "../../assets/whatsapp.png"; // Move image to /public/images
import   "./Whatsapp.css"; // Ensure this CSS file exists

const Whatsapp = ({ premsg = "" }) => {
  const phoneNumber = "+971556449916";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(premsg)}`;

  return (
    <a href={whatsappLink} className='whatsapp' target="_blank" rel="noopener noreferrer">
      <Image src={whatsappIcon} alt="WhatsApp Connect"/>
    </a>
  );
};

export default Whatsapp;

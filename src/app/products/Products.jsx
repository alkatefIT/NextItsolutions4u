"use client";


import Image from "next/image";
import Button from "react-bootstrap/Button";
// import ProductCategory from "@/components/ProductCategory";
// import Whatsapp from "@/components/Whatsapp";
import "./Products.css";

// Import images statically (Next.js optimizes them)
import ImgTop from "../../assets/product-page-top-img.jpg";
import Printer from "../../assets/printer.jpg";
import Consumables from "../../assets/consumables.png";
import CCTV from "../../assets/cctv.jpg";
import Biometrics from "../../assets/Biometrics.jpg";
import Plotter from "../../assets/plotter.jpg";
import Laptop from "../../assets/Laptop.jpg";
import Panel from "../../assets/Biometrics.jpg";
import Telecom from "../../assets/pabx.jpg";
import ProductCategory from "@/components/Product-Category/ProductCategory";


export default function Products() {



  return (
    <div>
      {/* <Whatsapp premsg="Hi, I'm interested in your products. Can you provide more details about the available products?" /> */}
      <div className="product-top-container">
        <div className="product-top-img-container">
          <div className="product-top-grey">
            <Image src={ImgTop} alt="Top-Rated Printer Providers in Dubai, UAE" layout="responsive" />
          </div>
        </div>
        <div className="product-top-txt">
          <h1>
            <span className="title-blue">OUR</span>{" "}
            <span className="title-orange">PRODUCTS</span>
          </h1>
          <p>
            The proliferation of advanced devices is revolutionizing the way we
            approach productivity and streamline workflows.
          </p>
          <p>
            By seamlessly integrating technology, we're fostering collaboration,
            creativity, and efficiency, propelling customers to the forefront of
            this transformative revolution.
          </p>
          <Button variant="primary">Explore Now</Button>
        </div>
      </div>

      <div className="product-category-container">
        <ProductCategory productName="Printer" productImage={Printer} productLink="/printer" />
        <ProductCategory productName="Consumables" productImage={Consumables} productLink="/consumables" />
        <ProductCategory productName="CCTV" productImage={CCTV} productLink="/products" />
        <ProductCategory productName="Biometrics" productImage={Biometrics} productLink="/products" />
        <ProductCategory productName="Plotter" productImage={Plotter} productLink="/products" />
        <ProductCategory productName="Laptop" productImage={Laptop} productLink="/products" />
        <ProductCategory productName="Digital Panel" productImage={Panel} productLink="/products" />
        <ProductCategory productName="Telecom" productImage={Telecom} productLink="/products" />
      </div>
    </div>
  );
}

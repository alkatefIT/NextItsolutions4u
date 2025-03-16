import Image from "next/image";
import Link from "next/link";
import "./ProductCategory.css";

function ProductCategory({ productName, productImage, productLink }) {
  return (
    <div className="product-category-card">
      <div className="product-category-inner">
        <div className="image-container">
          <button className="orange-button">{productName}</button>
          <Image src={productImage} alt={productName} width={300} height={200} />
        </div>
      </div>
      <div className="product-category-txt">
        <Link href={productLink} className="product-category-link">
          View Now
        </Link>
      </div>
    </div>
  );
}

export default ProductCategory;

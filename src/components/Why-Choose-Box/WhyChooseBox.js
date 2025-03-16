import React from "react";
import "./WhyChooseBox.css";
import Image from "next/image";

function WhychooseBox({ whychoosetitle, whychoosedesc, whychooseimg, alttxt }) {
  return (
    <div className="why-choose-box">
      <div className="why-choose-img-parent">
        <div className="why-choose-img-box">
          <Image src={whychooseimg} alt={alttxt} width={100} height={100} />{" "}
        </div>
      </div>
      <p className="why-choose-title">{whychoosetitle}</p>
      <p className="why-choose-desc">{whychoosedesc}</p>
    </div>
  );
}

export default WhychooseBox;

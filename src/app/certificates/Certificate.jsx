import React from "react";


const Certificate = () => {
  return (
    <>
      <div className="container text-center mb-5">
        <h1 className="mt-5">
          <span className="title-orange">Certificates</span>
        </h1>
      </div>
      <div
        style={{
          paddingInline: "100px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <iframe
          src="/assets/License.pdf"
          width="400px"
          height="600px"
          style={{ border: "none" }}
        />
      </div>
    </>
  );
};

export default Certificate;

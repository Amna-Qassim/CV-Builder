import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { BasicDocument } from "./CvTemplate";
import cv from "../assets/images/resume.jpg";

export const ChooseTemplate = (props) => {
  const [cvState, setCvState] = useState("");
  const [hover, setHover] = useState("");

  const handelCvState = () => {
    setCvState("cv1");
    console.log(cvState);
  };

  const hoverFun = () => {
    setHover("border border-dark");
  };

  return (
    <div>
      <h2>Select Template</h2>
      <div onClick={handelCvState} role="button" className="mb-5">
        <img
          src={cv}
          alt="CV"
          style={{ width: "250px" }}
          className={`${hover}`}
          onClick={hoverFun}
        />
      </div>
      <div className="mb-5">
        <PDFDownloadLink
          document={<BasicDocument {...props} />}
          fileName="CV.pdf"
          className="display-6"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download now!")}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

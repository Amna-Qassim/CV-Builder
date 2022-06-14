import React from "react";
import cvImage from "../../assets/images/cv.PNG";
import { CustomButton } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import "./mainPageStyle.css";

export const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <div>
        <h1>Build Amazing Resume!!</h1>
      </div>
      <img src={cvImage} alt="cvImage" className="img-fluid" />
      <h3 className="mt-3 mb-4">Let's get start to build your Resume!</h3>
      <CustomButton text={"start"} onClick={() => navigate("/form")} />
    </div>
  );
};

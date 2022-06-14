import React from "react";
import { Routes, Route } from "react-router-dom";
import { Form } from "./pages/Form/Form";
// import { PersonalForm } from "./components/Forms/PersonalForm";
// import { SelectSkill } from "./components/Select";
// import { UploadImage } from "./components/UploadImage";
import { Index } from "./pages/mainPage/index";

export const Routers = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

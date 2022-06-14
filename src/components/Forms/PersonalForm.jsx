import React from "react";
import { personalForm } from "../../Constant";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputField } from "../InputField";
import { TextAreaInput } from "../TextArea";
import { StepperButtons } from "../ButtonsComponents/StepperButtons";
import { SelectSkill } from "../SelectSkill";
// import { UploadImage } from "../UploadImage";

const PersonalInfoSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  pio: Yup.string().max(550, "Too Long!").required("Required"),
  email: Yup.string().email("Invlid Email").required("Required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{11}$/, "must be like this 07700000000")
    .required("Required"),
  address: Yup.string().required("Required"),
  linkedIn: Yup.string().url("Write Valid Url"),
  gitHub: Yup.string().url("Write Valid Url"),
  position: Yup.string(),
  select: Yup.array().max(3, "Maximum number of skills are three"),
});

export const PersonalForm = ({ func, personalInfo, next, prev, current }) => {
  const customerRender = (inputInfo, index) => {
    let inputType = inputInfo.type;
    let inputName = inputInfo.name;
    let inputTitle = inputInfo.title;
    let inputColumns = inputInfo.col;

    switch (inputType) {
      case "text":
        return (
          <InputField
            key={inputName}
            name={inputName}
            title={inputTitle}
            col={inputColumns}
          />
        );
      case "textArea":
        return (
          <TextAreaInput
            key={inputName}
            name={inputName}
            title={inputTitle}
            col={inputColumns}
          />
        );
      case "number":
        return (
          <InputField
            key={inputName}
            name={inputName}
            title={inputTitle}
            col={inputColumns}
          />
        );
      case "select":
        return (
          <SelectSkill
            key={inputName}
            name={inputName}
            title={inputTitle}
            col={inputColumns}
          />
        );
      default:
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          fullName: personalInfo.fullName,
          pio: personalInfo.pio,
          email: personalInfo.email,
          phoneNumber: personalInfo.phoneNumber,
          address: personalInfo.address,
          linkedIn: personalInfo.linkedIn,
          gitHub: personalInfo.gitHub,
          position: personalInfo.position,
          select: personalInfo.select,
        }}
        validationSchema={PersonalInfoSchema}
        onSubmit={(values) => {
          // same shape as initial values
          func(values);
          console.log("p", values);
          next();
        }}
      >
        {() => (
          <Form>
            <div className="row mx-2">
              {personalForm.map((input) => {
                return customerRender(input);
              })}
            </div>
            {/* <div className="d-flex justify-content-start">
              <UploadImage />
            </div> */}
            <StepperButtons prev={prev} current={current} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

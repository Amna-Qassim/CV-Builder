import React from "react";
import * as Yup from "yup";

import { FieldArray, Form, Formik } from "formik";
import { StepperButtons } from "../ButtonsComponents/StepperButtons";
import { DateField } from "../DateField";

import { InputField } from "../InputField";
import { TextAreaInput } from "../TextArea";

const EducationInfoSchema = Yup.object({
  education: Yup.array()
    .of(
      Yup.object().shape({
        academyName: Yup.string().required("required"),
        year: Yup.string().required("you should pick date"),
        department: Yup.string().required("required"),
        description: Yup.string().required("required"),
      })
    )
    .max(2, "You cant add more"),
});

export const EducationForm = ({ educationInfo, func, current, next, prev }) => (
  <div>
    <Formik
      initialValues={{
        education: educationInfo,
      }}
      validationSchema={EducationInfoSchema}
      onSubmit={(values) => {
        // same shape as initial values
        func(values.education);
        console.log("edu", values);
        next();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form autoComplete="off">
          <FieldArray
            name="education"
            render={(arrayHelpers) => {
              const education = values.education;
              console.log("edu", education);

              return (
                <div>
                  {education && education.length > 0
                    ? education.map((exp, index) => (
                        <div key={index} className="row mx-2">
                          <div className="d-flex justify-content-end">
                            <button
                              type="button"
                              style={{
                                border: "1px solid #636363",
                                borderRadius: "5px",
                              }}
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              X
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12">
                            <InputField
                              title="University/Deplom Name:"
                              placeholder="University/Deplom Name:"
                              name={`education.${index}.academyName`}
                            />
                          </div>

                          <div className="col-lg-3 col-md-6 col-sm-12">
                            <InputField
                              title="Your Department:"
                              placeholder="your department"
                              name={`education.${index}.department`}
                            />
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 mt-4">
                            <DateField
                              title="Year"
                              name={`education.${index}.year`}
                              onChange={(value, dateStr) => {
                                let val = `${dateStr[0]} / ${dateStr[1]}`;
                                console.log(val);
                                setFieldValue(`education.${index}.year`, val);
                              }}
                            />
                          </div>

                          <div className="col-lg-3 col-md-6 col-sm-12">
                            <InputField
                              title="Location:"
                              placeholder="location"
                              name={`education.${index}.location`}
                            />
                          </div>
                          <div className="col-12 mt-3 mb-5">
                            <TextAreaInput
                              title="Description:"
                              placeholder="description"
                              name={`education.${index}.description`}
                            />
                          </div>
                        </div>
                      ))
                    : null}

                  <div className="d-flex justify-content-end me-3">
                    {education.length < 2 && (
                      <button
                        type="button"
                        style={{
                          border: "1px solid #636363",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          arrayHelpers.push({
                            academyName: "",
                            year: "",
                            department: "",
                            description: "",
                          });
                        }}
                      >
                        add more
                      </button>
                    )}
                  </div>
                </div>
              );
            }}
          />
          <hr />
          <StepperButtons prev={prev} current={current} />
        </Form>
      )}
    </Formik>
  </div>
);

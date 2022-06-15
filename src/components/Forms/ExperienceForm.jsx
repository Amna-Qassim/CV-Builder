import React from "react";
import * as Yup from "yup";
import { Transitions } from "../Transision";

import { FieldArray, Form, Formik } from "formik";
import { StepperButtons } from "../ButtonsComponents/StepperButtons";
import { DateField } from "../DateField";

import { InputField } from "../InputField";
import { TextAreaInput } from "../TextArea";
import { SelectInput } from "../SelectInput";

const ExperienceInfoSchema = Yup.object({
  experience: Yup.array()
    .of(
      Yup.object().shape({
        companyName: Yup.string().required("required"),
        position: Yup.string().required("required"),
        duration: Yup.string(),
        location: Yup.string(),
        description: Yup.string().required("required"),
        employmentTypeSelect: Yup.string().required("required"),
      })
    )
    .max(3, "You cant add more"),
});

export const ExperienceForm = ({
  experienceInfo,
  func,
  next,
  prev,
  current,
}) => (
  <div>
    <Transitions>
      <Formik
        initialValues={{
          experience: experienceInfo,
        }}
        validationSchema={ExperienceInfoSchema}
        onSubmit={(values) => {
          // same shape as initial values
          func(values.experience);
          console.log("exp", values);
          next();
        }}
      >
        {({ values, setFieldValue }) => (
          <Form autoComplete="off">
            <FieldArray
              name="experience"
              render={(arrayHelpers) => {
                const experience = values.experience;
                return (
                  <div>
                    {experience && experience.length > 0
                      ? experience.map((exp, index) => (
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
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <InputField
                                title="Company Name:"
                                placeholder="company name"
                                name={`experience.${index}.companyName`}
                              />
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <InputField
                                title=" Position:"
                                placeholder="position"
                                name={`experience.${index}.position`}
                              />
                            </div>

                            <div className="col-12 mt-3">
                              <TextAreaInput
                                title="Description:"
                                placeholder="description"
                                name={`experience.${index}.description`}
                              />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                              <InputField
                                title="Location:"
                                placeholder="country-city"
                                name={`experience.${index}.location`}
                              />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                              <DateField
                                title="Duration"
                                name={`experience.${index}.duration`}
                                onChange={(value, dateStr) => {
                                  let val = `${dateStr[0]} - ${dateStr[1]}`;
                                  console.log(val);
                                  setFieldValue(
                                    `experience.${index}.duration`,
                                    val
                                  );
                                }}
                              />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                              <SelectInput
                                onChange={(value) => {
                                  console.log(value);
                                  setFieldValue(
                                    `experience.${index}.employmentTypeSelect`,
                                    value
                                  );
                                }}
                                name={`experience.${index}.employmentTypeSelect`}
                              />
                            </div>
                          </div>
                        ))
                      : null}
                    <div className="d-flex justify-content-end me-3">
                      {experience.length < 3 && (
                        <button
                          type="button"
                          style={{
                            border: "1px solid #636363",
                            borderRadius: "5px",
                          }}
                          onClick={() => {
                            arrayHelpers.push({
                              organization: "",
                              position: "",
                              duration: "",
                              description: "",
                            });
                          }}
                        >
                          add experience
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
    </Transitions>
  </div>
);

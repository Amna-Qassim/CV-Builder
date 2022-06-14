import React from "react";
import * as Yup from "yup";

import { FieldArray, Form, Formik } from "formik";
import { StepperButtons } from "../ButtonsComponents/StepperButtons";
import { DateField } from "../DateField";

import { InputField } from "../InputField";
import { TextAreaInput } from "../TextArea";

const ProjectInfoSchema = Yup.object({
  project: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("required"),
      link: Yup.string().url("Write Valid Url"),
      duration: Yup.string().required("required"),
      description: Yup.string().required("required"),
    })
  ),
});

export const ProjectForm = ({ projectInfo, func, current, next, prev }) => (
  <div>
    <Formik
      initialValues={{
        project: projectInfo,
      }}
      validationSchema={ProjectInfoSchema}
      onSubmit={(values) => {
        // same shape as initial values
        func(values.project);
        console.log("exp", values);
        next();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form autoComplete="off">
          <FieldArray
            name="project"
            render={(arrayHelpers) => {
              const project = values.project;
              return (
                <div>
                  {project && project.length > 0
                    ? project.map((exp, index) => (
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
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <InputField
                              title="Project Name:"
                              placeholder="project name"
                              name={`project.${index}.title`}
                            />
                          </div>

                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <InputField
                              title="Link:"
                              placeholder="link of your project"
                              name={`project.${index}.link`}
                            />
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
                            <DateField
                              title="Duration"
                              name={`project.${index}.duration`}
                              onChange={(value, dateStr) => {
                                let val = `${dateStr[0]} / ${dateStr[1]}`;
                                console.log(val);
                                setFieldValue(`project.${index}.duration`, val);
                              }}
                            />
                          </div>

                          <div className="col-12 mt-3 mb-5">
                            <TextAreaInput
                              title="Description:"
                              placeholder="description"
                              name={`project.${index}.description`}
                            />
                          </div>
                        </div>
                      ))
                    : null}
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      style={{
                        border: "1px solid #636363",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        arrayHelpers.push({
                          title: "",
                          link: "",
                          duration: "",
                          description: "",
                        });
                      }}
                    >
                      add more projects
                    </button>
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

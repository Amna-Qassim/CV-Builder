import React from "react";
import { Select } from "antd";
import { ErrorMessage, useField } from "formik";

const { Option } = Select;

export const SelectInput = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className="d-flex flex-column align-items-start">
      <h6 className="text-start fw-bold">Employment Type:</h6>
      <Select
        {...field}
        {...props}
        className="mb-4"
        status={meta.error && meta.touched ? "error" : null}
        style={{ minWidth: 300, maxWidth: 350 }}
      >
        <Option value="fullTime">Full-time</Option>
        <Option value="partTime">Part-time</Option>
        <Option value="freelanser">Freelanser</Option>
        <Option value="internship">Internship</Option>
        <Option value="contract">Contract</Option>
      </Select>

      <ErrorMessage
        component="small"
        name={field.name}
        className="error text-danger"
      />
    </div>
  );
};

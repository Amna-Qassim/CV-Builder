import React from "react";
import { Input } from "antd";
import { useField, ErrorMessage } from "formik";

export const InputField = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className={`${props.col} my-4`}>
      <h6 className="text-start fw-bold">{props.title}</h6>
      <Input
        {...props}
        {...field}
        style={{ color: "#000" }}
        status={meta.error && meta.touched ? "error" : null}
      />
      <ErrorMessage
        component="small"
        name={field.name}
        className="error text-danger"
      />
    </div>
  );
};

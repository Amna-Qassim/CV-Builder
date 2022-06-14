import React from "react";
import { Input } from "antd";
import { useField, ErrorMessage } from "formik";

const { TextArea } = Input;

export const TextAreaInput = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="row">
      <div className={`${props.col}`}>
        <h6 style={{ fontWeight: "bold", textAlign: "left" }}>{props.title}</h6>
        <TextArea
          {...props}
          {...field}
          style={{ color: "#000" }}
          status={meta.error && meta.touched ? "error" : null}
          showCount
          minLength={20}
          maxLength={250}
        />
        <ErrorMessage
          component="small"
          name={field.name}
          className="error text-danger"
        />
      </div>
    </div>
  );
};

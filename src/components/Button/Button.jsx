import React from "react";
import { Button } from "antd";
import "./buttonStyle.css";

export const CustomButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      className="text-center mx-2"
      type="primary"
      htmlType={props.type}
    >
      {props.text}
    </Button>
  );
};

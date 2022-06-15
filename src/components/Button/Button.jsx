import React from "react";
import "./buttonStyle.css";
import { motion } from "framer-motion";

export const CustomButton = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={props.onClick}
      className="text-center mx-2 btnStyle"
      type={props.type}
      whileTap={{ scale: 0.9 }}
    >
      {props.text}
    </motion.button>
  );
};

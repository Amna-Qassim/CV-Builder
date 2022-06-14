import { useState } from "react";
import { CustomButton } from "./Button/Button";
import { Tag } from "antd";
import { useFormikContext, ErrorMessage } from "formik";

export const SelectSkill = (props) => {
  const { setFieldValue, values } = useFormikContext();
  const [skill, setSkill] = useState("");
  const skills = values[props.name];

  const SkillFun = () => {
    if (!skill) return;
    setFieldValue(props.name, [...skills, skill]);
    setSkill("");
  };

  const handleClose = (removedTag) => {
    const newTags = skills.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setFieldValue(props.name, newTags);
  };

  return (
    <div className="my-4">
      <h2>Skills</h2>
      <div className="d-flex justify-content-center align-items-center">
        <input
          value={skill}
          onChange={(e) => {
            setSkill(e.target.value);
          }}
          style={{ width: "500px" }}
          placeholder="Enter Your Skill"
        />
        <CustomButton onClick={SkillFun} text="+" />
      </div>
      <ErrorMessage
        component="small"
        name={props.name}
        className="error text-danger"
      />
      <div className="my-3 mx-5 d-flex justify-content-center">
        {skills.map((skill, i) => {
          return (
            <Tag
              closable
              onClose={(e) => {
                e.preventDefault();
                handleClose(skill);
              }}
              key={i}
            >
              {skill}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

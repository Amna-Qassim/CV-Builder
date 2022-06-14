import React, { useState } from "react";
import { Divider, Steps } from "antd";
import "./formStyle.css";
import { PersonalForm } from "../../components/Forms/PersonalForm";
import { ChooseTemplate } from "../../components/ChooseTemplate";
import { ExperienceForm } from "../../components/Forms/ExperienceForm";
import { EducationForm } from "../../components/Forms/EducationForm";
import { ProjectForm } from "../../components/Forms/ProjectForm";
import {
  personalInfoState,
  experienceInfoState,
  educationInfoState,
  projectInfoState,
} from "../../stateInfoForms";

const { Step } = Steps;

export const Form = () => {
  const [current, setCurrent] = useState(0);
  const [personalState, setPersonalState] = useState(personalInfoState);
  const [experienceState, setExperienceState] = useState(experienceInfoState);
  const [educationState, setEducationState] = useState(educationInfoState);
  const [projectState, setProjectState] = useState(projectInfoState);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: "Personal Info.",
      content: (
        <PersonalForm
          func={setPersonalState}
          personalInfo={personalState}
          next={next}
          prev={prev}
          current={current}
        />
      ),
    },
    {
      title: "Experience Info.",
      content: (
        <ExperienceForm
          func={setExperienceState}
          experienceInfo={experienceState}
          next={next}
          prev={prev}
          current={current}
        />
      ),
    },
    {
      title: "Education Info.",
      content: (
        <EducationForm
          func={setEducationState}
          educationInfo={educationState}
          next={next}
          prev={prev}
          current={current}
        />
      ),
    },
    {
      title: "Projects Info.",
      content: (
        <ProjectForm
          func={setProjectState}
          projectInfo={projectState}
          next={next}
          prev={prev}
          current={current}
        />
      ),
    },
    {
      title: "Select Template",
      content: (
        <ChooseTemplate
          dataForm={{
            ...personalState,
            experienceState,
            educationState,
            projectState,
          }}
        />
      ),
    },
  ];

  return (
    <div className="container">
      <h2>{steps[current].title}</h2>
      <Divider />
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
    </div>
  );
};

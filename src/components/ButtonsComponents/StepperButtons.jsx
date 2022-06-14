import React from "react";
import { CustomButton } from "../Button/Button";

export const StepperButtons = (props) => {
  return (
    <div>
      <div className="my-5 d-flex justify-content-end">
        {props.current > 0 && (
          <CustomButton text={"Previous"} type="button" onClick={props.prev} />
        )}
        {props.current < 5 - 1 && <CustomButton text={"Next"} type="submit" />}
      </div>
    </div>
  );
};

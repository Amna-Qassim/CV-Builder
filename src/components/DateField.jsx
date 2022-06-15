import { DatePicker } from "antd";
import { ErrorMessage, useField } from "formik";
// import moment from "moment";

const { RangePicker } = DatePicker;

export const DateField = (props) => {
  const [field, meta] = useField(props);
  return (
    <div
      direction="vertical"
      size={12}
      className="d-flex flex-column align-items-start"
    >
      <h6 className="text-start fw-bold">{props.title}:</h6>
      <RangePicker
        {...props}
        style={{ minWidth: 200, maxWidth: 350 }}
        status={meta.error && meta.touched ? "error" : null}
        // defaultValue={[
        //   moment("02-2022", "MMM-YYYY"),
        //   moment("03-2023", "MMM-YYYY"),
        // ]}
        picker="month"
      />
      <ErrorMessage
        component="small"
        name={field.name}
        className="error text-danger"
      />
    </div>
  );
};

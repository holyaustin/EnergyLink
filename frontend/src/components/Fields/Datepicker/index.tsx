// Components
import ReactDatePicker from "react-datepicker";
import Label from "../Label";

// Core
import { SyntheticEvent } from "react";

// Styles
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { formClasses } from "../styles";

type DatepickerProps = {
  label?: string;
  onChange: (event: SyntheticEvent<HTMLInputElement>) => void;
  value: Date;
};

export default function Datepicker(props: DatepickerProps) {
  return (
    <div>
      {props.label && <Label id={props.label}>{props.label}</Label>}
      <ReactDatePicker
        showIcon
        selected={props.value}
        customInput={
          <input className={formClasses} onChange={props.onChange} />
        }
        {...props}
      />
    </div>
  );
}

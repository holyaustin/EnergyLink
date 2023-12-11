import React, { SyntheticEvent } from "react";
import Label from "../Label";
import { formClasses } from "../styles";

type TextFieldProps = {
  id?: string;
  label?: string;
  type?: string;
  className?: string;
  name?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string | number | readonly string[] | undefined | null;
  onChange?: (event: SyntheticEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type = "text",
  className = "",
  defaultValue,
  ...props
}) => {
  const validDefaultValue = defaultValue !== null ? defaultValue : undefined;
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input
        type={type}
        defaultValue={validDefaultValue}
        {...props}
        className={formClasses}
      />
    </div>
  );
};

export default TextField;

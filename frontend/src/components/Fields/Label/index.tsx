import React from "react";

type LabelProps = {
  id?: string;
  children?: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ id, children }) => {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
    </label>
  );
};

export default Label;

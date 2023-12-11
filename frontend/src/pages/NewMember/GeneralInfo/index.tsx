// Core
import { Dispatch, SetStateAction } from "react";

// Components
import { TextField, SelectField } from "components/Fields";

type TypeEnum = "CONSUMER" | "PROSUMER" | "INVESTOR" | "EXTERNAL";

export const typeEnumToMemberType = {
  CONSUMER: 0,
  PROSUMER: 1,
  INVESTOR: 2,
  EXTERNAL: 3,
};

export type GeneralInfoValuesType = {
  publicAddress: string | null;
  type: TypeEnum | null;
};

export type GeneralInfoProps = {
  values: GeneralInfoValuesType;
  onChange: Dispatch<SetStateAction<GeneralInfoValuesType>>;
};

type typeOptionsType = {
  value: TypeEnum;
  label: string;
};

export const typeOptions: Array<typeOptionsType> = [
  { value: "CONSUMER", label: "Consumer" },
  { value: "PROSUMER", label: "Prosumer" },
  { value: "EXTERNAL", label: "External Entity" },
];

export default function GeneralInfo(props: GeneralInfoProps) {
  const onInputChange = (e) => {
    props.onChange({ ...props.values, [e.target.name]: e.target.value });
  };

  const onTypeChange = (e) => {
    props.onChange({ ...props.values, type: e.value });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <TextField
        className="col-span-full"
        label="Public Address"
        id="publicAddress"
        name="publicAddress"
        type="text"
        placeholder="0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        onChange={onInputChange}
        defaultValue={props.values.publicAddress}
        required
      />
      <SelectField
        label="Member Type"
        options={typeOptions}
        name="type"
        className="col-span-full"
        onChange={onTypeChange}
        defaultValue={typeOptions[0]}
        value={
          typeOptions.filter((option) => option.value === props.values.type)[0]
        }
      />
    </div>
  );
}

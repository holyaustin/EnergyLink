// Core
import { Dispatch, SetStateAction } from "react";

// Components
import { TextField } from "components/Fields";

export type FinanceValuesType = {
  apy: number | null;
  goal: number | null;
};

export type FinanceProps = {
  values: FinanceValuesType;
  onChange: Dispatch<SetStateAction<FinanceValuesType>>;
};

export default function Finance(props: FinanceProps) {
  const onInputChange = (e) => {
    props.onChange({ ...props.values, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <TextField
        label="APY (%)"
        id="apy"
        name="apy"
        type="number"
        onChange={onInputChange}
        placeholder={"10.0"}
        defaultValue={props.values.apy}
        required
      />
      <TextField
        label="Goal"
        placeholder="0.0"
        id="goal"
        name="goal"
        type="number"
        defaultValue={props.values.goal}
        onChange={onInputChange}
        required
      />
    </div>
  );
}

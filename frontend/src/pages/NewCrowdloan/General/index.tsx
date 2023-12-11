// Core
import { Dispatch, SetStateAction } from "react";

// Components
import { SelectField } from "components/Fields";
import Datepicker from "components/Fields/Datepicker";

// Utils
import { assets } from "utils/assets";

export type GeneralValuesType = {
  startDate: Date;
  endDate: Date;
  asset: string;
};

export type GeneralProps = {
  values: GeneralValuesType;
  onChange: Dispatch<SetStateAction<GeneralValuesType>>;
};

export default function General(props: GeneralProps) {
  const onStartDateChange = (e: any) => {
    props.onChange({ ...props.values, startDate: e });
  };

  const onEndDateChange = (e: any) => {
    props.onChange({ ...props.values, endDate: e });
  };

  const onAssetChange = (e) => {
    props.onChange({ ...props.values, asset: e.value });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Datepicker
        label="Start Date"
        onChange={onStartDateChange}
        value={props.values.startDate}
      />
      <Datepicker
        label="End Date"
        onChange={onEndDateChange}
        value={props.values.endDate}
      />
      <SelectField
        label="Asset"
        options={assets}
        name="type"
        className="col-span-full"
        onChange={onAssetChange}
        defaultValue={assets[0]}
        value={
          assets.filter((option) => option.value === props.values.asset)[0]
        }
      />
    </div>
  );
}

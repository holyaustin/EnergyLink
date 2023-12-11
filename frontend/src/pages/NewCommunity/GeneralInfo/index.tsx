// Components
import { TextField } from "components/Fields";
import { Dispatch, SetStateAction } from "react";

export type GeneralInfoValuesType = {
  name: string | null;
  latitude: number | null;
  longitude: number | null;
};

export type GeneralInfoProps = {
  values: {
    name: string | null;
    latitude: number | null;
    longitude: number | null;
  };
  onChange: Dispatch<SetStateAction<GeneralInfoValuesType>>;
};

export default function GeneralInfo(props: GeneralInfoProps) {
  const onInputChange = (e) => {
    props.onChange({ ...props.values, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <TextField
        className="col-span-full"
        label="Name"
        id="name"
        name="name"
        type="name"
        autoComplete="name"
        onChange={onInputChange}
        defaultValue={props.values.name}
        required
      />
      <TextField
        label="Center Latitude"
        placeholder="0.0"
        id="latitude"
        name="latitude"
        type="number"
        defaultValue={props.values.latitude}
        onChange={onInputChange}
        required
      />
      <TextField
        label="Center Longitude"
        id="longitude"
        placeholder="0.0"
        name="longitude"
        type="number"
        defaultValue={props.values.longitude}
        onChange={onInputChange}
        required
      />
    </div>
  );
}

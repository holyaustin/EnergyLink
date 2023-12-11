// Core
import { Dispatch, SetStateAction } from "react";

// Components
import { TextField } from "components/Fields";

export type RoleInfoValuesType = {
  meterIdentifier: string | null;
  latitude: number | null;
  longitude: number | null;
};

export type RoleInfoProps = {
  values: RoleInfoValuesType;
  onChange: Dispatch<SetStateAction<RoleInfoValuesType>>;
};

export default function RoleInfo(props: RoleInfoProps) {
  const onInputChange = (e) => {
    props.onChange({ ...props.values, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <TextField
        className="col-span-full"
        label="Meter Identifier"
        id="meterIdentifier"
        name="meterIdentifier"
        type="text"
        onChange={onInputChange}
        placeholder={"A123B123C123D"}
        defaultValue={props.values.meterIdentifier}
        required
      />
      <TextField
        label="Location Latitude"
        placeholder="0.0"
        id="latitude"
        name="latitude"
        type="number"
        defaultValue={props.values.latitude}
        onChange={onInputChange}
        required
      />
      <TextField
        label="Location Longitude"
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

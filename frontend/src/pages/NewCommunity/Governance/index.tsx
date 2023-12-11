// Core
import { Dispatch, SetStateAction } from "react";

// Components
import { TextField } from "components/Fields";

export type GovernanceValuesType = {
  votingDelay: string | null;
  votingPeriod: number | null;
  quorumPercentage: number | null;
  minDelay: number | null;
};

export type GeneralInfoProps = {
  values: GovernanceValuesType;
  onChange: Dispatch<SetStateAction<GovernanceValuesType>>;
};

export default function Governance(props: GeneralInfoProps) {
  const onInputChange = (e) => {
    props.onChange({ ...props.values, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-2 gap-6">
        <TextField
          label="Voting Delay"
          id="voting_delay"
          name="votingDelay"
          type="text"
          onChange={onInputChange}
          defaultValue={props.values.votingDelay}
          placeholder="5"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <TextField
          label="Voting Period"
          id="voting_period"
          name="votingPeriod"
          type="text"
          placeholder="1"
          onChange={onInputChange}
          defaultValue={props.values.votingPeriod}
          required
        />
        <TextField
          label="Quorum %"
          id="quorum"
          placeholder="5"
          name="quorumPercentage"
          type="quorum"
          onChange={onInputChange}
          defaultValue={props.values.quorumPercentage}
          required
        />
        <TextField
          className="col-span-full"
          label="Minimum Delay Before Execution"
          id="min_delay"
          placeholder="3600"
          name="minDelay"
          type="min_delay"
          onChange={onInputChange}
          defaultValue={props.values.minDelay}
          required
        />
      </div>
    </div>
  );
}

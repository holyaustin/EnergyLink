// Components
import Card from "../SingleCampaign";

// Utils
import { Campaign } from "utils/types/crowdloans.types";

type Data = {
  _campaigns: Campaign[];
  _crowdloans: string[];
  _states: number[];
};

type ListCampaignsProps = {
  data: Data;
};

export default function ListCampaigns(props: ListCampaignsProps) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {props.data?._crowdloans?.map((crowdloan, index) => (
        <Card
          key={index}
          address={crowdloan}
          activationDate={props.data._campaigns[index].startAt}
          expirationDate={props.data._campaigns[index].endAt}
          title={"EcoDAO"}
        />
      ))}
    </div>
  );
}

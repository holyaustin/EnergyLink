import React, { FC } from "react";
import { ReactComponent as Back } from "../../../assets/icons/Back.svg";

type ProposalCardProps = {
  question: string;
  setShowCard: Function;
};

const ProposalCard: FC<ProposalCardProps> = ({ question, setShowCard }) => {
  return (
    <div className="flex max-h-[664px] w-[904px] items-start  ">
      <div className="card">
        <div className="flex flex-row items-center justify-between  p-[20px]">
          <div>
            <Back
              onClick={() => {
                setShowCard(false);
              }}
              className=" hover:cursor-pointer"
            />
            <div className="flex h-[36px] items-center text-xl font-semibold leading-9">
              {question}
            </div>
          </div>
          <div>topic name</div>
        </div>
        <div className=" border-borderCardAbout border-[0.5px] border-solid"></div>
        <div className="p-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud{" "}
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;

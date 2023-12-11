import React, { FC } from "react";
import { ReactComponent as ArrowBis } from "../../../assets/icons/ArrowBis.svg";
import { Proposal } from "../../../utils/types/proposals.types";

type ProposalCardPreviewProps = {
  setShowCard: Function;
  proposal: Proposal;
  setCurrentTitle: Function;
};

const ProposalCardPreview: FC<ProposalCardPreviewProps> = ({
  setCurrentTitle,
  setShowCard,
  proposal,
}) => {
  return (
    <div className="card flex max-h-[160px] flex-col justify-between p-[20px] ">
      <div>
        <div className="gap-[8px] text-base font-semibold">
          {proposal.id}. {proposal.title}
        </div>
        <div className="text-sm font-normal leading-[18px] text-[#000000B2]">
          {proposal.description}
        </div>
      </div>
      <div className="text-sm font-normal leading-[18px] text-[#000000B2]">
        {proposal.result === "Pending" ? (
          <div className=" text-gray-500">{proposal.result}...</div>
        ) : (
          <div
            className={`w-fit rounded-2xl py-1 px-4 font-normal text-white ${
              proposal.result === "Failed" ? " bg-red-600 " : " bg-green-600"
            }`}
          >
            {proposal.result}
          </div>
        )}
      </div>

      <div
        className="flex items-center gap-[6px]  text-sm font-normal text-green-400 hover:cursor-pointer"
        onClick={() => {
          setCurrentTitle(proposal.title);
          setShowCard(true);
        }}
      >
        Learn More
        <ArrowBis />
      </div>
    </div>
  );
};

export default ProposalCardPreview;

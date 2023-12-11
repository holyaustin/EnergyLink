import React, { useEffect, useState } from "react";
import { ReactComponent as Loop } from "../../assets/icons/Loop.svg";
import ProposalCardPreview from "./ProposalCardPreview";
import ProposalCard from "./ProposalCard";
import proposals from "../../utils/mock/proposals/Proposals";
import { Filters, Proposal } from "../../utils/types/proposals.types";

const topics = ["All", "Pending", "Failed", "Passed"];

export default function ListProposals() {
  const [selectedPart, setSelectedPart] = useState<number>(0);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [currentTitle, setCurrentTitle] = useState<string>("");
  const [proposalsDiplayed, setProposalsDiplayed] =
    useState<Proposal[]>(proposals);
  const [filters, setFilters] = useState<Filters>({
    result: "All",
    searchTitle: "",
  });

  const getProposalsFiltered = (filters: Filters) => {
    setProposalsDiplayed(
      proposals
        .filter((proposal: Proposal) =>
          proposal.title
            .toLowerCase()
            .includes(filters.searchTitle.toLowerCase())
        )
        .filter((proposal: Proposal) => {
          if (filters.result === "All") {
            return true;
          }
          return proposal.result === filters.result;
        })
    );
  };

  useEffect(() => {
    getProposalsFiltered(filters);
  }, [filters]);

  return (
    <main className="lg:pl-72">
      <div className=" flex h-[calc(100%-64px)] justify-start gap-[50px]">
        {/* focus on this div for responsive time */}
        <div>
          <div className="card flex w-[280px] flex-col gap-[6px] p-3">
            <form>
              <label className="sr-only mb-2 text-sm font-medium text-gray-900">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Loop />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900"
                  placeholder="Search proposal..."
                  required
                  onChange={(e) => {
                    setFilters({ ...filters, searchTitle: e.target.value });
                  }}
                ></input>
              </div>
            </form>

            {topics.map((topic, index) => {
              return (
                <>
                  <div
                    className={`h-[48px] rounded-lg ${
                      selectedPart === index && "bg-[#0000000D]"
                    } p-3 hover:cursor-pointer 
                `}
                    onClick={() => {
                      setFilters({
                        ...filters,
                        result: topic as
                          | "All"
                          | "Pending"
                          | "Failed"
                          | "Passed",
                      });
                      setSelectedPart(index);
                    }}
                    key={index}
                  >
                    {topics[index]}
                  </div>
                  {index === 7 && (
                    <div className=" border-t-[0.5px] border-solid border-[#00000033]"></div>
                  )}
                </>
              );
            })}
          </div>
        </div>

        <div>
          {!showCard ? (
            <div className="grid grid-cols-3 gap-[30px]">
              {proposalsDiplayed.map((proposal: Proposal, index) => {
                return (
                  <ProposalCardPreview
                    key={index}
                    proposal={proposal}
                    setShowCard={setShowCard}
                    setCurrentTitle={setCurrentTitle}
                  />
                );
              })}
            </div>
          ) : (
            <ProposalCard setShowCard={setShowCard} question={currentTitle} />
          )}
        </div>
      </div>
    </main>
  );
}

import React from "react";

const SubmitProposal = () => {
  return (
    <div className="center  h-[calc(100%-64px)]  gap-[16px] bg-bgCardNavbar pt-10">
      <div className="card flex max-h-[536px] w-[60%] transform flex-row overflow-hidden border-[1px] border-green-400  text-left align-middle transition-all ">
        <div
          className="w-6/12 p-6"
          style={{
            backgroundImage:
              "url(https://assets.taraenergy.com/wp-content/uploads/2021/01/energy-conservation-definition-lightbulb-energy-image.jpg)",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className=" w-6/12 border-l-[0.5px] border-l-green-400">
          <div className="border-borderCardAbout flex flex-row items-center justify-between border-b-[0.5px] border-solid p-6 text-lg font-medium leading-6 text-gray-900">
            <div>
              Submit a<span className="text-green-400"> Proposal</span> to the
              Dao.
            </div>
          </div>
          <div className="flex flex-col  gap-2   p-5">
            <div>Title</div>
            <input
              placeholder="Enter your title..."
              type="text"
              className="h-[40px] w-[100%] rounded-lg border-[0.5px] border-solid border-[#00000033] p-[10px]"
            />

            <div>Description</div>
            <textarea
              placeholder="Enter an title..."
              cols={40}
              rows={5}
              className="h-[80px] w-[100%] rounded-lg border-[0.5px] border-solid border-[#00000033] p-[10px]"
            />
          </div>
          <div className="flex items-center justify-center pb-5">
            <button className="flex h-[48px]  items-center justify-center rounded-lg  bg-green-400 px-6 py-3 text-base font-normal text-white hover:cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitProposal;

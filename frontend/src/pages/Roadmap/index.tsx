import React from "react";

const Roadmap = () => {
  return (
    <div className="overflow-hidden py-10 sm:py-8 lg:pb-32 xl:pb-36">
      <section className="lg:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Roadmap
            </h2>
          </div>

          <ul className="mx-auto mt-16 max-w-md space-y-12">
            <li className="relative flex items-start">
              <div
                className="absolute top-14 left-8 -ml-0.5 mt-0.5 h-full w-px border-l-4 border-dotted border-gray-300"
                aria-hidden="true"
              ></div>

              <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                  <g
                    fill="none"
                    stroke="#49de80"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    className="stroke-000000"
                  >
                    <ellipse cx="40" cy="34.988" rx="35" ry="23"></ellipse>
                    <path d="M5 34.988v12.847c0 3.907 1.75 7.611 4.778 10.08C17.415 64.139 28.131 68.012 40 68.012s22.585-3.873 30.222-10.098A13 13 0 0 0 75 47.835V34.988"></path>
                    <path d="M51.163 19.348C61.53 21.97 69 28.077 69 34.988c0 2.258-.798 4.429-2.234 6.422-1.409 1.955-3.433 3.737-5.92 5.258M40 67.988v-10M51.667 66.72V56.679M63.333 62.447v-4.459M28.333 66.72V56.679M16.667 62.447V52.412M40 21 26 35l14 5 14-5zM53 41l-13 8-13-8"></path>
                  </g>
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-black">
                  Launch MVP on Testnet
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Our primary goal is to launch a test version of our platform
                  with key features like governance protocols, financing
                  mechanisms, and energy trading support. Feedback from this
                  phase will help us refine our platform before the mainnet
                  launch.
                </p>
              </div>
            </li>

            <li className="items-ce relative flex">
              <div
                className="rotate- absolute top-14 left-8 -ml-0.5 mt-0.5 h-full w-px border-l-4 border-dotted border-gray-300"
                aria-hidden="true"
              ></div>

              <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.75 15c.966 0 1.75.784 1.75 1.75l-.001.962c.117 2.19-1.511 3.297-4.432 3.297-2.91 0-4.567-1.09-4.567-3.259v-1c0-.966.784-1.75 1.75-1.75h5.5Zm0 1.5h-5.5a.25.25 0 0 0-.25.25v1c0 1.176.887 1.759 3.067 1.759 2.168 0 2.995-.564 2.933-1.757V16.75a.25.25 0 0 0-.25-.25Zm-11-6.5h4.376a4.007 4.007 0 0 0-.095 1.5H3.75a.25.25 0 0 0-.25.25v1c0 1.176.887 1.759 3.067 1.759.462 0 .863-.026 1.207-.077a2.743 2.743 0 0 0-1.173 1.576l-.034.001C3.657 16.009 2 14.919 2 12.75v-1c0-.966.784-1.75 1.75-1.75Zm16.5 0c.966 0 1.75.784 1.75 1.75l-.001.962c.117 2.19-1.511 3.297-4.432 3.297l-.169-.002a2.755 2.755 0 0 0-1.218-1.606c.387.072.847.108 1.387.108 2.168 0 2.995-.564 2.933-1.757V11.75a.25.25 0 0 0-.25-.25h-4.28a4.05 4.05 0 0 0-.096-1.5h4.376ZM12 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM6.5 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm11 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-11 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                    fill="#49de80"
                    className="fill-212121"
                  ></path>
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-black">
                  Onboarding 1 Energy Community
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  We aim to integrate our first energy community. Their insights
                  will aid in understanding user needs and improving our
                  services, laying a solid foundation for future community
                  onboarding.
                </p>
              </div>
            </li>

            <li className="relative flex items-start">
              <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow">
                <svg
                  className="h-10 w-10 font-semibold text-green-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-semibold text-black">
                  Platform Feature Expansion
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  We plan to further develop our platform based on user needs,
                  potentially introducing new financial tools, governance
                  mechanisms, or advanced AI for energy trading optimization.
                  We&apos;ll also explore partnerships for expanding our reach
                  and improving platform utility.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;

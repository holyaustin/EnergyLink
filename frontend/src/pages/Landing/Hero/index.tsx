// Core
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

// Components
import GithubIcon from "components/Icons/Github";
import BackgroundIllustration from "./BackgroundIllustration";
import { DefaultButton as Button } from "components/Buttons/DefaultButton";
import Container from "components/Container";

// Assets

import logoChainlink from "assets/logos/chainlinkLogo.svg";
import logoEthereum from "assets/logos/ethereumLogo.svg";
import logoGreen from "assets/images/re4.jpeg";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden bg-green-200 py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Your Energy Community starts here! Jump in
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              EnegyLink is an innovative energy community platform that bridges
              governance, financing, and operational support under one roof. We
              empower energy communities by offering decentralized governance
              systems, facilitating crowdloan financing and energy trading.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Button
                className="bg-green-600"
                onClick={() => navigate("/create-community")}
                variant="solid"
              >
                Create Community
              </Button>
              <Button href="https://youtu.be/VuPSPGZYW7s" variant="outline">
                <GithubIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Learn More</span>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 flex h-[448px] items-center justify-center px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto  lg:px-0 lg:pt-10 xl:-bottom-32">
              <div>
                <img src={logoGreen} alt="logo" width="600px"></img>
              </div>
            </div>
          </div>
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Powered by
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {[
                ["Chainlink", logoChainlink],
                ["Ethereum", logoEthereum],
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx("flex", className)}>
                  <img src={logo} alt={name} className="h-8" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

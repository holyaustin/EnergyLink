import React from "react";

function BackgroundIllustration(props) {
  return (
    <svg
      viewBox="0 0 1090 1090"
      aria-hidden="true"
      fill="none"
      preserveAspectRatio="none"
      {...props}
    >
      <circle cx={545} cy={545} r="544.5" />
      <circle cx={545} cy={545} r="480.5" />
      <circle cx={545} cy={545} r="416.5" />
      <circle cx={545} cy={545} r="352.5" />
    </svg>
  );
}

type FormLayoutProps = {
  title?: string;
  subtitle?: string | React.ReactElement;
  children: React.ReactNode;
};

export function FormLayout(props: FormLayoutProps) {
  return (
    <>
      <main className="flex min-h-full overflow-hidden pt-2 sm:py-4">
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
          <div className="relative mt-6 sm:mt-8">
            <BackgroundIllustration
              width="1090"
              height="1090"
              className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto"
            />
            <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
              {props.title}
            </h1>
            {props.subtitle && (
              <p className="mt-3 text-center text-lg text-gray-600">
                {props.subtitle}
              </p>
            )}
          </div>
          <div className="-mx-4 mt-4 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24 sm:pt-12">
            {props.children}
          </div>
        </div>
      </main>
    </>
  );
}

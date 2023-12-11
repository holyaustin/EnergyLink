const secondaryNavigation = [
  { name: "Last 7 days", href: "#", current: true },
  { name: "Last 30 days", href: "#", current: false },
  { name: "All-time", href: "#", current: false },
];

export default function DashboardNavigation() {
  return (
    <div className="mx-auto flex flex-wrap items-center gap-6 px-4 sm:flex-nowrap ">
      <h1 className="text-base font-semibold leading-7 text-gray-900">
        Statistics
      </h1>
      <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
        {secondaryNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={item.current ? "text-indigo-600" : "text-gray-700"}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

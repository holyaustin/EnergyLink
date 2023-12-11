// Utils
import { classNames } from "utils/styles";

type StatsCardProps = {
  statIdx: number;
  name: string;
  value: string;
};

export default function StatsCard(props: StatsCardProps) {
  return (
    <div
      key={props.statIdx}
      className={classNames(
        props.statIdx % 2 === 1
          ? "sm:border-l"
          : props.statIdx === 2
          ? "lg:border-l"
          : "",
        "flex flex-wrap items-baseline justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8"
      )}
    >
      <dt className="text-sm font-medium leading-6 text-gray-500">
        {props.name}
      </dt>
      <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
        {props.value}
      </dd>
    </div>
  );
}

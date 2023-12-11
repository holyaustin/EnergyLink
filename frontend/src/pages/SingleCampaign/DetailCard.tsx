// Components
import { ClockIcon } from "@heroicons/react/24/outline";

type DetailCardProps = {
  label: string;
  value: string;
};

export default function DetailCard(props: DetailCardProps) {
  return (
    <div className="flex w-full flex-row rounded-xl bg-[rgba(244,246,249,1)]">
      <div className="mt-2 mb-2 flex flex-row">
        <ClockIcon className="text-grey-500 m-2 h-6 w-6" />
        <div className="flex-grow-3 flex flex-col">
          <p className="mr-1 text-left text-sm font-medium text-gray-700">
            {props.label}
          </p>
          <p className="mr-1 text-left text-sm font-bold text-blue-500">
            {props.value}
          </p>
        </div>
      </div>
    </div>
  );
}

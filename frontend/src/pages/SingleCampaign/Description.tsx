// Components
import { MapPinIcon } from "@heroicons/react/20/solid";

type DescriptionProps = {
  title: string;
  location: string;
};

const Description = (props: DescriptionProps) => {
  return (
    <div>
      <div className="mb-4 flex flex-col items-center">
        <h3 className="text-center text-2xl font-bold">{props.title}</h3>
        <p className="text-center font-medium text-gray-700">
          Renewable Energy Community
        </p>
      </div>
      <div className="mb-4 mt-4 flex items-center justify-center">
        <MapPinIcon className="h-6 w-6 text-green-500" />
        <h6 className="ml-1 text-center font-medium">{props.location}</h6>
      </div>
    </div>
  );
};

export default Description;

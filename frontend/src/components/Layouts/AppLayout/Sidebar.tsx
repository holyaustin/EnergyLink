// Core
import navRoutes from "./navRoutes";
import { useNavigate, useLocation } from "react-router-dom";

// Components
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

// Utils
import { classNames } from "utils/styles";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  return (
    <div className="z-0 lg:fixed lg:top-28 lg:bottom-0 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navRoutes.map((item) => (
                  <li key={item.name}>
                    <a
                      onClick={() => navigate(item.route)}
                      className={classNames(
                        item.route === pathname
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 hover:cursor-pointer"
                      )}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <a
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                <Cog6ToothIcon
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

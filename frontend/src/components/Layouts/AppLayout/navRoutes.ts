import { FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

const navRoutes = [
  { name: "Dashboard", route: "/dashboard", icon: HomeIcon, current: true },
  { name: "Members", route: "/members", icon: UsersIcon, current: false },
  {
    name: "Financing",
    route: "/crowdloans",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Governance",
    route: "/governance",
    icon: FolderIcon,
    current: false,
  },
];

export default navRoutes;

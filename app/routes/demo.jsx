import { useState } from "react";
import {
  TableCellsIcon,
  ChartBarIcon,
  Squares2X2Icon,
  MapIcon,
  MapPinIcon,
  IdentificationIcon,
  StarIcon,
  ExclamationTriangleIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";
import { Outlet, NavLink, Link } from "@remix-run/react";

const menus = [
  {
    name: "Election Analytics",
    to: "/demo/chhattisgarh",
    icon: MapIcon,
    current: true,
  },
  {
    name: "EDA",
    to: "/demo/eda",
    icon: StarIcon,
    current: false,
  },
  {
    name: "Poll Dashboard",
    to: "/demo/polldash",
    icon: ChartBarIcon,
    current: false,
  },

  {
    name: "Map",
    to: "/demo/map",
    icon: MapPinIcon,
    current: false,
  },

  {
    name: "Economic Tracker",
    to: "/demo/economic",
    icon: IdentificationIcon,
    current: false,
  },
  {
    name: "Indicator",
    to: "/demo/indicator",
    icon: IdentificationIcon,
    current: false,
  },

  {
    name: "Svg",
    to: "/demo/svg",
    icon: MapIcon,
    current: false,
  },
  {
    name: "Sentiment",
    to: "/demo/sentiment",
    icon: ChartBarIcon,
    current: false,
  },
  {
    name: "Survey",
    to: "/demo/survey",
    icon: ChartBarIcon,
    current: false,
  },
  // {
  //   name: "Chart",
  //   to: "/demo/chart",
  //   icon: IdentificationIcon,
  //   current: false,
  // },
  // {
  //   name: "Alerts",
  //   to: "/demo/alerts",
  //   icon: ExclamationTriangleIcon,
  //   current: false,
  // },
  // {
  //   name: "Chat",
  //   to: "/demo/chat",
  //   icon: ChatBubbleBottomCenterTextIcon,
  //   current: false,
  // },
  // {
  //   name: "Map Filter",
  //   to: "/demo/mappolls",
  //   icon: MapIcon,
  //   current: false,
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-full">
      <div
        className={`bg-blue-900  ${
          open ? "w-28" : "w-16"
        } flex flex-col text-gray-100 duration-500 `}
      >
        <div className="flex-1">
          <div className="flex items-center justify-center bg-white py-1">
            <img
              className="cursor-poniter mx-auto h-10 w-10 justify-center "
              src={"/assets/logo-4.png"}
              alt="logo"
              onClick={() => setOpen(!open)}
            />
          </div>

          <nav aria-label="Sidebar" className="flex flex-col items-center">
            <div className="static mt-2 w-full space-y-1 px-2">
              {menus?.map((item) => (
                <NavLink
                  to={item.to}
                  key={item.name}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-blue-800 text-white"
                        : "text-blue-100 hover:bg-blue-800 hover:text-white",
                      "group flex w-full flex-col items-center rounded-md p-2 text-xs font-medium"
                    )
                  }
                >
                  <div className="p-1">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${item + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "translate-x-28  opacity-0"
                    }`}
                  >
                    {item?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48  z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                  >
                    {item?.name}
                  </h2>
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        {/* <div className="mb-2">
          <Link to="/demo/appbar">
            <div
              className={classNames(
                "text-blue-100 hover:bg-blue-800 hover:text-white",
                "group flex w-full flex-col items-center rounded-md p-2 text-xs font-medium"
              )}
            >
              <div className="p-1">
                <Squares2X2Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "translate-x-28 overflow-hidden opacity-0"
                }`}
              >
                Appbar
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
              >
                Appbar
              </h2>
            </div>
          </Link>
        </div> */}
      </div>

      {/* appbar */}
      <div className="flex flex-1 flex-col overflow-y-auto bg-gray-100 w-full">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { useState } from "react";

import {
  HomeIcon,
  CreditCardIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { RiShipLine, RiGovernmentLine } from "react-icons/ri";
import {
  TbUsersPlus,
  TbChefHat,
  TbBuildingFactory,
  TbHomeSearch,
} from "react-icons/tb";
import {
  PiFactory,
  PiAirplaneTilt,
  PiVideo,
  PiMapPin,
  PiLightbulb,
} from "react-icons/pi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { LiaBreadSliceSolid, LiaUserTieSolid } from "react-icons/lia";
import { BsBricks, BsBriefcase, BsShop } from "react-icons/bs";

// FcFactory;
const stats2 = [
  {
    id: 1,
    name: "Shipping Volumes",
    stat: "-88%",
    icon: <RiShipLine />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-100",
  },
  {
    id: 2,
    name: "Business sentiment",
    stat: "-79%",
    icon: <TbUsersPlus />,
    change: "",
    changeType: "increase",
    previousStat: "last Week",
    to: "/demo/dashboard/overview",
    iconForeground: "text-gray-700",
    iconBackground: "bg-gray-200",
  },
  {
    id: 3,
    name: "Air pollution",
    stat: "-89%",
    icon: <TbBuildingFactory />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-rose-500",
    iconBackground: "bg-rose-100",
  },
  {
    id: 4,
    name: "Traffic congestion",
    stat: "-94%",
    icon: <PiMapPin />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-yellow-600",
    iconBackground: "bg-yellow-100",
  },
  {
    id: 5,
    name: "SMEs hiring new workers",
    stat: "+74%",
    icon: <PiLightbulb />,
    change: "",
    changeType: "increase",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-sky-600",
    iconBackground: "bg-sky-100",
  },
  {
    id: 6,
    name: "Essential goods",
    stat: "-70%",
    icon: <HomeIcon />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-rose-500",
    iconBackground: "bg-rose-100",
  },
  {
    id: 7,
    name: "Food delivery",
    stat: "-80%",
    icon: <GiForkKnifeSpoon />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-green-700",
    iconBackground: "bg-green-100",
  },
  {
    id: 8,
    name: "Basic food",
    stat: "-84%",
    icon: <LiaBreadSliceSolid />,
    change: "",
    changeType: "increase",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-100",
  },
];
const Sectorstats = [
  {
    id: 9,
    name: "International arrives",
    stat: "-84%",
    icon: <PiAirplaneTilt />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-100",
  },
  {
    id: 10,
    name: "Domestic arrivals",
    stat: "-84%",
    icon: <PiAirplaneTilt />,
    change: "",
    changeType: "decrease",
    previousStat: "last week",
    to: "/demo/dashboard/overview",
    iconForeground: "text-gray-700",
    iconBackground: "bg-gray-300",
  },
  {
    id: 11,
    name: "Hotel occupancy",
    stat: "-84%",
    icon: <LiaUserTieSolid />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-yellow-600",
    iconBackground: "bg-yellow-100",
  },
  {
    id: 12,
    name: "Vists to toursist sites",
    stat: "-84%",
    icon: <BsBriefcase />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-sky-600",
    iconBackground: "bg-sky-100",
  },
  {
    id: 13,
    name: "Footfall in malls",
    stat: "-84%",
    icon: <BsShop />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-rose-500",
    iconBackground: "bg-rose-100",
  },
  {
    id: 14,
    name: "Restaurant bookings",
    stat: "+84%",
    icon: <TbChefHat />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-green-700",
    iconBackground: "bg-green-100",
  },
  {
    id: 15,
    name: "Construction activity",
    stat: "+84%",
    icon: <BsBricks />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-100",
  },
  {
    id: 16,
    name: "Manufacturing activity",
    stat: "-84%",
    icon: <PiFactory />,
    change: "",
    changeType: "decrease",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-100",
  },
];
const indStats = [
  {
    id: 17,
    name: "Reporting financial hardship",
    stat: "+84%",
    icon: <CreditCardIcon />,
    change: "",
    changeType: "increase",
    previousStat: "last week",
    to: "/demo/dashboard/overview",
    iconForeground: "text-green-700",
    iconBackground: "bg-green-100",
  },
  {
    id: 18,
    name: "Awareness of Govt measures",
    stat: "+84%",
    icon: <RiGovernmentLine />,
    change: "",
    changeType: "increase",
    previousStat: "last week",
    to: "/demo/dashboard/overview",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-100",
  },
  {
    id: 19,
    name: "Video streaming",
    stat: "+84%",
    icon: <PiVideo />,
    change: "",
    changeType: "increase",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-gray-700",
    iconBackground: "bg-gray-300",
  },
  {
    id: 20,
    name: "Did not leave home 48h",
    stat: "+84%",
    icon: <TbHomeSearch />,
    change: "",
    changeType: "increase",
    previousStat: "2019",
    to: "/demo/dashboard/overview",
    iconForeground: "text-sky-600",
    iconBackground: "bg-sky-100",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MapPoll() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-4 mt-1 rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between p-2 ">
          <div className="m-2 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">
              Latest Polls
            </h2>
          </div>
          <div className="mr-2 mt-4 flex md:ml-4 md:mt-0">
            <button
              type="button"
              className="rounded-full bg-rose-500 p-1.5 font-semibold text-white shadow-lg"
              onClick={() => setOpen(!open)}
            >
              <PlusIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="m-4 p-4 bg-white rounded-lg shadow-lg">
        <div className="m-1">
          <h2 className="text-xl font-bold">
            Overall economic activity and consumption
          </h2>
        </div>
        <dl className="my-2 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats2.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 border"
            >
              <div className="absolute ">
                <span
                  className={classNames(
                    item.iconBackground,
                    item.iconForeground,
                    "inline-flex rounded-lg p-3",
                  )}
                >
                  {React.cloneElement(item.icon, { className: "h-7 w-7" })}
                </span>
              </div>

              <dt className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 ">
                <p className="text-2xl font-semibold text-blue-900">
                  {item.stat}
                </p>
                <p
                  className={classNames(
                    item.changeType === "increase"
                      ? "text-green-700"
                      : "text-rose-500",
                    "ml-2 flex items-baseline text-sm font-semibold",
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowUpIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {" "}
                    {item.changeType === "increase"
                      ? "Increased"
                      : "Decreased"}{" "}
                    by{" "}
                  </span>
                  {item.change}
                </p>
                <div
                  className="absolute 
                  inset-x-0 bottom-0 px-4 py-4 ml-2"
                >
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View all
                      <span className="sr-only"> {item.name} stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="m-4 p-4 bg-white rounded-lg shadow-lg">
        <div className="m-1">
          <h2 className="text-xl font-bold">Sector Specific</h2>
        </div>
        <dl className="my-2 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Sectorstats.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 border"
            >
              <div className="absolute">
                <span
                  className={classNames(
                    item.iconBackground,
                    item.iconForeground,
                    "inline-flex rounded-lg p-3",
                  )}
                >
                  {React.cloneElement(item.icon, { className: "h-7 w-7" })}
                </span>
              </div>

              <dt className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 ">
                <p className="text-2xl font-semibold text-blue-900">
                  {item.stat}
                </p>
                <p
                  className={classNames(
                    item.changeType === "increase"
                      ? "text-green-700"
                      : "text-rose-500",
                    "ml-2 flex items-baseline text-sm font-semibold",
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowUpIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {" "}
                    {item.changeType === "increase"
                      ? "Increased"
                      : "Decreased"}{" "}
                    by{" "}
                  </span>
                  {item.change}
                </p>
                <div
                  className="absolute 
                  inset-x-0 bottom-0 px-4 py-4 ml-2"
                >
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View all
                      <span className="sr-only"> {item.name} stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="m-4 p-4 rounded-lg border bg-white shadow-lg">
        <div className="m-1">
          <h2 className="text-xl font-bold">Individuals</h2>
        </div>
        <dl className="my-2 grid grid-cols-1 gap-3 sm:grid-cols-1 lg:grid-cols-4">
          {indStats.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 border"
            >
              <div className="absolute">
                <span
                  className={classNames(
                    item.iconBackground,
                    item.iconForeground,
                    "inline-flex rounded-lg p-3",
                  )}
                >
                  {React.cloneElement(item.icon, { className: "h-7 w-7" })}
                </span>
              </div>
              <dt className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 ">
                <p className="text-2xl font-semibold text-blue-900">
                  {item.stat}
                </p>
                <p
                  className={classNames(
                    item.changeType === "increase"
                      ? "text-green-700"
                      : "text-rose-500",
                    "ml-2 flex items-baseline text-sm font-semibold",
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowUpIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {" "}
                    {item.changeType === "increase"
                      ? "Increased"
                      : "Decreased"}{" "}
                    by{" "}
                  </span>
                  {item.change}
                </p>
                <div
                  className="absolute 
                  inset-x-0 bottom-0 px-4 py-4 ml-2"
                >
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View all
                      <span className="sr-only"> {item.name} stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        className="m-4 
       grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3 "
      ></div>

      {/* <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats2.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-indigo-500 p-3">
                  {React.cloneElement(item.icon, { className: "h-6 w-6" })}
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {item.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {item.stat}
                </p>
                <p
                  className={classNames(
                    item.changeType === "increase"
                      ? "text-green-600"
                      : "text-red-600",
                    "ml-2 flex items-baseline text-sm font-semibold",
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowUpIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownIcon
                      className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {" "}
                    {item.changeType === "increase"
                      ? "Increased"
                      : "Decreased"}{" "}
                    by{" "}
                  </span>
                  {item.change}
                </p>
                <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      View all
                      <span className="sr-only"> {item.name} stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div> */}
    </>
  );
}

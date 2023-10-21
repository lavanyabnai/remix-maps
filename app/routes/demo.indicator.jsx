import { Link } from "@remix-run/react";
import { useState, Fragment } from "react";
import { Transition, Popover, Dialog } from "@headlessui/react";
import {
  PlusIcon,
  XMarkIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/20/solid";
import {
  UsersIcon,
  ArchiveBoxArrowDownIcon,
  ShoppingCartIcon,
  HomeModernIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { kpiService_m } from "~/data/dashboard/indiDashboard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const stats2 = [
  {
    id: 1,
    name: "International arrivals",
    stat: "-9%",
    icon: PaperAirplaneIcon,
    changeType: "decrease",
    previousStat:
      "Indicator of strength of tourist economy and volume of international business",
    to: "/demo/dashboard/overview",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-100",
  },
  {
    id: 2,
    name: "Domestic air travel",
    stat: "-9%",
    icon: PaperAirplaneIcon,
    change: "",
    changeType: "decrease",
    previousStat:
      "Indicator of strength of tourist economy and volume of international business",
    to: "/demo/dashboard/overview",
    iconForeground: "text-green-700",
    iconBackground: "bg-green-100",
  },
  {
    id: 3,
    name: "Hotel occupancy",
    stat: "-20%",
    icon: HomeModernIcon,
    change: "",
    changeType: "decrease",
    previousStat:
      "Indicator of strength of tourist economy and volume of international business",
    to: "/demo/dashboard/overview",
    iconForeground: "text-rose-500",
    iconBackground: "bg-rose-100",
  },
  {
    id: 4,
    name: "Cargo ship arrivals",
    stat: "25%",
    icon: CursorArrowRaysIcon,
    change: "",
    changeType: "increase",
    previousStat:
      "Indicator of strength of tourist economy and volume of international business",
    to: "/demo/dashboard/overview",
    iconForeground: "text-yellow-600",
    iconBackground: "bg-yellow-100",
  },
  {
    id: 5,
    name: "Exports",
    stat: "-6%",
    icon: ArchiveBoxArrowDownIcon,
    change: "",
    changeType: "decrease",
    previousStat:
      "Indicator of strength of tourist economy and volume of international business",
    to: "/demo/dashboard/overview",
    iconForeground: "text-gray-700",
    iconBackground: "bg-gray-300",
  },
  {
    id: 6,
    name: "Traffic index",
    stat: "-47%",
    icon: UsersIcon,
    changeType: "decrease",
    previousStat:
      "Indicator of strength of tourist economy and volume of international business",
    to: "/demo/dashboard/overview",
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-100",
  },
  {
    id: 7,
    name: "Retail Spend",
    stat: "11%",
    icon: ShoppingCartIcon,
    change: "",
    changeType: "increase",
    previousStat:
      "Indicator of strength of tourist economy and volume of international business",
    to: "/demo/dashboard/overview",
    iconForeground: "text-sky-600",
    iconBackground: "bg-sky-100",
  },
  {
    id: 8,
    name: "Basic food and OTC medicine purchases",
    stat: "-84%",
    icon: CursorArrowRaysIcon,
    change: "",
    changeType: "increase",
    previousStat:
      "Indicator of strength of tourist economy and volume of international business",
    to: "/demo/dashboard/overview",
    iconForeground: "text-sky-600",
    iconBackground: "bg-sky-100",
  },
];

export default function DemandRoute() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mx-4 mt-1 rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between p-2 ">
          <div className="m-2 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">
              Indicators for 2020 vs. equivalent period in 2019
            </h2>
          </div>
          <div className="mr-2 mt-4 flex md:ml-4 md:mt-0">
            <button
              type="button"
              className="rounded-full bg-rose-500 p-1.5 font-semibold text-white shadow-sm "
              onClick={() => setOpen(!open)}
            >
              <PlusIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <dl className="m-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
          {stats2.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg bg-white p-4 shadow sm:px-6 sm:pt-6"
            >
              <div className="absolute">
                <span
                  className={classNames(
                    item.iconBackground,
                    item.iconForeground,
                    "inline-flex rounded-lg p-2",
                  )}
                >
                  <item.icon className="h-6 w-6 " aria-hidden="true" />
                </span>
              </div>

              <dt className="ml-16 text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="mt-1 flex  justify-between md:block lg:flex">
                {/* <div className="ml-16 flex text-2xl font-semibold text-indigo-600">
                  {item.stat}
                </div> */}
                <div
                  className={classNames(
                    item.changeType === "increase"
                      ? " text-green-700"
                      : " text-rose-500",
                    "inline-flex items-center rounded-full px-2 py-1 text-lg font-medium md:mt-2 lg:mt-0",
                  )}
                >
                  {item.changeType === "increase" ? (
                    <div className="ml-16 flex text-2xl font-semibold text-green-700">
                      {item.stat}
                    </div>
                  ) : (
                    <div className="ml-16 flex text-2xl font-semibold text-rose-500">
                      {item.stat}
                    </div>
                  )}
                </div>
              </dd>
              <span className="text-sm  text-gray-500">
                {item.previousStat}
              </span>
            </div>
          ))}
        </dl>
      </div>
      <ul className="mx-4 my-4 grid grid-cols-1  gap-6 md:grid-cols-2">
        {/* grid-row-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 */}
        {kpiService_m.map((kpi) => (
          <li
            key={kpi.Name}
            className="col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10"
          >
            <div className="relative flex flex-1 flex-col py-2 pl-3">
              <div className="flex items-baseline gap-2">
                <div>
                  <h3 className="text-md mt-6 font-medium text-gray-900">
                    {kpi.Name}
                  </h3>
                  <h1 className="font-display text-d-h3 mb-3 text-4xl font-bold text-black">
                    {kpi.Value}
                  </h1>
                </div>
              </div>
              <div>{kpi.container}</div>
            </div>
            <div></div>
          </li>
        ))}
      </ul>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="bg-blue-900 px-4 py-4">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="py-1 text-base font-semibold leading-6 text-white">
                              Create Alerts
                            </Dialog.Title>

                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md  text-slate-300 outline-none hover:text-white "
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-2">
                          <div className="rounded-lg border bg-gray-100 p-2">
                            <h2 className="text-base font-medium leading-6 text-gray-900 ">
                              {" "}
                              Query Condition
                            </h2>
                          </div>

                          <div className="mt-6 pt-4">
                            <div className="rounded-lg border bg-gray-100 p-2">
                              <h2 className="text-base font-medium leading-6 text-gray-900 ">
                                {" "}
                                Incident Type/Priority
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center p-2">
                        <button
                          type="button"
                          className="text-md rounded-md border bg-indigo-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-600"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="text-md ml-2 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

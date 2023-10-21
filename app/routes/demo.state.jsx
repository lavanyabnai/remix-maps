import { Link, NavLink } from "@remix-run/react";
import { useState, Fragment } from "react";
import {
  XMarkIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
  LightBulbIcon,
} from "@heroicons/react/20/solid";
import { Transition, Dialog, Disclosure } from "@headlessui/react";
import { kpiService_m } from "~/data/map/MapDashboard";
import AppBar from "~/components/appbar"
import clsx from "clsx";


function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      prefetch="intent"
      className={({ isActive }) =>
        clsx(
          "rounded-md px-2 py-2 text-md font-semibold md:px-3",
          isActive
            ? "py-2 bg-sky-600 text-white font-bold bg-opacity-75 border"
            : "text-white hover:bg-sky-300 hover:bg-opacity-75",
        )
      }
      aria-current={({ isActive }) => (isActive ? "page" : undefined)}
    >
      {children}
    </NavLink>
  );
}
export default function DemandRoute() {
  const [open, setOpen] = useState(false);
const navigation = [
  { name: "Madhya Pradesh", href: "/demo/madhya", current: false },
  {
    name: "Rajasthan",
    href: "/demo/rajasthan",
    current: true,
  },
  {
    name: "Telangana",
    href: "/demo/telangana",
    current: false,
  },
  {
    name: "Chhattisgarh",
    href: "/demo/chhattisgarh",
    current: false,
  },
  { name: "Mizoram", href: "/demo/mizoram", current: false },
];
  return (
    <>
      <div className="overflow-hidden">
        <Disclosure as="nav" className="bg-sky-500 ">
          {({ open }) => (
            <>
              <div className="w-full">
                <div className="flex h-12 items-center justify-center">
                  <div className="flex items-center">
                    <div className="hidden md:block">
                      <div className=" ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavItem to={item.href} key={item.name}>
                            {item.name}
                          </NavItem>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
      <div className="mx-4 mt-1 rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between p-2 ">
          <div className="m-2 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">
              State Wise Analytics
            </h2>
          </div>
       
        </div>
      </div>
      <div>
        <ul className="m-4 grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2">
          {kpiService_m.map((kpi) => (
            <li
              key={kpi.Name}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 "
            >
              <div className="relative flex flex-1 flex-col p-3">
                <div className="mt-2 flex justify-center gap-2">
                  <div>
                    <h3 className="text-base uppercase font-medium text-gray-900">
                      {kpi.Name}
                    </h3>
                  </div>
                </div>
                <div>{kpi.container}</div>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200 bg-gray-50 h-10 ">
                  <div className="flex w-0 flex-1  ">
                    <Link
                      to={kpi.Analyze}
                      className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
                    >
                      <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                        <WrenchScrewdriverIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        Analyze
                      </span>
                    </Link>
                  </div>

                  <div className="-ml-px flex flex-1">
                    <Link
                      to="/demo/dashboard/salesExp"
                      className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white"
                    >
                      <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                        <CircleStackIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        Explore Data
                      </span>
                    </Link>
                  </div>
                  <div className="-ml-px flex  flex-1">
                    <Link
                      to="/benchmark"
                      className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
                    >
                      <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                        <LightBulbIcon className="h-5 w-5" aria-hidden="true" />
                        Insights
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
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

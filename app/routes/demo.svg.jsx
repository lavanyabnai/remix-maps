import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import {
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import CardLayout from "~/components/CardLayout";
import { kpiService_m } from "../data/dashboard/chartDashboard";
import mapSvg from "~/data/map/Mapsvg/MapImage.svg"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const items = [
  {
    id: 1,
    name: "Review",
    description:
      "Conduct periodic (month/quarter/year) performance review of key business KPIs",
    to: `review`,
  },
  {
    id: 2,
    name: "Meeting",
    description:
      "Conduct daily/weekly data driven meetings and create plan of action ",
    to: `meeting`,
  },
];



export default function DemandRoute() {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState(items[0]);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-screen ">
        <div className=" mx-4 mt-1 rounded-lg bg-white shadow-xl p-2 ">
          <div className="flex items-center justify-between ">
            <div className="m-2 flex-1">
              <h2 className="text-3xl font-bold leading-7 text-gray-900">
                Latest Polls
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

        <div className="m-4 grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="rounded-lg shadow-lg mb-6 bg-white">
            <img src={mapSvg} alt="map" />
          </div>
          <div className="rounded-lg shadow-lg  bg-white">
            <img src={mapSvg} alt="map" />
          </div>
        </div>
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

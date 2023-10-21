import { Link } from "@remix-run/react";
import { useState, Fragment } from "react";
import { Transition,  Popover, Dialog } from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import CardLayout from "~/components/CardLayout";
import { kpiService_m } from "../data/dashboard/pollsDashboard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const locations = [
  {
    name: "Party Approval",
    people: [
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve 49%	48%	Disapprove",
        net: "Approve",
      },
    ],
  },
  {
    name: "Party: General Election, 2024",
    people: [
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve 49%	48%	Disapprove",
        net: "Approve",
      },
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve	49%	48%	Disapprove",
        net: "Approve",
      },
    ],
  },
  {
    name: "Party: Republican primary,2024",
    people: [
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve 49%	48%	Disapprove",
        net: "Approve",
      },
    ],
  },
  {
    name: "Party: General Election, 2024",
    people: [
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve 49%	48%	Disapprove",
        net: "Approve",
      },
      {
        date: "Sep.25 - Oct.1",
        sample: "1,500	LV",
        poll: "Rasmussen Reports",
        sponsor: "Miranda Devine's Laptop from Hell",
        result: "Approve	49%	48%	Disapprove",
        net: "Approve",
      },
    ],
  },
];
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

const filters = [
  {
    id: "year",
    name: "Year",
    options: [
      { value: "new-arrivals", label: "All New Arrivals", checked: false },
      { value: "tees", label: "Tees", checked: false },
      { value: "all", label: "All", checked: true },
    ],
  },

  {
    id: "region",
    name: "Region",
    options: [
      { value: "s", label: "S", checked: false },
      { value: "m", label: "M", checked: false },
      { value: "l", label: "L", checked: false },
    ],
  },
  {
    id: "products",
    name: "Products",
    options: [
      { value: "all", label: "All", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
    ],
  },
];

export default function DemandRoute() {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState(items[0]);

  const reviewTabs = ["Month", "Quarter", "Year"];
  const [reviewIndex] = useState(0);

  const meetingTabs = ["Daily", "Weekly"];
  const [meetingIndex] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mx-4 mt-1 rounded-lg bg-white shadow-xl">
        <div className="flex items-center justify-between p-2 ">
          <div className="m-2 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">
              Poll Analytics
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

      <main>
        <CardLayout
          mode={mode.name === "Review" ? reviewTabs : meetingTabs}
          tab={mode.name === "Review" ? reviewIndex : meetingIndex}
          kpiData={kpiService_m}
        />
      </main>

      <div className="mx-4 mt-2">
        {/* Filters */}
        <section aria-labelledby="filter-heading">
          <div className="my-4 rounded-lg border bg-white shadow-sm md:flex md:items-center md:justify-between">
            <div className="mr-64 flex items-center px-4">
              <div className="flow-root">
                <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                  <span className="mx-4 inline-flex">Filters</span>
                  {filters.map((section) => (
                    <Popover
                      key={section.name}
                      className="relative inline-block rounded-lg  text-gray-700 hover:bg-rose-500"
                    >
                      <Popover.Button className="group inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-400 hover:text-white">
                        <span>{section.name}</span>

                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 "
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute z-10 mt-2 rounded-md bg-white p-4 shadow-2xl ">
                          <form className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 "
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 hover:text-white"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </div>
            <div className=" m-2">
              <button
                type="button"
                className="rounded-full border bg-gray-200 p-2 hover:bg-gray-100 "
              >
                <FunnelIcon
                  className="h-4 w-4 text-gray-500"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="m-4 p-2 bg-white rounded-lg">
        <h2 className="px-4 py-2 text-lg font-bold">
          Polls ending Sept.30,2023
        </h2>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle ">
                <table className="min-w-full">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        DATES
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        SAMPLE
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        POLLSTER
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        SPONSOR
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        RESULT
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        NET RESULT
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {locations.map((location) => (
                      <Fragment key={location.name}>
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan={5}
                            scope="colgroup"
                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                          >
                            {location.name}
                          </th>
                        </tr>
                        {location.people.map((person, personIdx) => (
                          <tr
                            key={person.email}
                            className={classNames(
                              personIdx === 0
                                ? "border-gray-300"
                                : "border-gray-200",
                              "border-t",
                            )}
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                              {person.date}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.sample}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.poll}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.sponsor}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.result}
                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {person.net}
                            </td>

                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                              <Link
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                                <span className="sr-only">, {person.name}</span>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
